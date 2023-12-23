import React, { useState, useEffect, useRef, Suspense } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Marquee from "react-fast-marquee";
import ButtonDark from "../Buttons/buttonDark";
import { Link, Element } from "react-scroll";
import Claim_description from "../Description/claim_description";
import { BounceLoader } from "react-spinners";

import videoThumb1 from "../../assets/videoThumb1.webp";
import videoThumb2 from "../../assets/videoThumb2.webp";
import videoThumb3 from "../../assets/videoThumb3.webp";
import stars_review from "../../assets/svg/stars-review.svg";
import verified_review from "../../assets/svg/verified-review.svg";

import chef from "../../assets/chef.png";
import albin from "../../assets/albinBaby.png";
import hisham from "../../assets/hisham.png";
import rosette from "../../assets/rosette.png";
import bijuraj from "../../assets/bijuraj.png";
import gwendolyne from "../../assets/gwendolyne.png";
import vaishak from "../../assets/vaishak.png";
import alice from "../../assets/alice.png";


const ReactPlayer = React.lazy(() => import("react-player"));

function Loader() {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
      }}
    >
      <BounceLoader color="#0B434B" />
      <p>Loading video...</p>
    </div>
  );
}

function ReviewSection() {
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");

  useEffect(() => {
    const defaultVideoUrl = "https://youtu.be/LJ-LdPUnywM?si=PZr2husnFLlRF4Q4";
    setCurrentVideoUrl(defaultVideoUrl);
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 3,
    },
  };
  const [playing, setPlaying] = useState(false);
  const carouselRef = useRef(null);
  const handlePlayPause = () => {
    setPlaying(!playing);
  };
  const handleCardClick = (newUrl) => {
    setCurrentVideoUrl(newUrl);
    setPlaying(true);
  };
  const goToNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  // Function to move to the previous slide
  const goToPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };
  return (
    <div className={`review-section-main`}>
      <h1>
        See What Our <span className="highlight-green">Graduates Have</span>{" "}
        <span className="highlight-green"> To Say</span> About Us
      </h1>
      <div className="review-video-main">
        <button onClick={goToPrev} className="custom-prev-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="59"
            height="59"
            viewBox="0 0 59 59"
            fill="none"
          >
            <circle
              cx="29.5"
              cy="29.5"
              r="29.5"
              transform="matrix(-1 0 0 1 59 0)"
              fill="#EDE6D8"
            />
            <path
              d="M36.8085 42.7682L23.4428 29.4025L36.8085 16.0368C36.8795 15.9658 36.9416 15.8893 36.9948 15.8087C37.1186 15.6212 37.1944 15.4114 37.2222 15.1965C37.2303 15.1342 37.2344 15.0714 37.2344 15.0087C37.2344 14.6811 37.1244 14.3535 36.9043 14.0861C36.8744 14.0498 36.8425 14.0145 36.8085 13.9805C36.7819 13.9539 36.7545 13.9286 36.7264 13.9044C36.1552 13.414 35.2935 13.4394 34.7523 13.9805L20.3586 28.3742C20.0858 28.647 19.9327 29.0169 19.9327 29.4025C19.9327 29.7881 20.0858 30.1578 20.3586 30.4306L34.7523 44.8243C34.8232 44.8953 34.8997 44.9575 34.9804 45.0106C35.5447 45.3832 36.3117 45.3212 36.8085 44.8243C36.8795 44.7533 36.9416 44.6768 36.9948 44.5963C37.3675 44.0318 37.3054 43.2648 36.8085 42.7682Z"
              fill="#0C434B"
            />
          </svg>
        </button>

        {/* Custom Next Button */}
        <button onClick={goToNext} className="custom-next-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="59"
            height="59"
            viewBox="0 0 59 59"
            fill="none"
          >
            <circle cx="29.5" cy="29.5" r="29.5" fill="#259D4A" />
            <path
              d="M23.5549 41.1888L35.3294 29.4143L23.5549 17.6397C23.4923 17.5772 23.4376 17.5098 23.3907 17.4388C23.2817 17.2737 23.2149 17.0888 23.1904 16.8995C23.1832 16.8446 23.1797 16.7893 23.1797 16.734C23.1797 16.4454 23.2766 16.1568 23.4704 15.9213C23.4968 15.8893 23.5249 15.8582 23.5549 15.8283C23.5783 15.8048 23.6024 15.7825 23.6272 15.7612C24.1304 15.3292 24.8895 15.3515 25.3663 15.8283L38.0464 28.5085C38.2867 28.7488 38.4217 29.0746 38.4217 29.4143C38.4217 29.754 38.2867 30.0797 38.0464 30.32L25.3663 43.0002C25.3038 43.0627 25.2364 43.1175 25.1654 43.1643C24.6682 43.4925 23.9926 43.4379 23.5549 43.0002C23.4923 42.9377 23.4376 42.8702 23.3907 42.7993C23.0625 42.302 23.1172 41.6264 23.5549 41.1888Z"
              fill="#FFFFFF"
            />
          </svg>
        </button>
        <div className="player-container">
          <Suspense fallback={<Loader />}>
            <ReactPlayer
              url={currentVideoUrl}
              playing={playing}
              width="100%"
              height="100%"
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              onEnded={() => setPlaying(false)}
            />
          </Suspense>
          {!playing && (
            <div className="custom-play-button" onClick={handlePlayPause}>
              {/* <div className="pulse-circle"></div> */}

              <svg
                className="pulse-circle"
                width="144"
                height="144"
                viewBox="0 0 144 144"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_b_1033_15)">
                  <circle
                    cx="71.5059"
                    cy="71.5059"
                    r="71.5059"
                    fill="#259D4A"
                  />
                </g>
                <path
                  d="M100.372 66.2702C105.631 69.3067 105.631 76.8978 100.372 79.9343L63.8852 101C58.6259 104.036 52.0517 100.241 52.0517 94.1677L52.0517 52.0368C52.0517 45.9638 58.6259 42.1683 63.8852 45.2047L100.372 66.2702Z"
                  fill="white"
                />
                <defs>
                  <filter
                    id="filter0_b_1033_15"
                    x="-6.78073"
                    y="-6.78073"
                    width="156.573"
                    height="156.573"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur
                      in="BackgroundImageFix"
                      stdDeviation="3.39037"
                    />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_1033_15"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_1033_15"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          )}
        </div>
      </div>
      <div className="review-video-sub">
        <div className="review-video-sub-cards">
          <Carousel
            ref={carouselRef}
            responsive={responsive}
            infinite={true}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            showDots={true}
            customLeftArrow={<></>}
            customRightArrow={<></>}
          >
            <div
              className="review-video-sub-card"
              onClick={() =>
                handleCardClick(
                  "https://youtu.be/LJ-LdPUnywM?si=PZr2husnFLlRF4Q4"
                )
              }
            >
              <img
                className=" sm:w-auto"
                src={videoThumb1}
                alt=""
              />
              <svg
                className="play-button"
                xmlns="http://www.w3.org/2000/svg"
                width="81"
                height="87"
                viewBox="0 0 81 87"
                fill="none"
              >
                <path
                  d="M56.2503 46.1795L33.3996 60.4221C31.8976 61.3582 29.952 60.2783 29.952 58.5085L29.952 30.0234C29.952 28.2536 31.8976 27.1736 33.3996 28.1098L56.2503 42.3524C57.6665 43.2351 57.6665 45.2968 56.2503 46.1795Z"
                  stroke="white"
                  stroke-width="3"
                />
                <path
                  d="M79.5879 43.5C79.5879 67.0456 61.9247 86 40.2939 86C18.6632 86 1 67.0456 1 43.5C1 19.9544 18.6632 1 40.2939 1C61.9247 1 79.5879 19.9544 79.5879 43.5Z"
                  stroke="white"
                  stroke-width="3"
                />
              </svg>
            </div>
            <div
              className="review-video-sub-card"
              onClick={() =>
                handleCardClick(
                  "https://youtu.be/1QPnOvitSbs?si=vJY8fNakE8gpXVsh"
                )
              }
            >
              <img
                className=" sm:w-auto"
                src={videoThumb2}
                alt=""
              />
              <svg
                className="play-button"
                xmlns="http://www.w3.org/2000/svg"
                width="81"
                height="87"
                viewBox="0 0 81 87"
                fill="none"
              >
                <path
                  d="M56.2503 46.1795L33.3996 60.4221C31.8976 61.3582 29.952 60.2783 29.952 58.5085L29.952 30.0234C29.952 28.2536 31.8976 27.1736 33.3996 28.1098L56.2503 42.3524C57.6665 43.2351 57.6665 45.2968 56.2503 46.1795Z"
                  stroke="white"
                  stroke-width="3"
                />
                <path
                  d="M79.5879 43.5C79.5879 67.0456 61.9247 86 40.2939 86C18.6632 86 1 67.0456 1 43.5C1 19.9544 18.6632 1 40.2939 1C61.9247 1 79.5879 19.9544 79.5879 43.5Z"
                  stroke="white"
                  stroke-width="3"
                />
              </svg>
            </div>
            <div
              className="review-video-sub-card"
              onClick={() =>
                handleCardClick(
                  "https://youtu.be/wnukPED7Jn0?si=_oVUClOcrRQc2ST0"
                )
              }
            >
              <img
                className=" sm:w-auto"
                src={videoThumb3}
                alt=""
              />
              <svg
                className="play-button"
                xmlns="http://www.w3.org/2000/svg"
                width="81"
                height="87"
                viewBox="0 0 81 87"
                fill="none"
              >
                <path
                  d="M56.2503 46.1795L33.3996 60.4221C31.8976 61.3582 29.952 60.2783 29.952 58.5085L29.952 30.0234C29.952 28.2536 31.8976 27.1736 33.3996 28.1098L56.2503 42.3524C57.6665 43.2351 57.6665 45.2968 56.2503 46.1795Z"
                  stroke="white"
                  stroke-width="3"
                />
                <path
                  d="M79.5879 43.5C79.5879 67.0456 61.9247 86 40.2939 86C18.6632 86 1 67.0456 1 43.5C1 19.9544 18.6632 1 40.2939 1C61.9247 1 79.5879 19.9544 79.5879 43.5Z"
                  stroke="white"
                  stroke-width="3"
                />
              </svg>
            </div>
            <div
              className="review-video-sub-card"
              onClick={() =>
                handleCardClick(
                  "https://youtu.be/LJ-LdPUnywM?si=PZr2husnFLlRF4Q4"
                )
              }
            >
              <img
                className=" sm:w-auto"
                src={videoThumb1}
                alt=""
              />
              <svg
                className="play-button"
                xmlns="http://www.w3.org/2000/svg"
                width="81"
                height="87"
                viewBox="0 0 81 87"
                fill="none"
              >
                <path
                  d="M56.2503 46.1795L33.3996 60.4221C31.8976 61.3582 29.952 60.2783 29.952 58.5085L29.952 30.0234C29.952 28.2536 31.8976 27.1736 33.3996 28.1098L56.2503 42.3524C57.6665 43.2351 57.6665 45.2968 56.2503 46.1795Z"
                  stroke="white"
                  stroke-width="3"
                />
                <path
                  d="M79.5879 43.5C79.5879 67.0456 61.9247 86 40.2939 86C18.6632 86 1 67.0456 1 43.5C1 19.9544 18.6632 1 40.2939 1C61.9247 1 79.5879 19.9544 79.5879 43.5Z"
                  stroke="white"
                  stroke-width="3"
                />
              </svg>
            </div>
          </Carousel>
        </div>
      </div>

      <div className="user-reviews">
        <Marquee speed={70} pauseOnClick="true">
          <div className="flex gap-[15px] overflow-hidden">
            <div className="user-review-card ms-[15px]">
              <div className="flex justify-between mb-6">
                <svg
                  className="user-review-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="74"
                  height="52"
                  viewBox="0 0 74 52"
                  fill="none"
                >
                  <path
                    d="M17.0194 0C12.4734 0 8.19945 1.77031 4.98488 4.9848C1.77031 8.19937 0 12.4733 0 17.0193C0 19.3568 0.387601 21.5676 1.15212 23.5904C1.94137 25.6786 3.11311 27.5154 4.63479 29.0496C7.87213 32.3136 12.538 34.0388 18.1276 34.0388C18.1703 34.0388 18.2028 34.0413 18.2264 34.0443C18.396 34.5054 18.2193 36.4834 16.1736 39.7794C14.0288 43.2347 10.7892 46.5559 7.28551 48.8911C6.73429 49.2586 6.48852 49.9435 6.68048 50.5775C6.87236 51.2116 7.45672 51.6452 8.11918 51.6452C11.0143 51.6452 17.4565 49.6884 23.338 44.2975C28.2197 39.8231 34.0388 31.6508 34.0388 18.1277C34.0388 13.0159 32.2754 8.37051 29.0736 5.04719C25.9377 1.7924 21.6568 0 17.0194 0Z"
                    fill="#0B434B"
                  />
                  <path
                    d="M69.0344 5.04711C65.8986 1.79241 61.6178 0 56.9803 0C52.4343 0 48.1603 1.77031 44.9458 4.9848C41.7312 8.19937 39.9609 12.4733 39.9609 17.0193C39.9609 19.3568 40.3485 21.5676 41.1131 23.5904C41.9023 25.6786 43.074 27.5154 44.5957 29.0496C47.8331 32.3136 52.4989 34.0388 58.0886 34.0388C58.1313 34.0388 58.1638 34.0413 58.1873 34.0443C58.3569 34.5054 58.1803 36.4834 56.1345 39.7794C53.9898 43.2348 50.7502 46.5559 47.2464 48.8911C46.6952 49.2586 46.4494 49.9435 46.6414 50.5775C46.8334 51.2116 47.4177 51.6452 48.0801 51.6452C50.9753 51.6452 57.4174 49.6884 63.2989 44.2975C68.1806 39.8231 73.9998 31.6508 73.9998 18.1277C73.9997 13.0158 72.2363 8.37044 69.0344 5.04711Z"
                    fill="#0B434B"
                  />
                </svg>
                <img
                  className="review-star"
                  src={stars_review}
                  alt=""
                />
              </div>
              <p className="">
                The flexibility of the programs, its budget friendly & the staff
                is very supportive they go extra miles to resolve the issues if
                I may have any. The provided information from admission is
                helpful through out the program.I appreciate the team of LUC,
                They are different & better then other colleges. Specially i
                could remembered and Thanks to Anousha was given me lot of ideas
                about my program and she is really very much experienced
                overall. Thanks Anousha and team gain.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <img
                    className="review-user-icon"
                    src={chef}
                    alt=""
                  />
                  <h5>Chef Jayaweera</h5>
                </div>
                <img
                  className="review-verified"
                  src={verified_review}
                  alt=""
                />
              </div>
            </div>
            <div className="user-review-card">
              <div className="flex justify-between mb-6">
                <svg
                  className="user-review-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="74"
                  height="52"
                  viewBox="0 0 74 52"
                  fill="none"
                >
                  <path
                    d="M17.0194 0C12.4734 0 8.19945 1.77031 4.98488 4.9848C1.77031 8.19937 0 12.4733 0 17.0193C0 19.3568 0.387601 21.5676 1.15212 23.5904C1.94137 25.6786 3.11311 27.5154 4.63479 29.0496C7.87213 32.3136 12.538 34.0388 18.1276 34.0388C18.1703 34.0388 18.2028 34.0413 18.2264 34.0443C18.396 34.5054 18.2193 36.4834 16.1736 39.7794C14.0288 43.2347 10.7892 46.5559 7.28551 48.8911C6.73429 49.2586 6.48852 49.9435 6.68048 50.5775C6.87236 51.2116 7.45672 51.6452 8.11918 51.6452C11.0143 51.6452 17.4565 49.6884 23.338 44.2975C28.2197 39.8231 34.0388 31.6508 34.0388 18.1277C34.0388 13.0159 32.2754 8.37051 29.0736 5.04719C25.9377 1.7924 21.6568 0 17.0194 0Z"
                    fill="#0B434B"
                  />
                  <path
                    d="M69.0344 5.04711C65.8986 1.79241 61.6178 0 56.9803 0C52.4343 0 48.1603 1.77031 44.9458 4.9848C41.7312 8.19937 39.9609 12.4733 39.9609 17.0193C39.9609 19.3568 40.3485 21.5676 41.1131 23.5904C41.9023 25.6786 43.074 27.5154 44.5957 29.0496C47.8331 32.3136 52.4989 34.0388 58.0886 34.0388C58.1313 34.0388 58.1638 34.0413 58.1873 34.0443C58.3569 34.5054 58.1803 36.4834 56.1345 39.7794C53.9898 43.2348 50.7502 46.5559 47.2464 48.8911C46.6952 49.2586 46.4494 49.9435 46.6414 50.5775C46.8334 51.2116 47.4177 51.6452 48.0801 51.6452C50.9753 51.6452 57.4174 49.6884 63.2989 44.2975C68.1806 39.8231 73.9998 31.6508 73.9998 18.1277C73.9997 13.0158 72.2363 8.37044 69.0344 5.04711Z"
                    fill="#0B434B"
                  />
                </svg>
                <img
                  className="review-star"
                  src={stars_review}
                  alt=""
                />
              </div>
              <p className="">
                I always wanted to do an MBA from the Institute which offers
                online education but with good quality. I done my MBA in Supply
                chain management from SSM with the help of Learner University
                College Dubai.The MBA in Supply chain management from Swiss
                School of Management and the services provided by Learners were
                well suited according to my need. The Fees is also good and the
                staff is very helpful
              </p>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <img
                    className="review-user-icon"
                    src={albin}
                    alt=""
                  />

                  <h5>Albin Baby</h5>
                </div>
                <img
                  className="review-verified"
                  src={verified_review}
                  alt=""
                />
              </div>
            </div>
            <div className="user-review-card">
              <div className="flex justify-between mb-6">
                <svg
                  className="user-review-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="74"
                  height="52"
                  viewBox="0 0 74 52"
                  fill="none"
                >
                  <path
                    d="M17.0194 0C12.4734 0 8.19945 1.77031 4.98488 4.9848C1.77031 8.19937 0 12.4733 0 17.0193C0 19.3568 0.387601 21.5676 1.15212 23.5904C1.94137 25.6786 3.11311 27.5154 4.63479 29.0496C7.87213 32.3136 12.538 34.0388 18.1276 34.0388C18.1703 34.0388 18.2028 34.0413 18.2264 34.0443C18.396 34.5054 18.2193 36.4834 16.1736 39.7794C14.0288 43.2347 10.7892 46.5559 7.28551 48.8911C6.73429 49.2586 6.48852 49.9435 6.68048 50.5775C6.87236 51.2116 7.45672 51.6452 8.11918 51.6452C11.0143 51.6452 17.4565 49.6884 23.338 44.2975C28.2197 39.8231 34.0388 31.6508 34.0388 18.1277C34.0388 13.0159 32.2754 8.37051 29.0736 5.04719C25.9377 1.7924 21.6568 0 17.0194 0Z"
                    fill="#0B434B"
                  />
                  <path
                    d="M69.0344 5.04711C65.8986 1.79241 61.6178 0 56.9803 0C52.4343 0 48.1603 1.77031 44.9458 4.9848C41.7312 8.19937 39.9609 12.4733 39.9609 17.0193C39.9609 19.3568 40.3485 21.5676 41.1131 23.5904C41.9023 25.6786 43.074 27.5154 44.5957 29.0496C47.8331 32.3136 52.4989 34.0388 58.0886 34.0388C58.1313 34.0388 58.1638 34.0413 58.1873 34.0443C58.3569 34.5054 58.1803 36.4834 56.1345 39.7794C53.9898 43.2348 50.7502 46.5559 47.2464 48.8911C46.6952 49.2586 46.4494 49.9435 46.6414 50.5775C46.8334 51.2116 47.4177 51.6452 48.0801 51.6452C50.9753 51.6452 57.4174 49.6884 63.2989 44.2975C68.1806 39.8231 73.9998 31.6508 73.9998 18.1277C73.9997 13.0158 72.2363 8.37044 69.0344 5.04711Z"
                    fill="#0B434B"
                  />
                </svg>
                <img
                  className="review-star"
                  src={stars_review}
                  alt=""
                />
              </div>
              <p className="">
                Learner's Education provides professional service to it's
                customers. Out of the many good qualities I observed in their
                service, few that really caught my attention is their
                spontaneous response to your queries, Step to step assistance
                during your course enrollment and their Flexible payment
                options. And most importantly, they are LEGIT. Also, very
                impressive job from Ms.Athasha. Thank you for all your support
                and assistance. I highly recommend Learner's Education 👍🏻
              </p>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <img
                    className="review-user-icon"
                    src={hisham}
                    alt=""
                  />
                  <h5>Hisham</h5>
                </div>
                <img
                  className="review-verified"
                  src={verified_review}
                  alt=""
                />
              </div>
            </div>
            <div className="user-review-card">
              <div className="flex justify-between mb-6">
                <svg
                  className="user-review-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="74"
                  height="52"
                  viewBox="0 0 74 52"
                  fill="none"
                >
                  <path
                    d="M17.0194 0C12.4734 0 8.19945 1.77031 4.98488 4.9848C1.77031 8.19937 0 12.4733 0 17.0193C0 19.3568 0.387601 21.5676 1.15212 23.5904C1.94137 25.6786 3.11311 27.5154 4.63479 29.0496C7.87213 32.3136 12.538 34.0388 18.1276 34.0388C18.1703 34.0388 18.2028 34.0413 18.2264 34.0443C18.396 34.5054 18.2193 36.4834 16.1736 39.7794C14.0288 43.2347 10.7892 46.5559 7.28551 48.8911C6.73429 49.2586 6.48852 49.9435 6.68048 50.5775C6.87236 51.2116 7.45672 51.6452 8.11918 51.6452C11.0143 51.6452 17.4565 49.6884 23.338 44.2975C28.2197 39.8231 34.0388 31.6508 34.0388 18.1277C34.0388 13.0159 32.2754 8.37051 29.0736 5.04719C25.9377 1.7924 21.6568 0 17.0194 0Z"
                    fill="#0B434B"
                  />
                  <path
                    d="M69.0344 5.04711C65.8986 1.79241 61.6178 0 56.9803 0C52.4343 0 48.1603 1.77031 44.9458 4.9848C41.7312 8.19937 39.9609 12.4733 39.9609 17.0193C39.9609 19.3568 40.3485 21.5676 41.1131 23.5904C41.9023 25.6786 43.074 27.5154 44.5957 29.0496C47.8331 32.3136 52.4989 34.0388 58.0886 34.0388C58.1313 34.0388 58.1638 34.0413 58.1873 34.0443C58.3569 34.5054 58.1803 36.4834 56.1345 39.7794C53.9898 43.2348 50.7502 46.5559 47.2464 48.8911C46.6952 49.2586 46.4494 49.9435 46.6414 50.5775C46.8334 51.2116 47.4177 51.6452 48.0801 51.6452C50.9753 51.6452 57.4174 49.6884 63.2989 44.2975C68.1806 39.8231 73.9998 31.6508 73.9998 18.1277C73.9997 13.0158 72.2363 8.37044 69.0344 5.04711Z"
                    fill="#0B434B"
                  />
                </svg>
                <img
                  className="review-star"
                  src={stars_review}
                  alt=""
                />
              </div>
              <p className="">
                Enrolling with Learners Education UAE has been the most
                incredible decision I've ever made. They provide a wide range of
                programmes from well regarded universities like Swiss School of
                Management. The course schedule is very adaptable and faculties
                there are quite helpful and encouraging, and they provide all of
                the essential guidance.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <img
                    className="review-user-icon"
                    src={rosette}
                    alt=""
                  />
                  <h5>Rosette Leano</h5>
                </div>
                <img
                  className="review-verified"
                  src={verified_review}
                  alt=""
                />
              </div>
            </div>
          </div>
        </Marquee>
        <Marquee speed={70} direction="right" pauseOnClick="true">
          <div className="flex gap-[15px] overflow-hidden">
            <div className="user-review-card ms-[15px]">
              <div className="flex justify-between mb-6">
                <svg
                  className="user-review-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="74"
                  height="52"
                  viewBox="0 0 74 52"
                  fill="none"
                >
                  <path
                    d="M17.0194 0C12.4734 0 8.19945 1.77031 4.98488 4.9848C1.77031 8.19937 0 12.4733 0 17.0193C0 19.3568 0.387601 21.5676 1.15212 23.5904C1.94137 25.6786 3.11311 27.5154 4.63479 29.0496C7.87213 32.3136 12.538 34.0388 18.1276 34.0388C18.1703 34.0388 18.2028 34.0413 18.2264 34.0443C18.396 34.5054 18.2193 36.4834 16.1736 39.7794C14.0288 43.2347 10.7892 46.5559 7.28551 48.8911C6.73429 49.2586 6.48852 49.9435 6.68048 50.5775C6.87236 51.2116 7.45672 51.6452 8.11918 51.6452C11.0143 51.6452 17.4565 49.6884 23.338 44.2975C28.2197 39.8231 34.0388 31.6508 34.0388 18.1277C34.0388 13.0159 32.2754 8.37051 29.0736 5.04719C25.9377 1.7924 21.6568 0 17.0194 0Z"
                    fill="#0B434B"
                  />
                  <path
                    d="M69.0344 5.04711C65.8986 1.79241 61.6178 0 56.9803 0C52.4343 0 48.1603 1.77031 44.9458 4.9848C41.7312 8.19937 39.9609 12.4733 39.9609 17.0193C39.9609 19.3568 40.3485 21.5676 41.1131 23.5904C41.9023 25.6786 43.074 27.5154 44.5957 29.0496C47.8331 32.3136 52.4989 34.0388 58.0886 34.0388C58.1313 34.0388 58.1638 34.0413 58.1873 34.0443C58.3569 34.5054 58.1803 36.4834 56.1345 39.7794C53.9898 43.2348 50.7502 46.5559 47.2464 48.8911C46.6952 49.2586 46.4494 49.9435 46.6414 50.5775C46.8334 51.2116 47.4177 51.6452 48.0801 51.6452C50.9753 51.6452 57.4174 49.6884 63.2989 44.2975C68.1806 39.8231 73.9998 31.6508 73.9998 18.1277C73.9997 13.0158 72.2363 8.37044 69.0344 5.04711Z"
                    fill="#0B434B"
                  />
                </svg>
                <img
                  className="review-star"
                  src={stars_review}
                  alt=""
                />
              </div>
              <p className="">
                Learners is the best higher education platform for working
                professionals. They are very professional when it comes to
                academics and support. Academic consultants really helped me out
                in doing my thesis and research. Thanks a lot guys. Highly
                recommended for working professionals.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <img
                    className="review-user-icon"
                    src={bijuraj}
                    alt=""
                  />
                  <h5>Bijuraj k</h5>
                </div>
                <img
                  className="review-verified"
                  src={verified_review}
                  alt=""
                />
              </div>
            </div>
            <div className="user-review-card">
              <div className="flex justify-between mb-6">
                <svg
                  className="user-review-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="74"
                  height="52"
                  viewBox="0 0 74 52"
                  fill="none"
                >
                  <path
                    d="M17.0194 0C12.4734 0 8.19945 1.77031 4.98488 4.9848C1.77031 8.19937 0 12.4733 0 17.0193C0 19.3568 0.387601 21.5676 1.15212 23.5904C1.94137 25.6786 3.11311 27.5154 4.63479 29.0496C7.87213 32.3136 12.538 34.0388 18.1276 34.0388C18.1703 34.0388 18.2028 34.0413 18.2264 34.0443C18.396 34.5054 18.2193 36.4834 16.1736 39.7794C14.0288 43.2347 10.7892 46.5559 7.28551 48.8911C6.73429 49.2586 6.48852 49.9435 6.68048 50.5775C6.87236 51.2116 7.45672 51.6452 8.11918 51.6452C11.0143 51.6452 17.4565 49.6884 23.338 44.2975C28.2197 39.8231 34.0388 31.6508 34.0388 18.1277C34.0388 13.0159 32.2754 8.37051 29.0736 5.04719C25.9377 1.7924 21.6568 0 17.0194 0Z"
                    fill="#0B434B"
                  />
                  <path
                    d="M69.0344 5.04711C65.8986 1.79241 61.6178 0 56.9803 0C52.4343 0 48.1603 1.77031 44.9458 4.9848C41.7312 8.19937 39.9609 12.4733 39.9609 17.0193C39.9609 19.3568 40.3485 21.5676 41.1131 23.5904C41.9023 25.6786 43.074 27.5154 44.5957 29.0496C47.8331 32.3136 52.4989 34.0388 58.0886 34.0388C58.1313 34.0388 58.1638 34.0413 58.1873 34.0443C58.3569 34.5054 58.1803 36.4834 56.1345 39.7794C53.9898 43.2348 50.7502 46.5559 47.2464 48.8911C46.6952 49.2586 46.4494 49.9435 46.6414 50.5775C46.8334 51.2116 47.4177 51.6452 48.0801 51.6452C50.9753 51.6452 57.4174 49.6884 63.2989 44.2975C68.1806 39.8231 73.9998 31.6508 73.9998 18.1277C73.9997 13.0158 72.2363 8.37044 69.0344 5.04711Z"
                    fill="#0B434B"
                  />
                </svg>
                <img
                  className="review-star"
                  src={stars_review}
                  alt=""
                />
              </div>
              <p className="">
                The perfect institute which believes and strives for quality.
                You couldn't find a better place to get your bba and MBA done.
                Once your at learners you dont have to search any further. When
                you meet the incredible staff and faculty you know you've found
                the right place to achieve your goal with the help of learners
                institute.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <img
                    className="review-user-icon"
                    src={gwendolyne}
                    alt=""
                  />
                  <h5>Gwendolyne Quinn</h5>
                </div>
                <img
                  className="review-verified"
                  src={verified_review}
                  alt=""
                />
              </div>
            </div>
            <div className="user-review-card">
              <div className="flex justify-between mb-6">
                <svg
                  className="user-review-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="74"
                  height="52"
                  viewBox="0 0 74 52"
                  fill="none"
                >
                  <path
                    d="M17.0194 0C12.4734 0 8.19945 1.77031 4.98488 4.9848C1.77031 8.19937 0 12.4733 0 17.0193C0 19.3568 0.387601 21.5676 1.15212 23.5904C1.94137 25.6786 3.11311 27.5154 4.63479 29.0496C7.87213 32.3136 12.538 34.0388 18.1276 34.0388C18.1703 34.0388 18.2028 34.0413 18.2264 34.0443C18.396 34.5054 18.2193 36.4834 16.1736 39.7794C14.0288 43.2347 10.7892 46.5559 7.28551 48.8911C6.73429 49.2586 6.48852 49.9435 6.68048 50.5775C6.87236 51.2116 7.45672 51.6452 8.11918 51.6452C11.0143 51.6452 17.4565 49.6884 23.338 44.2975C28.2197 39.8231 34.0388 31.6508 34.0388 18.1277C34.0388 13.0159 32.2754 8.37051 29.0736 5.04719C25.9377 1.7924 21.6568 0 17.0194 0Z"
                    fill="#0B434B"
                  />
                  <path
                    d="M69.0344 5.04711C65.8986 1.79241 61.6178 0 56.9803 0C52.4343 0 48.1603 1.77031 44.9458 4.9848C41.7312 8.19937 39.9609 12.4733 39.9609 17.0193C39.9609 19.3568 40.3485 21.5676 41.1131 23.5904C41.9023 25.6786 43.074 27.5154 44.5957 29.0496C47.8331 32.3136 52.4989 34.0388 58.0886 34.0388C58.1313 34.0388 58.1638 34.0413 58.1873 34.0443C58.3569 34.5054 58.1803 36.4834 56.1345 39.7794C53.9898 43.2348 50.7502 46.5559 47.2464 48.8911C46.6952 49.2586 46.4494 49.9435 46.6414 50.5775C46.8334 51.2116 47.4177 51.6452 48.0801 51.6452C50.9753 51.6452 57.4174 49.6884 63.2989 44.2975C68.1806 39.8231 73.9998 31.6508 73.9998 18.1277C73.9997 13.0158 72.2363 8.37044 69.0344 5.04711Z"
                    fill="#0B434B"
                  />
                </svg>
                <img
                  className="review-star"
                  src={stars_review}
                  alt=""
                />
              </div>
              <p className="">
                I recommend this institution to all those who are looking for
                the best study center in UAE. When I was in a dilemma of
                managing my job n study together, I came to know about
                Learners.. While I visited, one Mr.Tony executive of learners
                had cleared all my queries and made me confident enough to do my
                PG with my job. They provided all the study materials and
                guidelines for my Executive MBA. They have very attractive
                payment plans as well, which was surely a big concern.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <img
                    className="review-user-icon"
                    src={vaishak}
                    alt=""
                  />
                  <h5>Vaisakh Panezhath</h5>
                </div>
                <img
                  className="review-verified"
                  src={verified_review}
                  alt=""
                />
              </div>
            </div>
            <div className="user-review-card">
              <div className="flex justify-between mb-6">
                <svg
                  className="user-review-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="74"
                  height="52"
                  viewBox="0 0 74 52"
                  fill="none"
                >
                  <path
                    d="M17.0194 0C12.4734 0 8.19945 1.77031 4.98488 4.9848C1.77031 8.19937 0 12.4733 0 17.0193C0 19.3568 0.387601 21.5676 1.15212 23.5904C1.94137 25.6786 3.11311 27.5154 4.63479 29.0496C7.87213 32.3136 12.538 34.0388 18.1276 34.0388C18.1703 34.0388 18.2028 34.0413 18.2264 34.0443C18.396 34.5054 18.2193 36.4834 16.1736 39.7794C14.0288 43.2347 10.7892 46.5559 7.28551 48.8911C6.73429 49.2586 6.48852 49.9435 6.68048 50.5775C6.87236 51.2116 7.45672 51.6452 8.11918 51.6452C11.0143 51.6452 17.4565 49.6884 23.338 44.2975C28.2197 39.8231 34.0388 31.6508 34.0388 18.1277C34.0388 13.0159 32.2754 8.37051 29.0736 5.04719C25.9377 1.7924 21.6568 0 17.0194 0Z"
                    fill="#0B434B"
                  />
                  <path
                    d="M69.0344 5.04711C65.8986 1.79241 61.6178 0 56.9803 0C52.4343 0 48.1603 1.77031 44.9458 4.9848C41.7312 8.19937 39.9609 12.4733 39.9609 17.0193C39.9609 19.3568 40.3485 21.5676 41.1131 23.5904C41.9023 25.6786 43.074 27.5154 44.5957 29.0496C47.8331 32.3136 52.4989 34.0388 58.0886 34.0388C58.1313 34.0388 58.1638 34.0413 58.1873 34.0443C58.3569 34.5054 58.1803 36.4834 56.1345 39.7794C53.9898 43.2348 50.7502 46.5559 47.2464 48.8911C46.6952 49.2586 46.4494 49.9435 46.6414 50.5775C46.8334 51.2116 47.4177 51.6452 48.0801 51.6452C50.9753 51.6452 57.4174 49.6884 63.2989 44.2975C68.1806 39.8231 73.9998 31.6508 73.9998 18.1277C73.9997 13.0158 72.2363 8.37044 69.0344 5.04711Z"
                    fill="#0B434B"
                  />
                </svg>
                <img
                  className="review-star"
                  src={stars_review}
                  alt=""
                />
              </div>
              <p className="">
                Learners Education is a fantastic learning platform for students
                looking to pursue BBA or MBA. They have been very helpful and
                have guided me in my educational process. I thoroughly enjoyed
                my time studying here. I congratulate the institute on having
                such diverse, knowledgeable and experienced professors, not only
                in the classroom, but even outside the institute which brings
                such vital knowledge and experience to students and enriches
                their studies. I would definitely recommend this place to all my
                friends and family.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <img
                    className="review-user-icon"
                    src={alice}
                    alt=""
                  />
                  <h5>Alice Joanna</h5>
                </div>
                <img
                  className="review-verified"
                  src={verified_review}
                  alt=""
                />
              </div>
            </div>
          </div>
        </Marquee>
      </div>
      <div id="NewRootRoot" className="flex justify-center w-full ">
    <Link
    to='contactForm'
    // spy={true}
   smooth={true}
     duration={2800}
     delay={200}
    className=" light-effect-button button bg-[#0b434b] w-[95%] sm:w-[539px]  rounded-[56px] sm:rounded-[91px] pt-[25px] pb-[25px] text-[15px] md:text-[15px] xl:text-[23px] font-bold cursor-pointer">
      Start Your Journey Now
    </Link>
  </div>
      <Claim_description color="rgba(11, 67, 75, 0.79)" />
    </div>
  );
}

export default ReviewSection;
