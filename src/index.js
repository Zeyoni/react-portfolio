import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { BrowserRouter as Router } from 'react-router-dom';
import "swiper/swiper-bundle.css";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducer from '../src/redux/reducer'
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(Reducer, composeWithDevTools());


ReactDOM.render(
  <Router >
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
