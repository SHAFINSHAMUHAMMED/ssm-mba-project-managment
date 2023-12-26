import React, { useEffect } from "react";
import ButtonDark from "../Buttons/buttonDark";
import Claim_description from "../Description/claim_description";
import AOS from "aos";
import "aos/dist/aos.css";
import Popup from "../Popup_page/popup";
import { usePopup } from "../Hoocks/PopupContext";

import university_icon_large from "../../assets/svg/university-icon-large.svg";
import up_graph from "../../assets/svg/up-graph-icon.svg";
import sales_icon from "../../assets/svg/sales-icon.svg";
import target2 from "../../assets/svg/target-2-icon.svg";
import scolar from "../../assets/svg/scolar-icon.svg";
import dotted from "../../assets/svg/dottet-curve-icon.svg";
import swisMba from "../../assets/swiss-mba.webp";
import swisMbaTab from "../../assets/swiss-mba-tab.webp";

function world_of_possibilities() {
  const { isPopupOpen, togglePopup } = usePopup();

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className={ ""}>
      <div className="world-of-possibilities-main">
        <h1>
          <span className="wavy-underline-green">A World of</span>{" "}
          <span className="wavy-underline-green "> Possibilities: </span>
          Journey Beyond the Ordinary with Learners University College
        </h1>
        <div className="world-of-possibilities-sub-1">
          <img
            className="w-[316px] h-[316px] breathing-image"
            src={university_icon_large}
            alt=""
          />
          <div className="world-of-possibilities-cards ">
            <div className="world-of-possibilities-card">
              <svg
                className="world-of-possibilities-card-svg"
                width="82"
                height="82"
                viewBox="0 0 82 82"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="40.8113" cy="40.8113" r="40.8113" fill="#0C434B" />
                <g clip-path="url(#clip0_605_498)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M26.7977 23.9022C27.5242 23.1757 28.5095 22.7676 29.5369 22.7676H46.3232C46.6657 22.7676 46.9941 22.9036 47.2363 23.1458L56.2752 32.1846C56.5172 32.4267 56.6533 32.7552 56.6533 33.0977V55.0491C56.6533 56.0764 56.2453 57.0619 55.5188 57.7883C54.7924 58.5148 53.8069 58.9228 52.7795 58.9228H29.5369C28.5095 58.9228 27.5242 58.5148 26.7977 57.7883C26.0712 57.0619 25.6631 56.0764 25.6631 55.0491V26.6414C25.6631 25.614 26.0712 24.6287 26.7977 23.9022ZM40.056 39.743C40.4628 40.1498 41.1582 39.8617 41.1582 39.2865V26.6414H30.8281V39.2865C30.8281 39.8617 31.5236 40.1498 31.9303 39.743L35.0801 36.5932C35.5844 36.089 36.402 36.089 36.9062 36.5932L40.056 39.743Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_605_498">
                    <rect
                      width="36.9245"
                      height="36.9245"
                      fill="white"
                      transform="translate(22.6963 22.3828)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <div>
                <h1>120+</h1>
                <span>Courses</span>
              </div>
            </div>
            <div className="world-of-possibilities-card">
              <svg
                className="world-of-possibilities-card-svg"
                xmlns="http://www.w3.org/2000/svg"
                width="83"
                height="82"
                viewBox="0 0 83 82"
                fill="none"
              >
                <circle cx="41.2566" cy="41.1707" r="40.8113" fill="#0C434B" />
                <path
                  d="M40.5026 47.0828C37.3171 47.1286 34.2773 48.425 32.0391 50.6922C29.8009 52.9594 28.5438 56.0156 28.5391 59.2015C28.5391 59.4586 28.6412 59.7052 28.823 59.887C29.0048 60.0688 29.2514 60.171 29.5086 60.171H51.8069C52.064 60.171 52.3106 60.0688 52.4925 59.887C52.6743 59.7052 52.7764 59.4586 52.7764 59.2015C52.7739 57.5976 52.4537 56.0102 51.834 54.5308C51.2144 53.0515 50.3078 51.7096 49.1665 50.5828C48.0252 49.4559 46.6719 48.5664 45.1849 47.9657C43.6978 47.3649 42.1064 47.0649 40.5026 47.0828Z"
                  fill="white"
                />
                <path
                  d="M54.9295 24.3177L41.0076 19.1018C40.848 19.0346 40.6766 19 40.5035 19C40.3303 19 40.1589 19.0346 39.9993 19.1018L26.0774 24.3177L25.3794 24.8024C25.3709 24.8408 25.3709 24.8804 25.3794 24.9188V25.0933C25.3714 25.1382 25.3714 25.1841 25.3794 25.229V32.5584C25.3794 32.9441 25.5326 33.314 25.8053 33.5867C26.078 33.8594 26.4479 34.0126 26.8336 34.0126C27.2193 34.0126 27.5892 33.8594 27.8619 33.5867C28.1346 33.314 28.2878 32.9441 28.2878 32.5584V27.7691L32.573 29.3784V36.32C32.573 37.4175 32.7892 38.5042 33.2091 39.5181C33.6291 40.532 34.2447 41.4533 35.0207 42.2293C35.7967 43.0054 36.718 43.6209 37.7319 44.0409C38.7459 44.4609 39.8326 44.6771 40.93 44.6771C42.0275 44.6771 43.1142 44.4609 44.1281 44.0409C45.1421 43.6209 46.0633 43.0054 46.8394 42.2293C47.6154 41.4533 48.2309 40.532 48.6509 39.5181C49.0709 38.5042 49.2871 37.4175 49.2871 36.32V29.2427L55.104 27.0323C55.3784 26.9267 55.6143 26.7406 55.7807 26.4983C55.9471 26.256 56.0362 25.9689 56.0362 25.675C56.0362 25.381 55.9471 25.094 55.7807 24.8517C55.6143 24.6094 55.3784 24.4232 55.104 24.3177H54.9295ZM40.678 40.8185C40.0881 40.8185 39.5041 40.702 38.9594 40.4757C38.4147 40.2494 37.9201 39.9177 37.5039 39.4997C37.0877 39.0818 36.7582 38.5857 36.5343 38.04C36.3103 37.4944 36.1964 36.9098 36.1989 36.32V35.2148L40.0769 36.4364C40.2185 36.4536 40.3618 36.4536 40.5035 36.4364C40.645 36.4553 40.7885 36.4553 40.93 36.4364L45.157 35.1566V36.32C45.157 37.5097 44.6858 38.651 43.8463 39.4941C43.0069 40.3371 41.8677 40.8133 40.678 40.8185Z"
                  fill="white"
                />
                <ellipse
                  cx="41.2142"
                  cy="37.3169"
                  rx="5.94073"
                  ry="4.45555"
                  fill="white"
                />
              </svg>
              <div>
                <h1>4000+</h1>
                <span>Students</span>
              </div>
            </div>
            <div className="world-of-possibilities-card">
              <svg
                className="world-of-possibilities-card-svg"
                xmlns="http://www.w3.org/2000/svg"
                width="83"
                height="82"
                viewBox="0 0 83 82"
                fill="none"
              >
                <circle cx="41.7234" cy="41.1707" r="40.8113" fill="#0C434B" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M44.7985 27.2336C42.1241 24.386 38.8321 21 33.8086 21C30.4389 21 27.8409 22.6584 26.0853 24.4407C25.205 25.3345 24.5133 26.281 24.0128 27.1195C23.5269 27.9335 23.1735 28.7261 23.0358 29.3221C23.012 29.4249 23 29.5301 23 29.6357V37.9042C23.2797 37.6441 23.5771 37.3782 23.8903 37.112C26.0279 35.2957 29.2217 33.1875 32.75 33.1875C37.8355 33.1875 41.7284 36.458 44.8913 39.1804L45.3348 39.5628C46.8152 40.8399 48.1495 41.9909 49.5071 42.8679C50.4663 43.4875 51.3661 43.9212 52.2467 44.1477C52.7155 44.2684 53.179 44.3304 53.6429 44.3304C55.3251 44.3304 57.4376 43.4858 59.2948 42.4794C60.1879 41.9955 60.9587 41.5096 61.5055 41.1447C61.7019 41.0138 61.8682 40.8992 62 40.8068V29.6357C62 29.0219 61.5983 28.4805 61.0108 28.3026C60.4233 28.1247 59.7887 28.3524 59.4483 28.8631C58.6073 30.1245 56.26 32.5886 52.64 32.5886C51.2471 32.5886 50.0042 32.0382 48.7265 31.0634C47.5345 30.1539 46.4159 28.9598 45.171 27.6308L44.7985 27.2336ZM62 44.9469C61.6744 45.1402 61.3236 45.3405 60.9537 45.541C59.0067 46.5959 56.2442 47.8125 53.6429 47.8125C51.3767 47.8125 49.3819 46.9324 47.6177 45.7928C46.0443 44.7765 44.5224 43.4623 43.0816 42.2181L42.6196 41.8196C39.3097 38.9706 36.3572 36.6696 32.75 36.6696C30.5161 36.6696 28.1385 38.0717 26.1452 39.7655C25.1854 40.5811 24.3878 41.4015 23.83 42.0191C23.5521 42.3268 23.3364 42.5811 23.1926 42.7554C23.1207 42.8425 23.067 42.9094 23.0326 42.9527L23 42.9941V54.2614C23 54.9696 23.5314 55.5651 24.235 55.6454C24.9386 55.7256 25.5905 55.2651 25.7499 54.5751C25.7959 54.3762 25.9911 53.8659 26.4048 53.1731C26.8038 52.5045 27.3626 51.7395 28.07 51.0214C29.49 49.5795 31.416 48.4114 33.8086 48.4114C37.4777 48.4114 40.0005 50.8197 42.768 53.7664L43.1564 54.1809C44.3665 55.4743 45.6481 56.8443 47.0368 57.9038C48.6069 59.1019 50.4318 60 52.64 60C57.5872 60 60.6757 56.67 61.766 55.0342C61.9187 54.8052 62 54.5364 62 54.2614V44.9469Z"
                  fill="white"
                />
              </svg>
              <div>
                <h1>65+</h1>
                <span>Nationalities</span>
              </div>
            </div>
          </div>
        </div>
        <div className="world-of-possibilities-sub-2">
          <div className="world-of-possibilities-cards-2">
            <div className=" world-of-possibilities-2-card">
              <div className="world-of-possibilities-2-card-head ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="40"
                  viewBox="0 0 42 40"
                  fill="none"
                >
                  <path
                    d="M18.1758 23.6015L9.88727 15.313L7.0625 18.1006L18.1758 29.2139L42.0005 5.38917L39.2129 2.60156L18.1758 23.6015Z"
                    fill="#259D4A"
                  />
                  <circle
                    cx="19.6991"
                    cy="19.6991"
                    r="18.5104"
                    stroke="#0C424A"
                    stroke-width="2.37735"
                  />
                </svg>
                <h3>Globally Recognised & Accredited</h3>
              </div>
              <p>
                Our programs hold both national and international accreditation,
                ensuring your degree has global relevance.
              </p>
            </div>
            <div className=" world-of-possibilities-2-card">
              <div className="world-of-possibilities-2-card-head">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="40"
                  viewBox="0 0 42 40"
                  fill="none"
                >
                  <path
                    d="M18.1758 23.6015L9.88727 15.313L7.0625 18.1006L18.1758 29.2139L42.0005 5.38917L39.2129 2.60156L18.1758 23.6015Z"
                    fill="#259D4A"
                  />
                  <circle
                    cx="19.6991"
                    cy="19.6991"
                    r="18.5104"
                    stroke="#0C424A"
                    stroke-width="2.37735"
                  />
                </svg>
                <h3>Unbeatable Affordability</h3>
              </div>
              <p>
                Experience top-tier education without breaking the bank, thanks
                to our tailored, cost-efficient easy monthly payments.
              </p>
            </div>
            <div className=" world-of-possibilities-2-card">
              <div className="world-of-possibilities-2-card-head">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="40"
                  viewBox="0 0 42 40"
                  fill="none"
                >
                  <path
                    d="M18.1758 23.6015L9.88727 15.313L7.0625 18.1006L18.1758 29.2139L42.0005 5.38917L39.2129 2.60156L18.1758 23.6015Z"
                    fill="#259D4A"
                  />
                  <circle
                    cx="19.6991"
                    cy="19.6991"
                    r="18.5104"
                    stroke="#0C424A"
                    stroke-width="2.37735"
                  />
                </svg>
                <h3>Flexible Learning Modes</h3>
              </div>
              <p>
                Learn from anywhere through our digital libraries and live
                online classrooms.
              </p>
            </div>
            <div className=" world-of-possibilities-2-card">
              <div className="world-of-possibilities-2-card-head">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="40"
                  viewBox="0 0 42 40"
                  fill="none"
                >
                  <path
                    d="M18.1758 23.6015L9.88727 15.313L7.0625 18.1006L18.1758 29.2139L42.0005 5.38917L39.2129 2.60156L18.1758 23.6015Z"
                    fill="#259D4A"
                  />
                  <circle
                    cx="19.6991"
                    cy="19.6991"
                    r="18.5104"
                    stroke="#0C424A"
                    stroke-width="2.37735"
                  />
                </svg>
                <h3>Fast-Track Your Degree</h3>
              </div>
              <p>
                Choose accelerated options to complete your MBA or other degrees
                at your own pace.
              </p>
            </div>
            <div className=" world-of-possibilities-2-card">
              <div className="world-of-possibilities-2-card-head">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="40"
                  viewBox="0 0 42 40"
                  fill="none"
                >
                  <path
                    d="M18.1758 23.6015L9.88727 15.313L7.0625 18.1006L18.1758 29.2139L42.0005 5.38917L39.2129 2.60156L18.1758 23.6015Z"
                    fill="#259D4A"
                  />
                  <circle
                    cx="19.6991"
                    cy="19.6991"
                    r="18.5104"
                    stroke="#0C424A"
                    stroke-width="2.37735"
                  />
                </svg>
                <h3>Expert Faculty</h3>
              </div>
              <p>
                Learn from seasoned professionals with deep industry insights.
              </p>
            </div>
            <div className=" world-of-possibilities-2-card">
              <div className="world-of-possibilities-2-card-head">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="40"
                  viewBox="0 0 42 40"
                  fill="none"
                >
                  <path
                    d="M18.1758 23.6015L9.88727 15.313L7.0625 18.1006L18.1758 29.2139L42.0005 5.38917L39.2129 2.60156L18.1758 23.6015Z"
                    fill="#259D4A"
                  />
                  <circle
                    cx="19.6991"
                    cy="19.6991"
                    r="18.5104"
                    stroke="#0C424A"
                    stroke-width="2.37735"
                  />
                </svg>
                <h3>Multiple Starting Dates</h3>
              </div>
              <p>
                Unlike traditional programs, a student can join the academic
                year more than twice every year.
              </p>
            </div>
            <div className=" world-of-possibilities-2-card">
              <div className="world-of-possibilities-2-card-head">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="40"
                  viewBox="0 0 42 40"
                  fill="none"
                >
                  <path
                    d="M18.1758 23.6015L9.88727 15.313L7.0625 18.1006L18.1758 29.2139L42.0005 5.38917L39.2129 2.60156L18.1758 23.6015Z"
                    fill="#259D4A"
                  />
                  <circle
                    cx="19.6991"
                    cy="19.6991"
                    r="18.5104"
                    stroke="#0C424A"
                    stroke-width="2.37735"
                  />
                </svg>
                <h3>Career-Focused Programs</h3>
              </div>
              <p>
                Our courses are designed to meet the specific needs of working
                professionals.
              </p>
            </div>
            <div className=" world-of-possibilities-2-card">
              <div className="world-of-possibilities-2-card-head">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="40"
                  viewBox="0 0 42 40"
                  fill="none"
                >
                  <path
                    d="M18.1758 23.6015L9.88727 15.313L7.0625 18.1006L18.1758 29.2139L42.0005 5.38917L39.2129 2.60156L18.1758 23.6015Z"
                    fill="#259D4A"
                  />
                  <circle
                    cx="19.6991"
                    cy="19.6991"
                    r="18.5104"
                    stroke="#0C424A"
                    stroke-width="2.37735"
                  />
                </svg>
                <h3>Hassle-Free Migration</h3>
              </div>
              <p>
                During the course of the program, you can also opt to migrate
                between multiple campuses on a quarterly basis.
              </p>
            </div>
          </div>
        </div>
        <ButtonDark
          duration={2500}
          containerStyle={{ justifyContent: "center" }}
        />
        <Claim_description color="rgba(11, 67, 75, 0.79)" />
        
          <div className="world-of-possibilities-icons">
            <img
              className="world-of-possibilities-icon-1 "
              src={up_graph}
              alt=""
            />
            <img
              className="world-of-possibilities-icon-2 animated-icon2"
              src={sales_icon}
              alt=""
              data-aos="fade-in"
              data-aos-delay="800"
            />
            <img
              className="world-of-possibilities-icon-3 animated-icon2"
              src={target2}
              alt=""
              data-aos="fade-in"
              data-aos-delay="0"
            />
            <img
              className="world-of-possibilities-icon-4 animated-icon2"
              src={scolar}
              alt=""
              data-aos="fade-in"
              data-aos-delay="400"
            />
            <img
              className="world-of-possibilities-icon-dot"
              src={dotted}
              alt=""
            />
          </div>
      </div>
      <div className="world-of-possibilities-brochure ">
        <div className="world-of-possibilities-brochure-left">
          <h1>
            Get Instant Access To &nbsp;
            <span className="wavy-underline-green">The</span><span className="wavy-underline-green">&nbsp;SSM MBA</span>&nbsp; <span className="wavy-underline-green">Brochure</span>
          </h1>
          <p>
            Get an inside look at our prestigious programs, faculty, and the
            unique benefits that set us apart in the business education
            landscape. Your first step toward a transformative MBA experience
            starts here.
          </p>
          <div className="flex gap-3 sm:gap-6 items-center ">
          <a 
          onClick={togglePopup}
          className="flex gap-3 sm:gap-6 items-center cursor-pointer">
            <h3 className="underline">Download Free Brochure Now</h3>
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="30"
              viewBox="0 0 35 30"
              fill="none"
            >
              <path
                d="M16.0404 23.778C16.0882 23.8281 16.6674 24.3469 17.3778 24.3469C18.0882 24.3469 18.6113 23.8866 18.7224 23.7704L25.9089 16.7046C26.6238 16.0016 26.6238 14.8618 25.9096 14.1588C25.1947 13.4552 24.0348 13.4559 23.3205 14.1582L19.2087 18.2007V1.80026C19.2087 0.806468 18.3885 0 17.3778 0C16.3671 0 15.547 0.806468 15.547 1.80026V18.2L11.4364 14.1582C10.7215 13.4559 9.56228 13.4559 8.84673 14.1582C8.13182 14.8612 8.13182 16.001 8.84673 16.7046L16.0404 23.778Z"
                fill="#64FF94"
              />
              <path
                d="M34.747 19.8729V19.7256H34.7321C34.6534 19.0505 34.0773 18.5254 33.3708 18.5254C32.6643 18.5254 32.0882 19.0505 32.0101 19.7256H32.0017V19.8056C32.0004 19.8303 31.9939 19.8538 31.9939 19.8792C31.9939 19.9046 32.0004 19.9281 32.0017 19.9529V23.2708C32.0017 25.1035 30.9322 26.6516 29.6658 26.6516H5.08961C3.82318 26.6516 2.75308 25.1035 2.75308 23.2708V19.7256H2.73823C2.65945 19.0505 2.08339 18.5254 1.37687 18.5254C0.67036 18.5254 0.0949494 19.0505 0.0161609 19.7256H0.00776513V19.8024C0.00647352 19.8284 0 19.8532 0 19.8792C0 19.9053 0.00647352 19.93 0.00776513 19.9561V23.2708C0.00776513 26.6237 2.28811 29.3517 5.09026 29.3517H29.6664C32.4686 29.3517 34.7483 26.6237 34.7483 23.2708V19.8856C34.7483 19.8837 34.7489 19.8811 34.7489 19.8792C34.7489 19.8773 34.747 19.8748 34.747 19.8729Z"
                fill="#64FF94"
              />
            </svg>
            </a>
          </div>
        </div>
        <img className='swiss-img-1' src={swisMba} alt="" />
        <img className='swiss-img-2' src={swisMbaTab} alt="" />
      </div>
      {isPopupOpen && <Popup closePopup={togglePopup} />}
    </div>
  );
}

export default world_of_possibilities;
