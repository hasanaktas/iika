import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from '@material-ui/styles';
import MomentUtils from '@date-io/moment';
import { renderRoutes } from 'react-router-config';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import theme from './theme';
import StoreProvider from 'store/Store';
import './assets/scss/index.scss';
import moment from 'moment';
import 'moment/locale/tr';
import routes from './routes';
import './mock';

moment.locale('tr');
const browserHistory = createBrowserHistory();

const App = () => {
  return (
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <Router history={browserHistory}>{renderRoutes(routes)}</Router>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
