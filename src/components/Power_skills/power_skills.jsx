import React from "react";
import ButtonDark from "../Buttons/buttonDark";
import Claim_description from "../Description/claim_description";

import fire_icon from "../../assets/svg/power-skill-fire-icon.svg";
import proDirector from "../../assets/projectdirector.webp";
import opmgmnt from "../../assets/opmgr.webp";
import itMgr from "../../assets/itprjmgr.webp";
import constructionMgr from "../../assets/constctnmgr.webp";
import cnsultingMgr from "../../assets/consltngmgr.webp";
import riskmgmt from "../../assets/riskmgmnt.webp";
import poweskill_stars from "../../assets/svg/star-large-icon.svg";

function power_skills() {
  return (
    <div className="power-skill-main">
      <h1>
        Unlock <span className="highlight-green"> Diverse</span>{" "}
        <span className="highlight-green">Career</span>{" "}
        <span className="highlight-green">Opportunities</span> with an MBA in
        Project Management
      </h1>
      <p className="power-skill-description">
        Embark on a journey toward diverse and dynamic career paths with our MBA
        in Project Management. This program paves the way for various
        high-impact roles, including:
      </p>
      <div className="power-skill-cards">
        {/* 1 */}
        <div className="power-skill-card">
          <img className="power-skill-card-img" src={proDirector} alt="" />
          <div className="power-skill-card-main">
            <div className="flex items-center">
              <img src={fire_icon} alt="" />
              <h3>Project Director</h3>
            </div>
            <p>
              Lead complex, multi-dimensional projects, coordinating efforts
              across various teams and ensuring strategic alignment with
              organizational goals.
            </p>
          </div>
        </div>
        {/* 2 */}
        <div className="power-skill-card">
          <img className="power-skill-card-img" src={opmgmnt} alt="" />
          <div className="power-skill-card-main">
            <div className="flex items-center">
              <img src={fire_icon} alt="" />
              <h3>Operations Manager</h3>
            </div>
            <p>
              Oversee day-to-day operations, implement efficiency improvements,
              and manage operational challenges with strategic solutions.
            </p>
          </div>
        </div>
        {/* 3 */}
        <div className="power-skill-card">
          <img className="power-skill-card-img" src={itMgr} alt="" />
          <div className="power-skill-card-main">
            <div className="flex items-center">
              <img src={fire_icon} alt="" />
              <h3>IT Project Manager</h3>
            </div>
            <p>
              Specialize in managing technology-focused projects, from software
              development to IT infrastructure upgrades, ensuring timely and
              on-budget delivery.
            </p>
          </div>
        </div>
        {/* 4 */}
        <div className="power-skill-card">
          <img className="power-skill-card-img" src={constructionMgr} alt="" />
          <div className="power-skill-card-main">
            <div className="flex items-center">
              <img src={fire_icon} alt="" />
              <h3>Construction Project Manager</h3>
            </div>
            <p>
              Direct construction projects from conception to completion,
              managing timelines, budgets, and ensuring quality standards.
            </p>
          </div>
        </div>
        {/* 5 */}
        <div className="power-skill-card">
          <img className="power-skill-card-img" src={cnsultingMgr} alt="" />
          <div className="power-skill-card-main">
            <div className="flex items-center">
              <img src={fire_icon} alt="" />
              <h3>Consulting Manager</h3>
            </div>
            <p>
              Advise clients on best project management practices, offering
              solutions to optimize processes, reduce costs, and enhance
              performance.
            </p>
          </div>
        </div>
        {/* 6 */}
        <div className="power-skill-card">
          <img className="power-skill-card-img" src={riskmgmt} alt="" />
          <div className="power-skill-card-main">
            <div className="flex items-center">
              <img src={fire_icon} alt="" />
              <h3>Risk Management Specialist</h3>
            </div>
            <p>
              Identify, analyze, and mitigate project risks, ensuring smooth
              project execution and safeguarding against potential setbacks.
            </p>
          </div>
        </div>
        <img className="power-skill-star" src={poweskill_stars} alt="" />
      </div>
      <ButtonDark
        duration={2500}
        containerStyle={{ justifyContent: "center" }}
      />
      <Claim_description color="rgba(11, 67, 75, 0.79)" />
    </div>
  );
}

export default power_skills;
