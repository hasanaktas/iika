import axios from 'utils/api';
export const AUTH_LOGIN = 'AUTH_LOGIN';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';
export const AUTH_ERROR_MESSAGE = 'AUTH_ERROR_MESSAGE';
export const checkUser = () => dispatch => {
  const user = localStorage.getItem('user') || '';

  if (user !== '') {
    dispatch({
      type: AUTH_LOGIN,
      payload: JSON.parse(user),
    });
  }
};

export const login = (eposta, parola) => dispatch => {
  console.log('login');
  axios
    .post('/users/authenticate', {
      eposta,
      parola,
    })
    .then(response => {
      console.log(response);
      localStorage.setItem('user', JSON.stringify(response.data.sonuc.user));
      dispatch({
        type: AUTH_LOGIN,
        payload: response.data.sonuc.user,
      });
    })
    .catch(error => {
      dispatch({
        type: AUTH_ERROR_MESSAGE,
        payload: error.response.data.message,
      });
      console.log(error.response.data.message);
    });
};

export const logout = () => dispatch => {
  console.log('cikis yapildi');
  localStorage.removeItem('user');
  dispatch({
    type: AUTH_LOGOUT,
  });
};
