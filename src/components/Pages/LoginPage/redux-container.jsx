import React from "react";
import { connect } from "react-redux";
import LoginPage from "./component";

const LoginPageReduxContainer = props => {
  return <LoginPage {...props} />
};

const mapStateToProps = state => {
  return {
    customerToken: state.customer.token
  };
};

export default connect(
  mapStateToProps
)(LoginPageReduxContainer);
