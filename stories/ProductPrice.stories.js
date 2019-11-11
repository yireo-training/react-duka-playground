import React from 'react';
import Price from "components/Atoms/Product/Price/component";

export default {
  title: 'Product Price'
};

//export const productWithoutPrice = () => <Price />

//productWithoutPrice.story = {
//  name: 'Product without price',
//};

const product = {
  price: {
    regularPrice: {
      amount: {
        currency: 'EUR',
        value: 42
      }
    }
  }
}
export const productWithPrice = () => <Price product={product} />

productWithPrice.story = {
  name: 'Product with price of 42',
};
