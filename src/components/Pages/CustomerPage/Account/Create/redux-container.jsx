import React from "react";
import { connect } from "react-redux";
import CustomerPageAccountCreate from "./component";
import { customerActions } from "state/redux/ducks/customer";

const CustomerPageAccountCreateReduxContainer = props => {
  return <CustomerPageAccountCreate {...props} />;
};

const mapDispatchToProps = dispatch => {
  return {
    onCreateCustomer: customerData => {
      dispatch(customerActions.createCustomer(customerData));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CustomerPageAccountCreateReduxContainer);
