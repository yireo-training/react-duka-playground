import React from "react";
import ProductGrid from "../../Molecules/ProductGrid";
import Alert from "react-bootstrap/Alert";

const SearchPage = props => {
  return (
    <div className="SearchPage">
      <h1>Search</h1>
      <div>
        <strong>Showing search results for: "{props.search}"</strong>
      </div>
      {props.suggestion && <Alert variant="warning">{props.suggestion}</Alert>}
      {props.products && <ProductGrid products={props.products} />}
    </div>
  );
};

export default SearchPage;
