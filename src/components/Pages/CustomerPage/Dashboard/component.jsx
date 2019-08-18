import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const Dashboard = props => {
  const customer = props.data.customer;
  return (
    <>
      <h1>My Account</h1>

      <h3>Account information</h3>
      <Row>
        <Col>
          <h4>Contact Information</h4>
          {customer.firstname} {customer.middlename} {customer.lastname}<br/>
          {customer.email}<br/>
          <Link to="customer/account/edit">Edit</Link> | 
          <Link to="customer/account/changePassword">Change Password</Link>
        </Col>
        <Col>
          <h4>Newsletters</h4>
          <p>Not implemented yet</p>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
