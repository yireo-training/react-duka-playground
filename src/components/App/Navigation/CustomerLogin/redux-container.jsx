import React from "react";
import { connect } from "react-redux";
import CustomerLogin from "./component";

const CustomerLoginReduxContainer = props => {
  return <CustomerLogin {...props} />;
};

const mapStateToProps = state => {
  return {
    customer: state.customer,
    locked: state.common.locked
  };
};

export default connect(mapStateToProps)(CustomerLoginReduxContainer);
