import React from "react";
import "./Error.css";

export default function ErrorPage() {
  return (
    <div className="error-container">
      <div className="error-content">
        <img
          src="/error.jpg" // make sure your image is in /public
          alt="404 Error"
          className="error-image"
        />
        <a href="/home" className="back-home">
          Back to Home
        </a>
      </div>
    </div>
  );
}
