import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <Row>
        <Col>Some submenu</Col>
        <Col>Some copyright</Col>
      </Row>
    </div>
  );
};

export default Footer;
