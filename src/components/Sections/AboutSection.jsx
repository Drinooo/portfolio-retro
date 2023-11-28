import React, { Fragment, useRef } from "react";
import { DownloadButton } from "../Common/ButtonComponent";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const AboutSection = () => {
  const elementRef = useRef();

  return (
    <Fragment>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <section
          className="space-y-4 max-w-screen-2xl mx-auto"
          ref={elementRef}
        >
          <div className="border-b-4">
            <h2 className="mb-0 sm:text-h6Mobile md:text-h6 tracking-tight font-normal text-gray-900 dark:text-white border-t-4 border-r-4 border-l-4 w-fit px-5 py-2">
              About
            </h2>
          </div>

          <div className="grid sm:grid-cols-1 xl:grid-cols-2 items-center border-4 shadow-aboutShadow">
            <div className="xl:border-r-4 xl:border-b-0 sm:border-b-4 p-10 h-full flex items-center">
              <img
                src="/images/Aldrin Villalobos.png"
                alt="mockup"
                className="w-full"
              />
            </div>
            <div className="lg:p-10 sm:p-5">
              <p className="mb-6 sm:text-aboutMobile md:text-about">
                Hi! I am Aldrin Villalobos. I am a Web Designer, UI/UX Designer
                and Front-End Developer based in the Philippines. I'm passionate
                about crafting visually appealing and user-friendly websites.
                With a strong foundation in design principles, I'm eager to
                bring fresh perspectives to each project I undertake. My goal is
                to create engaging web experiences that seamlessly blend
                aesthetics with functionality. Let's collaborate to bring your
                vision to life and create an impactful online presence.
              </p>
              <div className="">
                <div>
                  <Link to={"/Aldrin Villalobos CV.pdf"} target="_blank">
                    <DownloadButton>Download Resume</DownloadButton>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </Fragment>
  );
};
