import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";

import Products from "./pages/Products";
import Payment from "./pages/Payment";

const Routes = () => (
  <Router>
    <Switch>
      <Provider store={store}>
        <Route path="/" exact component={Products} />
        <Route path="/payment" component={Payment} />
      </Provider>
    </Switch>
  </Router>
);

export default Routes;
