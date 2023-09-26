import React, { Fragment } from "react";
import { DownloadButton, HireMeButton } from "../components/Common/ButtonComponent";

const About = () => {
  return (
    <Fragment>
      <section className="space-y-4 max-w-screen-2xl mx-auto">
        <div className="border-b-4">
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
            <p className="mb-6 sm:text-aboutMobile md:text-about">
              Hi! I am Aldrin Villalobos. I'm a web designer based in the
              Philippines. I'm passionate about crafting visually appealing and
              user-friendly websites. With a strong foundation in design
              principles, I'm eager to bring fresh perspectives to each project
              I undertake. My goal is to create engaging web experiences that
              seamlessly blend aesthetics with functionality. Let's collaborate
              to bring your vision to life and create an impactful online
              presence.
            </p>
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
      </section>
    </Fragment>
  );
};

export default About;
