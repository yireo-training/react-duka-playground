import React from "react";
import CmsBlock from "components/Molecules/CmsBlock";
import CmsPage from "components/Pages/CmsPage";
import { Row, Col } from "react-bootstrap";
import "./component.css";

const HomePage = () => {
  return (
    <div className="HomePage">
      <Row>
        <Col sm>
          <CmsPage id={2} />
        </Col>
        <Col sm className="sidebar">
            <CmsBlock id="sale-left-menu-block" />
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
