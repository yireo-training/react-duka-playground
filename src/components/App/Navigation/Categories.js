import React from "react";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import { loader } from "graphql.macro";

const categoriesQuery = loader(
  "state/graphql/queries/topLevelCategories.graphql"
);

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
                <Link
                  key={category.url_key}
                  to={category.url_key + ".html"}
                  className="nav-link"
                  role="button"
                >
                  {category.name}
                </Link>
              ))}
            </>
          );
        }}
      </Query>
    </>
  );
};

export default Categories;
