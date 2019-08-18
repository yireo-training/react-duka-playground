import React from "react";
import { connect } from "react-redux";
import SearchPageQueryContainer from "./query-component";

const SearchPageReduxContainer = props => {
  return <SearchPageQueryContainer {...props} />;
};

const mapStateToProps = state => {
  return {
    search: state.search.search
  };
};

export default connect(mapStateToProps)(SearchPageReduxContainer);
