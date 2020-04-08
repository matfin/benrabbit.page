/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Store } from 'redux';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import createStoreWithPreloadedState from 'common/store';
import App from './App';

const preloadedState = window._PRELOADED_STATE_;
const store: Store = createStoreWithPreloadedState(preloadedState);

delete window._PRELOADED_STATE_;

ReactDom.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
