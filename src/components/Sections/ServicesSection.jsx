import React, { Fragment } from "react";
import { SERVICES } from "../../utils/data";
import { motion } from "framer-motion";

const ServicesSection = () => {
  return (
    <Fragment>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <section className="space-y-4 max-w-screen-2xl mx-auto ">
          <div className="border-b-3">
            <h2 className="mb-0 sm:text-h6Mobile md:text-h6 font-semibold text-gray-900 dark:text-white border-t-3 border-r-3 border-l-3 w-fit px-5 py-2">
              Services
            </h2>
          </div>
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 pt-4">
            {SERVICES.map((item) => (
              <div className="border-3 h-max text-center">
                <div className="p-4 space-y-2 sm:h-full md:h-96 flex flex-col justify-center">
                  <div className="bg-green max-w-fit p-3 rounded-full mx-auto">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-servicesMobile md:text-services font-medium">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-body1">{item.desc}</p>
                </div>
                <div className="border-t-3"></div>
                <div className="border-green border-4"></div>
              </div>
            ))}
          </div>
        </section>
      </motion.div>
    </Fragment>
  );
};

export default ServicesSection;
