# Duka for React

A prototype e-commerce project that connects a React app (using Redux, Apollo Client and React Bootstrap) to a Magento 2.3 GraphQL site. Currently, the following functionality is working:

- Displaying products, categories, CMS-pages (including routing)
- Navigation showing top-level categories plus second-level categories
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

This package is based on `create-react-app`. On top of this, [react-app-rewired](https://github.com/timarney/react-app-rewired) has been used to allow for a local `config-override.js` to extend Webpack, without the need to eject the full configuration.

Redux uses the ducks-standard with 3 ducks (cart, customer, messages) to group action types, action creators, reducers and middleware together.

The cart and customer ducks use a `locked` variable to prevent multiple simultaneous actions. Using a `setLock(true, callback)` action, the lock is set. When calling upon `setLock(false)`, the lock will be liften and the callback will be called as well. The callback allows for the Redux middleware (handling GraphQL things asyncronously) to send a message to the local component to update the local state.

## Development

This project uses `plop`, so you can easily create new components using a command like this:

    npm run generate component Example

## Hints on using GraphQL Fragments and client-side schemas

As soon as your queries include fragments that are based on unions and interfaces (and Magento is notorious for this), the Apollo Client needs to be pre-configured with a thing called `IntrospectionFragmentMatcher` and this matcher needs to be fed a GraphQL schema definition on the client side. To generate this, Duka makes use of [graphql-code-generator](https://graphql-code-generator.com/) with a configuration file `codegen.yml`. This YAML file includes a reference to a Magento 2.3+ instance to read GraphQL schemas from using a command `yarn graphql-codegen`. When modifying this Duka codebase and simultaneously upgrading Magento, it might very well be that the generated schemas in `src/codegen` are out-of-date. The command above should fix this.

## Roadmap

This is not a very active project, mainly because it is a playground for Yireo personally. But if people raise their hands to mention that it is important to them as well, we are happy to add additional effort into it. The roadmap is therefore still limited:

- Finish a basic checkout for Simple Products;
- Refactor all Apollo and Redux components into hooks, reducing the number of components in the tree and simplifying lots of work as well;
- Finalize theming logic, so that the core project is easily extendable. Perhaps even add documentation;
- Move some GraphQL queries and mutations from the Redux middleware into standalone functions, so that they are even reusable without Redux;
- Shift from Twitter Bootstrap into Material UI. Separating logical components (containers without any HTML) and presentational components (with bindings to specific UI libraries);
- Move generic code into separate NPM packages, so that a new project is more easily bootstrapped;
- Investigate a move to NextJS (because of easier routing, a more solid base architecture and Server Side Rendering);

## Todo

- Optimize caching
- Product options
- Checkout flow

... and lots more
