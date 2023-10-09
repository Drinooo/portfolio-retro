import React, { Fragment } from "react";
import {
  DownloadButton,
  HireMeButton,
} from "../components/Common/ButtonComponent";
import TechStackSection from "../components/Sections/TechStackSection";
import ServicesSection from "../components/Sections/ServicesSection";
import ClientsSection from "../components/Sections/ClientsSection";
import CTASection from "../components/Sections/CTASection";
import { Typography } from "@material-tailwind/react";

const About = () => {
  return (
    <Fragment>
      <section className="space-y-20 max-w-screen-2xl mx-auto">
        <div className="border-b-4 flex justify-between">
          <h2 className="mb-0 sm:text-h6Mobile md:text-h6 tracking-tight font-semibold text-gray-900 dark:text-white border-t-4 border-r-4 border-l-4 w-fit p-2">
            About
          </h2>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="border-4 border-black">
            <img
              src="/images/Joshua.png"
              alt="mockup"
              className="border-b-4 border-black w-screen"
            />
            <div className="border-gray border-8"></div>
          </div>
          <div>
            <Typography className="md:text-about sm:text-aboutMobile font-normal">
              Hi! I'm
            </Typography>
            <Typography className="text-h3 font-semibold">
              Aldrin Villalobos
            </Typography>
            <Typography className="mb-6 sm:text-aboutMobile md:text-about font-normal">
              I'm a web designer, UI/UX designer and front-end developer from
              the Philippines with one year of experience in design and
              development. I've worked with various clients, from small
              businesses to international companies. Beyond client work, I'm
              active on Instagram, Facebook, and LinkedIn, sharing my journey
              and projects. I'm passionate about helping others, and I'm excited
              to collaborate with you. Whether you need help building your brand
              or want someone to brainstorm ideas with, I'm here for you. No
              matter where you are in the world, I can bring your ideas to life,
              whether we work together in person or remotely. I'm here to listen
              to your challenges, work on solving them step by step, and
              celebrate your success with you.
            </Typography>
            <div className="flex sm:flex-col md:flex-row items-center gap-4">
              <div>
                <HireMeButton>Hire Me</HireMeButton>
              </div>
              <div>
                <DownloadButton>Download Resume</DownloadButton>
              </div>
            </div>
          </div>
        </div>

        <TechStackSection />
        <ServicesSection />
        <ClientsSection />
        <CTASection />
      </section>
    </Fragment>
  );
};

export default About;
