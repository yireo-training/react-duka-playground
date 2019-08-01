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

const setLock = (locked, afterUnlockCallback) => {
  return { type: types.SET_LOCK, locked: locked, afterUnlockCallback: afterUnlockCallback };
};

export default {
  setCartId,
  updateCart,
  addProduct,
  updateProduct,
  removeProduct,
  setLock
};
