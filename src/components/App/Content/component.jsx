import React from "react";
import { Route, Switch } from "react-router";
import { Container } from "react-bootstrap";

import HomePage from "components/Pages/HomePage/component";
import CustomerPage from "components/Pages/CustomerPage";
import CheckoutPage from "components/Pages/CheckoutPage";
import LoginPage from "components/Pages/LoginPage";
import LogoutPage from "components/Pages/LogoutPage";
import CartPage from "components/Pages/CartPage";
import SearchPage from "components/Pages/SearchPage";
import Page from "components/Pages/Page";
import Messages from "components/Molecules/Messages";

import customerPages from "./customerPages";
import "./component.css";

const Content = () => {
  return (
    <Container className="Content">
      <Messages />
      <Switch>
        <Route exact path="/" component={HomePage} />
        {customerPages.map(customerPage => {
          return (
            <Route
              key={customerPage.path}
              exact
              path={customerPage.path}
              render={props => {
                return (
                  <CustomerPage {...props} content={customerPage.component} />
                );
              }}
            />
          );
        })}
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/logout" component={LogoutPage} />
        <Route exact path="/customer/account/logout" component={LogoutPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route exact path="/cart" component={CartPage} />
        <Route exact path="/search" component={SearchPage} />
        <Route component={Page} />
      </Switch>
    </Container>
  );
};

export default Content;
