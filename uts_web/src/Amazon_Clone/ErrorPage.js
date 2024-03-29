import React from "react";
import { NavLink } from "react-router-dom";

function ErrorPage() {
  return (
    <>
      <span style={{ fontSize: 100 }} className="d-flex justify-content-center">
        <b>404</b>
      </span>
      <h3 style={{fontSize:40}} className="text-danger d-flex justify-content-center">Page Error</h3>
      <p className="d-flex justify-content-center">page you are looking for does not exist</p>
      <div className="container my-5">
        <div className="row d-flex justify-content-center">
          <NavLink to="/">
            <button className="btn btn-danger">GoTo Home</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default ErrorPage;
