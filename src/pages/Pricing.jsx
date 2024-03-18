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
      <ul class="grid gap-6 mt-6 md:gap-12 md:grid-cols-2 lg:grid-cols-3">
        {PRICING.map((item) => (
          <>
            <li class="p-6 border-3">
              <div className="text-center">
                <h3 class="lg:text-h4-lg md:text-h4-md text-h4-sm font-bold">
                  {item.title}
                </h3>
                <p class="mt-3 text-body3 text-black/60">{item.desc}</p>

                <p class="mt-6 lg:text-h4-lg md:text-h4-md text-h4-sm font-bold">
                  {item.price}
                </p>
                <p class="mt-3 text-body3 text-black/60">{item.priceDesc}</p>
              </div>

              <ul class="mt-6 space-y-1.5">
                {Array.isArray(item.includes) ? (
                  <>
                    {item.includes.map((item) => (
                      <li class="flex items-center gap-1.5 font-normal text-body3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="flex-shrink-0 w-5 h-5 text-green"
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
            </li>
          </>
        ))}
      </ul>
    </section>
  );
};

export default Pricing;
