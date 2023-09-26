import React, { Fragment } from "react";
import HeroSection from "../components/Sections/HeroSection";
import ContactSection from "../components/Sections/ContactSection";
import { AboutSection } from "../components/Sections/AboutSection";
import { TechStackSection } from "../components/Sections/TechStackSection";
import ServicesSection from "../components/Sections/ServicesSection";
import { ProjectSection } from "../components/Sections/ProjectSection";

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
