import React from "react";
import PropTypes from "prop-types";

const Price = props => {
  const product = props.product;

  if (product.price === undefined) {
    return <div>No price defined</div>;
  }

  if (product.price.regularPrice === undefined) {
    return <div>No regular price defined</div>;
  }

  const price = product.price.regularPrice.amount;

  return (
    <div className="Price">
      {price.currency} {price.value}
    </div>
  );
};

Price.propTypes = {
  product: PropTypes.shape({
    price: PropTypes.shape({
      regularPrice: PropTypes.shape({
        amount: PropTypes.shape({
            currency: PropTypes.string.isRequired,
            value: PropTypes.number.isRequired
        })
      })
    })
  })
};

export default Price;
