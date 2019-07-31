import React from "react";
import { connect } from "react-redux";
import { loader } from "graphql.macro";
import { Query } from "react-apollo";
import Debug from "../Test/Debug";
import ErrorPage from "./ErrorPage";
import Loading from "../Utils/Loading";

const CustomerPage = props => {
  const customerQuery = loader("src/state/graphql/queries/customer.graphql");

  return (
    <div className="CustomerPage">
      <Query query={customerQuery}>
        {({ loading, error, data }) => {
          if (loading) return <Loading />;
          if (error) return <ErrorPage error={error.message} />;

          return (
            <>
              <h1>My Account</h1>
              <Debug data={data} />
            </>
          );
        }}
      </Query>
    </div>
  );
};

export default connect(
  null,
  null
)(CustomerPage);
