import React from "react";

const Price = (props) => {
    const product = props.product;

    if (product.price === undefined) {
        return <div>No price defined</div>
    }

    if (product.price.regularPrice === undefined) {
        return <div>No regular price defined</div>
    }

    const price = product.price.regularPrice.amount;

    return (
        <div className="Price">{price.currency} {price.value}</div>
    )
}

export default Price;