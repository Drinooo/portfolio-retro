import React from "react";
import { TECH_STACK } from "../../utils/data";

const TechStackSection = () => {
  return (
    <section className="space-y-4 max-w-screen-2xl px-8 py-8 mx-auto ">
      <div className="border-b-4">
        <h2 className="mb-0 sm:text-h6Mobile md:text-h6 tracking-tight font-semibold text-gray-900 dark:text-white border-t-4 border-r-4 border-l-4 w-fit p-2">
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
  );
};

export default TechStackSection;
