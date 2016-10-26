import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router";
import { Provider } from "react-redux";

import App from "./components/App";
import store from './store';
import StockList from "./components/StockList";
import Stock from "./components/Stock"

document.addEventListener( "DOMContentLoaded", () => {

  const reactNode = document.getElementById( "react-node");

  ReactDOM.render(
    <Provider store={ store }>
      <Router history={ browserHistory }>

        <Route component={ App } path='/'>
          <Route component={StockList} path="stocks"/>
          <Route component={ Stock } path="stocks/:id"/>
        </Route>

      </Router>
    </Provider>
    , reactNode);

})
