import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { NavbarComponent } from "../components/Common/NavbarComponent";
import FooterSection from "../components/Sections/FooterSection";

const Base = () => {
  return (
    <Fragment>
      <NavbarComponent />
      <div className="px-8 sm:space-y-24 lg:space-y-48 pb-24 bg-beige">
        <Outlet />
      </div>
      <FooterSection />
    </Fragment>
  );
};

export default Base;
