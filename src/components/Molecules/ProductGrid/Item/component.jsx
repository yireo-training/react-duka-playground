import React from "react";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Price from "components/Atoms/Product/Price";
import AddToCart from "components/Atoms/Product/AddToCart";

const Product = props => {
  if (props.product === undefined) {
    return <div className="Product">No product</div>;
  }

  const product = props.product;
  const productLink = "/" + product.url_key + ".html";

  return (
    <div className="Product">
      {product.small_image && (
        <Link to={productLink}>
          <Image alt={product.name} src={product.small_image.url} fluid />
        </Link>
      )}

      <Link to={productLink}>
        <h5>{product.name}</h5>
      </Link>

      <code>{product.sku}</code>

      {product.description && (
        <p dangerouslySetInnerHTML={product.description} />
      )}

      <Price product={product} />
      <AddToCart product={product} />
    </div>
  );
};
export default Product;
