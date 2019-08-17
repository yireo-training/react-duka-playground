export default (state, action) => {
  return Object.assign({}, state, {email: action.email});
};
