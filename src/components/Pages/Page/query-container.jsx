import React from "react";
import { Query } from "react-apollo";
import Loading from "components/Utils/Loading";
import NotFoundPage from "components/Pages/NotFoundPage";
import ErrorPage from "components/Pages/ErrorPage";
import CategoryPage from "components/Pages/CategoryPage";
import ProductPage from "components/Pages/ProductPage";
import CmsPage from "components/Pages/CmsPage";
import { loader } from "graphql.macro";

const PageQueryContainer = props => {
  const resolveCategoryUrlToIdQuery = loader(
    "state/graphql/queries/resolveCatalogUrlToId.graphql"
  );

  const url = props.location.pathname;

  return (
    <Query query={resolveCategoryUrlToIdQuery} variables={{ url: url }}>
      {({ loading, error, data }) => {
        if (loading) return <Loading />;
        if (error) return <ErrorPage error={error.message} />;

        if (!data.urlResolver || !data.urlResolver.id || !data.urlResolver.type)
          return <NotFoundPage reason="No resolver information found" />;

        if (data.urlResolver.type === "CATEGORY" && data.urlResolver.id) {
          return <CategoryPage id={data.urlResolver.id} />;
        }

        if (data.urlResolver.type === "PRODUCT") {
          const url_key = url.replace(/.html$/, "").replace(/^\//, "");
          return <ProductPage url_key={url_key} />;
        }

        if (data.urlResolver.type === "CMS_PAGE" && data.urlResolver.id) {
          return <CmsPage id={data.urlResolver.id} />;
        }

        console.log(data);
        return (
          <NotFoundPage reason="No product or category or CMS-page with this name" />
        );
      }}
    </Query>
  );
};

export default PageQueryContainer;
