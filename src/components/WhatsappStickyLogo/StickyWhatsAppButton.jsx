import React from 'react';
import whatspp_icon from "../../assets/svg/whatsapp-chat.svg";

function StickyWhatsAppButton() {

  const handleClick = () => {
    window.open ("https://api.whatsapp.com/send?phone=971503772675&text=Hello%2C%20I%20am%20looking%20for%20more%20information%20about%20your%20MBA%20program.",'_blank');
  }

  return (
    <div className="sticky-whatsapp-button" onClick={handleClick}>
      <img src={whatspp_icon} alt="whatsapp-icon" />
    </div>
  );
}

export default StickyWhatsAppButton;
