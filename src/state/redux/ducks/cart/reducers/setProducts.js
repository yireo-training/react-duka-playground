export default (state, action) => {
  return Object.assign({}, state, { items: action.items });
};
