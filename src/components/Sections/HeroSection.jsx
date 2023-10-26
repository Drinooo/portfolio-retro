import React, { Fragment } from "react";

const HeroSection = () => {

  return (
    <Fragment>
      <section className="">
        <div className="grid max-w-screen-2xl mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-6">
            <h1 className="max-w-2xl mb-4 font-[700] tracking-wide leading-20 sm:text-h1Mobile lg:text-h1 dark:text-white">
              Hi, I'm Aldrin Villalobos
            </h1>
            <p className="max-w-2xl mb-6 font-[400] tracking-tighter leading-11 lg:mb-8 sm:text-subtitleMobile lg:text-subtitle">
            I'm a web designer, ui/ux designer and front end developer based in the Philippines.
            </p>
          </div>
          <div className="lg:mt-0 lg:col-span-6 lg:flex justify-end">
            <div className="border-4 border-black">
              <img src="/images/Hero-Image.png" alt="mockup" className="border-b-4 border-black w-full" />
              <div className="border-gray border-8"></div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default HeroSection;
