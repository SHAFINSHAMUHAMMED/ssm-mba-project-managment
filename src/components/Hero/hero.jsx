import React, { useEffect, useRef, useState } from "react";
import Button1 from "../Buttons/buttonDark";
import Popup from "../Popup_page/popupTwo";
import { usePopup } from "../Hoocks/PopupContext";

import bagIcon from "../../assets/svg/bag-icon.svg" 
import graphIcon2 from "../../assets/svg/graph-icon2.svg"
import rankIcon from "../../assets/svg/rank-icon.svg"
import graphicPattern from "../../assets/svg/GraphicPattern.svg"
import graphicPatternMob from "../../assets/svg/GraphicPattern-mob.svg"
import heroImg from '../../assets/hero.webp'
import logo from "../../assets/svg/logo.svg"


function hero() {

  const { isPopupOpen, togglePopup } = usePopup();

  return (
    <>
      <div className={`hero-section  justify-center items-center bg-backgrounds-wisdomWhite `}>
      <header className="header-section">
          <div className="flex justify-between  sm:ps-0 sm:pe-0 sm:pb-5">
            <img
              className="w-[204px] h-[53px] sm:w-[220px] md:h-[66px]"
              src={logo}
              alt="logo"
            />
            <div className="header-section-contact">
              <a href="tel:+971 50 418 1328">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="43"
                  height="44"
                  viewBox="0 0 43 44"
                  fill="none"
                >
                  <circle
                    cx="21.2823"
                    cy="21.8438"
                    r="20.7986"
                    stroke="#0B434B"
                    stroke-width="0.967378"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M23.8349 31.4928C24.8562 32.1508 26.0719 32.4394 27.28 32.3106C28.4883 32.1813 29.6159 31.6422 30.4751 30.783L31.2249 30.0352C31.5567 29.6995 31.7427 29.2465 31.7427 28.7745C31.7427 28.3025 31.5567 27.8496 31.2249 27.5139L28.0718 24.3807C27.7394 24.0496 27.2893 23.8637 26.8201 23.8637C26.3509 23.8637 25.9009 24.0496 25.5685 24.3807C25.2327 24.7125 24.7798 24.8985 24.3078 24.8985C23.8358 24.8985 23.3829 24.7125 23.0472 24.3807L18.0225 19.3561C17.6902 19.0203 17.5037 18.5669 17.5037 18.0944C17.5037 17.6219 17.6902 17.1686 18.0225 16.8328C18.353 16.5004 18.5386 16.0508 18.5386 15.5821C18.5386 15.1134 18.353 14.6638 18.0225 14.3314L14.9873 11.1783C14.6516 10.8465 14.1987 10.6605 13.7267 10.6605C13.2547 10.6605 12.8017 10.8465 12.466 11.1783L11.7162 11.9281C10.8424 12.7752 10.2856 13.8963 10.1386 15.1044C9.99156 16.3124 10.2633 17.5344 10.9085 18.5663C14.3444 23.6675 18.7337 28.0568 23.8349 31.4928Z"
                    fill="#EE9B4E"
                  />
                </svg>
              </a>
              <div className="">
                <p className="text-[#10351B] text-[15px] font-normal ">
                  Have Questions?
                </p>
                <h3 className="text-[27px] font-bold">
                  {" "}
                  <a href="tel:+971 50 418 1328">+971 50 418 1328</a>
                </h3>
              </div>
            </div>
          </div>
        </header>
        {/* <div className="hero-section-devider"></div> */}
        {/* <img className="hero-global-map" src={globalMap} alt="" /> */}
        <div className="hero-sub">
          <div className="hero-left">
          <h1 className="hero-headline">Master the Art of Execution: <span className="highlight-green"> MBA </span>in <span className="wavy-underline-orange1">Project</span><span className="wavy-underline-orange2"> Management</span> for Future Leaders</h1>

            <p className="">
            Step into the realm of strategic leadership with our MBA in Project Management. This program is tailored for aspiring leaders, equipping you with advanced skills in planning, executing, and overseeing complex projects. Prepare to lead with confidence and drive impactful results in any business landscape
            </p>
            <Button1 duration={1500} containerStyle={{ justifyContent: "center" }} />
            <div className="flex gap-2 items-center justify-center text-[15px] sm:text-[25px] mt-[15px] md:mt-[20px] mb-0 sm:mb-5">
              <a
                onClick={togglePopup}
                // href="\images\SSM MBA.pdf"
                // download
                className="flex gap-2 items-center"
                style={{ cursor: "pointer" }}
              >
                <h3 className="text-[#0B434B]"><u>Download Free Brochure</u></h3>
                <svg
                  className="w-[21px] h-[17px] sm:w-[25px] sm:h-[20px] lg:w-[35px] lg:h-[30px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="30"
                  viewBox="0 0 35 30"
                  fill="none"
                >
                  <path
                    d="M16.2904 23.778C16.3382 23.8281 16.9174 24.3469 17.6278 24.3469C18.3382 24.3469 18.8613 23.8866 18.9724 23.7704L26.1589 16.7046C26.8738 16.0016 26.8738 14.8618 26.1596 14.1588C25.4447 13.4552 24.2848 13.4559 23.5705 14.1582L19.4587 18.2007V1.80026C19.4587 0.806468 18.6385 0 17.6278 0C16.6171 0 15.797 0.806468 15.797 1.80026V18.2L11.6864 14.1582C10.9715 13.4559 9.81228 13.4559 9.09673 14.1582C8.38182 14.8612 8.38182 16.001 9.09673 16.7046L16.2904 23.778Z"
                    fill="#259D4A"
                  />
                  <path
                    d="M34.997 19.8729V19.7256H34.9821C34.9034 19.0505 34.3273 18.5254 33.6208 18.5254C32.9143 18.5254 32.3382 19.0505 32.2601 19.7256H32.2517V19.8056C32.2504 19.8303 32.2439 19.8538 32.2439 19.8792C32.2439 19.9046 32.2504 19.9281 32.2517 19.9529V23.2708C32.2517 25.1035 31.1822 26.6516 29.9158 26.6516H5.33961C4.07318 26.6516 3.00308 25.1035 3.00308 23.2708V19.7256H2.98823C2.90945 19.0505 2.33339 18.5254 1.62687 18.5254C0.92036 18.5254 0.344949 19.0505 0.266161 19.7256H0.257765V19.8024C0.256474 19.8284 0.25 19.8532 0.25 19.8792C0.25 19.9053 0.256474 19.93 0.257765 19.9561V23.2708C0.257765 26.6237 2.53811 29.3517 5.34026 29.3517H29.9164C32.7186 29.3517 34.9983 26.6237 34.9983 23.2708V19.8856C34.9983 19.8837 34.9989 19.8811 34.9989 19.8792C34.9989 19.8773 34.997 19.8748 34.997 19.8729Z"
                    fill="#259D4A"
                  />
                </svg>
              </a>
            </div>
          </div>
          <img className="hero-right-img" src={heroImg} alt="" />
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
      {isPopupOpen && <Popup closePopup={togglePopup} />}
    </>
  );
}

export default hero;
