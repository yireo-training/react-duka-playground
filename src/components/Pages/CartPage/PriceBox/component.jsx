import React from "react";

const PriceBox = (props) => {
    return (
        <tr>
            <td>{props.label}</td>
            <td>{props.price.currency} {props.price.value}</td>
        </tr>
    );
}

export default PriceBox;