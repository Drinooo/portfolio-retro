import React, { Fragment } from "react";
import {
  Navbar,
  Typography,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { MAIN_NAVIGATION } from "../../utils/data";
import { Link } from "react-router-dom";

export const NavbarComponent = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {MAIN_NAVIGATION.map((item) => (
        <li className="">
          <Link to={item.path}>
            <Typography
              as="li"
              variant="small"
              className="p-1 font-[700] lg:text-navbar sm:text-navbarMobile text-black hover:text-gray"
            >
              {item.title}
            </Typography>
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <Fragment>
      <Navbar className="sticky top-0 z-10 mx-auto max-w-full border-none rounded-none shadow-none bg-beige bg-opacity-100 backdrop-saturate-200 backdrop-blur-none py-1">
        <div className="mx-auto max-w-screen-2xl flex items-center justify-between text-blue-gray-900">
          <Typography as="a" href="/" className="cursor-pointer">
            <img src="/images/Logo Black.png" className="w-24" alt="" />
          </Typography>
          <div className="hidden lg:block">{navList}</div>
          <IconButton
            variant="text"
            className="ml-auto h-8 w-8 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-8 w-8"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <div className="container mx-auto">{navList}</div>
        </Collapse>
      </Navbar>
    </Fragment>
  );
};
