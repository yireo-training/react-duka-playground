import React from "react";
import { Route, Switch } from "react-router";
import HomePage from "../Page/HomePage";
import CheckoutPage from "../Page/CheckoutPage";
import CartPage from "../Page/CartPage";
import CatalogPage from "../Page/CatalogPage";
import NotFoundPage from "../Page/NotFoundPage";

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
