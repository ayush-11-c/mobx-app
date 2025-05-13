import React from "react";

const Loading = () => {
  const spinnerStyle = {
    width: "50px",
    height: "50px",
    border: "4px solid rgba(0, 0, 0, 0.1)",
    borderLeftColor: "#4285f4",
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
    padding: "20px",
  };

  const textStyle = {
    marginTop: "20px",
    fontSize: "1rem",
    color: "#666",
    fontWeight: "500",
    fontFamily: "'Segoe UI', Roboto, sans-serif",
  };

  const dotsAnimation = {
    display: "inline-block",
    animation: "bounce 1.4s infinite ease-in-out both",
  };

  const dotStyles = [
    { animationDelay: "-0.32s" },
    { animationDelay: "-0.16s" },
    {},
  ];

  return (
    <div style={wrapperStyle}>
      <div style={spinnerStyle} />
      <div style={textStyle}>
        Loading
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            style={{
              ...dotsAnimation,
              ...dotStyles[i],
              fontSize: "1.5rem",
              marginLeft: "2px",
            }}
          >
            .
          </span>
        ))}
      </div>
      <style>
        {`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
          @keyframes bounce {
            0%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-10px); }
          }
        `}
      </style>
    </div>
  );
};

export default Loading;
