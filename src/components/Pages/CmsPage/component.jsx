import React from "react";

const CmsPage = props => {
  return (
    <div className="cmsPage">
      <h1>{props.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: props.content }} />
    </div>
  );
};

export default CmsPage;
