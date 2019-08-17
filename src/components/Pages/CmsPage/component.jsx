import React from "react";
import SanitizedHTML from "react-sanitized-html";

const CmsPage = props => {
  return (
    <div className="cmsPage">
      <h1>{props.title}</h1>
      <SanitizedHTML
        html={props.content}
        allowedTags={["b", "i", "em", "strong", "a", "img"]}
      />
    </div>
  );
};

export default CmsPage;
