import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const CheckoutPage = () => {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [company, setCompany] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setPostcode] = useState("");
  const [country, setCountry] = useState("");
  const [phonenumber, setPhonenumber] = useState("");

  const onEnableShippingAddress = () => {
    console.log("Let's load some data for shipping address");
  };

  return (
    <div className="CheckoutPage">
      <h1>Checkout</h1>
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              variant="link"
              eventKey="shipping-address"
              onClick={onEnableShippingAddress}
            >
              Shipping Address
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="shipping-address">
            <Card.Body>
              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <input
                  required
                  type="text"
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

              <Form.Group controlId="company">
                <Form.Label>Company</Form.Label>
                <input
                  required
                  type="text"
                  className="form-control"
                  value={company}
                  onChange={event => setCompany(event.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="streetAddress">
                <Form.Label>Street Address</Form.Label>
                <input
                  required
                  type="text"
                  className="form-control"
                  value={streetAddress}
                  onChange={event => setStreetAddress(event.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="city">
                <Form.Label>City</Form.Label>
                <input
                  required
                  type="text"
                  className="form-control"
                  value={city}
                  onChange={event => setCity(event.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="postcode">
                <Form.Label>Postcode</Form.Label>
                <input
                  required
                  type="text"
                  className="form-control"
                  value={postcode}
                  onChange={event => setPostcode(event.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="country">
                <Form.Label>Country</Form.Label>
                <input
                  required
                  type="text"
                  className="form-control"
                  value={country}
                  onChange={event => setCountry(event.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="phonenumber">
                <Form.Label>Phone number</Form.Label>
                <input
                  required
                  type="text"
                  className="form-control"
                  value={phonenumber}
                  onChange={event => setPhonenumber(event.target.value)}
                />
              </Form.Group>

              <Button variant="primary" size="lg" active>
                Next
              </Button>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Shipping Method
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>@todo</Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
              Payment Methods
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>@todo</Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Button variant="link" disabled>
              Review
            </Button>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>@todo</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default CheckoutPage;
