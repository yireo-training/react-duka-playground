import React from "react";
import { connect } from "react-redux";
import CustomerPageQueryContainer from "./query-container";

const CustomerPageReduxContainer = props => {
  return <CustomerPageQueryContainer {...props} />
};

const mapStateToProps = state => {
  return {
    customerToken: state.customer.token
  };
};

export default connect(
  mapStateToProps
)(CustomerPageReduxContainer);
