export default (state, action) => {
  return Object.assign({}, state, { data: action.data });
};
