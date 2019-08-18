import React from "react";
import { loader } from "graphql.macro";
import { Query } from "react-apollo";
import Loading from "components/Utils/Loading";
import ErrorPage from "components/Pages/ErrorPage";
import Component from "./component";

const QueryContainer = props => {
  const query = loader("state/graphql/queries/customerOrders.graphql");
  const token = props.customerToken;
  const context = {
    headers: {
      authorization: token ? `Bearer ${token}` : ""
    }
  };

  return (
    <Query
      query={query}
      context={context}
    >
      {({ loading, error, data }) => {
        if (loading) return <Loading />;
        if (error) return <ErrorPage error={error.message} />;

        const newProps = Object.assign({}, props, { data: data });
        return <Component {...newProps} />;
      }}
    </Query>
  );
};

export default QueryContainer;
