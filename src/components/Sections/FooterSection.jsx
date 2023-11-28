import React, { Fragment } from "react";
import {
  GithubIcon2,
  GmailIcon,
  InstagramIcon,
  LinkedIcon,
} from "../Common/IconComponent";

const FooterSection = () => {
  return (
    <Fragment>
      <section className="bg-beige">
        <div className="max-w-screen-2xl mx-auto md:py-8 block sm:px-8 2xl:px-0">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="/"
              className="flex items-center mb-4 sm:mb-0"
            >
              <img
                src="/images/Logo Black.png"
                className="w-20 mr-3"
                alt="Flowbite Logo"
              />
            </a>
            <ul className="flex flex-wrap items-center gap-4 mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <a href="https://www.instagram.com/aldrinvilladesigns/" target="_blank">
                <li>
                  <InstagramIcon />
                </li>
              </a>
              <a href="mailto:villalobosaldrin18@gmail.com">
                <li>
                  <GmailIcon />
                </li>
              </a>
              <a href="https://www.linkedin.com/in/aldrinvillalobos" target="_blank">
                <li>
                  <LinkedIcon />
                </li>
              </a>
              <a href="https://github.com/Drinooo" target="_blank">
                <li>
                  <GithubIcon2 />
                </li>
              </a>
            </ul>
          </div>
          <hr className="my-6 border-1 border-gray-200 sm:mx-auto lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Aldrin Villalobos
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </section>
    </Fragment>
  );
};

export default FooterSection;
