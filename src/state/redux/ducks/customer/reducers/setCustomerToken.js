export default (state, action) => {
  console.log(action);
  return Object.assign({}, state, {
    token: action.token,
    password: "test"
  });
};
