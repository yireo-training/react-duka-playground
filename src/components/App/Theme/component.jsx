import React from "react"
import { ContainerBelowContent } from "utils/teleporter"
import Foobar from "./Foobar";

const Theme = () => {
  return (
    <>
      <ContainerBelowContent.Source><Foobar /></ContainerBelowContent.Source>
    </>
  );
}

export default Theme;
