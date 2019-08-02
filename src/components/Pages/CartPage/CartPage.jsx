import React from "react";
import Debug from "../../Test/Debug";

const CartPage = props => {
  return (
    <div className="CartPage">
      <h1>Shopping Cart</h1>
      <Debug data={props} />
    </div>
  );
};

export default CartPage;
