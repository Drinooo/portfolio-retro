import React, { Fragment } from "react";
import { PROJECTS } from "../../utils/data";
import { ExploreButton, ViewMoreButton } from "../Common/ButtonComponent";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const ProjectSection = () => {
  return (
    <Fragment>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <section
          className="space-y-4 max-w-screen-2xl mx-auto"
          id="projectSection"
        >
          <div className="border-b-4 flex justify-between">
            <h2 className="mb-0 sm:text-h6Mobile md:text-h6 tracking-tight font-normal text-gray-900 dark:text-white border-t-4 border-r-4 border-l-4 w-fit px-5 py-2">
              Projects
            </h2>
          </div>
          {PROJECTS.slice(0, 4).map((item) => [
            item.position === "left" ? (
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                <div className="flex border-r-4">
                  <div className="gap-8 border-4 border-black items-center mx-auto xl:gap-16 lg:grid lg:grid-cols-2 lg:pr-[54px]">
                    <img
                      className="w-full lg:h-full dark:hidden sm:border-b-4 lg:border-b-0 lg:border-r-4 border-black"
                      src={item.img}
                      alt="dashboard image"
                    />
                    <div className="mt-4 md:mt-0 mb-4 lg:mb-0  lg:text-start sm:text-center">
                      <h2 className="mb-4 sm:text-h3Mobile md:text-h3 tracking-tight font-semibold text-gray-900 dark:text-white">
                        {item.title}
                      </h2>
                      <a
                        href={item.url}
                        className="flex sm:justify-center lg:justify-start"
                      >
                        <ExploreButton>Explore Now</ExploreButton>
                      </a>
                    </div>
                  </div>
                  <div className="border-t-4 border-b-4">
                    <div className="border-5 border-gray h-full"></div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                <div className="flex border-l-4">
                  <div className="border-t-4 border-b-4">
                    <div className="border-5 border-gray h-full"></div>
                  </div>
                  <div className="gap-8 border-4 border-black items-center mx-auto max-w-screen-2xl xl:gap-16 lg:grid lg:grid-cols-2 lg:pl-[54px]">
                    <div className="mt-4 md:mt-0 mb-4 lg:mb-0 sm:text-center lg:text-start">
                      <h2 className="mb-4 sm:text-h3Mobile md:text-h3 tracking-tight font-semibold text-gray-900 dark:text-white">
                        {item.title}
                      </h2>
                      <a
                        href={item.url}
                        target="_blank"
                        className="flex sm:justify-center lg:justify-start"
                      >
                        <ExploreButton>Explore Now</ExploreButton>
                      </a>
                    </div>
                    <img
                      className="w-full lg:h-full dark:hidden sm:border-t-4 lg:border-t-0 lg:border-l-4 border-black"
                      src={item.img}
                      alt="dashboard image"
                    />
                  </div>
                </div>
              </motion.div>
            ),
          ])}
          <div className="flex justify-center">
            <Link to={"/projects"}>
              <ViewMoreButton>View More</ViewMoreButton>
            </Link>
          </div>
        </section>
      </motion.div>
    </Fragment>
  );
};
