import { Typography } from "@material-tailwind/react";
import React, { Fragment } from "react";
import { SendButton } from "../Common/ButtonComponent";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <Fragment>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <section className="max-w-screen-2xl mx-auto border-4 shadow-aboutShadow">
          <div className="py-8 px-4 mx-auto max-w-full sm:py-16 lg:px-6">
            <div className="mx-auto max-w-full text-center">
              <Typography className="text-about font-normal">
                Do you have a project idea in mind?
              </Typography>
              <Typography className="md:text-h3 sm:text-h3Mobile font-semibold">
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
