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
      <section className="space-y-4 max-w-screen-2xl mx-auto">
      <div className="border-b-4 flex justify-between">
          <h2 className="mb-0 sm:text-h6Mobile md:text-h6 tracking-tight font-semibold text-gray-900 dark:text-white border-t-4 border-r-4 border-l-4 w-fit p-2">
            Projects
          </h2>
        </div>
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
                className="border-b-4 sm:text-aboutMobile md:text-about font-semibold"
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
                    <div className="gap-8 border-4 border-black items-center mx-auto xl:gap-16 lg:grid lg:grid-cols-2 lg:pr-[54px]">
                      <img
                        className="w-full lg:h-full dark:hidden sm:border-b-4 lg:border-b-0 lg:border-r-4 border-black"
                        src={item.img}
                        alt="dashboard image"
                      />
                      <div className="mt-4 md:mt-0 mb-4 md:mb-0  lg:text-start sm:text-center py-10">
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
                          {(item.value === "ld") || (item.url === "#") ? null : (
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
                    <div className="gap-8 border-4 border-black items-center mx-auto max-w-screen-2xl xl:gap-16 lg:grid lg:grid-cols-2 lg:pl-[54px]">
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
                          {(item.value === "ld") || (item.url === "#") ? null : (
                            <ExploreButton>Explore Now</ExploreButton>
                          )}
                        </a>
                      </div>
                      <img
                        className="w-full dark:hidden sm:border-t-4 lg:border-t-0 lg:border-l-4 border-black"
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
