const unlock = (store) => {
  const currentState = store.getState();
  if (currentState.common.locked === true) {
    return;
  }

  if (currentState.common.afterUnlockCallback instanceof Function) {
    currentState.common.afterUnlockCallback.call();
  }
};

export default unlock;
