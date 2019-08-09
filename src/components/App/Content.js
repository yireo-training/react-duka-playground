import React from "react";
import { Route, Switch } from "react-router";
import HomePage from "../Pages/HomePage/component";
import CustomerPage from "../Pages/CustomerPage";
import CheckoutPage from "../Pages/CheckoutPage";
import CartPage from "../Pages/CartPage";
import CatalogPage from "../Pages/CatalogPage";
import NotFoundPage from "../Pages/NotFoundPage";
import MessagesTest from "../Test/MessagesTest";
import Messages from "../Molecules/Messages";
import "./Content.css";

const Content = () => {
  return (
    <div className="Content">
      <Messages/>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/customer" component={CustomerPage} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/:url_key.html" component={CatalogPage} />
        <Route component={NotFoundPage} />
      </Switch>

      <MessagesTest />
    </div>
  );
};

export default Content;
