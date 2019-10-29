import React from "react";
import { connect } from "react-redux";
import CustomerPage from "./component";
import { customerActions } from "state/redux/ducks/customer";
import Dashboard from "./Dashboard";
import { Redirect } from "react-router-dom";

const CustomerPageReduxContainer = props => {
  if (!props.customerToken) {
    return <Redirect to="/login" />;
  }

  const contentComponent = props.content ? props.content : Dashboard;
  const newProps = Object.assign({}, props);
  return <CustomerPage {...newProps} content={contentComponent} />;
};

const mapStateToProps = state => {
  return {
    customerToken: state.customer.token,
    customerData: state.customer.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSaveCustomer: customerData => {
      dispatch(customerActions.saveCustomer(customerData));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerPageReduxContainer);
