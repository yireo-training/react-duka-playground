export default (state, action) => {
  let products = state.items ? state.items : [];
  let newProducts = [...products];
  
  newProducts.map((product, index) => {
    if (product.sku === action.sku) newProducts.splice(index, 1);
    return product;
  });

  return Object.assign({}, state, { items: newProducts });
};
