import React from "react";
import CustomerLoginForm from "components/Molecules/CustomerLoginForm";
import { Redirect } from "react-router-dom";

const LoginPage = props => {
  if (props.customerToken) {
    return <Redirect to="/customer" />;
  }

  return (
    <>
      <h1>Login to your account</h1>
      <CustomerLoginForm />
    </>
  );
};

export default LoginPage;
