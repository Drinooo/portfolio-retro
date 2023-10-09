import { Typography } from "@material-tailwind/react";
import React, { Fragment } from "react";
import { SendButton } from "../Common/ButtonComponent";

const CTASection = () => {
  return (
    <Fragment>
      <section className="container mx-auto">
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
            <a href="/contact">
              <SendButton>Contact Me</SendButton>
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default CTASection;
