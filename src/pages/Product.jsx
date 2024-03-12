import React from "react";
import { PRODUCTS } from "../utils/products";
import { useParams } from "react-router-dom";
import { Carousel } from "@material-tailwind/react";

const Product = () => {
  const { id } = useParams();

  const products = PRODUCTS[id];
  const featuresData = PRODUCTS[id].features;

  return (
    <section className="text-gray-600 body-font overflow-hidden max-w-screen-2xl mx-auto sm:pt-12 lg:pt-24">
      <div className="">
        <div className="mx-auto flex flex-wrap">
          <Carousel
            className="lg:w-1/2 w-full lg:h-auto h-full"
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
          >
            {products.img.map((image, index) => (
              <img
                alt="ecommerce"
                className="object-cover object-center rounded"
                src={image}
              />
            ))}
          </Carousel>

          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 space-y-4">
            <div>
              <h2 className="text-category">{products.cat}</h2>
              <h1 className="md:text-subtitle text-subtitleMobile font-bold">
                {products.name}
              </h1>
              <div className="flex">
                <span className="text-caption font-normal">
                  {products.price}
                </span>
              </div>
            </div>

            <p className="text-body1 font-light">{products.desc}</p>

            <div className="space-y-2">
              <h3 className="text-caption font-bold">Features:</h3>
              <ol type="1" className="list-decimal ml-5">
                {featuresData.map((feature) => (
                  <li>
                    <span className="font-bold">{feature.title}</span>{" "}
                    {feature.desc}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
