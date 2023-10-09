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
      <footer className="bg-beige">
        <div className="w-full mx-auto p-4 md:py-8">
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
              {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">aldrinvilladesigns</span> */}
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
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Aldrin Villalobos
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </Fragment>
  );
};

export default FooterSection;
