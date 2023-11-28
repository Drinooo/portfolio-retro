import React, { Fragment } from "react";
import { TECH_STACK } from "../../utils/data";
import { motion } from "framer-motion";

const TechStackSection = () => {
  return (
    <Fragment>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <section className="space-y-4 max-w-screen-2xl mx-auto ">
          <div className="border-b-4">
            <h2 className="mb-0 sm:text-h6Mobile md:text-h6 tracking-tight font-normal text-gray-900 dark:text-white border-t-4 border-r-4 border-l-4 w-fit px-5 py-2">
              Tech Stack
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 md:grid-cols-8 gap-6 p-4">
            {TECH_STACK.map((item) => (
              <div className="space-y-2">
                <div className="flex justify-center">{item.icon}</div>
                <p className="text-center font-light">{item.label}</p>
              </div>
            ))}
          </div>
        </section>
      </motion.div>
    </Fragment>
  );
};

export default TechStackSection;
