import React from "react";
import { loader } from "graphql.macro";
import Categories from "./component";
import { useQuery } from '@apollo/react-hooks';

const categoriesQuery = loader(
  "src/state/graphql/queries/topLevelCategories.graphql"
);

const CategoriesQueryContainer = () => {
  const { loading, error, data } = useQuery(categoriesQuery);

  if (loading) return <></>;
  if (error) return <></>;
  if (!data.category) return <></>;
  if (!data.category.children) return <></>;

  return <Categories categories={data.category.children} />;
};

export default CategoriesQueryContainer;
