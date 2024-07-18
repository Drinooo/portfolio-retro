import React from "react";
import { motion } from "framer-motion";
import { TESTIMONIALS } from "../../utils/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialsSections = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <section
        className="space-y-6 max-w-screen-2xl mx-auto"
        id="projectSection"
      >
        <div className="border-b-3 flex justify-between">
          <h2 className="mb-0 sm:text-h6Mobile md:text-h6 font-semibold text-gray-900 dark:text-white border-t-3 border-r-3 border-l-3 w-fit px-5 py-2">
            What my client says
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3 ">
          {TESTIMONIALS.map((item) => (
            <div className="border-3 flex flex-col">
              <div className="flex flex-col justify-between w-full h-full px-4 py-4 bg-gray-100 dark:bg-gray-800 rounded-2xl dark:bg-trueGray-800">
                <p className="text-2xl leading-normal">"{item.title}"</p>
                <div className="flex items-center mt-8 space-x-3">
                  <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                    <img alt="Avatar" src={item.img} loading="lazy" />
                  </div>
                  <div>
                    <div className="text-lg font-medium">{item.name}</div>
                    <div className="text-gray-600 dark:text-gray-400">
                      {/* {item.occupation}{" "} */}
                      {item.website === "#" ? (
                        <p className="text-green">{item.business}</p>
                      ) : (
                        <a
                          target="_blank"
                          href={item.website}
                          className="text-green"
                        >
                          {item.business}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t-3">
                <div className="border-green border-4 w-full"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default TestimonialsSections;
