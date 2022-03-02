import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// import { HashRouter } from 'react-router-dom';
import App from './App';

import store from './store';

//main app
// provider and app
render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('app')
);
