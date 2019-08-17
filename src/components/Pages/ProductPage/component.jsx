import React from "react";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import AddToCart from "components/Atoms/Product/AddToCart";
import StockStatus from "components/Atoms/Product/StockStatus";
import Price from "components/Atoms/Product/Price";

const ProductPage = props => {
  const product = props.product;
  return (
    <div className="productPage">
      <Row>
        <Col xs={5}>
          {product.image && (
            <Image alt={product.image.label} src={product.image.url} fluid />
          )}
        </Col>
        <Col>
          <h1>{product.name}</h1>

          <Price product={product} />
          <StockStatus product={product} />
          <AddToCart product={product} />

          {product.description && (
            <p dangerouslySetInnerHTML={product.description} />
          )}
        </Col>
      </Row>
    </div>
  );
};

export default ProductPage;
