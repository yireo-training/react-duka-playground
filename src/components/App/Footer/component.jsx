import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./component.css";

const Footer = () => {
  return (
    <div className="Footer">
      <Container>
        <Row>
          <Col>
            <nav>
              <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
              </ul>
            </nav>
          </Col>
          <Col>Some copyright</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
