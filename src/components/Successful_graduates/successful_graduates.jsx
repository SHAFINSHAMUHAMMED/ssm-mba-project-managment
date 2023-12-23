import React from "react";
import Marquee from "react-fast-marquee";
import ButtonDark from "../Buttons/buttonDark";
import Claim_description from "../Description/claim_description";

import graduates from "../../assets/graduates.webp";
import graduatesMob from "../../assets/graduates-mobile.webp";
import graduates1 from "../../assets/graduate-1.webp";
import graduates2 from "../../assets/graduate-2.webp";
import graduates3 from "../../assets/graduate-3.webp";
import graduates4 from "../../assets/graduate-4.webp";
import graduates5 from "../../assets/graduate-5.webp";
import graduates6 from "../../assets/graduate-6.webp";
import graduates7 from "../../assets/graduate-7.webp";


function successful_graduates() {
  return (
    <div className="successful-graduates-main">
      <div className="successful-graduates-sub-1">
        <h1>
          Join{" "}
          <span className="wavy-underline">Over 4000+</span> <span className="wavy-underline"> Successful</span>{" "}
          <span className="wavy-underline">Graduates</span> & Take Charge Of
          Your Career
        </h1>
        <img className="hidden sm:block" src={graduates} alt="" />
        <img className="block sm:hidden" src={graduatesMob}alt="" />
      </div>
      <div className=" successfull-graduate-pattern-1"></div>
        <div className=" successfull-graduate-pattern-2"></div>

      <div className="successful-graduates-carousel">
        <Marquee speed={70} direction="right">
        <div className="successful-graduates-carousel-1 ">
            <img className="gradute-image" src={graduates1} alt="" />
            <img className="gradute-image" src={graduates2} alt="" />
            <img className="gradute-image" src={graduates3} alt="" />
            <img className="gradute-image" src={graduates4} alt="" />
            <img className="gradute-image" src={graduates5} alt="" />
            <img className="gradute-image" src={graduates6} alt="" />
            <img className="gradute-image" src={graduates7} alt="" />
            <img className="gradute-image" src={graduates3} alt="" />

        </div>
        </Marquee>
        <Marquee speed={70} direction="left">
        <div className="successful-graduates-carousel-2 ">
            <img className="gradute-image" src={graduates2} alt="" />
            <img className="gradute-image" src={graduates4} alt="" />
            <img className="gradute-image" src={graduates1} alt="" />
            <img className="gradute-image" src={graduates7} alt="" />
            <img className="gradute-image" src={graduates6} alt="" />
            <img className="gradute-image" src={graduates3} alt="" />
            <img className="gradute-image" src={graduates5}alt="" />
            <img className="gradute-image" src={graduates1} alt="" />
        </div>
        </Marquee>
      </div>
      <ButtonDark duration={2400} containerStyle={{ justifyContent: 'center' }}/>
      <Claim_description color='rgba(11, 67, 75, 0.79)'/>
    </div>
  );
}

export default successful_graduates;
