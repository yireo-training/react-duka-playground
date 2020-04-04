import React from "react";
import { Table, Button } from "react-bootstrap";
import useCart from "hooks/useCart";
import CartTotals from "./CartTotals";
import "./component.css";

const CartPage = props => {
  return (
    <div className="CartPage">
      <h1>
        Shopping Cart <span>{useCart.useItemsCount()} items</span>
      </h1>
      <Table striped>
        <thead>
          <tr>
            <th>Product</th>
            <th>SKU</th>
            <th>Qty</th>
          </tr>
        </thead>
        <tbody>
          {props.cart.items.map(item => (
            <tr key={item.id}>
              <td>{item.product.name}</td>
              <td>{item.product.sku}</td>
              <td>{item.quantity}</td>
              <td>
                <button
                  onClick={() => {
                    props.removeCartItem(item.id, item.product.name);
                  }}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {props.cart.prices && <CartTotals prices={props.cart.prices} />}

      <Button href="checkout">Checkout</Button>
      <Button onClick={props.updateCart}>Refresh</Button>
    </div>
  );
};

export default CartPage;
