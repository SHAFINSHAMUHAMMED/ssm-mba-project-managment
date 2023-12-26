import React, { useState, useEffect } from "react";
import logo from "../../assets/svg/logo.svg"

function header() {
  const [showStickyDiv, setShowStickyDiv] = useState(false);
  
  function debounce(func, wait) {
    let timeout;

    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  useEffect(() => {
    const debouncedHandleScroll = debounce(handleScroll, 10); // Adjust debounce time (ms) as needed
    window.addEventListener("scroll", debouncedHandleScroll);
    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowStickyDiv(true);
    } else {
      setShowStickyDiv(false);
    }
  };
  return (
    <>
      {showStickyDiv && (
        <header className="header-section-2 bg-white" >
          <div className="header-section-2-sub ">
            <img
              className="header-section-2-logo"
              src={logo}
              alt="logo"
            />
            <div className="header-section-2-contact">
              <a href="tel:+971 50 418 1328">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="43"
                  height="44"
                  viewBox="0 0 43 44"
                  fill="none"
                >
                  <circle
                    cx="21.2823"
                    cy="21.8438"
                    r="20.7986"
                    stroke="#0B434B"
                    stroke-width="0.967378"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M23.8349 31.4928C24.8562 32.1508 26.0719 32.4394 27.28 32.3106C28.4883 32.1813 29.6159 31.6422 30.4751 30.783L31.2249 30.0352C31.5567 29.6995 31.7427 29.2465 31.7427 28.7745C31.7427 28.3025 31.5567 27.8496 31.2249 27.5139L28.0718 24.3807C27.7394 24.0496 27.2893 23.8637 26.8201 23.8637C26.3509 23.8637 25.9009 24.0496 25.5685 24.3807C25.2327 24.7125 24.7798 24.8985 24.3078 24.8985C23.8358 24.8985 23.3829 24.7125 23.0472 24.3807L18.0225 19.3561C17.6902 19.0203 17.5037 18.5669 17.5037 18.0944C17.5037 17.6219 17.6902 17.1686 18.0225 16.8328C18.353 16.5004 18.5386 16.0508 18.5386 15.5821C18.5386 15.1134 18.353 14.6638 18.0225 14.3314L14.9873 11.1783C14.6516 10.8465 14.1987 10.6605 13.7267 10.6605C13.2547 10.6605 12.8017 10.8465 12.466 11.1783L11.7162 11.9281C10.8424 12.7752 10.2856 13.8963 10.1386 15.1044C9.99156 16.3124 10.2633 17.5344 10.9085 18.5663C14.3444 23.6675 18.7337 28.0568 23.8349 31.4928Z"
                    fill="#EE9B4E"
                  />
                </svg>
              </a>
              <div>
                <p className="text-[#10351B] text-[15px] font-normal">
                  Have Questions?
                </p>
                <h3 className="text-[27px] font-bold">
                  {" "}
                  <a href="tel:+971 50 418 1328">+971 50 418 1328</a>
                </h3>
              </div>
            </div>
          </div>
        </header>
      )}
    </>
  );
}

export default header;
