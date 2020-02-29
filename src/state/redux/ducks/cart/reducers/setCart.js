export default (state, action) => {
  return Object.assign({}, state, {
    items: action.cart.items,
    prices: action.cart.prices
  });
};
