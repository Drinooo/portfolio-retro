import React from "react";
import Home from "../pages/Home";
import { NavbarComponent } from "../components/Common/NavbarComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "../pages/Base";
import Projects from "../pages/Projects";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ScrollToTop from "./ScrollToTop";

const MainRoutes = () => {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Base />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </ScrollToTop>
  );
};

export default MainRoutes;
