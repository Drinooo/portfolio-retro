import React, { Fragment } from "react";
import {
  FacebookIcon,
  GithubIcon,
  GithubIcon2,
  GmailIcon,
  InstagramIcon,
  LinkedIcon,
} from "../Common/IconComponent";

const FooterSection = () => {
  return (
    <Fragment>
      <footer class="">
        <div class="w-full mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://flowbite.com/"
              class="flex items-center mb-4 sm:mb-0"
            >
              <img
                src="/images/Logo Black.png"
                class="w-20 mr-3"
                alt="Flowbite Logo"
              />
              {/* <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">aldrinvilladesigns</span> */}
            </a>
            <ul class="flex flex-wrap items-center gap-4 mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <a href="">
                <li>
                  <FacebookIcon />
                </li>
              </a>

              <li>
                <InstagramIcon />
              </li>
              <li>
                <GmailIcon />
              </li>
              <li>
                <LinkedIcon />
              </li>
              <li>
                <GithubIcon2 />
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" class="hover:underline">
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
