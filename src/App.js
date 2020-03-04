import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from '@material-ui/styles';
import { renderRoutes } from 'react-router-config';
import theme from './theme';
import './assets/scss/index.scss';
import moment from 'moment';
import 'moment/locale/tr';
import routes from './routes';
moment.locale('tr');
const browserHistory = createBrowserHistory();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router history={browserHistory}>{renderRoutes(routes)}</Router>
    </ThemeProvider>
  );
};

export default App;
