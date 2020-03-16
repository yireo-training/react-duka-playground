import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { loader } from "graphql.macro";
import ErrorPage from "components/Pages/ErrorPage";
import ProductGrid from "../../Molecules/ProductGrid";
import EmptySearchResults from "./EmptySearchResults";
import Loading from "components/Utils/Loading";

const query = loader("src/state/graphql/queries/search.graphql");

const SearchPageViaQuery = props => {
  const { loading, error, data } = useQuery(query, {
    variables: { search: props.search }
  });

  if (loading) return <Loading />;
  if (error) return <ErrorPage error={error.message} />;

  const products = data.products.items;
  if (!products) {
    return <EmptySearchResults />;
  }

  return <ProductGrid products={products} />;
};

export default SearchPageViaQuery;
