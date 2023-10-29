import React from "react";
import "../Components/WeedProductsSliderStyle.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import weedProduct1 from "../Assets/Ellipse 56 (1).svg";
import weedProduct2 from "../Assets/Ellipse 56 (2).svg";
import weedProduct3 from "../Assets/Ellipse 56 (3).svg";
import weedProduct4 from "../Assets/Ellipse 56 (4).svg";
import weedProduct5 from "../Assets/Ellipse 56.svg";
import HerbHeadings from "./HerbHeadings";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";

let slidesToShow = 5;

function SampleNextArrow(props) {
  console.log("====>>>>", props);
  const { className, onClick, slideCount, currentSlide } = props;
  return (
    <>
      {currentSlide !== slideCount - slidesToShow && (
        <div className={className} onClick={onClick}>
          <MdArrowForwardIos
            style={{
              color: "white",
              fontSize: "50px",
              height: "36px",
              width: "50px",
            }}
          />
        </div>
      )}
    </>
  );
}

function SamplePrevArrow(props) {
  console.log("====>>>>", props);
  const { className, onClick, currentSlide } = props;
  return (
    <>
      {currentSlide !== 0 && (
        <div className={className} onClick={onClick}>
          <MdArrowBackIosNew
            style={{
              color: "white",
              fontSize: "50px",
              height: "36px",
              width: "50px",
            }}
          />
        </div>
      )}
    </>
  );
}

const WeedProductsSlider = () => {
  var settings = {
    dots: false,
    slidesToShow: slidesToShow,
    slidesToScroll: 5,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1276,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          dots: false,
        },
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="weed-product-slider">
      <HerbHeadings
        value="Weed deals by products"
        differFont="40px"
        DifferColor="#FCC"
        DifferWidth="598px"
      />
      <div className="weed_products_slides_container">
        <Slider {...settings}>
          <div>
            <div className="weedslide_content">
              <img src={weedProduct1} alt="" />
              <a href="" className="weed_deal_slider_anchar">
                flower
              </a>
            </div>
          </div>
          <div>
            <div className="weedslide_content">
              <img src={weedProduct2} alt="" />
              <a href="" className="weed_deal_slider_anchar">
                Concentrates
              </a>
            </div>
          </div>
          <div>
            <div className="weedslide_content">
              <img src={weedProduct3} alt="" />
              <a href="" className="weed_deal_slider_anchar">
                Edibles
              </a>
            </div>
          </div>
          <div>
            <div className="weedslide_content">
              <img src={weedProduct4} alt="" />
              <a href="" className="weed_deal_slider_anchar">
                Cartridge
              </a>
            </div>
          </div>
          <div>
            <div className="weedslide_content">
              <img src={weedProduct5} alt="" />
              <a href="" className="weed_deal_slider_anchar">
                Pre-rolls
              </a>
            </div>
          </div>
          <div>
            <div className="weedslide_content">
              <img src={weedProduct5} alt="" />
              <a href="" className="weed_deal_slider_anchar">
                flower
              </a>
            </div>
          </div>
          <div>
            <div className="weedslide_content">
              <img src={weedProduct1} alt="" />
              <a href="" className="weed_deal_slider_anchar">
                Pre-rolls
              </a>
            </div>
          </div>
          <div>
            <div className="weedslide_content">
              <img src={weedProduct4} alt="" />
              <a href="" className="weed_deal_slider_anchar">
                flower
              </a>
            </div>
          </div>
          <div>
            <div className="weedslide_content">
              <img src={weedProduct3} alt="" />
              <a href="" className="weed_deal_slider_anchar">
                flower
              </a>
            </div>
          </div>
          <div>
            <div className="weedslide_content">
              <img src={weedProduct2} alt="" />
              <a href="" className="weed_deal_slider_anchar">
                flower
              </a>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default WeedProductsSlider;
