import React from "react";
import "../Components/CardStyle.css";
import Buttons from "./Buttons";
const Card = ({
  categoryValue,
  productName,
  discountPrice,
  originalPrice,
  productImages,
  cardwithDifferWidth,
  imagewithDifferWidth,
  imagewithDifferHeight,
  cardwithDifferHeight,
  cardDetailPartwithDifferHeight,
}) => {
  const cardStyle = {
    width: cardwithDifferWidth || "275px",
    height: cardwithDifferHeight || "275px",
  };
  const imagedStyle = {
    maxWidth: imagewithDifferWidth || "275px",
    height: imagewithDifferHeight || "275px",
  };
  const cardDetailPartStyle = {
    // width: imagewithDifferWidth || "275px",
    height: cardDetailPartwithDifferHeight || "220px",
  };
  return (
    <>
      <div className="card" style={cardStyle}>
        <div className="image_part">
          <img src={productImages} alt="" style={imagedStyle} />
        </div>
        <div className="detail_part" style={cardDetailPartStyle}>
          <p className="product-category">{categoryValue}</p>
          <h3 className="product-name">{productName}</h3>
          <div className="amountOfProduct">
            <span className="withdiscount">{discountPrice}</span>
            <span className="original-price">
              <strike>{originalPrice}</strike>
            </span>
          </div>
          <Buttons
            value="view deal"
            color="#DAF98C"
            textColor="#191919"
            differWidth="144px"
            differHeight="36px"
            differAlign="self-start"
            differFont="14px"
          />
        </div>
      </div>
    </>
  );
};

export default Card;
