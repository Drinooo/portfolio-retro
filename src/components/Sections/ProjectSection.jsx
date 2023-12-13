import React, { Fragment } from "react";
import { PROJECTS } from "../../utils/data";
import { ExploreButton, ViewMoreButton } from "../Common/ButtonComponent";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Carousel } from "@material-tailwind/react";

export const ProjectSection = () => {
  return (
    <Fragment>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <section
          className="space-y-4 max-w-screen-2xl mx-auto"
          id="projectSection"
        >
          <div className="border-b-3 flex justify-between">
            <h2 className="mb-0 sm:text-h6Mobile md:text-h6 tracking-tight font-normal text-gray-900 dark:text-white border-t-3 border-r-3 border-l-3 w-fit px-5 py-2">
              Projects
            </h2>
          </div>
          {PROJECTS.slice(0, 4).map((item, img) => [
            item.position === "left" ? (
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                <div className="flex border-r-3">
                  <div className="gap-8 border-3 border-black items-center mx-auto xl:gap-16 lg:grid lg:grid-cols-2 lg:pr-[54px]">
                    <div className="sm:border-b-3 lg:border-b-0 lg:border-r-3 border-black">
                      {Array.isArray(item.img) ? (
                        <Carousel
                          className="h-fit"
                          navigation={({
                            setActiveIndex,
                            activeIndex,
                            length,
                          }) => (
                            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                              {new Array(length).fill("").map((_, i) => (
                                <span
                                  key={i}
                                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                                    activeIndex === i
                                      ? "w-8 bg-white"
                                      : "w-4 bg-white/50"
                                  }`}
                                  onClick={() => setActiveIndex(i)}
                                />
                              ))}
                            </div>
                          )}
                        >
                          {item.img.map((image, imgIndex) => (
                            <img
                              key={imgIndex}
                              className="w-full"
                              src={image}
                              alt={`Image ${imgIndex + 1}`}
                            />
                          ))}
                        </Carousel>
                      ) : (
                        <img
                          className="w-full"
                          src={item.img}
                          alt="Project Picture"
                        />
                      )}
                    </div>

                    <div className="mt-4 md:mt-0 mb-4 lg:mb-0  lg:text-start sm:text-center">
                      <h2 className="mb-4 sm:text-h3Mobile md:text-h3 tracking-tight font-semibold text-gray-900 dark:text-white">
                        {item.title}
                      </h2>
                      <div className="text-center flex flex-wrap sm:justify-center lg:justify-start gap-2 mb-3">
                        {item.tools}
                      </div>
                      <a
                        href={item.url}
                        className="flex sm:justify-center lg:justify-start"
                      >
                        <ExploreButton>View Website</ExploreButton>
                      </a>
                    </div>
                  </div>
                  <div className="border-t-3 border-b-3">
                    <div className="border-4 border-gray h-full"></div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                <div className="flex border-l-3">
                  <div className="border-t-3 border-b-3">
                    <div className="border-4 border-gray h-full"></div>
                  </div>
                  <div className="gap-8 border-3 border-black items-center mx-auto max-w-screen-2xl xl:gap-16 lg:grid lg:grid-cols-2 lg:pl-[54px]">
                    <div className="mt-4 md:mt-0 mb-4 lg:mb-0 sm:text-center lg:text-start">
                      <h2 className="mb-4 sm:text-h3Mobile md:text-h3 tracking-tight font-semibold text-gray-900 dark:text-white">
                        {item.title}
                      </h2>
                      <div className="text-center flex flex-wrap sm:justify-center lg:justify-start gap-2 mb-3">
                        {item.tools}
                      </div>
                      <a
                        href={item.url}
                        target="_blank"
                        className="flex sm:justify-center lg:justify-start"
                      >
                        <ExploreButton>View Website</ExploreButton>
                      </a>
                    </div>
                    <div className="sm:border-t-3 lg:border-t-0 lg:border-l-3 border-black">
                      {Array.isArray(item.img) ? (
                        <Carousel
                          className="h-fit"
                          navigation={({
                            setActiveIndex,
                            activeIndex,
                            length,
                          }) => (
                            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                              {new Array(length).fill("").map((_, i) => (
                                <span
                                  key={i}
                                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                                    activeIndex === i
                                      ? "w-8 bg-white"
                                      : "w-4 bg-white/50"
                                  }`}
                                  onClick={() => setActiveIndex(i)}
                                />
                              ))}
                            </div>
                          )}
                        >
                          {item.img.map((image, imgIndex) => (
                            <img
                              key={imgIndex}
                              className="w-full"
                              src={image}
                              alt={`Image ${imgIndex + 1}`}
                            />
                          ))}
                        </Carousel>
                      ) : (
                        <img
                          className="w-full"
                          src={item.img}
                          alt="Project Picture"
                        />
                      )}
                    </div>
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
