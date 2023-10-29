import React from "react";
import "../Components/DispensaryDealsStyle.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HerbHeadings from "./HerbHeadings";
import BuyOneGetFreeTopImage from "../Assets/topbuyget.png";

const DispensaryDeals = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="MainContainerOfDispensary">
      <HerbHeadings
        value="Browse dispensary deals"
        differFont="40px"
        DifferColor="#FCC"
        DifferWidth="598px"
      />
      <div className="dispensarySlider">
        <Slider {...settings} dotsClass="slick-dots line-indicator">
          <div className="first_slide_of_dispensarySlider">
            <div className="first_image">
              <div className="firstPictureContentDiv">
                <div className="content">
                  <p className="edie-parker">edie-parker.com</p>
                  <h2 className="BuyOneGetTwo">buy 1 get 2</h2>
                  <p className="Herb_2023">use code Herb2023</p>
                </div>
                <div className="innerContentImg">
                  <img src={BuyOneGetFreeTopImage} alt="" />
                </div>
              </div>
            </div>
            <div className="second_image">
              <div className="secondPictureContentDiv">
                <div className="pax-com">
                  <p>pax.com</p>
                </div>
                <div className="off_wide">
                  <h4>20% OFF STORE-WIDE!</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="first_slide_of_dispensarySlider">
            <div className="first_image">
              <div className="firstPictureContentDiv">
                <div className="content">
                  <p className="edie-parker">edie-parker.com</p>
                  <h2 className="BuyOneGetTwo">buy 1 get 2</h2>
                  <p className="Herb_2023">use code Herb2023</p>
                </div>
                <div className="innerContentImg">
                  <img src={BuyOneGetFreeTopImage} alt="" />
                </div>
              </div>
            </div>
            <div className="second_image">
              <div className="secondPictureContentDiv">
                <div className="pax-com">
                  <p>pax.com</p>
                </div>
                <div className="off_wide">
                  <h4>20% OFF STORE-WIDE!</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="first_slide_of_dispensarySlider">
            <div className="first_image">
              <div className="firstPictureContentDiv">
                <div className="content">
                  <p className="edie-parker">edie-parker.com</p>
                  <h2 className="BuyOneGetTwo">buy 1 get 2</h2>
                  <p className="Herb_2023">use code Herb2023</p>
                </div>
                <div className="innerContentImg">
                  <img src={BuyOneGetFreeTopImage} alt="" />
                </div>
              </div>
            </div>
            <div className="second_image">
              <div className="secondPictureContentDiv">
                <div className="pax-com">
                  <p>pax.com</p>
                </div>
                <div className="off_wide">
                  <h4>20% OFF STORE-WIDE!</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="first_slide_of_dispensarySlider">
            <div className="first_image">
              <div className="firstPictureContentDiv">
                <div className="content">
                  <p className="edie-parker">edie-parker.com</p>
                  <h2 className="BuyOneGetTwo">buy 1 get 2</h2>
                  <p className="Herb_2023">use code Herb2023</p>
                </div>
                <div className="innerContentImg">
                  <img src={BuyOneGetFreeTopImage} alt="" />
                </div>
              </div>
            </div>
            <div className="second_image">
              <div className="secondPictureContentDiv">
                <div className="pax-com">
                  <p>pax.com</p>
                </div>
                <div className="off_wide">
                  <h4>20% OFF STORE-WIDE!</h4>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default DispensaryDeals;
