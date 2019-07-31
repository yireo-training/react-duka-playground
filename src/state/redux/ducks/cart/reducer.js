import types from "./types";

// Reducers
const cartReducer = (state, action) => {
  if (state === undefined) return {};
  if (action.type === types.SET_CART_ID) return setCartIdReducer(state, action);
  if (action.type === types.UPDATE_CART)
    return updateCartReducer(state, action);
  if (action.type === types.FETCH_CART) return fetchCartReducer(state, action);
  if (action.type === types.ADD_PRODUCT)
    return addProductReducer(state, action);
  if (action.type === types.UPDATE_PRODUCT)
    return updateProductReducer(state, action);
  if (action.type === types.REMOVE_PRODUCT)
    return removeProductReducer(state, action);
  return state;
};

const setCartIdReducer = (state, action) => {
  return Object.assign({}, state, { id: action.cartId });
};

const updateCartReducer = (state, action) => {
  return state;
};

const fetchCartReducer = (state, action) => {
  return state;
};

const addProductReducer = (state, action) => {
  let products = state.items ? state.items : [];
  let newProducts = [...products];
  newProducts.push({ sku: action.sku, qty: action.qty });
  let newState = Object.assign({}, state, { items: newProducts });
  return newState;
};

const updateProductReducer = (state, action) => {
  return state;
};

const removeProductReducer = (state, action) => {
  let products = state.items ? state.items : [];
  let newProducts = [...products];
  newProducts.map((product, index) => {
    if (product.sku === action.sku) newProducts.splice(index, 1);
    return product;
  });

  return Object.assign({}, state, { items: newProducts });
};

export default cartReducer;