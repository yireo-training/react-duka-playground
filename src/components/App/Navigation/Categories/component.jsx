import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import urlCreator from "utils/urlCreator";

const Categories = props => {
  return (
    <>
      {props.categories.map(category => (
        <Fragment key={category.url_path}>
          {category.children.length === 0 && (
            <Link
              to={urlCreator(category.url_path)}
              className="nav-link"
              role="button"
            >
              {category.name}
            </Link>
          )}

          {category.children.length > 0 && (
            <NavDropdown title={category.name}>
              <Link
                to={urlCreator(category.url_path)}
                className="dropdown-item"
                role="button"
              >
                ALL {category.name}
              </Link>

              {category.children.map(subcategory => (
                <Link
                  key={subcategory.id}
                  to={urlCreator(subcategory.url_path)}
                  className="dropdown-item"
                  role="button"
                >
                  {subcategory.name}
                </Link>
              ))}
            </NavDropdown>
          )}
        </Fragment>
      ))}
    </>
  );
};

export default Categories;
