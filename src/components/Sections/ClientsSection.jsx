import React, { Fragment } from "react";
import { CLIENTS } from "../../utils/data";
import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";

const ClientsSection = () => {
  return (
    <Fragment>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <section className="space-y-4 max-w-screen-2xl mx-auto ">
          <div className="border-b-3">
            <h2 className="mb-0 sm:text-h6Mobile md:text-h6 font-semibold text-gray-900 dark:text-white border-t-3 border-r-3 border-l-3 w-fit px-5 py-2">
              Clients/Projects I've Worked With
            </h2>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 sm:text-center md:text-start gap-4">
            {CLIENTS.map((item) => (
              <div>
                <Typography className="text-client font-medium">
                  {item.title}
                </Typography>
              </div>
            ))}
          </div>
        </section>
      </motion.div>
    </Fragment>
  );
};

export default ClientsSection;
