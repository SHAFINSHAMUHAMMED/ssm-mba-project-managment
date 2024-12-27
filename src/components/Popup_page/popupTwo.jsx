import React, { useState, useEffect } from "react";
import MultiStepProgressBarTwo from "../Progress_bar/MultiStepProgressBarTwo";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { CSSTransition } from "react-transition-group";
import ClipLoader from "react-spinners/ClipLoader";
import { usePopup } from "../Hoocks/PopupContext";
import axios from "axios";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

import "./popupTwo.css";
import whatsppIcon from "../../assets/svg/WhatsApp_icon.svg";

function PopupTwo({ closePopup }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    jobRole: "",
    phone: "",
    countryCode: "AE",
    currentUrl: window.location.href,
    preferredMode: "",
    motivations: [],
  });
  const [isActive, setIsActive] = useState(false);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [downloadStarted, setDownloadStarted] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const { togglePopup } = usePopup(); // Assuming you use this to manage popup visibility

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsActive(true);
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const validatePhone = (phone, countryCode) => {
    const isManuallyValid = phone.length > 8;

    if (!isManuallyValid) {
      return false;
    }

    try {
      const parsedNumber = parsePhoneNumberFromString(phone, countryCode);
      return parsedNumber ? parsedNumber.isValid() : false;
    } catch (error) {
      console.error("Phone validation error:", error);
      return false;
    }
  };

  const validateName = (name) => name.length >= 3;
  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const validateJobRole = (jobRole) => jobRole.length >= 2;
  const validatePreferredMode = (preferredMode) => !!preferredMode;
  const validateMotivations = (motivations) => motivations.length > 0;

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return validateName(formData.name) && validateEmail(formData.email);
        case 2:
          return (
            validatePhone(formData.phone, formData.countryCode) &&
            validateJobRole(formData.jobRole)
          );
      case 3:
        return validatePreferredMode(formData.preferredMode);
      case 4:
        return validateMotivations(formData.motivations);
      default:
        return false;
    }
  };

  const isFormValid = () => {
    return (
      validateName(formData.name) &&
      validateEmail(formData.email) &&
      validatePhone(formData.phone, formData.countryCode) &&
      validateJobRole(formData.jobRole) &&
      validatePreferredMode(formData.preferredMode) &&
      validateMotivations(formData.motivations)
    );
  };

  useEffect(() => {
    const formComplete = isFormValid();
    setIsFormComplete(formComplete);
  }, [formData]);

  const handleNext = () => {
    if (isStepValid()) {
      setCurrentStep((prev) => (prev < 4 ? prev + 1 : prev));
    }
  };

  const handleChange = (e) => {
    if (typeof e === "string") {
      setFormData({ ...formData, phone: e });
    } else {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleExit = () => {
    setIsActive(false);
    setTimeout(() => {
      closePopup();
    }, 300);
  };

  const handleCheckboxChange = (e) => {
    const { value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      motivations: prevState.motivations.includes(value)
        ? prevState.motivations.filter((m) => m !== value)
        : [...prevState.motivations, value],
    }));
  };

  const getIPAddress = async () => {
    try {
      const response = await axios.get('https://api.ipify.org?format=json');
      return response.data.ip;
    } catch (error) {
      console.error("Failed to get IP address:", error);
      return null;
    }
  };
  if (!executeRecaptcha) {
    console.error("reCAPTCHA has not been initialized correctly");
    return;
  }

  const handleDownload = async (e) => {

    e.preventDefault();
    if (isFormValid()) {
      setIsLoading(true);
      const loaderTimeout = setTimeout(() => setIsLoading(false), 3000);

      try {
        const token = await executeRecaptcha("submit");

        if (!token) {
          alert("Please complete the reCAPTCHA.");
          setIsLoading(false);
          return;
        }

        // Send the token to the server for verification
        const response = await axios.post(
          "https://googlerecaptchaserver.onrender.com/verify-recaptcha",
          {
            token,
          }
        );
        // console.log(response)
        if (response.data.success) {
        const ipAddress = await getIPAddress();
        const dataToSend = { ...formData, ipAddress };
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "Download Brochure",
          form_id: "Download Brochure Form",
          email: formData.email,
          eventModel: {
            form_id: "Download Brochure Form",
          },
        });

        const webhookResponse = await axios.post(
          // SSM MBA Landing Page Brochure Download work flow
          "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjUwNTY5MDYzNzA0M2M1MjY0NTUzZDUxMzci_pc",
          dataToSend,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        clearTimeout(loaderTimeout);
        setIsLoading(false);
        setDownloadStarted(true);
        window.location.href = "https://offer.learnersuae.com/brochure-thank-you/";
      } else {
        alert("reCAPTCHA verification failed. Please try again.");
        setIsLoading(false);
      }
      } catch (error) {
        console.error("Error posting form data:", error);
        clearTimeout(loaderTimeout);
        setIsLoading(false);
      }
    }
  };

  return (
    <CSSTransition
      in={isActive}
      timeout={300}
      classNames="popup"
      unmountOnExit
      onExit={() => {
        setIsActive(false);
        closePopup();
      }}
    >
      <div className="popup2-main">
        <svg
          className="popup2-close-button cursor-pointer"
          onClick={handleExit}
          xmlns="http://www.w3.org/2000/svg"
          width="27"
          height="28"
          viewBox="0 0 27 28"
          fill="none"
        >
          <path
            d="M13.5 15.6493L2.56271 26.5866C2.42454 26.728 2.25848 26.839 2.07508 26.9127C1.89168 26.9864 1.69495 27.0212 1.49741 27.0147C1.20184 27.012 0.913575 26.9225 0.668369 26.7575C0.423163 26.5924 0.231802 26.359 0.118018 26.0862C0.00423443 25.8134 -0.0269657 25.5132 0.0282868 25.2228C0.0835393 24.9325 0.222814 24.6647 0.428838 24.4528L11.3661 13.5155L0.428838 2.57817C0.287493 2.44 0.176442 2.27394 0.102744 2.09054C0.0290463 1.90714 -0.00568534 1.71041 0.000757085 1.51287C-0.00370885 1.3151 0.031951 1.11848 0.105584 0.934881C0.179216 0.751281 0.289294 0.584507 0.429171 0.444631C0.569047 0.304754 0.735821 0.194676 0.919421 0.121044C1.10302 0.0474109 1.29964 0.011751 1.49741 0.016217C1.69495 0.00977454 1.89168 0.0445062 2.07508 0.118204C2.25848 0.191902 2.42454 0.302953 2.56271 0.444297L13.5 11.3816L24.4373 0.444297C24.6468 0.231912 24.9151 0.0870004 25.2076 0.0281671C25.5001 -0.0306661 25.8035 -0.000736082 26.0788 0.114115C26.3542 0.228966 26.5889 0.423497 26.7529 0.672732C26.917 0.921967 27.0027 1.21453 26.9992 1.51287C27.0057 1.71041 26.971 1.90714 26.8973 2.09054C26.8236 2.27394 26.7125 2.44 26.5712 2.57817L15.6339 13.5155L26.5712 24.4528C26.8387 24.7388 26.9845 25.1176 26.978 25.5092C26.9714 25.9008 26.8129 26.2745 26.536 26.5515C26.2591 26.8284 25.8853 26.9869 25.4938 26.9934C25.1022 27 24.7234 26.8541 24.4373 26.5866L13.5 15.6493Z"
            fill="#84BC95"
            fillOpacity="0.86"
          />
        </svg>
          <div className="popup2-sub">
            <h1 className="popup2-main-h1">
              Get Instant Access To The SSM MBA Brochure
            </h1>
            <p className="popup2-main-description">
              Get an inside look at our prestigious programs, faculty, and the
              unique benefits that set us apart in the business education
              landscape.
            </p>
            <MultiStepProgressBarTwo currentStep={currentStep} />

            {currentStep === 1 && (
              <div className="form-row">
                <label htmlFor="Name">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <label htmlFor="Name">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            )}

            {currentStep === 2 && (
              <div className="form-row">
                <label htmlFor="Name">Phone</label>
                <PhoneInput
                country={formData.countryCode.toLowerCase()}
                value={formData.phone}
                placeholder="Enter your Phone Number"
                excludeCountries={["in", "pk"]}
                onChange={(value, country) =>
                  setFormData({
                    ...formData,
                    phone: value,
                    countryCode: country.countryCode.toUpperCase(),
                  })
                }
              />
                <label htmlFor="Name">Job Role</label>
                <input
                  type="text"
                  name="jobRole"
                  placeholder="Job Role"
                  value={formData.jobRole}
                  onChange={handleChange}
                />
              </div>
            )}

            {currentStep === 3 && (
              <div className="preferred-mode-container">
                <h4>Preferred Mode Of Study</h4>
                <div className="preferred-mode-group">
                  <label
                    className={`preferred-mode ${
                      formData.preferredMode === "Online" ? "selected" : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <circle cx="15" cy="15" r="15" fill="#EDE6D8" />
                      {formData.preferredMode === "Online" && (
                        <path
                          d="M8 14.9565L12.5435 19.5L22.0435 10"
                          stroke="#259D4A"
                          strokeWidth="3.30435"
                        />
                      )}
                    </svg>
                    <input
                      type="radio"
                      name="preferredMode"
                      value="Online"
                      checked={formData.preferredMode === "Online"}
                      onChange={handleChange}
                    />
                    <p>Online</p>
                  </label>

                  <label
                    className={`preferred-mode ${
                      formData.preferredMode === "Blended" ? "selected" : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <circle cx="15" cy="15" r="15" fill="#EDE6D8" />
                      {formData.preferredMode === "Blended" && (
                        <path
                          d="M8 14.9565L12.5435 19.5L22.0435 10"
                          stroke="#259D4A"
                          strokeWidth="3.30435"
                        />
                      )}
                    </svg>
                    <input
                      type="radio"
                      name="preferredMode"
                      value="Blended"
                      checked={formData.preferredMode === "Blended"}
                      onChange={handleChange}
                    />
                    <p>Blended</p>
                  </label>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="motivations-container">
                <h4>What is your biggest Motivation to enroll in mba</h4>
                <div className="motivations-group">
                  <label
                    className={`motivations-option ${
                      formData.motivations.includes("To Get Higher-Paying Job")
                        ? "selected"
                        : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <circle cx="15" cy="15" r="15" fill="#EDE6D8" />
                      {formData.motivations.includes(
                        "To Get Higher-Paying Job"
                      ) && (
                        <path
                          d="M8 14.9565L12.5435 19.5L22.0435 10"
                          stroke="#259D4A"
                          strokeWidth="3.30435"
                        />
                      )}
                    </svg>
                    <input
                      type="checkbox"
                      name="motivations"
                      value="To Get Higher-Paying Job"
                      checked={formData.motivations.includes(
                        "To Get Higher-Paying Job"
                      )}
                      onChange={handleCheckboxChange}
                    />
                    <p>To Get Higher-Paying Job</p>
                  </label>

                  <label
                    className={`motivations-option ${
                      formData.motivations.includes("Increased Job Security")
                        ? "selected"
                        : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <circle cx="15" cy="15" r="15" fill="#EDE6D8" />
                      {formData.motivations.includes(
                        "Increased Job Security"
                      ) && (
                        <path
                          d="M8 14.9565L12.5435 19.5L22.0435 10"
                          stroke="#259D4A"
                          strokeWidth="3.30435"
                        />
                      )}
                    </svg>
                    <input
                      type="checkbox"
                      name="motivations"
                      value="Increased Job Security"
                      checked={formData.motivations.includes(
                        "Increased Job Security"
                      )}
                      onChange={handleCheckboxChange}
                    />
                    <p>Increased Job Security</p>
                  </label>

                  {/* Add more labels for other motivations following the same pattern */}
                  <label
                    className={`motivations-option ${
                      formData.motivations.includes("Move to Another Industry")
                        ? "selected"
                        : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <circle cx="15" cy="15" r="15" fill="#EDE6D8" />
                      {formData.motivations.includes(
                        "Move to Another Industry"
                      ) && (
                        <path
                          d="M8 14.9565L12.5435 19.5L22.0435 10"
                          stroke="#259D4A"
                          strokeWidth="3.30435"
                        />
                      )}
                    </svg>
                    <input
                      type="checkbox"
                      name="motivations"
                      value="Move to Another Industry"
                      checked={formData.motivations.includes(
                        "Move to Another Industry"
                      )}
                      onChange={handleCheckboxChange}
                    />
                    <p>Move to Another Industry</p>
                  </label>

                  <label
                    className={`motivations-option ${
                      formData.motivations.includes("Start own business")
                        ? "selected"
                        : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <circle cx="15" cy="15" r="15" fill="#EDE6D8" />
                      {formData.motivations.includes("Start own business") && (
                        <path
                          d="M8 14.9565L12.5435 19.5L22.0435 10"
                          stroke="#259D4A"
                          strokeWidth="3.30435"
                        />
                      )}
                    </svg>
                    <input
                      type="checkbox"
                      name="motivations"
                      value="Start own business"
                      checked={formData.motivations.includes(
                        "Start own business"
                      )}
                      onChange={handleCheckboxChange}
                    />
                    <p>Start own business</p>
                  </label>

                  <label
                    className={`motivations-option ${
                      formData.motivations.includes("Promotion in Same Company")
                        ? "selected"
                        : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <circle cx="15" cy="15" r="15" fill="#EDE6D8" />
                      {formData.motivations.includes(
                        "Promotion in Same Company"
                      ) && (
                        <path
                          d="M8 14.9565L12.5435 19.5L22.0435 10"
                          stroke="#259D4A"
                          strokeWidth="3.30435"
                        />
                      )}
                    </svg>
                    <input
                      type="checkbox"
                      name="motivations"
                      value="Promotion in Same Company"
                      checked={formData.motivations.includes(
                        "Promotion in Same Company"
                      )}
                      onChange={handleCheckboxChange}
                    />
                    <p>Promotion in Same Company</p>
                  </label>

                  <label
                    className={`motivations-option ${
                      formData.motivations.includes("Migration")
                        ? "selected"
                        : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <circle cx="15" cy="15" r="15" fill="#EDE6D8" />
                      {formData.motivations.includes("Migration") && (
                        <path
                          d="M8 14.9565L12.5435 19.5L22.0435 10"
                          stroke="#259D4A"
                          strokeWidth="3.30435"
                        />
                      )}
                    </svg>
                    <input
                      type="checkbox"
                      name="motivations"
                      value="Migration"
                      checked={formData.motivations.includes("Migration")}
                      onChange={handleCheckboxChange}
                    />
                    <p>Migration</p>
                  </label>

                  <label
                    className={`motivations-option ${
                      formData.motivations.includes(
                        "Expand My Skills & Knowledge"
                      )
                        ? "selected"
                        : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <circle cx="15" cy="15" r="15" fill="#EDE6D8" />
                      {formData.motivations.includes(
                        "Expand My Skills & Knowledge"
                      ) && (
                        <path
                          d="M8 14.9565L12.5435 19.5L22.0435 10"
                          stroke="#259D4A"
                          strokeWidth="3.30435"
                        />
                      )}
                    </svg>
                    <input
                      type="checkbox"
                      name="motivations"
                      value="Expand My Skills & Knowledge"
                      checked={formData.motivations.includes(
                        "Expand My Skills & Knowledge"
                      )}
                      onChange={handleCheckboxChange}
                    />
                    <p>Expand My Skills & Knowledge</p>
                  </label>

                  <label
                    className={`motivations-option ${
                      formData.motivations.includes("Other") ? "selected" : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <circle cx="15" cy="15" r="15" fill="#EDE6D8" />
                      {formData.motivations.includes("Other") && (
                        <path
                          d="M8 14.9565L12.5435 19.5L22.0435 10"
                          stroke="#259D4A"
                          strokeWidth="3.30435"
                        />
                      )}
                    </svg>
                    <input
                      type="checkbox"
                      name="motivations"
                      value="Other"
                      checked={formData.motivations.includes("Other")}
                      onChange={handleCheckboxChange}
                    />
                    <p>Other</p>
                  </label>
                </div>
              </div>
            )}

            <div className="btn2">
              {currentStep < 4 ? (
                <div
                  onClick={isStepValid() ? handleNext : null}
                  className={`cont-button ${!isStepValid() ? "disabled" : ""}`}
                >
                  <button disabled={!isStepValid()}>Continue</button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="16"
                    viewBox="0 0 45 16"
                    fill="none"
                  >
                    <path
                      d="M43.89 8.70711C44.2805 8.31658 44.2805 7.68342 43.89 7.29289L37.526 0.928932C37.1355 0.538408 36.5024 0.538408 36.1118 0.928932C35.7213 1.31946 35.7213 1.95262 36.1118 2.34315L41.7687 8L36.1118 13.6569C35.7213 14.0474 35.7213 14.6805 36.1118 15.0711C36.5024 15.4616 37.1355 15.4616 37.526 15.0711L43.89 8.70711ZM0 9H43.1829V7H0V9Z"
                      fill="white"
                    />
                  </svg>
                </div>
              ) : (
                isFormValid() && (
                  <button className="cont-button" onClick={handleDownload}>
                    {isLoading ? (
                      <ClipLoader color={"#ffffff"} size={20} />
                    ) : (
                      "Download my free brochure"
                    )}
                  </button>
                )
              )}
              <p>
                🔒 We respect your privacy & promise never to rent or share your
                details with anybody without your consent
              </p>
            </div>
          </div>
      </div>
    </CSSTransition>
  );
}

export default PopupTwo;
