import React from "react";
import { connect } from "react-redux";
import SearchPageQueryContainer from "./query-component";
import SearchPage from "./component";

const SearchPageReduxContainer = props => {
  if (props.search.length < 3) {
    return (
      <SearchPage suggestion="Make sure to use more than 2 characters in your search" />
    );
  }

  return <SearchPageQueryContainer {...props} />;
};

const mapStateToProps = state => {
  return {
    search: state.search.search
  };
};

export default connect(mapStateToProps)(SearchPageReduxContainer);
