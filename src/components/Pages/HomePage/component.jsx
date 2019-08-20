import React from "react";
import CmsBlock from "components/Molecules/CmsBlock";
import CmsPage from "components/Pages/CmsPage";
import "./component.css";

const HomePage = () => {
  return (
    <div className="HomePage">
      <CmsPage id={2} />
      <div className="sidebar">
        <CmsBlock id="sale-left-menu-block" />
      </div>
    </div>
  );
};

export default HomePage;
