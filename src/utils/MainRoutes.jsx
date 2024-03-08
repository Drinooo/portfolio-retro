import React from "react";
import Home from "../pages/Home";
import { Route, Routes } from "react-router-dom";
import Base from "../pages/Base";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import ScrollToTop from "./ScrollToTop";
import Loader from "./Loader";
import CaseStudy from "../pages/CaseStudy";
import Shop from "../pages/Shop";

const MainRoutes = () => {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Base />}>
          <Route index  element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/case-study/:id" element={<CaseStudy />} />
        </Route>
      </Routes>
    </ScrollToTop>
  );
};

export default MainRoutes;
