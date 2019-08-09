// Middleware
import types from "./types";
import addToCart from "./middleware/addToCart";
import updateProduct from "./middleware/updateProduct";
import removeProduct from "./middleware/removeProduct";
import unlock from "./middleware/unlock";

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

        case types.UNLOCK:
          return unlock(store);

        default:
          return;
      }
    };
  };
};

export default cartMiddleware;
