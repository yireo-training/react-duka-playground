export default (state, action) => {
  if (!action.email || !action.password) {
    return state;
  }

  return Object.assign({}, state, {
    email: action.email,
    password: action.password
  });
};
