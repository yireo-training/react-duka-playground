import React from "react";
import { Link } from "react-router-dom";

const Categories = (props) => {
  return (
    <>
      {props.categories.map(category => (
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
};

export default Categories;
