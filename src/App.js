import React from "react";
import "./App.css";
import MyHeader from "./Components/MyHeader";
import AllHerbStates from "./Context/HerbState";
import HerbBtns from "./Components/HerbBtns";
import HerbHeadings from "./Components/HerbHeadings";
import HerbDealsSliders from "./Components/HerbDealsSliders";
import HighSavingPriceSlider from "./Components/HighSavingPriceSlider";
import WeedProductsSlider from "./Components/WeedProductsSlider";
import StrainTypeDeals from "./Components/StrainTypeDeals";
import DispensaryDeals from "./Components/DispensaryDeals";
import UnlockPotSaving from "./Components/UnlockPotSaving";
import CannabiaDeals from "./Components/CannabiaDeals";
// import Card from "./Components/Card";

const App = () => {
  return (
    <>
      <AllHerbStates>
        <MyHeader />
        <div className="MyHomePage">
          <HerbBtns />
          <HerbHeadings
            value="HERB Best Weed Deals of the month"
            className="HerbMainHeading"
          />
          <HerbDealsSliders />
          <HighSavingPriceSlider />
          <WeedProductsSlider />
          <StrainTypeDeals />
          <DispensaryDeals />
        </div>
        <UnlockPotSaving />
        <CannabiaDeals />
      </AllHerbStates>
    </>
  );
};

export default App;
