import React from "react";
import "./Debug.css";
import JSONPretty from 'react-json-pretty';

const Debug = props => {
  return <JSONPretty id="json-pretty" data={props.data}></JSONPretty>
  ;
};

export default Debug;