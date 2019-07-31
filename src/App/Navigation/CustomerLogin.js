import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import { connect } from "react-redux";
import CustomerLoginForm from "../../Molecules/CustomerLoginForm";

const CustomerLogin = props => {
  const [showLoginBox, setShowLoginBox] = useState(false);
  const onClickToLogin = () => {
    setShowLoginBox(!showLoginBox);
  }

  return (
    <>
      {props.customer && <Nav.Link href="/customer">Your Account</Nav.Link>}
      {!props.customer && <Nav.Link onClick={onClickToLogin}>Login</Nav.Link>}

      {showLoginBox && <CustomerLoginForm />}
      </>
  );
};

const mapStateToProps = state => {
  return {
    customer: state.customer
  };
};

export default connect(mapStateToProps)(CustomerLogin);
