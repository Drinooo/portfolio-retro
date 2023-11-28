import React, { Fragment } from "react";
import { CLIENTS } from "../../utils/data";
import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";

const ClientsSection = () => {
  return (
    <Fragment>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <section className="space-y-4 max-w-screen-2xl mx-auto ">
          <div className="border-b-4">
            <h2 className="mb-0 sm:text-h6Mobile md:text-h6 tracking-tight font-normal text-gray-900 dark:text-white border-t-4 border-r-4 border-l-4 w-fit px-5 py-2">
              Clients I've Worked With
            </h2>
          </div>
          <div className="grid md:grid-cols-4 sm:grid-cols-1 sm:text-center md:text-start gap-4">
            {CLIENTS.map((item) => (
              <div>
                <Typography className="mr-8 text-client font-semibold">
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
