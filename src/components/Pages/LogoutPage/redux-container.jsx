import React, { useEffect } from "react";
import { connect } from "react-redux";
import { customerActions } from "state/redux/ducks/customer";
import LogoutPage from "./component";

const LogoutPageReduxContainer = props => {
  useEffect(() => {
    props.logoutCustomer();
  }, [props]);

  return <LogoutPage {...props} />;
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
)(LogoutPageReduxContainer);
