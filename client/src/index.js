import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'

// Conexion con Redux a toda la app
import { Provider } from "react-redux";
import store from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);