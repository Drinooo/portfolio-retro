import React, { Fragment } from "react";
import HeroSection from "../Sections/HeroSection";
import ProjectSection from "../Sections/ProjectSection";
import AboutSection from "../Sections/AboutSection";
import TechStackSection from "../Sections/TechStackSection";
import ServicesSection from "../Sections/ServicesSection";
import ContactSection from "../Sections/ContactSection";

const Home = () => {
  return (
    <Fragment>
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ServicesSection />
      <ProjectSection />
      <ContactSection />
    </Fragment>
  );
};

export default Home;
