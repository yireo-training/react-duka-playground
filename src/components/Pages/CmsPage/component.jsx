import React from "react";
import SanitizedHTML from "react-sanitized-html";

const CmsPage = ({ title, content }) => {
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
    <div className="cmsPage">
      <h1>{title}</h1>
      <SanitizedHTML
        html={content}
        allowedTags={safeTags}
        allowedAttributes={safeAtrr}
      />
    </div>
  );
};

export default CmsPage;
