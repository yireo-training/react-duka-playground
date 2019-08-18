import React, { useEffect } from "react";
import Loading from "components/Utils/Loading";

const CustomerAccountLogout = props => {
  useEffect(() => {
    props.logoutCustomer();
  }, [props]);

  return <Loading />;
};

export default CustomerAccountLogout;
