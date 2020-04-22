import React from "react";
import { useSelector } from "react-redux";
import Alert from "react-bootstrap/Alert";
import SearchPageViaQuery from "./SearchPageViaQuery";
import SearchPageViaElasticSearch from "./SearchPageViaElasticSearch";
import config from "../../../config";

const SearchPage = () => {
  const search = useSelector((state) => state.search.search);
  let suggestion = "";

  if (!search || search.length < 3) {
    suggestion = "Make sure to use more than 2 characters in your search";
  }

  const SearchComponent = config.elasticsearch_url
    ? SearchPageViaElasticSearch
    : SearchPageViaQuery;

  return (
    <div className="SearchPage">
      <h1>Search</h1>
      <div>
        <strong>Showing search results for: "{search}"</strong>
      </div>
      {suggestion && <Alert variant="warning">{suggestion}</Alert>}
      {search && <SearchComponent search={search} />}
    </div>
  );
};

export default SearchPage;
