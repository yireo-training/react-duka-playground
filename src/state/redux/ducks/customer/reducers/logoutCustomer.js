export default (state, action) => {
  if (state.token) delete state.token;
  return state;
};
