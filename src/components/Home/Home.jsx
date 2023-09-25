import React, { Fragment } from "react";
import HeroSection from "../Sections/HeroSection";
import ProjectSection from "../Sections/ProjectSection";
import AboutSection from "../Sections/AboutSection";
import TechStackSection from "../Sections/TechStackSection";
import ServicesSection from "../Sections/ServicesSection";

const Home = () => {
  return (
    <Fragment>
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ServicesSection />
      <ProjectSection />
    </Fragment>
  );
};

export default Home;
