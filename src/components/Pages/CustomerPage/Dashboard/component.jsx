import React, { useState } from "react";
import Debug from "../../../Test/Debug";
import Button from "react-bootstrap/Button";
import { Redirect } from "react-router-dom";
import Loading from "components/Utils/Loading";

const Dashboard = props => {
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const onLogout = () => {
    setLoading(true);
    props.logoutCustomer(() => {
      setRedirect("/");
    });
  };

  if (loading) {
    return <Loading />;
  }

  if (redirect) {
    return <Redirect to={redirect} />;
  }

  return (
    <>
      <h1>My Account</h1>
      <Debug data={props} />
      <Button onClick={onLogout}>Logout</Button>
    </>
  );
};

export default Dashboard;
