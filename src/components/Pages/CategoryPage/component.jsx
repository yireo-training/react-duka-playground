import React from "react";
import ProductGrid from "../../Molecules/ProductGrid";
import Image from "react-bootstrap/Image";

const categoryImageUrl = "http://m2.betelgeuse.yr/media/catalog/category/";

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
