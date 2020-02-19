import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const CustomerPageAccountCreate = props => {
  const [email, setEmail] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const onSave = () => {
    props.onCreateCustomer({
      email,
      firstname,
      lastname,
      password,
      password2
    });
  };

  return (
    <div className="CustomerAccountCreate">
      <h1>Create Account</h1>

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

      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <input
          required
          type="password"
          className="form-control"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="password2">
        <Form.Label>Retype Password</Form.Label>
        <input
          required
          type="password"
          className="form-control"
          value={password2}
          onChange={event => setPassword2(event.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={onSave}>
        Create an account
      </Button>
    </div>
  );
};

export default CustomerPageAccountCreate;
