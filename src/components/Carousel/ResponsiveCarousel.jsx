import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import balancedIconn from "../../assets/svg/balanced-icon.svg"
import timerIconn from "../../assets/svg/timer-icon.svg"
import facultyIcon from "../../assets/svg/faculty-icon.svg"
import moneyIcon from "../../assets/svg/money-icon.svg"
import balancedIcon from "../../assets/svg/balanced-icon.svg"
import timerIcon from "../../assets/svg/timer-icon.svg"
import capIcon from "../../assets/svg/cap-icon.svg"
import moneyIcon2 from "../../assets/svg/money-icon-2.svg"


function ResponsiveCarousel() {

      const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 640 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 640, min: 0 },
          items: 2,
        }
      };

  const Divider = () => (
    <div className="divider mx- h-[200px] bg-gray-300" style={{ width: '1px' }}></div>
  );
  return (
    <div className={`carousel`}>
      <div className="hidden lg:flex justify-center items-center w-full   ">
        <div className="carousel-card ">
          <img
            src={balancedIconn}
            alt="Work-Life"
            className="mb-2 carousel-svg"
          />
          <h4 className="text-sm sm:text-base">Balanced Work-Life Structure</h4>
        </div>
        <Divider/>
        <div className="carousel-card ">
          <img
            src={timerIconn}
            alt="12 Months"
            className="mb-2 carousel-svg"
          />
          <h4 className="text-sm sm:text-base">Complete in 12 Months</h4>
        </div>
        <Divider/>
        <div className="carousel-card">
          <img
            src={facultyIcon}
            alt="Industry-Leading"
            className="mb-2 carousel-svg"
          />
          <h4 className="text-sm sm:text-base">Industry-Leading Faculties</h4>
        </div>
        <Divider/>
        <div className="carousel-card">
          <img
            src={moneyIcon}
            alt="Scholarships"
            className="mb-2 carousel-svg"
          />
          <h4 className="text-sm sm:text-base">
            Scholarships Available: Save Up to 30%
          </h4>
        </div>
      </div>
      
      <div className=" carousel-main lg:hidden overflow-visible h-auto" >
  <Carousel responsive={responsive} infinite={true} removeArrowOnDeviceType={["tablet", "mobile"]} showDots={true} autoPlay={true} autoPlaySpeed={2000} >
    <div className=" carousel-card  ">
      <img src={balancedIconn} alt="Work-Life" className=" carousel-svg mb-2" />
      <h4 className="text-sm sm:text-base">Balanced Work-Life Structure</h4>
    </div>
    {/* Slide 2 */}
    <div className="carousel-card ">
      <img src={timerIconn} alt="12 Months" className=" carousel-svg mb-2" />
      <h4 className="text-sm sm:text-base">Complete in 12 Months</h4>
    </div>
    {/* Slide 3 */}
    <div className="carousel-card ">
      <img src={capIcon} alt="12 Months" className=" carousel-svg mb-2" />
      <h4 className="text-sm sm:text-base">Industry-Leading Faculties</h4>
    </div>
    {/* Slide 4 */}
    <div className="carousel-card ">
      <img src={moneyIcon2} alt="12 Months" className=" carousel-svg mb-2" />
      <h4 className="text-sm sm:text-base">Scholarships Available: Save Up to 30%</h4>
    </div>
</Carousel>

</div>
    </div>
  );
}

export default ResponsiveCarousel;