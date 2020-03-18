import React from "react";
import Item from "./Item";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const ProductListing = props => {
  if (props.products.length === 0) {
    return <p>No products found</p>;
  }

  return (
    <div className="ProductListing">
      <Row>
        {props.products.map(product => (
          <Col sm={4} key={product.id}>
            <Item product={product} key={product.id} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductListing;
