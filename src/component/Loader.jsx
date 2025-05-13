import React from "react";

const Loading = () => {
  const spinnerStyle = {
    width: "60px",
    height: "60px",
    border: "6px solid #ccc",
    borderTop: "6px solid #282c34",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
    margin: "auto",
  };

  const wrapperStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "200px",
  };

  const textStyle = {
    marginTop: "16px",
    fontSize: "1.2rem",
    color: "#555",
  };

  return (
    <div style={wrapperStyle}>
      <div style={spinnerStyle} />
      <div style={textStyle}>Loading...</div>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Loading;
