import React from "react";
import { useSelector, useDispatch } from "react-redux";
import QuickSearch from "./component";
import { updateSearch } from "state/redux/ducks/search/actions";

const QuickSearchReduxContainer = (props) => {
  const search = useSelector((state) => state.search.search);
  const dispatch = useDispatch();
  const onSearch = (search) => {
    dispatch(updateSearch(search));
  };

  return <QuickSearch {...props} search={search} onSearch={onSearch} />;
};

export default QuickSearchReduxContainer;
