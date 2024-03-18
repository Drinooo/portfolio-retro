import React from "react";
import Home from "../pages/Home";
import { Route, Routes } from "react-router-dom";
import Base from "../pages/Base";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import ScrollToTop from "./ScrollToTop";
import CaseStudy from "../pages/CaseStudy";
import Shop from "../pages/Shop";
import Product from "../pages/Product";
import Pricing from "../pages/Pricing";

const MainRoutes = () => {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Base />}>
          <Route index  element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/case-study/:id" element={<CaseStudy />} />
          <Route path="/shop/:id" element={<Product />} />
        </Route>
      </Routes>
    </ScrollToTop>
  );
};

export default MainRoutes;
