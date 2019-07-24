import React from "react";
import { Query } from "react-apollo";
import { loader as gqlLoader } from "graphql.macro";
import Nav from "react-bootstrap/Nav";

const categoriesQuery = gqlLoader("../../queries/topLevelCategories.graphql");

const Categories = () => {
  return (
    <>
      <Query query={categoriesQuery}>
        {({ loading, error, data }) => {
          if (loading) return <></>;
          if (error) return <></>;
          if (!data.category) return <></>;
          if (!data.category.children) return <></>;

          const categories = data.category.children;
          return (
            <>
              {categories.map(category => (
                <Nav.Link key={category.url_key} href={category.url_key + ".html"}>{category.name}</Nav.Link>
              ))}
            </>
          );
        }}
      </Query>
    </>
  );
};

export default Categories;
