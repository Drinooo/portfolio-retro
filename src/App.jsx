import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "@material-tailwind/react";
import { NavbarComponent } from "./components/Common/NavbarComponent";
import HeroSection from "./components/Sections/HeroSection";
import FooterSection from "./components/Sections/FooterSection";
import Home from "./components/Home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-beige">
        <NavbarComponent />
        <Home />
        <FooterSection />
      </div>
    </>
  );
}

export default App;
