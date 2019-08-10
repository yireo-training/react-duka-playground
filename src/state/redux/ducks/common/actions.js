// Action Creators
import types from "./types";

const lock = (afterUnlockCallback) => {
  return { type: types.LOCK, afterUnlockCallback: afterUnlockCallback };
};

const unlock = () => {
  return { type: types.UNLOCK };
};

export default {
  lock,
  unlock
};
