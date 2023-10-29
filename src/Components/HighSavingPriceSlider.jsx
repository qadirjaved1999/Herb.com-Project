import React from "react";
import "../Components/HighSavingPriceSliderStyle.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainFrame from "../Assets/MainFrame.png";
import HerbHeadings from "./HerbHeadings";

const HighSavingPriceSlider = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="HighSavingContainer">
        <HerbHeadings
          value="High Savings, Low Prices"
          differFont="64px"
          DifferColor="#FCC"
          DifferWidth="598px"
        />
        <div className="High-Saving-Banner">
          <Slider {...settings} dotsClass="slick-dots line-indicator">
            <div className="images">
              <img src={MainFrame} alt="Main Pick" className="Main-frame" />
            </div>
            <div className="images">
              <img src={MainFrame} alt="Main Pick" className="Main-frame" />
            </div>
            <div className="images">
              <img src={MainFrame} alt="Main Pick" className="Main-frame" />
            </div>
            <div className="images">
              <img src={MainFrame} alt="Main Pick" className="Main-frame" />
            </div>
            <div className="images">
              <img src={MainFrame} alt="Main Pick" className="Main-frame" />
            </div>
            <div className="images">
              <img src={MainFrame} alt="Main Pick" className="Main-frame" />
            </div>
            <div className="images">
              <img src={MainFrame} alt="Main Pick" className="Main-frame" />
            </div>
            <div className="images">
              <img src={MainFrame} alt="Main Pick" className="Main-frame" />
            </div>
            <div className="images">
              <img src={MainFrame} alt="Main Pick" className="Main-frame" />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default HighSavingPriceSlider;
