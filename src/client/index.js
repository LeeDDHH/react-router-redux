import React from "react";
import ReactDOM from "react-dom";

import { Provider } from 'react-redux';
import store from "./redux/store"

import App from './components/App';
import Buttons from './components/Buttons';
import AddEtc from './components/AddEtc';

ReactDOM.render(
  <Provider store={store}>
    <App />
    <Buttons />
    <AddEtc />
  </Provider>
  , document.getElementById("root")
);
