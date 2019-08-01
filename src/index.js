import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { Provider as ReduxProvider } from "react-redux";
import persistStore from 'redux-phoenix';

import apolloClient from "./state/graphql/apollo-client";
import reduxStore from "./state/redux/store";
import * as serviceWorker from "./serviceWorker";

persistStore(reduxStore).then(reduxStore => {
  ReactDOM.render(
    <ApolloProvider client={apolloClient}>
      <ReduxProvider store={reduxStore}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ReduxProvider>
    </ApolloProvider>, document.getElementById('root')
  );
});

serviceWorker.unregister();
