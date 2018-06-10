import React from 'react';
import {render} from 'react-dom';
import {ConnectedRouter} from 'react-router-redux';
import {Provider} from 'react-redux';
import configureStore, {history} from './store/configureStore';
import './styles/styles.css';
import App from './App';

const http = require('http');
setInterval(function() {
  http.get('https://resort-viewer.herokuapp.com/');
}, 300000);

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
