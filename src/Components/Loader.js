import React from "react";
import { logo } from "../images/index";

const Loader = () => {
  return (
    <>
      <div id="preloader">
        <div id="status">
          <img src={logo} alt="" />
          <div className="loader">
            Loading...
            <div className="ball"></div>
            <div className="ball"></div>
            <div className="ball"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;
