import React from "react";
import { loader } from "graphql.macro";
import Loading from "components/Utils/Loading";
import ErrorPage from "components/Pages/ErrorPage";
import NotFoundPage from "../NotFoundPage";
import ProductPage from "./component";
import { useQuery } from "@apollo/react-hooks";

const productPageQuery = loader(
  "src/state/graphql/queries/productPage.graphql"
);

const ProductPageQueryContainer = props => {
  const { loading, error, data } = useQuery(productPageQuery, {
    variables: { url_key: props.url_key }
  });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorPage error={error.message} />;
  }

  if (!data) {
    return (
      <NotFoundPage
        reason={
          "No AJAX response for query: " + productPageQuery.loc.source.body
        }
      />
    );
  }

  if (!data.products) {
    return <NotFoundPage reason="No products in AJAX response" />;
  }

  if (!data.products.items) {
    return <NotFoundPage reason="No product items found" />;
  }

  const product = data.products.items[0];
  if (!product) return <NotFoundPage />;

  return <ProductPage product={product} />;
};

export default ProductPageQueryContainer;
