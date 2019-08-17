export default (state, action) => {
  return Object.assign({}, state, {
    token: action.token,
    password: "test"
  });
};
