import React from "react";
import "../Components/StrainTypeDealsStyle.css";
import INDICA from "../Assets/Ð¡Ð»Ð¾Ð¹_1 (1).svg";
import SATIVA from "../Assets/Ð¡Ð»Ð¾Ð¹_1 (2).svg";
import HYBRID from "../Assets/Ð¡Ð»Ð¾Ð¹_1.svg";
import HerbHeadings from "./HerbHeadings";

const StrainTypeDeals = () => {
  return (
    <>
      <div className="strain_container">
        <HerbHeadings
          value="Deals by strain type"
          differFont="40px"
          DifferColor="#FCC"
          DifferWidth="598px"
        />
        <div className="strain-type-main-div">
          <div className="strainTypeOne">
            <img src={INDICA} alt="INDICA" className="IndicaImage" />
            <a href="" className="IndicaBtn">
              INDICA
            </a>
          </div>
          <div className="strainTypeTwo">
            <img src={SATIVA} alt="SATIVA" className="IndicaImage" />
            <a href="" className="IndicaBtn">
              Sativa
            </a>
          </div>
          <div className="strainTypeThree">
            <img src={HYBRID} alt="HYBRID" className="IndicaImage" />
            <a href="" className="IndicaBtn">
              Hybrid
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default StrainTypeDeals;
