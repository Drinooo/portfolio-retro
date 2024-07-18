import React, { Fragment } from "react";
import { CLIENTS } from "../../utils/data";
import { motion } from "framer-motion";
import Slider from "react-infinite-logo-slider";

const ClientsSection = () => {
  return (
    <Fragment>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <section className="space-y-4 max-w-screen-2xl mx-auto ">
          <div className="border-b-3">
            <h2 className="mb-0 sm:text-h6Mobile md:text-h6 font-semibold text-gray-900 dark:text-white border-t-3 border-r-3 border-l-3 w-fit px-5 py-2">
              Clients
            </h2>
          </div>
          <div className="sm:text-center md:text-start gap-4">
            <Slider
            width={"250px"}
              duration={30}
              blurBorders={false}
              blurBoderColor={"#fff"}
            >
              {CLIENTS.map((item) => (
                <Slider.Slide>
                  <img src={item.img} alt={item.title} className="w-50" />
                </Slider.Slide>
              ))}
            </Slider>
          </div>
        </section>
      </motion.div>
    </Fragment>
  );
};

export default ClientsSection;
