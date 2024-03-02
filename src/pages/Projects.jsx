import React, { Fragment } from "react";
import {
  ExploreButton,
  OutlinedButton,
} from "../components/Common/ButtonComponent";
import {
  Carousel,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";
import { PROJECTS } from "../utils/data";
import CTASection from "../components/Sections/CTASection";
import { motion } from "framer-motion";
import { CheckIcon } from "../components/Common/IconComponent";

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
        <section className="space-y-4 max-w-screen-2xl mx-auto sm:pt-12 lg:pt-24">
          <div>
            <h2 className="mb-0 xl:text-h1-xl lg:text-h1-lg md:text-h1-md text-h1-sm leading-[1.1] tracking-tight font-semibold text-gray-900">
              Projects
            </h2>
          </div>
          <Tabs value="wd" id="custom-animation">
            <TabsHeader
              className="bg-transparent z-0 p-0 lg:pb-6 pb-4"
              indicatorProps={{
                className: "bg-green rounded-none border-x-3 border-t-3",
              }}
            >
              {data.map(({ label, value }) => (
                <Tab key={value} value={value} className="border-b-3 pt-1">
                  <Typography className="sm:text-aboutMobile md:text-about font-semibold">
                    {label}
                  </Typography>
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody
              animate={{
                initial: { y: 250 },
                mount: { y: 0 },
                unmount: { y: 250 },
              }}
            >
              {PROJECTS.map((item) => [
                item.position === "left" ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                  >
                    <TabPanel
                      key={item.value}
                      value={item.value}
                      className="p-0 pb-6"
                    >
                      <div className="flex border-r-3">
                        <div className="border-3 border-black items-center mx-auto lg:grid lg:grid-cols-2">
                          <div className="sm:border-b-3 lg:border-b-0 lg:border-r-3 border-black">
                            {Array.isArray(item.img) ? (
                              <Carousel
                                className="max-h-fit"
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

                          <div className="mt-4 md:mt-0 mb-4 md:mb-0 text-start space-y-5 flex flex-col justify-center xl:p-[48px] p-[24px]">
                            <h2 className="lg:text-h3-lg md:text-h3-md text-h3-sm lg:leading-[64px] md:leading-[1.1] leading-[40px] text-start font-bold text-gray-900">
                              {item.title}
                            </h2>
                            <div className="flex flex-wrap justify-start gap-2">
                              {Array.isArray(item.tools) ? (
                                <ul className="space-y-2">
                                  {item.tools.map((name, index) => (
                                    <li className="flex items-center gap-2">
                                      <div className="p-1 border-3 border-black bg-green">
                                        <CheckIcon />
                                      </div>
                                      <Typography className="lg:text-chip-lg text-chip-md lg:leading-[30px] leading-[26px] font-[600]">
                                        {name}
                                      </Typography>
                                    </li>
                                  ))}
                                </ul>
                              ) : (
                                <></>
                              )}
                            </div>

                            <div
                              className={`flex flex-wrap justify-start ${
                                item.website === "yes" &&
                                item.caseStudy === "yes"
                                  ? "gap-4"
                                  : ""
                              }`}
                            >
                              <div>
                                <a href={item.urlWebsite}>
                                  {item.website === "yes" ? (
                                    <ExploreButton>Live Preview</ExploreButton>
                                  ) : null}
                                </a>
                              </div>

                              <div>
                                <a
                                  href={`/case-study/${item.id}`}
                                  key={item.id}
                                >
                                  {item.caseStudy === "yes" ? (
                                    <OutlinedButton>Case Study</OutlinedButton>
                                  ) : null}
                                </a>
                              </div>
                            </div>
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
                    <TabPanel
                      key={item.value}
                      value={item.value}
                      className="p-0 pb-6"
                    >
                      <div className="flex border-l-3">
                        <div className="border-t-3 border-b-3">
                          <div className="border-4 border-gray h-full"></div>
                        </div>
                        <div className="border-3 border-black items-center mx-auto lg:grid lg:grid-cols-2">
                          <div className="mt-4 md:mt-0 mb-4 md:mb-0 text-start space-y-5 flex flex-col justify-center xl:p-[48px] p-[24px]">
                            <h2 className="lg:text-h3-lg md:text-h3-md text-h3-sm lg:leading-[64px] md:leading-[1.1] leading-[40px] font-bold text-gray-900 dark:text-white">
                              {item.title}
                            </h2>
                            <div className="flex flex-wrap justify-start gap-2">
                              {Array.isArray(item.tools) ? (
                                <ul className="space-y-2">
                                  {item.tools.map((name, index) => (
                                    <li className="flex items-center gap-2">
                                      <div className="p-1 border-3 border-black bg-green">
                                        <CheckIcon />
                                      </div>
                                      <Typography className="lg:text-chip-lg text-chip-md lg:leading-[30px] leading-[26px] font-[600]">
                                        {name}
                                      </Typography>
                                    </li>
                                  ))}
                                </ul>
                              ) : (
                                <></>
                              )}
                            </div>

                            <div
                              className={`flex flex-wrap justify-start ${
                                item.website === "yes" &&
                                item.caseStudy === "yes"
                                  ? "gap-4"
                                  : ""
                              }`}
                            >
                              <a href={item.urlWebsite}>
                                {item.website === "yes" ? (
                                  <ExploreButton>Live Preview</ExploreButton>
                                ) : null}
                              </a>
                              <a href={`/case-study/${item.id}`} key={item.id}>
                                {item.caseStudy === "yes" ? (
                                  <OutlinedButton>Case Study</OutlinedButton>
                                ) : null}
                              </a>
                            </div>
                          </div>
                          <div className="sm:border-t-3 lg:border-t-0 lg:border-l-3 border-black">
                            {Array.isArray(item.img) ? (
                              <Carousel
                                className="max-h-fit"
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
