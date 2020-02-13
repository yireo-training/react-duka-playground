import React from "react";
import ProductGrid from "../../Molecules/ProductGrid";
import Image from "react-bootstrap/Image";
import config from "config";

const categoryImageUrl = config.magento_url + "/media/catalog/category/";

const CategoryPage = props => {
  const category = props.category;
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

      <ProductGrid products={props.products} />
    </div>
  );
};

export default CategoryPage;
