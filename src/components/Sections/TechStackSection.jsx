import React, { Fragment } from "react";
import { TECH_STACK } from "../../utils/data";
import { motion } from "framer-motion";

const TechStackSection = () => {
  return (
    <Fragment>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <section className="space-y-4 max-w-screen-2xl mx-auto ">
          <div className="border-b-3">
            <h2 className="mb-0 sm:text-h6Mobile md:text-h6 font-semibold text-gray-900 border-t-3 border-r-3 border-l-3 w-fit px-5 py-2">
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
