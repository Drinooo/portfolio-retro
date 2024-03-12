import React from "react";
import { PRODUCTS } from "../utils/data";

const Shop = () => {
  return (
    <section className="body-font max-w-screen-2xl mx-auto sm:pt-12 lg:pt-24">
      <div className="">
        <div className="flex flex-wrap -m-4">
          {PRODUCTS.map((item) => (
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full h-full">
              <a
                className="block relative h-full rounded overflow-hidden"
                href={`/shop/${item.id}`}
                key={item.id}
              >
                <img
                  alt="ecommerce"
                  className="object-cover object-center h-full block"
                  src={item.img}
                />

                <div class="absolute right-0 top-0 h-16 w-16">
                  <div class="absolute transform rotate-45 bg-green text-center text-chip text-white font-semibold py-1 right-[-40px] top-[25px] w-[170px]">
                    <p>{item.note}</p>
                  </div>
                </div>
              </a>
              <div className="mt-4">
                <h3 className="text-category mb-1">
                  {item.category}
                </h3>
                <h2 className="text-body1 font-medium">
                  {item.name}
                </h2>
                <p className="mt-1 text-price">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
