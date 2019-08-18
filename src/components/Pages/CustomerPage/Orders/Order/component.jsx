import React from "react";

const Order = (props) => {
  const order = props.order;
  return (
    <tr className="Order">
        <td>{order.id}</td>
        <td>{order.increment_id}</td>
        <td>{order.created_at}</td>
        <td>{order.grand_total}</td>
        <td>{order.status}</td>
    </tr>
  );
};

export default Order;
