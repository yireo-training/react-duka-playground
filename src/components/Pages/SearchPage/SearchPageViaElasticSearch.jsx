import React, { useState, useEffect } from "react";
import ErrorPage from "components/Pages/ErrorPage";
import ProductGrid from "../../Molecules/ProductGrid";
import EmptySearchResults from "./EmptySearchResults";
import Loading from "components/Utils/Loading";
import config from "../../../config";

const convertProducts = products => {
  const convertToString = value => {
    if (Array.isArray(value)) {
      return value[0];
    }

    return value;
  };

  let newProducts = [];
  products.forEach(product => {
    let newProduct = product._source;
    newProduct.description = { __html: newProduct.description };
    newProduct.name = convertToString(newProduct.name);
    newProduct.url_key = convertToString(newProduct.url_key);
    newProduct.price = {
      regularPrice: {
        amount: { currency: "EUR", value: Number(newProduct.price_0_1) }
      }
    };
    newProduct.id = product._id;
    newProducts.push(newProduct);
  });

  return newProducts;
};

const SearchPageViaElasticSearch = props => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(false);
    fetch(config.elasticsearch_url + "?q=" + props.search)
      .then(result => result.json())
      .then(
        result => {
          setProducts(result.hits.hits);
          setLoading(false);
        },
        error => {
          setLoading(false);
          setError(error);
        }
      );
  }, [props.search]);

  if (loading) return <Loading />;
  if (error) return <ErrorPage error={error.message} />;

  if (!products) {
    return <EmptySearchResults />;
  }

  return <ProductGrid products={convertProducts(products)} />;
};

export default SearchPageViaElasticSearch;
