import React from "react";
import "./Error.css";
import { Link, useLocation } from "react-router-dom";

const Error = () => {
  const location = useLocation();
  const { error } = location.state || {};

  return (
    <div className="error-page">
      <h1>Something went wrong</h1>
      <p>{error?.message || "An unexpected error occurred."}</p>
      <Link to="/" className="error-home">
        Go Back to Home Page
      </Link>
    </div>
  );
};

export default Error;
