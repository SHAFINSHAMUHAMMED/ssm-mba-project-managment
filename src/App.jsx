import React, { useState, useEffect, Suspense } from 'react';
import { debounce } from 'lodash';
import { ClipLoader } from 'react-spinners';
import { PopupProvider, usePopup } from './components/Hoocks/PopupContext';

// Lazy loading components
const Header = React.lazy(() => import('./components/Header/header'));
const Hero = React.lazy(() => import('./components/Hero/hero'));
const Carousel = React.lazy(() => import('./components/Carousel/ResponsiveCarousel'));
const Swiss_school = React.lazy(() => import('./components/why_swiss_school/swiss_school'));
const Program_Highlights = React.lazy(() => import('./components/Program_Highlights/program_Highlights'));
const Acreditions = React.lazy(() => import('./components/Acreditions/acreditions'));
const Unbeatable_reason = React.lazy(() => import('./components/Reason_section/unbeatable_reason'));
const Power_skills = React.lazy(() => import('./components/Power_skills/power_skills'));
const Alumini_carousel = React.lazy(() => import('./components/AluminiCarousel/AluminiCarousel'));
const World_of_possibilities = React.lazy(() => import('./components/World_of_possibilities/world_of_possibilities'));
const Review_section = React.lazy(() => import('./components/Reviews/review_section'));
const Successful_graduates = React.lazy(() => import('./components/Successful_graduates/successful_graduates'));
const Steps_to_unlock_career = React.lazy(() => import('./components/Steps_to_unlock_career/steps_to_unlock_career'));
const Student_support = React.lazy(() => import('./components/Student_support_guarantee/student_support'));
const Icf_certification = React.lazy(() => import('./components/Icf_certification/icf_certification'));
const Footer = React.lazy(() => import('./components/Footer/footer'));
const StickyWhatsAppButton = React.lazy(() => import('./components/WhatsappStickyLogo/StickyWhatsAppButton'));
const Popup = React.lazy(() => import('./components/Popup_page/popup2'));
const GoogleTagManager = React.lazy(() => import("./components/Google_tag_mgr/GoogleTagManager"));

function App() {
  const { isPopupOpen, togglePopup } = usePopup();
  const [exitIntentTriggered, setExitIntentTriggered] = useState(false);

  useEffect(() => {
    const handleMouseMove = debounce((e) => {
      if (e.clientY <= 50 && !isPopupOpen && !exitIntentTriggered) {
        setExitIntentTriggered(true);
        togglePopup();
      }
    }, 100);
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      handleMouseMove.cancel();
    };
  }, [togglePopup, isPopupOpen, exitIntentTriggered]);

  const handleClosePopup = () => {
    togglePopup();
    setExitIntentTriggered(false);
  };

  return (
    <PopupProvider>
        <Suspense fallback={
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <ClipLoader color={"#123abc"} size={50} />
          </div>
        }>
      <div className="body">
        <GoogleTagManager/>
        <Header />
        <Hero />
        <StickyWhatsAppButton/>
        <Carousel />
        <Swiss_school />
        <Program_Highlights />
        <Acreditions />
        {/* <Unbeatable_reason /> */}
        <Power_skills />

        {/* <Uae_professionals /> */}
        
        <Alumini_carousel />
        <World_of_possibilities />
        <Review_section />
        <Successful_graduates />
        <Steps_to_unlock_career />
        <Student_support />
        <Icf_certification />
        <Footer />
    {isPopupOpen && <Popup closePopup={handleClosePopup} />}
      </div>
      </Suspense>
      </PopupProvider>
  );
}

export default App;
