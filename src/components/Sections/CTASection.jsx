import { Typography } from "@material-tailwind/react";
import React, { Fragment } from "react";
import { SendButton } from "../Common/ButtonComponent";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <Fragment>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="">
        <section className="mx-auto border-3 shadow-aboutShadow">
          <div className="py-8 px-4 mx-auto max-w-full sm:py-16 lg:px-6">
            <div className="mx-auto max-w-full text-center">
              <Typography className="text-about font-normal leading-[1.1]">
                Do you have a project idea in mind?
              </Typography>
              <Typography className="lg:text-h3-lg md:text-h3-md text-h3-sm font-semibold">
                Ready to stand out in the digital world? Let's craft your unique
                online presence!
              </Typography>
            </div>
            <div className="flex justify-center mt-4">
              <Link to={"/contact"}>
                <SendButton>Contact Me</SendButton>
              </Link>
            </div>
          </div>
        </section>
      </motion.div>
    </Fragment>
  );
};

export default CTASection;
