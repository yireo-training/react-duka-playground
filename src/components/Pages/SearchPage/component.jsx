import React from "react";
import { useSelector } from "react-redux";
import { useQuery } from "@apollo/react-hooks";
import { loader } from "graphql.macro";
import ErrorPage from "components/Pages/ErrorPage";
import ProductGrid from "../../Molecules/ProductGrid";
import Alert from "react-bootstrap/Alert";
import Loading from "components/Utils/Loading";

const query = loader("src/state/graphql/queries/search.graphql");

const SearchPage = props => {
  const search = useSelector(state => state.search.search);
  let suggestion = "";

  if (search.length < 3) {
    suggestion = "Make sure to use more than 2 characters in your search";
  }

  const { loading, error, data } = useQuery(query, {
    variables: { search: search }
  });

  if (loading) return <Loading />;
  if (error) return <ErrorPage error={error.message} />;

  const products = data.products.items;

  return (
    <div className="SearchPage">
      <h1>Search</h1>
      <div>
        <strong>Showing search results for: "{search}"</strong>
      </div>
      {suggestion && <Alert variant="warning">{suggestion}</Alert>}
      {products && <ProductGrid products={products} />}
    </div>
  );
};

export default SearchPage;
