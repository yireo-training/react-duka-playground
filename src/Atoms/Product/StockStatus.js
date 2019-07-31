import React from "react";

const StockStatus = (props) => {
    const product = props.product;

    if (product.stock_status === undefined) {
        return <></>
    }

    return (
        <div className="StockStatus">{product.stock_status}</div>
    )
}

export default StockStatus;