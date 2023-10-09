import React, { Fragment } from "react";
import { ExploreButton } from "../components/Common/ButtonComponent";
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import { PROJECTS } from "../utils/data";
import CTASection from "../components/Sections/CTASection";

const Projects = () => {
  const data = [
    {
      label: "Web Design & Development",
      value: "wd",
    },
    {
      label: "Graphic Design",
      value: "gd",
    },
    {
      label: "Logo Design",
      value: "ld",
    },
  ];
  return (
    <Fragment>
      <section className="space-y-4 max-w-screen-2xl mx-auto">
        <Tabs value="wd">
          <TabsHeader
            className="bg-transparent z-0"
            indicatorProps={{
              className: "border-t-4 border-r-4 border-l-4 rounded-none",
            }}
          >
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                className="border-b-4 sm:text-h6aboutMobile md:text-about font-semibold"
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {PROJECTS.map((item) => [
              item.position === "left" ? (
                <TabPanel key={item.value} value={item.value}>
                  <div className="flex border-r-4">
                    <div className="gap-8 border-4 border-black items-center mx-auto xl:gap-16 md:grid md:grid-cols-2 md:pr-[54px]">
                      <img
                        className="w-full h-full dark:hidden sm:border-b-4 md:border-b-0 md:border-r-4 border-black"
                        src={item.img}
                        alt="dashboard image"
                      />
                      <img
                        className="w-full h-full hidden dark:block sm:border-b-4 md:border-b-0 md:border-r-4 border-black"
                        src={item.img}
                        alt="dashboard image"
                      />
                      <div className="mt-4 md:mt-0 mb-4 md:mb-0  md:text-start sm:text-center py-10">
                        <h2 className="sm:text-h3Mobile md:text-h3 tracking-tight font-semibold text-gray-900 dark:text-white">
                          {item.title}
                        </h2>
                        <p className="mb-3 font-light text-gray-500 text-body1 dark:text-gray-400">
                          {item.desc}
                        </p>
                        <div className="w-fit flex md:flex-row sm:flex-col gap-2 mb-3">
                          {item.tools}
                        </div>
                        <a
                          href={item.url}
                          className="flex sm:justify-center md:justify-start"
                        >
                          {item.value === "ld" ? null : (
                            <ExploreButton>Explore Now</ExploreButton>
                          )}
                        </a>
                      </div>
                    </div>
                    <div className="border-t-4 border-b-4">
                      <div className="border-8 border-gray h-full"></div>
                    </div>
                  </div>
                </TabPanel>
              ) : (
                <TabPanel key={item.value} value={item.value}>
                  <div className="flex border-l-4">
                    <div className="border-t-4 border-b-4">
                      <div className="border-8 border-gray h-full"></div>
                    </div>
                    <div className="gap-8 border-4 border-black items-center mx-auto max-w-screen-2xl xl:gap-16 md:grid md:grid-cols-2 md:pl-[54px]">
                      <div className="mt-4 md:mt-0 mb-4 md:mb-0 sm:text-center md:text-start py-10">
                        <h2 className="sm:text-h3Mobile md:text-h3 tracking-tight font-semibold text-gray-900 dark:text-white">
                          {item.title}
                        </h2>
                        <p className="mb-3 font-light text-gray-500 text-body1 dark:text-gray-400">
                          {item.desc}
                        </p>
                        <div className="w-fit flex md:flex-row sm:flex-col gap-2 mb-3">
                          {item.tools}
                        </div>
                        <a
                          href={item.url}
                          className="flex sm:justify-center md:justify-start"
                        >
                          {item.value === "ld" ? null : (
                            <ExploreButton>Explore Now</ExploreButton>
                          )}
                        </a>
                      </div>
                      <img
                        className="w-full h-full dark:hidden sm:border-t-4 md:border-t-0 md:border-l-4 border-black"
                        src={item.img}
                        alt="dashboard image"
                      />
                      <img
                        className="w-full h-full hidden dark:block sm:border-t-4 md:border-t-0 md:border-l-4 border-black"
                        src={item.img}
                        alt="dashboard image"
                      />
                    </div>
                  </div>
                </TabPanel>
              ),
            ])}
          </TabsBody>
        </Tabs>
        <CTASection />
      </section>
    </Fragment>
  );
};

export default Projects;
