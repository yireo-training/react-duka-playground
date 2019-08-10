// Middleware
import types from "./types";
import addToCart from "./middleware/addToCart";
import updateProduct from "./middleware/updateProduct";
import removeProduct from "./middleware/removeProduct";

const cartMiddleware = store => {
  return next => {
    return async action => {
      next(action);

      switch (action.type) {
        case types.ADD_PRODUCT:
          return addToCart(store, action);

        case types.UPDATE_PRODUCT:
          return updateProduct(store, action);

        case types.REMOVE_PRODUCT:
          return removeProduct(store, action);

        default:
          return;
      }
    };
  };
};

export default cartMiddleware;
