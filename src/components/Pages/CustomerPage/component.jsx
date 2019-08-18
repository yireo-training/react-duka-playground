import React from "react";
import CustomerMenu from "components/Molecules/CustomerMenu";
import "./component.css";

const CustomerPage = props => {
  const ContentComponent = props.content;
  return (
    <div className="CustomerPage">
      <div className="sidebar">
        <CustomerMenu />
      </div>
      <div className="content">
        <ContentComponent {...props} />
      </div>
    </div>
  );
};

export default CustomerPage;
