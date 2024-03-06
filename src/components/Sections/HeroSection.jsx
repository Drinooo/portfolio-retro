import React, { Fragment } from "react";
import { motion } from "framer-motion";
import { DownloadButton, OutlinedButton } from "../Common/ButtonComponent";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <Fragment>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <section className="max-w-screen">
          <div className="grid max-w-screen-2xl mx-auto lg:gap-8 xl:gap-24 sm:pt-12 lg:pt-24 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-6 sm:pb-4 lg:pb-0">
              <h1 className="mb-4 font-[700] xl:text-h1-xl lg:text-h1-lg md:text-h1-md text-h1-sm leading-[1.1]">
                Hi, I'm Aldrin
              </h1>
              <p className="lg:mb-8 mb-6 font-[500] tracking-tighter xl:text-subhead-xl lg:text-subhead-lg md:text-subhead-md text-subhead-sm leading-[1.2]">
                I'm a Web Designer and Front-End Developer based
                in the Philippines.
              </p>
            </div>
            <div className="lg:mt-0 lg:col-span-6 lg:flex justify-end sm:border-r-0 lg:border-r-3 h-fit">
              <div className="border-3 border-black h-fit">
                <img
                  src="/images/Hero-Image.png"
                  alt="mockup"
                  className="w-full h-fit"
                />
              </div>
              <div className="sm:border-t-0 lg:border-t-3 border-b-3 sm:border-x-3 lg:border-x-0">
                <div className="border-4 border-green h-full"></div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </Fragment>
  );
};

export default HeroSection;
