import React, { useContext } from "react";
import "../Components/MyHeaderStyle.css";
import Logo from "../Assets/Logo.svg";
import { CiSearch } from "react-icons/ci";
import { BsList } from "react-icons/bs";
import Buttons from "./Buttons";
import MyContext from "../Context/HerbContext";
import SideBar from "./SideBar";

const MyHeader = () => {
  const { toggle, setToggle } = useContext(MyContext);
  const handleToggleClick = () => {
    setToggle(true);
  };

  return (
    <>
      <div className="NavBar">
        <nav>
          <div className="HerbLogo">
            <img src={Logo} alt="logo" />
          </div>
          <ul className="nav-items">
            <div className="searchBar">
              <form>
                <input type="text" placeholder="SEARCH" />
              </form>
              <div className="searchIcon">
                <CiSearch className="icon" />
              </div>
            </div>
            <li className="getCardBtn">
              <a href="">
                <Buttons
                  value="get mad card"
                  color="transparent"
                  differWidth="150px"
                  differHeight="36px"
                />
              </a>
            </li>
            <li className="advertisment">
              <a href="">
                <Buttons
                  className="advertismentBtn"
                  value="ADVERTISE WITH HERB"
                  color="transparent"
                  differWidth="207px"
                  differHeight="36px"
                />
              </a>
            </li>
            <li className="subscribe">
              <a href="">
                <Buttons
                  value="Subscribe"
                  color="#DAF98C"
                  textColor="#191919"
                  differWidth="122px"
                  differHeight="36px"
                />
              </a>
            </li>
            <li>
              <CiSearch className="anoherSerach" />
            </li>
            <li>
              <BsList className="NavToggle" onClick={handleToggleClick} />
            </li>
          </ul>
        </nav>
      </div>
      {toggle ? <SideBar /> : null}
    </>
  );
};

export default MyHeader;
