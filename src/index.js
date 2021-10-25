import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './Style/MainPages.css'
import {Provider} from 'react-redux';
import {store} from './Redux/Store/Store';

ReactDOM.render(
  <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);

