import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const CustomerAccountEdit = props => {
  const customer = props.customerData;
  const [email, setEmail] = useState(customer.email);
  const [firstname, setFirstname] = useState(customer.firstname);
  const [lastname, setLastname] = useState(customer.lastname);

  const onSave = () => {
    props.onSaveCustomer({
      email,
      firstname,
      lastname
    });
  };

  return (
    <div className="CustomerAccountEdit">
      <h1>Edit Account Information</h1>

      <Form.Group controlId="email">
        <Form.Label>Email address</Form.Label>
        <input
          required
          type="email"
          className="form-control"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="firstname">
        <Form.Label>First Name</Form.Label>
        <input
          required
          type="text"
          className="form-control"
          value={firstname}
          onChange={event => setFirstname(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="lastname">
        <Form.Label>Last Name</Form.Label>
        <input
          required
          type="text"
          className="form-control"
          value={lastname}
          onChange={event => setLastname(event.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={onSave}>
        Save
      </Button>
    </div>
  );
};

export default CustomerAccountEdit;
