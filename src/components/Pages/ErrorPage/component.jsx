import React from "react";

const ErrorPage = (props) => {
  let errorMessage = props.error;
  errorMessage = errorMessage.replace("GraphQL error: ", "");

  return (
    <div className="ErrorPage">
        <h1>Whoops, something went wrong</h1>
        {errorMessage && 
        <pre>{errorMessage}</pre>}
    </div>
  );
};

export default ErrorPage;
