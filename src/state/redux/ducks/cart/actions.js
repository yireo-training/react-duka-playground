// Action Creators
import types from "./types";

const setCartId = cartId => {
  return { type: types.SET_CART_ID, cartId: cartId };
};

const setProducts = (cartId, items) => {
  return { type: types.SET_PRODUCTS, cartId: cartId, items: items };
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

export default {
  setCartId,
  setProducts,
  updateCart,
  addProduct,
  updateProduct,
  removeProduct
};
