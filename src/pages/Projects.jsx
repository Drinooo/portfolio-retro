import React, { Fragment } from "react";
import { ExploreButton } from "../components/Common/ButtonComponent";
import {
  Carousel,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import { PROJECTS } from "../utils/data";
import CTASection from "../components/Sections/CTASection";
import { motion } from "framer-motion";

const Projects = () => {
  const data = [
    {
      label: "Web Design & Development",
      value: "wd",
    },
    {
      label: "UI/UX Design",
      value: "ud",
    },
    {
      label: "Logo Design",
      value: "ld",
    },
  ];
  return (
    <Fragment>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <section className="space-y-4 max-w-screen-2xl mx-auto sm:pt-12 lg:pt-24 ">
          <div className="">
            <h2 className="mb-0 sm:text-h1Mobile md:text-h1 tracking-tight font-semibold text-gray-900">
              Projects
            </h2>
          </div>
          <Tabs value="wd" id="custom-animation">
            <TabsHeader
              className="bg-transparent z-0"
              indicatorProps={{
                className: "bg-green rounded-none border-x-3 border-t-3",
              }}
            >
              {data.map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  className="border-b-3 sm:text-aboutMobile md:text-about font-semibold pt-1 pb-0"
                >
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody>
              {PROJECTS.map((item) => [
                item.position === "left" ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                  >
                    <TabPanel key={item.value} value={item.value}>
                      <div className="flex border-r-3">
                        <div className="gap-8 border-3 border-black items-center mx-auto xl:gap-16 lg:grid lg:grid-cols-2 lg:pr-[54px]">
                          {Array.isArray(item.img) ? (
                            <Carousel className="h-fit">
                              {item.img.map((image, imgIndex) => (
                                <img
                                  key={imgIndex}
                                  className="w-full dark:hidden sm:border-b-3 lg:border-b-0 lg:border-r-3 border-black"
                                  src={image}
                                  alt={`Image ${imgIndex + 1}`}
                                />
                              ))}
                            </Carousel>
                          ) : (
                            <img
                              className="w-full dark:hidden sm:border-b-3 lg:border-b-0 lg:border-r-3 border-black"
                              src={item.img}
                              alt="Project Picture"
                            />
                          )}
                          <div className="mt-4 md:mt-0 mb-4 md:mb-0  lg:text-start sm:text-center py-10">
                            <h2 className="sm:text-h3Mobile md:text-h3 tracking-tight leading-20 font-semibold text-gray-900 dark:text-white ">
                              {item.title}
                            </h2>
                            <div className="text-center flex flex-wrap sm:justify-center lg:justify-start gap-2 mb-3">
                              {item.tools}
                            </div>
                            <a
                              href={item.url}
                              className="flex sm:justify-center lg:justify-start"
                            >
                              {item.value === "ld" ||
                              item.url === "#" ? null : (
                                <ExploreButton>
                                  {item.caseStudy === "yes"
                                    ? "View Case Study"
                                    : "Explore Now"}
                                </ExploreButton>
                              )}
                            </a>
                          </div>
                        </div>
                        <div className="border-t-3 border-b-3">
                          <div className="border-4 border-gray h-full"></div>
                        </div>
                      </div>
                    </TabPanel>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                  >
                    <TabPanel key={item.value} value={item.value}>
                      <div className="flex border-l-3">
                        <div className="border-t-3 border-b-3">
                          <div className="border-4 border-gray h-full"></div>
                        </div>
                        <div className="gap-8 border-3 border-black items-center mx-auto max-w-screen-2xl xl:gap-16 lg:grid lg:grid-cols-2 lg:pl-[54px]">
                          <div className="mt-4 md:mt-0 mb-4 md:mb-0 sm:text-center lg:text-start py-10">
                            <h2 className="sm:text-h3Mobile md:text-h3 tracking-tight leading-20 font-semibold text-gray-900 dark:text-white">
                              {item.title}
                            </h2>
                            <div className="text-center flex flex-wrap sm:justify-center lg:justify-start gap-2 mb-3">
                              {item.tools}
                            </div>
                            <a
                              href={item.url}
                              className="flex sm:justify-center lg:justify-start"
                            >
                              {item.value === "ld" ||
                              item.url === "#" ? null : (
                                <ExploreButton>
                                  {item.caseStudy === "yes"
                                    ? "View Case Study"
                                    : "Explore Now"}
                                </ExploreButton>
                              )}
                            </a>
                          </div>
                          {Array.isArray(item.img) ? (
                            <Carousel className="h-fit">
                              {item.img.map((image, imgIndex) => (
                                <img
                                  key={imgIndex}
                                  className="w-full sm:border-t-3 lg:border-t-0 lg:border-l-3 border-black"
                                  src={image}
                                  alt={`Image ${imgIndex + 1}`}
                                />
                              ))}
                            </Carousel>
                          ) : (
                            <img
                              className="w-full sm:border-t-3 lg:border-t-0 lg:border-l-3 border-black"
                              src={item.img}
                              alt="Project Picture"
                            />
                          )}
                        </div>
                      </div>
                    </TabPanel>
                  </motion.div>
                ),
              ])}
            </TabsBody>
          </Tabs>
          <CTASection />
        </section>
      </motion.div>
    </Fragment>
  );
};

export default Projects;
