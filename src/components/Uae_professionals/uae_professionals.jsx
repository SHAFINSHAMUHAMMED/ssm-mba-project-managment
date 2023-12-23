import React from "react";
import { Link, Element } from "react-scroll";

import professionalsMobile from '../../assets/professionals-mobile.webp'
import professionals2 from '../../assets/professionals.webp'


function uae_professionals() {
 
  return (
    <div className="uae-professional-main">
      <div className="uae-professional-inner">
        <div className=" uae-professional-inner-1">
          <h1>
            How <span className="highlight-green">UAE</span> <span className="text-[#259D4A]">Professionals</span> are&nbsp;
            <span className="wavy-underline-green">Rising</span><span className="wavy-underline-green2"> to </span><span className="wavy-underline-green2">the Top</span>—And
            the Pathway for You to Join Them!
          </h1>
          <img
          className="uae-professionals-img-1"
          src={professionalsMobile}
          alt=""
        />
          <p className="uae-professional-p">
            Heads up! According to the eye-opening HAYS GCC Survey, half of UAE
            employees boosted their paychecks last year. The secret? Stellar
            individual performance, backed by skill sets that turn heads and
            open doors. This is where an MBA comes in.
          </p>
          <p className="uae-professional-p">
            If you don’t have an MBA, it’s time to consider investing in one. An
            MBA doesn't just add letters behind your name; it supercharges you
            with skills like financial mastery, project orchestration, and
            charismatic leadership. Without it, you're not just stalling—you're
            letting lucrative opportunities and desired salaries pass you by.
          </p>
          <p className="uae-professional-p">
            In today’s competitive job market, an MBA isn't a luxury—it's your
            career lifejacket. Take control of your career and invest in your
            future by pursuing an MBA.  Time's ticking—take charge of your
            destiny now.
          </p>
          {/* //this button only here others are components */}
          <div id="NewRootRoot" className="flex flex-row w-full darkButton2">
    <Link
    to='contactForm'
    // spy={true}
   smooth={true}
     duration={2800}
     delay={200}
    className=" button bg-[#0b434b] w-[95%] sm:w-[539px]  rounded-[56px] sm:rounded-[91px] pt-[25px] pb-[25px] text-[15px] md:text-[15px] xl:text-[23px] font-bold cursor-pointer">
      Claim Your Free Consultation Now
    </Link>
  </div>
          <p className="claim-description-2">Claim Your Free Consultation With Our Career Coach & Get Scholarships Of Upto 30% <br /></p>
          
        </div>
        <img
          className=" uae-professionals-img-2"
          src={professionals2}
          alt=""
        />
      </div>
      {/* </div> */}
    </div>
  );
}

export default uae_professionals;
