import React from "react";
import MultiStepForm from "../Form/MultiStepForm";

import GraphicPattern4 from "../../assets/svg/GraphicPatter4.svg";
import GraphicPattern_mob from "../../assets/svg/graphicPattern-last-mob.svg";
import icf_banner from "../../assets/icf-certification-banner2.webp";
import bottom_man from "../../assets/bottom-man.webp";
import bottom_manMob from "../../assets/bottom-man-mob.webp";

function icf_certification() {
  const currentDate = new Date();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentMonth = monthNames[currentDate.getMonth()];
  return (
    <div className="icf-certification-main">
      <img
        className="icf-certification-pattern-1"
        src={GraphicPattern4}
        alt=""
      />
      <img
        className=" icf-certification-pattern-2"
        src={GraphicPattern_mob}
        alt=""
      />
      <div className="icf-certification-sub">
        <h2>
          Exclusive {currentMonth} Offer{" "}
          <span className="text-[#EE624E]">For The First 30 Registrations</span>
        </h2>
        <div className="progress-container">
          <div className="progress-bar">
            {/* <div className="light-effect"></div> */}
          </div>
        </div>
        <h1>
          Claim Your <span className="highlight-green">Free Career</span>{" "}
          <span className="highlight-green"> Consultation</span> With Our ICF
          Certified Career Coach & Get{" "}
          <span className="wavy-underline-green">Scholarships</span>{" "}
          <span className="wavy-underline-green"> Of Upto 30%</span> <br />
        </h1>
        <img src={icf_banner} alt="" />
        <MultiStepForm />
      </div>
      <div className="bottom-man-image-div">
        <img className="bottom-man-image-1 " src={bottom_man} alt="" />
        <img className="bottom-man-image-2" src={bottom_manMob} alt="" />
      </div>
    </div>
  );
}

export default icf_certification;
