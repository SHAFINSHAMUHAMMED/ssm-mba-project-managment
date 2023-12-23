import React, { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import graph from "../../assets/TopRankedSMSLottie.json";

function swiss_school() {
  
  return (
    <div className={`why-swiss-school`}>
      <h1 className=" swiss-school-h1">
      Become a <span className="highlight-green">Global </span> <span className="highlight-green">Supply </span> <span className="highlight-green">Chain </span> <span className="highlight-green">Expert </span> <span className="wavy-underline-green-1">in </span> <span className="wavy-underline-green-2">Just 12</span> <span className="wavy-underline-green-3">Months</span>
      </h1>
      <div className="swiss-school-p-main">
        <p className="p-margine">
        Elevate your career with the Swiss School of Management's Online MBA specializing in Supply Chain and Logistics. This program, meticulously designed for aspiring professionals, offers deep insights into the ever-evolving world of supply chain management and logistics.
        </p>
        <p className="p-margine">
          In just one year, you'll acquire the skills needed to optimize supply chains, enhance logistic operations, and lead teams to success in a globally connected market.
        </p>
      </div>
      <Lottie animationData={graph} loop={true} />
    </div>
  );
}

export default swiss_school;
