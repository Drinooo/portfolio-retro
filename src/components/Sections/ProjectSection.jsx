import { Button } from "@material-tailwind/react";
import React, { Fragment } from "react";
import { PROJECTS } from "../../utils/data";
import { ExploreButton } from "../Common/ButtonComponent";

const ProjectSection = () => {
  return (
    <Fragment>
      <section className="space-y-4 max-w-screen-2xl px-8 py-8 mx-auto">
        {PROJECTS.map((item) => [
          item.position === "left" ? (
            <div className="gap-8 border-4 border-black items-center mx-auto xl:gap-16 md:grid md:grid-cols-2 md:pr-[54px]">
              <img
                className="w-full dark:hidden border-r-4 border-black"
                src={item.img}
                alt="dashboard image"
              />
              <img
                className="w-full hidden dark:block border-r-4 border-black"
                src={item.img}
                alt="dashboard image"
              />
              <div className="mt-4 md:mt-0">
                <h2 className="mb-4 sm:text-h3Mobile md:text-h3 tracking-tight font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h2>
                <p className="mb-6 font-light text-gray-500 text-body1 dark:text-gray-400">
                  {item.desc}
                </p>
                <a href={item.path}>
                  <ExploreButton>Explore Now</ExploreButton>
                </a>
              </div>
            </div>
          ) : (
            <div className="gap-8 border-4 border-black items-center mx-auto max-w-screen-2xl xl:gap-16 md:grid md:grid-cols-2 md:pl-[54px]">
              <div className="mt-4 md:mt-0">
                <h2 className="mb-4 sm:text-h3Mobile md:text-h3 tracking-tight font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h2>
                <p className="mb-6 font-light text-gray-500 text-body1 dark:text-gray-400">
                  {item.desc}
                </p>
                <ExploreButton>Explore Now</ExploreButton>
              </div>
              <img
                className="w-full dark:hidden border-l-4 border-black"
                src={item.img}
                alt="dashboard image"
              />
              <img
                className="w-full hidden dark:block border-l-4 border-black"
                src={item.img}
                alt="dashboard image"
              />
            </div>
          ),
        ])}
      </section>
    </Fragment>
  );
};

export default ProjectSection;
