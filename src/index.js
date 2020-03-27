import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
//LOCAL
import App from './App';
import * as serviceWorker from './serviceWorker';
import theme from './theme';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
