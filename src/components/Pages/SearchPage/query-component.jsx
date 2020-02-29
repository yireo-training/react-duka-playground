import React from "react";
import { loader } from "graphql.macro";
import ErrorPage from "components/Pages/ErrorPage";
import SearchPage from "./component";
import { useQuery } from "@apollo/react-hooks";

const query = loader("src/state/graphql/queries/search.graphql");

const SearchPageQueryContainer = props => {
  const { loading, error, data } = useQuery(query, {
    variables: { search: props.search }
  });

  if (loading) return <SearchPage />;
  if (error) return <ErrorPage error={error.message} />;

  const products = data.products.items;
  const newProps = Object.assign({}, props, { products: products });
  return <SearchPage {...newProps} />;
};

export default SearchPageQueryContainer;
