// Action Creators
import types from "./types";

const setCartId = cartId => {
  return { type: types.SET_CART_ID, cartId: cartId };
};

const updateCart = () => {
  return { type: types.UPDATE_CART };
};

const addProduct = (productSku, qty) => {
  if (!qty > 0) qty = 1;
  return { type: types.ADD_PRODUCT, sku: productSku, qty: qty };
};

const updateProduct = (productSku, qty) => {
  return { type: types.UPDATE_PRODUCT, sku: productSku, qty: qty };
};

const removeProduct = productSku => {
  return { type: types.REMOVE_PRODUCT, sku: productSku };
};

const lock = (afterUnlockCallback) => {
  return { type: types.LOCK, afterUnlockCallback: afterUnlockCallback };
};

const unlock = () => {
  return { type: types.UNLOCK };
};

export default {
  setCartId,
  updateCart,
  addProduct,
  updateProduct,
  removeProduct,
  lock,
  unlock
};
