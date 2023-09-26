import React, { Fragment } from "react";
import { SendButton } from "../Common/ButtonComponent";

const ContactSection = () => {
  return (
    <Fragment>
      <section className="space-y-4 max-w-screen-2xl px-8 py-8 mx-auto">
        <div className="">
          <div className="border-b-4 flex justify-between">
            <h2 className="mb-0 sm:text-h6Mobile md:text-h6 tracking-tight font-semibold text-gray-900 dark:text-white border-t-4 border-r-4 border-l-4 w-fit p-2">
              Contact
            </h2>
          </div>
          <p className="my-8 font-light sm:text-center md:text-start text-gray-500 dark:text-gray-400 sm:text-aboutMobile md:text-about">
            Ready to stand out in the digital world? Let's craft your unique
            online presence!
          </p>
          <form action="#" className="space-y-8">
            <div>
              <label
                for="email"
                className="block mb-2 text-body1 font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border-4 border-gray-300 text-gray-900 text-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@gmail.com"
                required
              />
            </div>
            <div>
              <label
                for="subject"
                className="block mb-2 text-body1 font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 border-4 border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                for="message"
                className="block mb-2 text-body1 font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 shadow-sm border-4 border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <SendButton>Send message</SendButton>
          </form>
        </div>
      </section>
    </Fragment>
  );
};

export default ContactSection;
