import React from "react";
import { Query } from "react-apollo";
import { loader } from "graphql.macro";
import Categories from "./component";

const categoriesQuery = loader(
  "state/graphql/queries/topLevelCategories.graphql"
);

const CategoriesQueryContainer = () => {
  return (
    <>
      <Query query={categoriesQuery}>
        {({ loading, error, data }) => {
          if (loading) return <></>;
          if (error) return <></>;
          if (!data.category) return <></>;
          if (!data.category.children) return <></>;

          return <Categories categories={data.category.children} />;
        }}
      </Query>
    </>
  );
};

export default CategoriesQueryContainer;
