import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { NavbarComponent } from "../components/Common/NavbarComponent";
import FooterSection from "../components/Sections/FooterSection";

const Base = () => {
  return (
    <Fragment>
      <NavbarComponent />
      <div className="px-8 py-8 space-y-32">
        <Outlet />
      </div>
      <FooterSection />
    </Fragment>
  );
};

export default Base;
