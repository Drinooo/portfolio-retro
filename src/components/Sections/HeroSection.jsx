import React, { Fragment } from "react";
import { motion } from "framer-motion";
import { DownloadButton } from "../Common/ButtonComponent";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <Fragment>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <section className="">
          <div className="grid max-w-screen-2xl mx-auto lg:gap-8 xl:gap-24 lg:py-0 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-6">
              <h1 className="max-w-2xl mb-4 font-[700] tracking-wide leading-25 sm:text-h1Mobile lg:text-h1 dark:text-white">
                Hi, I'm Aldrin Villalobos
              </h1>
              <p className="max-w-2xl mb-6 font-[400] tracking-tighter leading-11 lg:mb-8 sm:text-subtitleMobile lg:text-subtitle">
                I'm a Web Designer, UI/UX Designer and Front-End Developer based
                in the Philippines.
              </p>
              <Link to={"/Aldrin Villalobos CV.pdf"} target="_blank">
                <DownloadButton>Download Resume</DownloadButton>
              </Link>
            </div>
            <div className="lg:mt-0 lg:col-span-6 lg:flex justify-end border-r-3">
              <div className="border-3 border-black">
                <img
                  src="/images/Hero-Image.png"
                  alt="mockup"
                  className="w-full"
                />
              </div>
              <div className="border-t-3 border-b-3">
                <div className="border-4 border-gray h-full"></div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </Fragment>
  );
};

export default HeroSection;
