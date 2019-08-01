import React from "react";
import ProductGridItem from "./ProductGridItem";
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
          <Col xs={4} key={product.id}>
            <ProductGridItem product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductListing;
