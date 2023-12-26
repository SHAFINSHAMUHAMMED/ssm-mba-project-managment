import React, { useState, useEffect } from "react";
import './popup.css'
import { usePopup } from "../Hoocks/PopupContext";
import ClipLoader from "react-spinners/ClipLoader";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { CSSTransition } from "react-transition-group";

import whatsppIcon from '../../assets/svg/WhatsApp_icon.svg'
import popImg from '../../assets/popup-img.webp'
import popImgMob from '../../assets/popup-img-mob.webp'


function popup({ closePopup }) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState({});
  const { togglePopup } = usePopup();
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [downloadStarted, setDownloadStarted] = useState(false);

  useEffect(() => {
    // Add delay to active popup animation
    const timeout = setTimeout(() => {
      setIsActive(true);
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  const handleExit = () => {
    setIsActive(false);
    setTimeout(() => {
      closePopup();
    }, 300);
  };

  const validate = () => {
    let tempErrors = {};
    let formIsValid = true;

    if (!formData.name) {
      formIsValid = false;
      tempErrors["name"] = "Cannot be empty";
    } else if (formData.name.length < 3 || formData.name.length > 25) {
      formIsValid = false;
      tempErrors["name"] = "Name must be between 3 and 25 characters";
    }

    // Email validation
    if (!formData.email) {
      formIsValid = false;
      tempErrors["email"] = "Cannot be empty";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formIsValid = false;
      tempErrors["email"] = "Email is not valid";
    }
    // Phone validation
    const digits = formData.phone.replace(/\D/g, "");
    if (!formData.phone.trim()) {
      console.log("errrrr1");

      formIsValid = false;
      tempErrors["phone"] = "WhatsApp number is required";
    } else if (digits.length > 15) {
      formIsValid = false;
      tempErrors["phone"] = "Phone number is too long";
    } else if (digits.length < 8) {
      formIsValid = false;
      tempErrors["phone"] = "Phone number is too short";
    }

    setErrors(tempErrors);
    return formIsValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const processedValue = name === "phone" ? value.toString() : value;
    setFormData({ ...formData, [name]: processedValue });
  };

  useEffect(() => {
    const formComplete =
      formData.name.trim() !== "" &&
      formData.name.trim().length > 2 &&
      /\S+@\S+\.\S+/.test(formData.email) &&
      /^\d{8,}$/.test(formData.phone.replace(/\D/g, ""));
    console.log(formData.phone);
    setIsFormComplete(formComplete); // Update isFormComplete state
  }, [formData.name, formData.email, formData.phone]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsLoading(true);
      const loaderTimeout = setTimeout(() => setIsLoading(false), 3000);

      try {
        const response = await fetch(
          "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjUwNTY5MDYzNzA0M2M1MjY0NTUzZDUxMzci_pc",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (response.ok) {
          // downloadPdf("images/SSM MBA.pdf");
          clearTimeout(loaderTimeout);
          setIsLoading(false);
          setDownloadStarted(true);
          // closePopup();
        } else {
          console.error("Server error");
          clearTimeout(loaderTimeout);
          setIsLoading(false); // Hide loader
        }
      } catch (error) {
        console.error("Network error:", error);
        clearTimeout(loaderTimeout);
        setIsLoading(false); // Hide loader
      }
    }
  };

  return (
    <CSSTransition
      in={isActive}
      timeout={200}
      classNames="popupp"
      unmountOnExit
      onExit={handleExit}
    >
      <div className={`popup-main`}>
        <svg
          className="popup-close-button cursor-pointer"
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
            fill-opacity="0.86"
          />
        </svg>
        {!downloadStarted ? (
          <div>
            <h1>Get Instant Access To The SSM MBA Brochure</h1>
            <p className="popup-main-description">
              Get an inside look at our prestigious programs, faculty, and the
              unique benefits that set us apart in the business education
              landscape.
            </p>
            <div className="popup-sub">
              <form className="popup-form" onSubmit={handleSubmit}>
                <h5>Name</h5>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name here"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <p
                    className="error"
                    style={{
                      color: "#8e9abe",
                      fontSize: "15px",
                      marginTop: "5px",
                      lineHeight: "20px",
                    }}
                  >
                    {errors.name}
                  </p>
                )}
                <h5>Email</h5>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your Email here"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p
                    className="error"
                    style={{ color: "red", fontSize: "15px", marginTop: "5px" }}
                  >
                    {errors.email}
                  </p>
                )}
                <h5>Phone</h5>
                <PhoneInput
                  country={"ae"}
                  value={formData.phone}
                  placeholder={"Enter your Phone Number"}
                  onChange={(phone) =>
                    setFormData({ ...formData, phone: phone })
                  }
                />
                <button
                  type="submit"
                  disabled={!isFormComplete}
                  style={{
                    backgroundColor: isFormComplete ? "#259D4A" : "#cccccc",
                    color: isFormComplete ? "white" : "grey",
                    cursor: isFormComplete ? "pointer" : "not-allowed",
                    // other styles
                  }}
                >
                  {isLoading ? (
                    <ClipLoader color={"#ffffff"} size={20} />
                  ) : (
                    "Download My Free Brochure"
                  )}
                </button>
                <p>
                  🔒 We respect your privacy & promise never to rent or share
                  your details with anybody without your consent
                </p>
              </form>
              <div className="popup-img">
                <img
                  className="popup-img-desktop"
                  src={popImg}
                  alt=""
                />
                <img
                  className="popup-img-mob"
                  src={popImgMob}
                  alt=""
                />
              </div>
            </div>
          </div>
        ) : (
          <CSSTransition
            in={downloadStarted}
            timeout={1000}
            classNames="fades"
            unmountOnExit
          >
            <div className="popup-thank-you">
              <h2>
                <span className="text-[#4FD97A]">Thank You</span> for Requesting
                Our Brochure!
              </h2>
              <p>
                Your brochure will be sent to your email and WhatsApp inbox
                within the next 5 minutes. For immediate assistance or any
                queries, please click the button below to chat with us directly.
              </p>
              <a
                href="https://wa.me/+971504181328"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="thank-you-button">
                  <img src={whatsppIcon} alt="whatsapp_img" />
                  <h6>Chat With Us</h6>
                </div>
              </a>
            </div>
          </CSSTransition>
        )}
      </div>
    </CSSTransition>
  );
}

export default popup;
