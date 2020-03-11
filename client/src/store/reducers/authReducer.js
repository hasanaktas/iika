import * as actionTypes from '../actions';

const initialState = {
  logged: false,
  errorMessage: '',
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_LOGIN: {
      return {
        ...state,
        logged: true,
        errorMessage: '',
        user: action.payload,
      };
    }
    case actionTypes.AUTH_LOGOUT: {
      return {
        ...state,
        logged: false,
        errorMessage: '',
        user: null,
      };
    }

    default: {
      return state;
    }
  }
};

export default authReducer;
