const unlock = (store) => {
  const currentState = store.getState();
  if (currentState.cart.locked === true) {
    return;
  }

  if (currentState.cart.afterUnlockCallback instanceof Function) {
    currentState.cart.afterUnlockCallback.call();
  }
};

export default unlock;
