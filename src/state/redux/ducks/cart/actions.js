// Action Creators
import types from "./types";

const updateCart = () => {
  return { type: types.UPDATE_CART };
};

const fetchCart = () => {
  return { type: types.FETCH_CART };
};

const addProduct = (productId, qty) => {
  return { type: types.ADD_PRODUCT, productId: productId, qty: qty };
};

const updateProduct = (productId, qty) => {
  return { type: types.UPDATE_PRODUCT, productId: productId, qty: qty };
};

const removeProduct = productId => {
  return { type: types.REMOVE_PRODUCT, productId: productId };
};

export default { updateCart, fetchCart, addProduct, updateProduct, removeProduct };