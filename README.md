# Apollo Playground
Dummy e-commerce project that connects a React app (using Redux, Apollo Client and React Bootstrap) to a Magento 2.3 GraphQL site. Currently, the following functionality is working:

- Displaying products, categories, CMS-pages
- Navigation showing top-level categories
- Showing messages in the message area (with auto-hide)
- Adding simple products to cart (without custom options)

## Getting started
This package is not bundled with a package lock, so let's pray that this works nicely. Just install the packages from `packages.json` using yarn or npm:

    npm install // or:  yarn install

Afterwards, start the app:

    npm start // or: yarn start

## Architecture
This package is based on `create-react-app`.

Redux uses the ducks-standard with 3 ducks (cart, customer, messages) to group action types, action creators, reducers and middleware together. The cart and customer ducks use a `locked` variable to prevent multiple simultaneous actions.

## Todo
- Working customer login
- Navigation with submenus (secondary and tertiary categories)
- Optimize caching
- Product options
