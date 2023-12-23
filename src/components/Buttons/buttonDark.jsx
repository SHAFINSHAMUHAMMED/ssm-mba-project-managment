import React from "react";
import { Link, Element } from "react-scroll";

function buttonDark({ containerStyle, duration }) {

  return (
    <div
      id="NewRootRoot"
      className="flex flex-row w-full"
      style={containerStyle}
    >
      {/* <button onClick={handleClick} className="light-effect-button bg-[#0b434b] w-[90%] sm:w-[539px]  rounded-[56px] sm:rounded-[91px] pt-[25px] pb-[25px] text-[15px] md:text-[16px] xl:text-[23px] font-bold">
      <span>
        Claim Your Free Consultation Now
        </span>
    </button> */}
      <Link
        to="contactForm"
        // spy={true}
        smooth={true}
        duration={duration}
        delay={200}
        className="light-effect-button button bg-[#0b434b] w-[95%] sm:w-[539px]  rounded-[56px] sm:rounded-[91px] pt-[25px] pb-[25px] text-[15px] md:text-[16px] xl:text-[23px] font-bold"
      >
        <span>Claim Your Free Consultation Now</span>
      </Link>
    </div>
  );
}

export default buttonDark;
