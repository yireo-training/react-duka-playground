import React from "react";
import { connect } from "react-redux";
import { customerActions } from "state/redux/ducks/customer";
import CustomerPageQueryContainer from "./query-container";

const CustomerPageReduxContainer = props => {
  return <CustomerPageQueryContainer {...props} />
};

const mapStateToProps = state => {
  return {
    customerToken: state.customer.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logoutCustomer: () => {
      dispatch(customerActions.logoutCustomer());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerPageReduxContainer);
