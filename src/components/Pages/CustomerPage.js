import React from "react";
import { connect } from "react-redux";
import { loader } from "graphql.macro";
import { Query } from "react-apollo";
import Debug from "../Test/Debug";
import ErrorPage from "./ErrorPage";
import Loading from "../Utils/Loading";
import LoginForm from "./CustomerPage/LoginForm";
import Button from "react-bootstrap/Button";
import { customerActions } from "state/redux/ducks/customer";

const CustomerPage = props => {
  if (!props.customerToken) {
    return <LoginForm/>;
  }

  const customerQuery = loader("state/graphql/queries/customer.graphql");
  const customerVariables = {token: props.customerToken};

  const token = props.customerToken;
  const customerContext = {
    headers: {
      authorization: token ? `Bearer ${token}` : ""
    }
  }

  return (
    <div className="CustomerPage">
      <Query query={customerQuery} variable={customerVariables} context={customerContext}>
        {({ loading, error, data }) => {
          if (loading) return <Loading />;
          if (error) return <ErrorPage error={error.message} />;

          return (
            <>
              <h1>My Account</h1>
              <Debug data={data} />
              <Button onClick={props.logoutCustomer}>Logout</Button>
            </>
          );
        }}
      </Query>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    customerToken: state.customer.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logoutCustomer: () => {
      dispatch(customerActions.logoutCustomer());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerPage);
