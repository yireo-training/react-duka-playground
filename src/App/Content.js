import React from "react";
import { Route, Switch } from "react-router";
import HomePage from "../Pages/HomePage";
import CheckoutPage from "../Pages/CheckoutPage";
import CartPage from "../Pages/CartPage";
import CatalogPage from "../Pages/CatalogPage";
import NotFoundPage from "../Pages/NotFoundPage";

const Content = () => {
  return (
    <div className="Content">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/:url_key.html" component={CatalogPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default Content;
