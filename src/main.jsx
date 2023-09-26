import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects.jsx";
import Home from "./pages/Home.jsx";
import { NavbarComponent } from "./components/Common/NavbarComponent.jsx";
import FooterSection from "./components/Sections/FooterSection.jsx";
import MainRoutes from "./utils/MainRoutes.jsx";
import Base from "./pages/Base.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
