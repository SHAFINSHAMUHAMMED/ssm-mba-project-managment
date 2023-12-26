import React, { createContext, useState, useContext } from "react";
import Overlay from "./Overlay";

const PopupContext = createContext();

export const usePopup = () => useContext(PopupContext);

export const PopupProvider = ({ children }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    console.log("dfdfdfd");
    setIsPopupOpen(!isPopupOpen);
    document.body.style.overflow = isPopupOpen ? "unset" : "hidden";
  };
  const showExitIntentPopup = () => {
    if (!isPopupOpen) {
      setIsPopupOpen(true);
      document.body.style.overflow = "hidden";
    }
  };
  return (
    <PopupContext.Provider
      value={{ isPopupOpen, togglePopup, showExitIntentPopup }}
    >
      {isPopupOpen && <Overlay />}
      {children}
    </PopupContext.Provider>
  );
};
