import React from "react";
import { connect } from "react-redux";
import customerActions from "state/redux/ducks/customer/actions";
import commonActions from "state/redux/ducks/common/actions";
import CustomerLoginForm from "./component";

const CustomerLoginFormReduxContainer  = props => {
  return <CustomerLoginForm {...props} />;
};

const mapStateToProps = (state, props) => {
  props.token = state.customer.token;
  props.locked = state.common.locked;
  return props;
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (email, password, callback) => {
      dispatch(commonActions.lock(callback));
      dispatch(customerActions.loginCustomer(email, password));
    },
    unLock: () => {
      dispatch(customerActions.unlock());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerLoginFormReduxContainer);
