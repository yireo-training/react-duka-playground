# Duka for React

A prototype e-commerce project that connects a React app (using Redux, Apollo Client and React Bootstrap) to a Magento 2.3 GraphQL site. Currently, the following functionality is working:

- Displaying products, categories, CMS-pages (including routing)
- Navigation showing top-level categories
- Showing messages in the message area (with auto-hide)
- Adding simple products to cart (without custom options)

## Getting started

This package is not bundled with a package lock, so let's pray that this works nicely. Just install the packages from `packages.json` using yarn or npm:

```bash
npm install # or
yarn install
```

Next, copy the `src/config.js.dist` file to `src/config.js` and modify your Magento GraphQL URL.

Afterwards, start the app:

```bash
npm start # or
yarn start
```

## Architecture

This package is based on `create-react-app`.

Redux uses the ducks-standard with 3 ducks (cart, customer, messages) to group action types, action creators, reducers and middleware together.

The cart and customer ducks use a `locked` variable to prevent multiple simultaneous actions. Using a `setLock(true, callback)` action, the lock is set. When calling upon `setLock(false)`, the lock will be liften and the callback will be called as well. The callback allows for the Redux middleware (handling GraphQL things asyncronously) to send a message to the local component to update the local state.

## Todo

- Navigation with submenus (secondary and tertiary categories)
- Optimize caching
- Product options
- Checkout
