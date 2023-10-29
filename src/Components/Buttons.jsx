import React from "react";

const Buttons = ({
  color,
  value,
  textColor,
  differentBorder,
  differWidth,
  differHeight,
  differAlign,
  differFont,
}) => {
  const buttonStyle = {
    width: differWidth || "150px",
    height: differHeight || "36px",
    boxSizing: "border-box",
    appearance: "none",
    backgroundColor: color,
    border: differentBorder || "2px solid #fff",
    borderRadius: "21px",
    color: textColor || "#fff",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignSelf: differAlign || "center",
    fontSize: differFont || "12px",
    fontWeight: 700,
    lineHeight: "16px",
    letterSpacing: "0.28px",
    textTransform: "uppercase",
    padding: "10px 20px",
    textDecoration: "none",
    textAlign: "center",
    fontFamily: "Inter",
  };
  return (
    <>
      <button style={buttonStyle} className="mainBtn">
        <span className="for-full-screen">{value}</span>
        <span className="for-mobile">ADVERTISE</span>
      </button>
    </>
  );
};

export default Buttons;
