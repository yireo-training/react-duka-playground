import React from "react";
import { loader } from "graphql.macro";
import Loading from "components/Utils/Loading";
import ErrorPage from "components/Pages/ErrorPage";
import Component from "./component";
import { useQuery } from "@apollo/react-hooks";

const query = loader("src/state/graphql/queries/customerOrders.graphql");

const QueryContainer = props => {
  const token = props.customerToken;
  const context = {
    headers: {
      authorization: token ? `Bearer ${token}` : ""
    }
  };

  const { loading, error, data } = useQuery(query, { context });

  if (loading) return <Loading />;
  if (error) return <ErrorPage error={error.message} />;

  const newProps = Object.assign({}, props, { data: data });
  return <Component {...newProps} />;
};

export default QueryContainer;
