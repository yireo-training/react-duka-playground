// Action Creators
import types from "./types";

export const updateSearch = (search) => {
  return {
    type: types.UPDATE_SEARCH,
    search: search,
  };
};

export default {
  updateSearch,
};
