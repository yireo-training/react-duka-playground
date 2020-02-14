// Action Creators
import types from "./types";

const setCartId = cartId => {
  return { type: types.SET_CART_ID, cartId };
};

const setProducts = (cartId, items) => {
  return { type: types.SET_PRODUCTS, cartId, items };
};

const updateCart = () => {
  return { type: types.UPDATE_CART };
};

const addProduct = (sku, qty) => {
  if (!qty > 0) qty = 1;
  return { type: types.ADD_PRODUCT, sku, qty };
};

const updateProduct = (sku, qty) => {
  return { type: types.UPDATE_PRODUCT, sku, qty };
};

const removeCartItem = (id, name) => {
  return { type: types.REMOVE_CART_ITEM, id, name };
};

export default {
  setCartId,
  setProducts,
  updateCart,
  addProduct,
  updateProduct,
  removeCartItem
};
