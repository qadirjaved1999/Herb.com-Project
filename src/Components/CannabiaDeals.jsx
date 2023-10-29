import React from "react";
import "../Components/CannabiaDealsStyle.css";
import { CiSearch } from "react-icons/ci";
import Card from "./Card";
import productOneImage from "../Assets/Rectangle 3165 (1).png";
import productTwoImage from "../Assets/Rectangle 3165 (2).png";
import productThreeImage from "../Assets/Rectangle 3165 (3).png";
import productFourImage from "../Assets/Rectangle 3165 (4).png";
import productFiveImage from "../Assets/Rectangle 3165 (5).png";
import productSixImage from "../Assets/Rectangle 3165 (6).png";
import productSevenImage from "../Assets/Rectangle 3165 (7).png";
import productEightImage from "../Assets/Rectangle 3165 (8).png";
import HerbHeadings from "./HerbHeadings";
import Buttons from "./Buttons";
const CannabiaDeals = () => {
  return (
    <>
      <div className="cannabiaContainer">
        <div className="cannabia_content_container">
          <div className="headingAndInput">
            <HerbHeadings
              value="Cannabis Deals Galore"
              differFont="64px"
              DifferColor="#DAF98C"
              DifferWidth="598px"
            />
            <div className="searchBar">
              <form>
                <input type="text" placeholder="SEARCH" />
              </form>
              <div className="searchIcon">
                <CiSearch className="icon" />
              </div>
            </div>
          </div>
          <div className="allProducts">
            <Card
              productImages={productOneImage}
              categoryValue="Category"
              productName="Samoking Waves"
              discountPrice="$50"
              originalPrice="$100"
              cardwithDifferWidth="372px"
              cardwithDifferHeight="575px"
              imagewithDifferWidth="372px"
              imagewithDifferHeight="372px"
              cardDetailPartwithDifferHeight="385px"
            />
            <Card
              productImages={productTwoImage}
              categoryValue="Category"
              productName="Samoking Waves"
              discountPrice="$50"
              originalPrice="$100"
              cardwithDifferWidth="372px"
              cardwithDifferHeight="575px"
              imagewithDifferWidth="372px"
              imagewithDifferHeight="372px"
              cardDetailPartwithDifferHeight="385px"
            />
            <Card
              productImages={productThreeImage}
              categoryValue="Category"
              productName="Samoking Waves"
              discountPrice="$50"
              originalPrice="$100"
              cardwithDifferWidth="372px"
              cardwithDifferHeight="575px"
              imagewithDifferWidth="372px"
              imagewithDifferHeight="372px"
              cardDetailPartwithDifferHeight="385px"
            />
            <Card
              productImages={productFourImage}
              categoryValue="Category"
              productName="Samoking Waves"
              discountPrice="$50"
              originalPrice="$100"
              cardwithDifferWidth="372px"
              cardwithDifferHeight="575px"
              imagewithDifferWidth="372px"
              imagewithDifferHeight="372px"
              cardDetailPartwithDifferHeight="385px"
            />
            <Card
              productImages={productFiveImage}
              categoryValue="Category"
              productName="Samoking Waves"
              discountPrice="$50"
              originalPrice="$100"
              cardwithDifferWidth="372px"
              cardwithDifferHeight="575px"
              imagewithDifferWidth="372px"
              imagewithDifferHeight="372px"
              cardDetailPartwithDifferHeight="385px"
            />
            <Card
              productImages={productSixImage}
              categoryValue="Category"
              productName="Samoking Waves"
              discountPrice="$50"
              originalPrice="$100"
              cardwithDifferWidth="372px"
              cardwithDifferHeight="575px"
              imagewithDifferWidth="372px"
              imagewithDifferHeight="372px"
              cardDetailPartwithDifferHeight="385px"
            />
            <Card
              productImages={productSevenImage}
              categoryValue="Category"
              productName="Samoking Waves"
              discountPrice="$50"
              originalPrice="$100"
              cardwithDifferWidth="372px"
              cardwithDifferHeight="575px"
              imagewithDifferWidth="372px"
              imagewithDifferHeight="372px"
              cardDetailPartwithDifferHeight="385px"
            />
            <Card
              productImages={productEightImage}
              categoryValue="Category"
              productName="Samoking Waves"
              discountPrice="$50"
              originalPrice="$100"
              cardwithDifferWidth="372px"
              cardwithDifferHeight="575px"
              imagewithDifferWidth="372px"
              imagewithDifferHeight="372px"
              cardDetailPartwithDifferHeight="385px"
            />
            <Card
              productImages={productOneImage}
              categoryValue="Category"
              productName="Samoking Waves"
              discountPrice="$50"
              originalPrice="$100"
              cardwithDifferWidth="372px"
              cardwithDifferHeight="575px"
              imagewithDifferWidth="372px"
              imagewithDifferHeight="372px"
              cardDetailPartwithDifferHeight="385px"
            />
          </div>
        </div>

        <div className="read-more">
          <Buttons
            value="see more"
            color="#2E2E2E"
            differentBorder="1px solid #191919"
            // differWidth="84px"
            differFont="14px"
          />
        </div>
      </div>
    </>
  );
};

export default CannabiaDeals;
