import React from "react";
import "../Components/HerbHeadingsStyle.css";
const HerbHeadings = ({ value, differFont, DifferColor, DifferWidth }) => {
  const HeadingStyle = {
    width: DifferWidth || "963px",
    color: DifferColor || "#DAF98C",
    fontFamily: "myFont",
    fontSize: differFont || "96px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "110%",
  };
  return (
    <>
      <div className="HerbWeedHeading">
        <h1 style={HeadingStyle}>{value}</h1>
      </div>
    </>
  );
};

export default HerbHeadings;
