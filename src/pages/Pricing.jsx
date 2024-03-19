import React from "react";
import UnderMaintenance from "../components/Common/UnderMaintenance";
import { PRICING } from "../utils/data";
import { Link } from "react-router-dom";
import { SendButton } from "../components/Common/ButtonComponent";

const Pricing = () => {
  return (
    <section className="space-y-4 max-w-screen-2xl mx-auto sm:pt-12 lg:pt-24">
      <div>
        <h2 className="mb-0 xl:text-h1-xl lg:text-h1-lg md:text-h1-md text-h1-sm leading-[1.5] font-bold text-gray-900">
          Pricing
        </h2>
      </div>

      <div className="grid gap-6 mt-6 md:gap-12 md:grid-cols-2 lg:grid-cols-3">
        {PRICING.map((item) => (
          <div className="border-3 flex flex-col">
            <div className="h-full xl:p-6 lg:p-5 md:p-4 p-3">
              <div className="text-center">
                <h3 className="lg:text-h4-lg md:text-h4-md text-h4-sm font-bold">
                  {item.title}
                </h3>
                <p className="mt-3 text-body3 text-black/60">{item.desc}</p>

                <p className="mt-6 lg:text-h4-lg md:text-h4-md text-h4-sm font-bold">
                  {item.price}
                </p>
                <p className="mt-3 text-body3 text-black/60">
                  {item.priceDesc}
                </p>
              </div>

              <ul className="mt-6 space-y-1.5">
                {Array.isArray(item.includes) ? (
                  <>
                    {item.includes.map((item) => (
                      <li className="flex items-center gap-1.5 font-normal text-body3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-shrink-0 w-5 h-5 text-green"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </>
                ) : (
                  <></>
                )}
              </ul>
              <div className="flex justify-center mt-4">
                <Link to={"/contact"}>
                  <SendButton>Get Started</SendButton>
                </Link>
              </div>
            </div>

            <div className="border-t-3 w-full">
              <div className="border-green border-4 w-full"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
