import React from "react";
import { connect } from "react-redux";
import QuickSearch from "./component";
import searchActions from "state/redux/ducks/search/actions";

const QuickSearchReduxContainer = props => {
  return <QuickSearch {...props} />;
};

const mapStateToProps = state => {
  return {
    search: state.search.search
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearch: search => {
      dispatch(searchActions.updateSearch(search));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuickSearchReduxContainer);
