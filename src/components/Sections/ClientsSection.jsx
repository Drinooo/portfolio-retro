import React, { Fragment } from "react";
import { CLIENTS } from "../../utils/data";
import Marquee from "react-fast-marquee";
import { Typography } from "@material-tailwind/react";

const ClientsSection = () => {
  return (
    <Fragment>
      <section className="space-y-4 max-w-screen-2xl mx-auto ">
        <div className="border-b-4">
          <h2 className="mb-0 sm:text-h6Mobile md:text-h6 tracking-tight font-semibold text-gray-900 dark:text-white border-t-4 border-r-4 border-l-4 w-fit p-2">
            Clients I've Worked With
          </h2>
        </div>
        <div className="grid md:grid-cols-4 sm:grid-cols-1 sm:text-center md:text-start gap-4">
          {/* <Marquee autoFill> */}
          {CLIENTS.map((item) => (
            <div>
              <Typography className="mr-8 text-client font-semibold">
                {item.title}
              </Typography>
            </div>
          ))}
          {/* </Marquee> */}
        </div>
      </section>
    </Fragment>
  );
};

export default ClientsSection;
