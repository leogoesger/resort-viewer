import React from 'react';
import {render} from 'react-dom';
import {ConnectedRouter} from 'react-router-redux';
import {Provider} from 'react-redux';
import configureStore, {history} from './store/configureStore';
import App from './App';

const target = document.querySelector('#root');

const store = configureStore();

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  target
);
