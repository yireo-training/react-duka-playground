import React from "react";
import { Query } from "react-apollo";
import Loading from "components/Utils/Loading";
import { loader } from "graphql.macro";
import ErrorPage from "components/Pages/ErrorPage";
import CategoryPage from "./component";

const CategoryPageQueryContainer = props => {
  const categoryPageQuery = loader(
    "state/graphql/queries/categoryPage.graphql"
  );

  return (
    <Query query={categoryPageQuery} variables={{ id: props.id }}>
      {({ loading, error, data }) => {
        if (loading) return <Loading />;
        if (error) return <ErrorPage error={error.message} />;

        const category = data.category;
        const products = category.products.items;
        return <CategoryPage category={category} products={products} />;
      }}
    </Query>
  );
};

export default CategoryPageQueryContainer;
