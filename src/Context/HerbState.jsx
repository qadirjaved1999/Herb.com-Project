import React, { useState } from "react";
import MyContext from "./HerbContext";

const AllHerbStates = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const [slide, setSlide] = useState(0);
  return (
    <MyContext.Provider
      value={{
        toggle,
        setToggle,
        slide,
        setSlide,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
export default AllHerbStates;
