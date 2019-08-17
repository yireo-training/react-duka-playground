import types from "./types";
import setCartIdReducer from "./reducers/setCartId";
import setProductsReducer from "./reducers/setProducts";
import addProductReducer from "./reducers/addProduct";
import updateCartReducer from "./reducers/updateCart";
import updateProductReducer from "./reducers/updateProduct";
import removeProductReducer from "./reducers/removeProduct";
import lockReducer from "../common/reducers/lock";
import unlockReducer from "../common/reducers/unlock";

// Main reducer
const cartReducer = (state, action) => {
  if (state === undefined) {
    return {};
  }

  if (action.type === types.SET_CART_ID) {
    return setCartIdReducer(state, action);
  }

  if (action.type === types.SET_PRODUCTS) {
    return setProductsReducer(state, action);
  }

  if (action.type === types.UPDATE_CART) {
    return updateCartReducer(state, action);
  }

  if (action.type === types.ADD_PRODUCT) {
    return addProductReducer(state, action);
  }

  if (action.type === types.UPDATE_PRODUCT) {
    return updateProductReducer(state, action);
  }

  if (action.type === types.REMOVE_PRODUCT) {
    return removeProductReducer(state, action);
  }

  if (action.type === types.LOCK) {
    return lockReducer(state, action);
  }

  if (action.type === types.UNLOCK) {
    return unlockReducer(state);
  }

  return state;
};

export default cartReducer;
