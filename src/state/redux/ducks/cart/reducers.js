import { combineReducers } from "redux";
import types from "./types";

// Reducers
const updateCartReducer = (state, action) => {
  if (state === undefined) {
    return {};
  }

  if (action.type !== types.UPDATE_CART) {
    return state;
  }
  return state;
};

const fetchCartReducer = (state, action) => {
  if (state === undefined) {
    return {};
  }

  if (action.type !== types.FETCH_CART) {
    return state;
  }
  return state;
};

const addProductReducer = (state, action) => {
  if (state === undefined) {
    return {};
  }

  if (action.type !== types.ADD_PRODUCT) {
    return state;
  }
  return state;
};

const updateProductReducer = (state, action) => {
  if (state === undefined) {
    return {};
  }

  if (action.type !== types.UPDATE_PRODUCT) {
    return state;
  }
  return state;
};

const removeProductReducer = (state, action) => {
  if (state === undefined) {
    return {};
  }
  
  if (action.type !== types.REMOVE_PRODUCT) {
    return state;
  }
  return state;
};

export default combineReducers({
  updateCart: updateCartReducer,
  fetchCart: fetchCartReducer,
  addProduct: addProductReducer,
  updateProduct: updateProductReducer,
  removeProduct: removeProductReducer
});
