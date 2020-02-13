import React from "react";
import Loading from "components/Utils/Loading";
import { loader } from "graphql.macro";
import ErrorPage from "components/Pages/ErrorPage";
import CategoryPage from "./component";
import { useQuery } from '@apollo/react-hooks';

const categoryPageQuery = loader(
  "state/graphql/queries/categoryPage.graphql"
);

const CategoryPageQueryContainer = props => {
  const { loading, error, data } = useQuery(categoryPageQuery, { variables: { id: props.id } });

  if (loading) return <Loading />;
  if (error) return <ErrorPage error={error.message} />;

  const category = data.category;
  const products = category.products.items;
  return <CategoryPage category={category} products={products} />;
};

export default CategoryPageQueryContainer;
