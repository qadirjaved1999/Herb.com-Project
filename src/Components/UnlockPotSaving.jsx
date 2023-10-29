import React from "react";
import "../Components/UnlockPotSavingStyle.css";
import Card from "./Card";
import productOneImage from "../Assets/Rectangle 3165.png";
import HerbHeadings from "./HerbHeadings";
const UnlockPotSaving = () => {
  return (
    <>
      <div className="unlock-main-div">
        <div className="unlock-content-container">
          <div className="unlockPot_Heading">
            <HerbHeadings
              value="Unlock the Pot of Savings"
              differFont="64px"
              DifferColor="#191919"
              DifferWidth="598px"
            />
          </div>
          <div className="unlock_product_cards ">
            <Card
              productImages={productOneImage}
              categoryValue="Category"
              productName="Samoking Waves"
              discountPrice="$50"
              originalPrice="$100"
              cardDetailPartwithDifferHeight="220px"
              cardwithDifferHeight="495px"
            />
            <Card
              productImages={productOneImage}
              categoryValue="Category"
              productName="Samoking Waves"
              discountPrice="$50"
              originalPrice="$100"
              cardDetailPartwithDifferHeight="220px"
              cardwithDifferHeight="495px"
            />
            <Card
              productImages={productOneImage}
              categoryValue="Category"
              productName="Samoking Waves"
              discountPrice="$50"
              originalPrice="$100"
              cardDetailPartwithDifferHeight="220px"
              cardwithDifferHeight="495px"
            />
            <Card
              productImages={productOneImage}
              categoryValue="Category"
              productName="Samoking Waves"
              discountPrice="$50"
              originalPrice="$100"
              cardDetailPartwithDifferHeight="220px"
              cardwithDifferHeight="495px"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UnlockPotSaving;
