import React from "react";
import PriceBox from "./PriceBox";
import Table from "react-bootstrap/Table";

const CartPrice = props => {
  return (
    <div className="bottom">
      <div className="additional" />
      <div className="totals">
        <Table striped>
          <tbody>
            <PriceBox
              label="Subtotal excl. tax"
              price={props.prices.subtotal_excluding_tax}
            />
            <PriceBox
              label="Subtotal incl. tax with discount"
              price={props.prices.subtotal_with_discount_excluding_tax}
            />
            <PriceBox
              label="Subtotal incl. tax"
              price={props.prices.subtotal_including_tax}
            />
            <PriceBox label="Grand Total" price={props.prices.grand_total} />
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default CartPrice;
