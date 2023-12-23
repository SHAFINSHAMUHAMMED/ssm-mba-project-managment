import React, { useEffect, useState, Suspense, lazy } from "react";
import Header from "./components/Header/header";
import Hero from "./components/Hero/hero";
import Carousel from "./components/Carousel/ResponsiveCarousel";
import Swiss_school from "./components/why_swiss_school/swiss_school";
import Program_Highlights from "./components/Program_Highlights/program_Highlights";
import Acreditions from "./components/Acreditions/acreditions";
import Unbeatable_reason from "./components/Reason_section/unbeatable_reason";
import Power_skills from "./components/Power_skills/power_skills";
// import Uae_professionals from "./components/Uae_professionals/uae_professionals";
import Alumini_carousel from "./components/AluminiCarousel/AluminiCarousel";
import World_of_possibilities from "./components/World_of_possibilities/world_of_possibilities";
import Review_section from "./components/Reviews/review_section";
import Successful_graduates from "./components/Successful_graduates/successful_graduates";
import Steps_to_unlock_career from "./components/Steps_to_unlock_career/steps_to_unlock_career";
import Student_support from "./components/Student_support_guarantee/student_support";
import Icf_certification from "./components/Icf_certification/icf_certification";
import Footer from "./components/Footer/footer";
import StickyWhatsAppButton from "./components/WhatsappStickyLogo/StickyWhatsAppButton";
import GoogleTagManager from "./components/Google_tag_mgr/GoogleTagManager";

function App() {

  return (
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
      </div>
  );
}

export default App;
