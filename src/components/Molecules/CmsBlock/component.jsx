import SanitizedHTML from "react-sanitized-html";
import React from "react";

const CmsBlock = props => {
  const safeTags = [
    "div",
    "span",
    "p",
    "b",
    "i",
    "em",
    "strong",
    "ul",
    "ol",
    "li",
    "a",
    "img"
  ];

  const safeAtrr = {
    a: ["href"],
    div: ["class"],
    img: ["src", "alt"]
  };

  return (
    <div className="cmsBlock">
      <h4>{props.title}</h4>
      <SanitizedHTML
        html={props.content}
        allowedTags={safeTags}
        allowedAttributes={safeAtrr}
      />
    </div>
  );
};

export default CmsBlock;
