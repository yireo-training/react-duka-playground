import React from "react";
import Loading from "components/Utils/Loading";
import { Redirect } from "react-router-dom";

const LogoutPage = props => {
  if (!props.customerToken) {
    return <Redirect to="/" />;
  }

  return <Loading />;
};

export default LogoutPage;
