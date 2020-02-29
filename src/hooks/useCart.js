import { useSelector } from "react-redux";

export default {
  useItemsCount: () => {
    const cartItems = useSelector(state => state.cart.items);
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }
};
