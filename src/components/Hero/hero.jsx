import React, { useEffect, useRef, useState } from "react";
import Button1 from "../Buttons/buttonDark";

import bagIcon from "../../assets/svg/bag-icon.svg" 
import graphIcon2 from "../../assets/svg/graph-icon2.svg"
import rankIcon from "../../assets/svg/rank-icon.svg"
import graphicPattern from "../../assets/svg/GraphicPattern.svg"
import graphicPatternMob from "../../assets/svg/GraphicPattern-mob.svg"


function hero() {
  const el = useRef(null);

  return (
    <>
      <div className={`hero-section  justify-center items-center bg-backgrounds-wisdomWhite `}>
        <div className="hero-section-devider"></div>
        {/* <img className="hero-global-map" src={globalMap} alt="" /> */}
        <div className="hero-sub">
          <div className="hero-left">
              <h1 className="hero-headline">Lead the Global Market: <span className="highlight-green">MBA</span> in <span className="wavy-underline-orange1">Supply </span><span className="wavy-underline-orange2">Chain</span> & <span className="wavy-underline">Logistics</span></h1>
            <p className="">
              Don't just dream of success; make it your reality! Claim your free
              career consultation today, setting the wheels in motion for the
              extraordinary career and life you’ve always aspired to!
            </p>
            <Button1 duration={1500} containerStyle={{ justifyContent: "center" }} />
            <div className="flex gap-2 items-center justify-center text-[15px] sm:text-[25px] mt-[15px] md:mt-[20px] mb-0 sm:mb-5">
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-icons-main">
              <img
                className="bag-icon animated-icon-1"
                src={bagIcon}
                alt="bag-icon"
              />
              <img
                className="graph-icon2 animated-icon-2"
                src={graphIcon2}
                alt=""
              />
              <img
                className="rank-icon animated-icon-3"
                src={rankIcon}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <img
        className={`graphic-devider hidden sm:block `}
        src={graphicPattern}
        alt=""
      />
      <img
        className={`graphic-devider block sm:hidden`}
        src={graphicPatternMob}
        alt=""
      />
    </>
  );
}

export default hero;
