import React from "react";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button'

const CustomerAccountChangePassword = props => {
  return (
    <div className="CustomerAccountChangePassword">
      <h1>Change Your Password</h1>
      <Form>
        <Form.Group controlId="currentPassword">
          <Form.Label>Current Password</Form.Label>
          <Form.Control required type="password" />
        </Form.Group>

        <Form.Group controlId="newPassword">
          <Form.Label>New Password</Form.Label>
          <Form.Control required type="password" />
        </Form.Group>

        <Form.Group controlId="newPassword">
          <Form.Label>Confirm New Password</Form.Label>
          <Form.Control required type="password" />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>

      Form submission not implemented yet
    </div>
  );
};

export default CustomerAccountChangePassword;
