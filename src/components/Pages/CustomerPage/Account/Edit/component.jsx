import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const CustomerAccountEdit = props => {
  const customer = props.data.customer;
  return (
    <div className="CustomerAccountEdit">
      <h1>Edit Account Information</h1>
      <Form>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control required type="email" value={customer.email} />
        </Form.Group>

        <Form.Group controlId="firstname">
          <Form.Label>First Name</Form.Label>
          <Form.Control required value={customer.firstname} />
        </Form.Group>

        <Form.Group controlId="lastname">
          <Form.Label>Last Name</Form.Label>
          <Form.Control required value={customer.lastname} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
      Form submission not implemented yet
    </div>
  );
};

export default CustomerAccountEdit;
