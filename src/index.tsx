import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';

import Theme from '@common/data/Theme';
import { store } from '@common/app/store';
import client from '@common/data/apollo-client';

import * as serviceWorker from './serviceWorker';
import App from '@src/App';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <CssBaseline />
    <BrowserRouter>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </Provider>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
