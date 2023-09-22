import React, { Fragment } from "react";
import HeroSection from "../Sections/HeroSection";
import ProjectSection from "../Sections/ProjectSection";
import AboutSection from "../Sections/AboutSection";

const Home = () => {
  return (
    <Fragment>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
    </Fragment>
  );
};

export default Home;
