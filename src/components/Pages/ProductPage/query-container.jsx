import React from "react";
import { Query } from "react-apollo";
import { loader } from "graphql.macro";
import Loading from "components/Utils/Loading";
import ErrorPage from "components/Pages/ErrorPage";
import NotFoundPage from "../NotFoundPage";
import ProductPage from "./component";

const ProductPageQueryContainer = props => {
  const productPageQuery = loader("state/graphql/queries/productPage.graphql");
  return (
    <Query query={productPageQuery} variables={{ url_key: props.url_key }}>
      {({ loading, error, data }) => {
        if (loading) return <Loading />;
        if (error) return <ErrorPage error={error.message} />;
        if (!data.products) return <NotFoundPage />;
        if (!data.products.items) return <NotFoundPage />;
        if (!data.products.items.length > 0) return <NotFoundPage />;

        const product = data.products.items[0];
        if (!product) return <NotFoundPage />;

        return <ProductPage product={product} />;
      }}
    </Query>
  );
};

export default ProductPageQueryContainer;
