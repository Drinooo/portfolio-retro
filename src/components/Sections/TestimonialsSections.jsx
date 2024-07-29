import React from "react";
import { motion } from "framer-motion";
import { TESTIMONIALS } from "../../utils/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
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

        <div className="slider-container">
          <Slider {...settings}>
            {TESTIMONIALS.map((item) => (
              <div className="border-3 flex flex-col">
                <div className="border border-solid h-auto border-gray-300 rounded-2xl p-4 w-auto">
                  <p className="text-2xl leading-normal italic h-40 mb-80">
                    "{item.title}"
                  </p>
                  <div className="flex items-center gap-2">
                    <img
                      className="rounded-full w-14 h-14"
                      src={item.img}
                      loading="lazy"
                      alt="avatar"
                    />
                    <div className="grid">
                      <h5 className="text-2xl font-semibold">{item.name}</h5>
                      <span className="text-sm leading-normal italic text-gray-200">
                        {item.occupation}{" "}
                      </span>
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

                <div className="border-t-3">
                  <div className="border-green border-4 w-full"></div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </motion.div>
  );
};

export default TestimonialsSections;
