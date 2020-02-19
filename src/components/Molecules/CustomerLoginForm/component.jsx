import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Loading from "components/Utils/Loading";
import { Link } from "@reach/router";

const CustomerLoginForm = props => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onSubmit = () => {
    setLoading(true);
    props.onSubmit(email, password, () => {
      setLoading(false);
      if (props.onSubmitCallback) {
        props.onSubmitCallback();
      }
    });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <input
          required
          type="email"
          placeholder="Enter email"
          value={email}
          className="form-control"
          onChange={event => setEmail(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <input
          required
          type="password"
          value={password}
          className="form-control"
          onChange={event => setPassword(event.target.value)}
        />
      </Form.Group>

      <ButtonGroup>
        <Button variant="secondary" onClick={props.onCancel}>
          Cancel
        </Button>
        <Button variant="primary" onClick={onSubmit}>
          Login
        </Button>
      </ButtonGroup>

      <p>Don't have an account yet? <Link to="customer/account/create">Create an account</Link></p>
    </Form>
  );
};

export default CustomerLoginForm;
