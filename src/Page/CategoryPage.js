import React from "react";
import { Query } from "react-apollo";
import Loading from "../Utils/Loading";
import ProductGrid from "../Molecules/ProductGrid";
import { loader as gqlLoader } from "graphql.macro";
import Image from "react-bootstrap/Image";
import ErrorPage from "./ErrorPage";

const categoryImageUrl = "http://m2.betelgeuse.yr/media/catalog/category/";

const CategoryPage = props => {
  const categoryPageQuery = gqlLoader("../queries/categoryPage.graphql");

  return (
    <Query query={categoryPageQuery} variables={{ id: props.id }}>
      {({ loading, error, data }) => {
        if (loading) return <Loading />;
        if (error) return <ErrorPage error={error.message} />;

        const category = data.category;
        const products = category.products.items;
        return (
          <div className="categoryPage">
            <h1>{category.name}</h1>

            {category.description && <p>{category.description}</p>}
            {category.image && (
              <Image
                alt={category.name}
                src={categoryImageUrl + category.image}
                fluid
              />
            )}
            <ProductGrid products={products} />
          </div>
        );
      }}
    </Query>
  );
};

export default CategoryPage;
