import React from 'react';
import AddToCart from "components/Atoms/Product/AddToCart/component";

export default {
  title: 'Product AddToCart'
};

export const toStorybook = () => <AddToCart />

toStorybook.story = {
  name: 'Default content',
};
