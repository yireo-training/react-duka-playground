import React from "react";
import { Route, Switch } from "react-router";
import HomePage from "components/Pages/HomePage/component";
import CustomerPage from "components/Pages/CustomerPage";
import CheckoutPage from "components/Pages/CheckoutPage";
import CartPage from "components/Pages/CartPage";
import Page from "components/Pages/Page";
import NotFoundPage from "components/Pages/NotFoundPage";
import Messages from "components/Molecules/Messages";
import "./component.css";

const Content = () => {
  return (
    <div className="Content">
      <Messages/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/customer" component={CustomerPage} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/:url_key" component={Page} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default Content;
