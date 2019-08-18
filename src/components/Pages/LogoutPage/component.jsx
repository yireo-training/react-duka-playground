import React, { useEffect } from "react";
import Loading from "components/Utils/Loading";

const LogoutPage = props => {
  useEffect(() => {
    props.logoutCustomer();
  }, [props]);

  return <Loading />;
};

export default LogoutPage;
