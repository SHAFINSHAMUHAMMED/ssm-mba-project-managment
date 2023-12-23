import React from "react";
import "./MultiStepProgressBar.css";

const checkmarkSvg = (
  <svg
    fill="#f6eaea"
    height="151px"
    width="151px"
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="-34.67 -34.67 358.28 358.28"
    xml:space="preserve"
    stroke="#f6eaea"
    stroke-width="21.959516"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <g>
        {" "}
        <path
          id="Check"
          d="M285.377,46.368c-4.74-4.704-12.439-4.704-17.179,0L96.309,217.114L20.734,142.61 c-4.74-4.704-12.439-4.704-17.179,0s-4.74,12.319,0,17.011l84.2,82.997c4.692,4.644,12.499,4.644,17.191,0l180.43-179.239 C290.129,58.687,290.129,51.06,285.377,46.368C280.637,41.664,290.129,51.06,285.377,46.368z"
        ></path>{" "}
        <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
      </g>{" "}
    </g>
  </svg>
);

const MultiStepProgressBar = ({ currentStep }) => {
  const totalSteps = 5;

  return (
    <div className="progress-container-main">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <React.Fragment key={index}>
          <div className={`dot ${currentStep >= index + 1 ? "active" : ""}`}>
            {currentStep > index ? checkmarkSvg : ""}
          </div>
          {index < totalSteps - 1 && (
            <div
              className={`line ${currentStep > index + 1 ? "filled" : ""}`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default MultiStepProgressBar;
