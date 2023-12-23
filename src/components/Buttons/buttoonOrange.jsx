import React from "react";
import { Link, Element } from "react-scroll";

function buttoonOrange() {
 
  return (
    <div id="NewRootRoot" className="flex  justify-center w-[100%]">
      <Link
        to="contactForm"
        // spy={true}
        smooth={true}
        duration={2000}
        delay={100}
        className="light-effect-button button bg-[#EE9B4E] w-[90%] sm:w-[539px] rounded-[56px] sm:rounded-[91px] pt-[25px] pb-[25px] text-[15px] sm:text-[23px] font-bold"
      >
        <span>Claim Your Free Consultation Now</span>
      </Link>
    </div>
  );
}

export default buttoonOrange;
