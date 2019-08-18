// Action Creators
import types from "./types";

const updateSearch = search => {
  return {
    type: types.UPDATE_SEARCH,
    search: search
  };
};

export default {
  updateSearch
};
