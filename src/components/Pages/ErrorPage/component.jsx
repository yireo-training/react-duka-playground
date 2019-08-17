import React from "react";

const ErrorPage = (props) => {
  return (
    <div className="ErrorPage">
        <h1>Whoops, something went wrong</h1>
        <p>Something went wrong with our code.</p>
        {props.error && 
        <pre>{props.error}</pre>}
    </div>
  );
};

export default ErrorPage;
