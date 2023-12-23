import React, { useState, Suspense  } from "react";
import { BounceLoader } from 'react-spinners';
const ReactPlayer = React.lazy(()=> import("react-player"))

function Loader() {
  return (
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'center',
    }}>
      <BounceLoader color="#0B434B" />
      <p>Loading video...</p>
    </div>
  );
}

function Player() {
  const [playing, setPlaying] = useState(false);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  return (
    <div className="player-wrapper" style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Suspense fallback={<Loader/>}>
      <ReactPlayer
        url="https://youtu.be/E-Z1-X9wSOs?si=B6LoTJ-zhODETI0g"
        width="100%"
        height="100%"
        playing={playing}
        className="react-player2"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />
      </Suspense>
      {!playing && (
        <div className="custom-play-button" onClick={handlePlayPause}>
          <svg
            className="play-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="99"
            height="99"
            viewBox="0 0 99 99"
            fill="#EDE6D8"
          >
            <g filter="url(#filter0_b_440_3930)">
              <ellipse
                cx="49.1113"
                cy="49.4037"
                rx="49.1113"
                ry="49.4037"
                fill="#EDE6D8"
                fill-opacity="0.72"
              />
              <path
                d="M97.5931 49.4037C97.5931 76.3445 75.8835 98.178 49.1113 98.178C22.339 98.178 0.629477 76.3445 0.629477 49.4037C0.629477 22.4629 22.339 0.629477 49.1113 0.629477C75.8835 0.629477 97.5931 22.4629 97.5931 49.4037Z"
                stroke="url(#paint0_linear_440_3930)"
                stroke-width="1.25895"
              />
            </g>
            <path
              d="M67.3343 45.2302C70.5373 47.0904 70.5373 51.7163 67.3343 53.5766L43.6584 67.3272C40.4411 69.1958 36.4087 66.8746 36.4087 63.154L36.4087 35.6527C36.4087 31.9321 40.4411 29.6109 43.6584 31.4795L67.3343 45.2302Z"
              fill="#0B434B"
              stroke="white"
              stroke-width="0.419651"
            />
            <defs>
              <filter
                id="filter0_b_440_3930"
                x="-4.61616"
                y="-4.61616"
                width="107.455"
                height="108.04"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur
                  in="BackgroundImageFix"
                  stdDeviation="2.30808"
                />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_440_3930"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_440_3930"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_440_3930"
                x1="-5.9634e-07"
                y1="26.1925"
                x2="49.5108"
                y2="98.534"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      )}
    </div>
  );
}

export default Player;
