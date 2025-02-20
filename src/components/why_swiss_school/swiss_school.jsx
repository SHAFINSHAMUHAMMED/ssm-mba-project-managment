import React, { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import graph from "../../assets/TopRankedSMSLottie.json";
import FeatureImg from '../../assets/FEATUREImg.webp'

function swiss_school() {
  
  return (
    <div className={`why-swiss-school`}>
      <h1 className=" swiss-school-h1">
      Transform Your <br /> 
<span className="highlight-green wavy-underline"> Professional Life</span> <span className="highlight-green wavy-underline">in a Year</span>: Master Project Management Skills That Pay Off Big Time!
      </h1>
      <div className="swiss-school-p-main">
        <p className="p-margine">
        Designed for the ambitious, this program cuts through the noise, giving you the real-world skills to manage and lead projects with precision and confidence. 
        </p>
        <p className="p-margine">
        In just one year, you’ll leap from aspiring professional to respected project leader. This isn't just education; it's your launchpad to extraordinary career heights. Enroll now and start your journey to the top.
        </p>
      </div>
      {/* <Lottie animationData={graph} loop={true} /> */}
      <img src={FeatureImg} alt="" />

    </div>
  );
}

export default swiss_school;
