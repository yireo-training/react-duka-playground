import React from "react";
import { Query } from "react-apollo";
import Loading from "../Utils/Loading";
import NotFoundPage from "./NotFoundPage";
import ErrorPage from "./ErrorPage";
import CategoryPage from "./CategoryPage";
import ProductPage from "./ProductPage";
import { loader } from "graphql.macro";

const CatalogPage = props => {

  const resolveCategoryUrlToIdQuery = loader("src/state/graphql/queries/resolveCatalogUrlToId.graphql");
  const catalogUrl = props.match.url;
  return (
    <div className="CatalogPage">
      <Query query={resolveCategoryUrlToIdQuery} variables={{ url: catalogUrl }}>
        {({ loading, error, data }) => {
          if (loading) return <Loading />;
          if (error) return <ErrorPage error={error.message} />;
          if (!data.urlResolver || !data.urlResolver.id) return <NotFoundPage reason="No resolver information found"/>

          if (data.urlResolver.type === "CATEGORY") {
            return <CategoryPage id={data.urlResolver.id} />;
          }
          
          if (data.urlResolver.type === "PRODUCT" && props.match.params.url_key) {
            return <ProductPage url_key={props.match.params.url_key} />;
          }

          return <NotFoundPage reason="No product or category with this name" />
        }}
      </Query>
    </div>
  );
};

export default CatalogPage;
