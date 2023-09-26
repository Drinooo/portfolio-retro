import React, { Fragment } from "react";
import { SERVICES } from "../../utils/data";

const ServicesSection = () => {
  return (
    <Fragment>
      <section className="space-y-4 max-w-screen-2xl mx-auto ">
        <div className="border-b-4">
          <h2 className="mb-0 sm:text-h6Mobile md:text-h6 tracking-tight font-semibold text-gray-900 dark:text-white border-t-4 border-r-4 border-l-4 w-fit p-2">
            Services
          </h2>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-2 pt-4">
          {SERVICES.map((item) => (
            <div className="border-4 h-max">
              <div className="p-4 space-y-2 sm:h-full md:h-96">
                <div className="bg-gray max-w-fit p-3 rounded-full">
                  {item.icon}
                </div>
                <div>
                  <h4 className="sm:text-servicesMobile md:text-services">
                    {item.title}
                  </h4>
                </div>
                <p className="text-body1">{item.desc}</p>
              </div>
              <div className="border-t-4"></div>
              <div className="border-gray border-8"></div>
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default ServicesSection;
