import React from "react";
import "../Components/HerbBtnsStyle.css";
import Buttons from "./Buttons";

const HerbBtns = () => {
  return (
    <>
      <div className="HomeMain">
        <div className="HerbHomeBtns" style={{ "margin-bottom": "70px" }}>
          <ul className="HomeBtns">
            <li className="NewsBtn">
              <Buttons
                value="NEWS"
                color="#2E2E2E"
                differentBorder="2px solid #DAF98C"
                differWidth="84px"
              />
            </li>
            <li className="HOW-TOS">
              <Buttons
                value="HOW-TOS"
                color="#2E2E2E"
                differentBorder="2px solid #DAF98C"
                differWidth="113px"
              />
            </li>
            <li className="ProductBtn">
              <Buttons
                value="products"
                color="#2E2E2E"
                differentBorder="2px solid #DAF98C"
                differWidth="121px"
              />
            </li>
            <li className="DealsBtn">
              <Buttons
                value="deals"
                color="#2E2E2E"
                differentBorder="2px solid #DAF98C"
                differWidth="88px"
              />
            </li>
            <li className="GuidBtn">
              <Buttons
                value="guides"
                color="#2E2E2E"
                differentBorder="2px solid #DAF98C"
                differWidth="95px"
              />
            </li>
            <li className="strainsBtn">
              <Buttons
                value="strains"
                color="#2E2E2E"
                differentBorder="2px solid #DAF98C"
                differWidth="104px"
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HerbBtns;
