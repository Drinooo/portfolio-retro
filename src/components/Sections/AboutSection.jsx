import React, { Fragment } from "react";
import {
  AIIcon,
  BootstrapIcon,
  CSSIcon,
  CanvaIcon,
  FigmaIcon,
  GithubIcon,
  HTMLIcon,
  IonicIcon,
  JavascriptIcon,
  MUIIcon,
  NodeIcon,
  PSDIcon,
  ReactIcon,
  TailwindIcon,
  VSCodeIcon,
  ViteIcon,
  XDIcon,
} from "../Common/IconComponent";

const AboutSection = () => {
  return (
    <Fragment>
      <section className="space-y-4 max-w-screen-2xl px-8 py-8 mx-auto ">
        <div className="border-b-4">
          <h2 className="mb-0 sm:text-h6Mobile md:text-h6 tracking-tight font-semibold text-gray-900 dark:text-white border-t-4 border-r-4 border-l-4 w-fit p-2">
            About
          </h2>
        </div>

        <div className="">
          <div>
            <p className="mb-6 font-light text-gray-500 text-body1 dark:text-gray-400">
              Hi! I am Aldrin Villalobos. I'm a web designer based in the
              Philippines. I'm passionate about crafting visually appealing and
              user-friendly websites. With a strong foundation in design
              principles, I'm eager to bring fresh perspectives to each project
              I undertake. My goal is to create engaging web experiences that
              seamlessly blend aesthetics with functionality. Let's collaborate
              to bring your vision to life and create an impactful online
              presence.
            </p>
          </div>
          <div className="border-4">
            <h2 className="mb-0 sm:text-h6Mobile md:text-h6 tracking-tight font-semibold text-gray-900 dark:text-white border-b-4 p-2">
              Tech Stack
            </h2>
            <div className="grid grid-cols-8 gap-6 p-4">
              <div>
                <HTMLIcon />
              </div>
              <div>
                <CSSIcon />
              </div>
              <div>
                <BootstrapIcon />
              </div>
              <div>
                <JavascriptIcon />
              </div>
              <div>
                <ReactIcon />
              </div>
              <div>
                <MUIIcon />
              </div>
              <div>
                <NodeIcon />
              </div>
              <div>
                <IonicIcon />
              </div>
              <div>
                <TailwindIcon />
              </div>
              <div>
                <ViteIcon />
              </div>
              <div>
                <VSCodeIcon />
              </div>
              <div>
                <GithubIcon />
              </div>
              <div>
                <FigmaIcon />
              </div>
              <div>
                <XDIcon />
              </div>
              <div>
                <PSDIcon />
              </div>
              <div>
                <AIIcon />
              </div>
              <div>
                <CanvaIcon />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default AboutSection;
