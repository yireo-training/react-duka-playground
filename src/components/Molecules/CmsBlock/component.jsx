import SanitizedHTML from "react-sanitized-html";
import React from "react";

const CmsBlock = props => {
  return (
    <div className="cmsBlock">
      <h4>{props.title}</h4>
      <SanitizedHTML
        html={props.content}
        allowedTags={["b", "i", "em", "strong", "a", "img"]}
      />
    </div>
  );
};

export default CmsBlock;
