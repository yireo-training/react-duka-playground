// Middleware
import types from "./types";
import addToCart from "./middleware/addToCart";
import updateProduct from "./middleware/updateProduct";
import removeCartItem from "./middleware/removeCartItem";
import updateCart from "./middleware/updateCart";

const cartMiddleware = store => {
  return next => {
    return async action => {
      next(action);

      switch (action.type) {
        case types.UPDATE_CART:
          return updateCart(store, action);

        case types.ADD_PRODUCT:
          return addToCart(store, action);

        case types.UPDATE_PRODUCT:
          return updateProduct(store, action);

        case types.REMOVE_CART_ITEM:
          return removeCartItem(store, action);

        default:
          return;
      }
    };
  };
};

export default cartMiddleware;
