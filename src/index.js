import React from 'react';
import {render} from 'react-dom';
import {ConnectedRouter} from 'react-router-redux';
import {Provider} from 'react-redux';
import configureStore, {history} from './store/configureStore';
import './styles/styles.css';
import App from './App';

const target = document.querySelector('#root');

const store = configureStore();

const getPublicUrl = env => () => {
  return process.env.NODE_ENV === env
    ? process.env.REACT_APP_LOCAL_URL
    : process.env.REACT_APP_PUBLIC_URL;
};

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App publicUrl={getPublicUrl('development')()} />
    </ConnectedRouter>
  </Provider>,
  target
);
