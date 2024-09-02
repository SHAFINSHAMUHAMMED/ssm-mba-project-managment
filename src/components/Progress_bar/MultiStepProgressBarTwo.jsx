import React from 'react';
import './MultiStepProgressBarTwo.css';

const MultiStepProgressBarTwo = ({ currentStep }) => {
  const totalSteps = 4;

  return (
    <div className="progress-container2-main">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <React.Fragment key={index}>
          <div className={`dot2 ${currentStep >= index + 1 ? 'active' : ''}`}>
            0{currentStep > index ? index + 1 : index + 1}
          </div>
          {index < totalSteps - 1 && (
            <div className={`line2 ${currentStep > index + 1 ? 'filled' : ''}`} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default MultiStepProgressBarTwo;
