import React from "react";
import Marquee from "react-fast-marquee";

import loreal from "../../assets/icon1-loreal.webp";
import mashreeq from "../../assets/icon2-mashreeq.webp";
import rakbank from "../../assets/icon3-rakbank.webp";
import almarai from "../../assets/icon4-almarai.webp";
import emiratesNBD from "../../assets/icon5-emirates-nbd.webp";
import standard_chartered from "../../assets/icon6-standard-chartered.webp";
import emirates from "../../assets/icon7-emirates.webp";
import unilever from "../../assets/icon8-unilever.webp";
import nestle from "../../assets/icon9-nestle.webp";



function AluminiCarousel() {
  return (
    <div className="alumini-carousel-main">
      <h1 className="">
        After the Cap and Gown: Discover Where{" "}
        <span className="highlight-green">Our</span><span className="text-[#259D4A]"> Alumni</span><span className="text-[#259D4A]">&nbsp;Thrive </span>
      </h1>
      <div className="alumini-carousel-cards m-auto">
        <Marquee direction="right" speed={100}>
          <div className="alumini-carousel-cards-1 ">
            <img className="alumini-carousel-card " src={loreal} alt="loreal" />
            <img className="alumini-carousel-card " src={mashreeq} alt="mashreeq" />
            <img className="alumini-carousel-card " src={rakbank} alt="rakbank" />
            <img className="alumini-carousel-card " src={almarai} alt="almarai" />
            <img className="alumini-carousel-card " src={emiratesNBD} alt="emiratesNBD" />
            <img className="alumini-carousel-card " src={standard_chartered} alt="standard_chartered" />
            <img className="alumini-carousel-card " src={emirates} alt="emirates" />
            <img className="alumini-carousel-card " src={unilever} alt="unilever" />
            <img className="alumini-carousel-card " src={nestle} alt="nestle" />            
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default AluminiCarousel;
