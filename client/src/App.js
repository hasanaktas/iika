import React, { useEffect } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { renderRoutes } from 'react-router-config';
import { useDispatch } from 'react-redux';
import * as allActions from 'store/actions';
import routes from './routes';

const browserHistory = createBrowserHistory();

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allActions.checkUser());
  }, []);

  return <Router history={browserHistory}>{renderRoutes(routes)}</Router>;
};

export default App;
