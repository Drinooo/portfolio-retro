import { Button, Typography } from "@material-tailwind/react";
import React, { Fragment } from "react";
import { PROJECTS } from "../../utils/data";
import { ExploreButton, ViewMoreButton } from "../Common/ButtonComponent";

const ProjectSection = () => {
  return (
    <Fragment>
      <section className="space-y-4 max-w-screen-2xl px-8 py-8 mx-auto">
        <div className="border-b-4 flex justify-between">
          <h2 className="mb-0 sm:text-h6Mobile md:text-h6 tracking-tight font-semibold text-gray-900 dark:text-white border-t-4 border-r-4 border-l-4 w-fit p-2">
            Projects
          </h2>
          <div className="flex justify-end">
            <ViewMoreButton>View More</ViewMoreButton>
          </div>
        </div>
        {PROJECTS.map((item) => [
          item.position === "left" ? (
            <div className="gap-8 border-4 border-black items-center mx-auto xl:gap-16 md:grid md:grid-cols-2 md:pr-[54px]">
              <img
                className="w-full dark:hidden sm:border-b-4 md:border-r-4 border-black"
                src={item.img}
                alt="dashboard image"
              />
              <img
                className="w-full hidden dark:block sm:border-t-4 md:border-r-4 border-black"
                src={item.img}
                alt="dashboard image"
              />
              <div className="mt-4 md:mt-0 mb-4 md:mb-0  md:text-start sm:text-center">
                <h2 className="mb-4 sm:text-h3Mobile md:text-h3 tracking-tight font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h2>
                <p className="mb-6 font-light text-gray-500 text-body1 dark:text-gray-400">
                  {item.desc}
                </p>
                <a
                  href={item.path}
                  className="flex sm:justify-center md:justify-start"
                >
                  <ExploreButton>Explore Now</ExploreButton>
                </a>
              </div>
            </div>
          ) : (
            <div className="gap-8 border-4 border-black items-center mx-auto max-w-screen-2xl xl:gap-16 md:grid md:grid-cols-2 md:pl-[54px]">
              <div className="mt-4 md:mt-0 mb-4 md:mb-0 sm:text-center md:text-start">
                <h2 className="mb-4 sm:text-h3Mobile md:text-h3 tracking-tight font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h2>
                <p className="mb-6 font-light text-gray-500 text-body1 dark:text-gray-400">
                  {item.desc}
                </p>
                <a
                  href={item.path}
                  className="flex sm:justify-center md:justify-start"
                >
                  <ExploreButton>Explore Now</ExploreButton>
                </a>
              </div>
              <img
                className="w-full dark:hidden sm:border-t-4 md:border-l-4 border-black"
                src={item.img}
                alt="dashboard image"
              />
              <img
                className="w-full hidden dark:block sm:border-t-4 md:border-l-4 border-black"
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
