import React from "react";
import Image from "react-bootstrap/Image";
import Price from "../Atoms/Product/Price";
import AddToCart from "../Atoms/Product/AddToCart";

const Product = props => {
  if (props.product === undefined) {
    return <div className="Product">No product</div>;
  }

  const product = props.product;

  return (
    <div className="Product">
      {product.small_image && (
        <Image alt={product.name} src={product.small_image.url} fluid />
      )}

      <a href={product.url_key + ".html"}><h5>{product.name}</h5></a>
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
