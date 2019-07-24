import React from "react";

const NotFoundPage = (props) => {
  return (
    <div className="NotFoundPage">
        <h1>404 - Page Not Found</h1>
        <p>Unfortunately, the page you were looking for could not be located.</p>
        {props.reason && 
        <pre>{props.reason}</pre>}
    </div>
  );
};

export default NotFoundPage;
