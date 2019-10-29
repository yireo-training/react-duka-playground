import React from "react";
import { Query } from "react-apollo";
import { loader } from "graphql.macro";
import ErrorPage from "components/Pages/ErrorPage";
import SearchPage from "./component";

const SearchPageQueryContainer = props => {
  if (props.search.length < 3) {
    return (
      <SearchPage suggestion="Make sure to use more than 2 characters in your search" />
    );
  }

  const query = loader("state/graphql/queries/search.graphql");

  return (
    <Query query={query} variables={{ search: props.search }}>
      {({ loading, error, data }) => {
        if (loading) return <SearchPage />;
        if (error) return <ErrorPage error={error.message} />;

        const products = data.products.items;
        const newProps = Object.assign({}, props, { products: products });
        return <SearchPage {...newProps} />;
      }}
    </Query>
  );
};

export default SearchPageQueryContainer;
