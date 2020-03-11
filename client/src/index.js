import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { ThemeProvider } from '@material-ui/styles'
import MomentUtils from '@date-io/moment'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import theme from './theme'
import StoreProvider from 'store/Store'
import Router from 'router'
import './assets/scss/index.scss'
import moment from 'moment'
import 'moment/locale/tr'
import './mock'
moment.locale('tr')

const App = () => {
  return (
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <Router />
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </StoreProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
