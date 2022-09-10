import React from "react";
import { Spinner } from "react-bootstrap";
import "../home.css";
function Loader() {
  return (
    <div className="Loading">
      <Spinner
        animation="border"
        role="status"
        style={{
          heigth: "100px",
          weight: "100px",
          margin: "auto",
          display: "block",
        }}
      ></Spinner>
    </div>
  );
}

export default Loader;
