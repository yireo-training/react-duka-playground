export default (state, action) => {
  return Object.assign({}, state, { id: action.cartId });
};
