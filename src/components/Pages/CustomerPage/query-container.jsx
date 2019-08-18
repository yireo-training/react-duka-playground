import React from "react";
import { loader } from "graphql.macro";
import { Query } from "react-apollo";
import Loading from "../../Utils/Loading";
import Dashboard from "./Dashboard";
import CustomerPage from "./component";
import { Redirect } from "react-router-dom";

const CustomerPageQueryContainer = props => {
  if (!props.customerToken) {
    return <Redirect to="/login" />;
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
        if (error) return <Redirect to="/logout" />;

        const contentComponent = props.content ? props.content : Dashboard;
        const newProps = Object.assign({}, props, { data: data });
        return <CustomerPage {...newProps} content={contentComponent} />;
      }}
    </Query>
  );
};

export default CustomerPageQueryContainer;
