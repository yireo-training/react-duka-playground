import React from "react";
import { Query } from "react-apollo";
import Loading from "../Utils/Loading";
import { loader } from "graphql.macro";
import Image from "react-bootstrap/Image";
import ErrorPage from "./ErrorPage";
import NotFoundPage from "./NotFoundPage";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import AddToCart from "../Atoms/Product/AddToCart";
import StockStatus from "../Atoms/Product/StockStatus";
import Price from "../Atoms/Product/Price";

const ProductPage = props => {
  const productPageQuery = loader("state/graphql/queries/productPage.graphql");
  return (
    <Query query={productPageQuery} variables={{ url_key: props.url_key }}>
      {({ loading, error, data }) => {
        if (loading) return <Loading />;
        if (error) return <ErrorPage error={error.message} />;
        if (!data.products) return <NotFoundPage />;
        if (!data.products.items) return <NotFoundPage />;
        if (!data.products.items.length > 0) return <NotFoundPage />;

        const product = data.products.items[0];
        if (!product) return <NotFoundPage />;

        return (
          <div className="productPage">
            <Row>
              <Col xs={5}>
                {product.image && (
                  <Image
                    alt={product.image.label}
                    src={product.image.url}
                    fluid
                  />
                )}
              </Col>
              <Col>
                <h1>{product.name}</h1>

                <Price product={product} />
                <StockStatus product={product} />
                <AddToCart product={product} />

                {product.description && (
                  <p dangerouslySetInnerHTML={product.description} />
                )}
              </Col>
            </Row>
          </div>
        );
      }}
    </Query>
  );
};

export default ProductPage;
