import React from "react";
import ButtonDark from "../Buttons/buttonDark";
import Claim_description from "../Description/claim_description";

import fire_icon from "../../assets/svg/power-skill-fire-icon.svg";
import financial_expert from "../../assets/financial-expert.webp";
import project_mgmnt from "../../assets/project-mgmnt.webp";
import marketing from "../../assets/marketing.webp";
import leadership from "../../assets/leadership.webp";
import strategy from "../../assets/strategy.webp";
import innovation from "../../assets/innovation.webp";
import poweskill_stars from "../../assets/svg/star-large-icon.svg";


function power_skills() {
  return (
    <div className="power-skill-main">
      <h1>
      Unlock <span className="highlight-green"> Diverse</span> <span className="highlight-green">Career</span> <span className="highlight-green">Opportunities</span> with an MBA in Supply Chain Management
      </h1>
      <p className="power-skill-description">
      Embark on a journey toward diverse and dynamic career paths with our MBA in Supply Chain Management. This program paves the way for various high-impact roles, including:

      </p>
      <div className="power-skill-cards">
        {/* 1 */}
        <div className="power-skill-card">
          <img
            className="power-skill-card-img"
            src={financial_expert}
            alt=""
          />
          <div className="power-skill-card-main">
          <div className="flex items-center">
            <img src={fire_icon} alt="" />
            <h3>Global Logistics Manager</h3>
          </div>
          <p>
          Lead international shipping and distribution strategies, ensuring global supply chain efficiency and operational excellence.
          </p>
          </div>
        </div>
        {/* 2 */}
        <div className="power-skill-card">
          <img
            className="power-skill-card-img"
            src={project_mgmnt}
            alt=""
          />
          <div className="power-skill-card-main">
          <div className="flex items-center">
            <img src={fire_icon} alt="" />
            <h3>Project Manager</h3>
          </div>
          <p>
          Drive successful project outcomes by leading diverse teams, overseeing project execution, and ensuring on-time delivery.
          </p>
          </div>
        </div>
        {/* 3 */}
        <div className="power-skill-card">
          <img
            className="power-skill-card-img"
            src={marketing}
            alt=""
          />
          <div className="power-skill-card-main">
          <div className="flex items-center">
            <img src={fire_icon} alt="" />
            <h3>Senior Transportation Manager</h3>
          </div>
          <p>
          Streamline transportation processes, manage cost-effective routes, and negotiate contracts for optimal goods movement.
          </p>
          </div>
        </div>
        {/* 4 */}
        <div className="power-skill-card">
          <img
            className="power-skill-card-img"
            src={leadership}
            alt=""
          />
          <div className="power-skill-card-main">
          <div className="flex items-center">
            <img src={fire_icon} alt="" />
            <h3>Warehousing Manager</h3>
          </div>
          <p>
          Master warehouse operations, from inventory management to implementing advanced storage solutions for smooth distribution.
          </p>
          </div>
        </div>
        {/* 5 */}
        <div className="power-skill-card">
          <img
            className="power-skill-card-img"
            src={strategy}
            alt=""
          />
          <div className="power-skill-card-main">
          <div className="flex items-center">
            <img src={fire_icon} alt="" />
            <h3>Procurement and Purchasing Managers</h3>
          </div>
          <p>
          Spearhead procurement and purchasing strategies, manage supplier relations, and achieve cost-effective procurement outcomes.
          </p>
          </div>
        </div>
        {/* 6 */}
        <div className="power-skill-card">
          <img
            className="power-skill-card-img"
            src={innovation}
            alt=""
          />
          <div className="power-skill-card-main">
          <div className="flex items-center">
            <img src={fire_icon} alt="" />
            <h3>Distribution Manager</h3>
          </div>
          <p>
          Oversee and optimize distribution operations, ensuring effective logistics processes and punctual shipment coordination
          </p>
          </div>
        </div>
        <img className="power-skill-star" src={poweskill_stars} alt="" />
      </div>
        <ButtonDark duration={2500} containerStyle={{ justifyContent: 'center' }}/>
        <Claim_description color='rgba(11, 67, 75, 0.79)'/>
    </div>
  );
}

export default power_skills;
