import React, { Fragment } from "react";
import HeroSection from "../components/Sections/HeroSection";
import ContactSection from "../components/Sections/ContactSection";
import { AboutSection } from "../components/Sections/AboutSection";

import ServicesSection from "../components/Sections/ServicesSection";
import { ProjectSection } from "../components/Sections/ProjectSection";
import TechStackSection from "../components/Sections/TechStackSection";
import ClientsSection from "../components/Sections/ClientsSection";
import CTASection from "../components/Sections/CTASection";

const Home = () => {
  return (
    <Fragment>
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ServicesSection />
      <ClientsSection />
      <ProjectSection />
      {/* <ContactSection /> */}
      <CTASection />
    </Fragment>
  );
};

export default Home;
