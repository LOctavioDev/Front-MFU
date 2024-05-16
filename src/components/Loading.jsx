import React from "react";

const Loading = ({ text }) => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <div className="title-pa">
        <h1>{text || "Cargando..."}</h1>
      </div>
    </div>
  );
};

export default Loading;
