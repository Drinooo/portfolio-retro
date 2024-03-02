import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { NavbarComponent } from "../components/Common/NavbarComponent";
import FooterSection from "../components/Sections/FooterSection";

const Base = () => {
  return (
    <div className="max-w-screen-2xl mx-auto lg:px-12 md:px-10 px-8">
      <NavbarComponent />
      <div className="sm:space-y-24 lg:space-y-20 pb-24">
        <Outlet />
      </div>
      <FooterSection />
    </div>
  );
};

export default Base;
