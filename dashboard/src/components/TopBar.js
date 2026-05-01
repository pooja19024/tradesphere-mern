import React from "react";
import Menu from "./Menu";

// TopBar component represents the top navigation section of dashboard
const TopBar = () => {
  return (
    <div className="topbar-container">

       {/*  MARKET INDICES SECTION  */}
      <div className="indices-container">

         {/* NIFTY Index Display */}
        <div className="nifty">
          <p className="index">NIFTY 50</p>

           {/* Static value (can be replaced with API data) */}
          <p className="index-points">{100.2} </p>

          {/* Percentage change (currently empty) */}
          <p className="percent"> </p>
        </div>

         {/* SENSEX Index Display */}
        <div className="sensex">
          <p className="index">SENSEX</p>


          {/* Static value (can be dynamic later) */}
          <p className="index-points">{100.2}</p>

          {/* Percentage change (currently empty) */}
          <p className="percent"></p>
        </div>
      </div>

      <Menu />
    </div>
  );
};

export default TopBar;