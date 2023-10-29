import React from "react";
import "../Components/HerbDealsSlidersStyle.css";
import Buttons from "./Buttons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EllipseOne from "../Assets/EllipseOne.png";
import EllipseTwo from "../Assets/EllipseTwo.png";
import EllipseThree from "../Assets/EllipseThree.png";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
let slidesToShow = 3;
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

const HerbDealsSliders = () => {
  const settings = {
    dots: false,
    slidesToShow: slidesToShow,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
        },
      },
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  const slideImages = [
    {
      img: EllipseOne,
      caption: "Slide 1",
      decription: "Get 20% off frrom Pax",
    },
    {
      img: EllipseTwo,
      caption: "Slide 1",
      decription: "Buy 1 Get 2 from Brand Name",
    },
    {
      img: EllipseThree,
      caption: "Slide 1",
      decription: "Special deal from Brand Name",
    },
    {
      img: EllipseThree,
      caption: "Slide 1",
      decription: "Get 20% off frrom Pax",
    },
    {
      img: EllipseTwo,
      caption: "Slide 1",
      decription: "Special deal from Brand Name",
    },
    {
      img: EllipseOne,
      caption: "Slide 1",
      decription: "Buy 1 Get 2 from Brand Name",
    },
  ];
  return (
    <>
      <div className="MainDivOfSlider">
        <div className="carousel-images">
          <Slider {...settings}>
            {slideImages.map((item, index) => {
              return (
                <div className="SliderContent">
                  <div className="slidePictureofHerbDeals">
                    <img
                      src={item.img}
                      alt={item.caption}
                      key={index}
                      className="slide-image"
                    />
                  </div>
                  <div className="herbslidercontent">
                    <h1 className="SlideDescription">{item.decription}</h1>
                    <div className="slideBtnDiv">
                      <Buttons
                        value="view deal"
                        color="#2E2E2E"
                        differentBorder="2px solid #fff"
                        differWidth="121px"
                        differHeight="36px"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default HerbDealsSliders;
