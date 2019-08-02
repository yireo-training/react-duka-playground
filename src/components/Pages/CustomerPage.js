import React from "react";
import { connect } from "react-redux";
import { loader } from "graphql.macro";
import { Query } from "react-apollo";
import Debug from "../Test/Debug";
import ErrorPage from "./ErrorPage";
import Loading from "../Utils/Loading";
import LoginForm from "./CustomerPage/LoginForm";

const CustomerPage = props => {
  if (!props.customer.token) {
    return <LoginForm/>;
  }

  const customerQuery = loader("state/graphql/queries/customer.graphql");

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

const mapStateToProps = state => {
  return {
    customer: state.customer
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerPage);
