import React from "react";
import { loader } from "graphql.macro";
import { Query } from "react-apollo";
import ErrorPage from "../ErrorPage";
import Loading from "../../Utils/Loading";
import LoginForm from "./LoginForm";
import CustomerPageView from "./Dashboard";

const QueryContainer = props => {
  if (!props.customerToken) {
    return <LoginForm />;
  }

  const customerQuery = loader("state/graphql/queries/customer.graphql");
  const customerVariables = { token: props.customerToken };

  const token = props.customerToken;
  const customerContext = {
    headers: {
      authorization: token ? `Bearer ${token}` : ""
    }
  };

  return (
    <Query
      query={customerQuery}
      variable={customerVariables}
      context={customerContext}
    >
      {({ loading, error, data }) => {
        if (loading) return <Loading />;
        if (error) return <ErrorPage error={error.message} />;

        const newProps = Object.assign({}, props, {data: data});
        return <CustomerPageView {...newProps} />;
      }}
    </Query>
  );
};

export default QueryContainer;
