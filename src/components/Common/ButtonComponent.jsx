import { Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

export const ExploreButton = (props) => {
  const { variant = "outlined", children } = props;
  return (
    <Button
      variant={variant}
      className="normal-case flex items-center gap-2 rounded-none md:w-auto font-[600] text-[20px] text-white bg-black border-black border-3 hover:shadow-none hover:bg-green hover:border-black hover:border-3 hover:text-black"
    >
      {children}
    </Button>
  );
};

export const ViewMoreButton = (props) => {
  const { variant = "outlined", children } = props;
  return (
    <Button
      variant={variant}
      className="normal-case flex items-center rounded-none md:w-auto font-[600] text-[20px] text-white bg-black border-black border-3 hover:shadow-none hover:bg-green hover:border-black hover:border-3 hover:text-black"
    >
      {children}
    </Button>
  );
};

export const HireMeButton = (props) => {
  const { variant = "outlined", children } = props;
  return (
    <Button
      variant={variant}
      className="normal-case flex items-center gap-2 rounded-none w-full md:w-auto font-[600] text-[20px] text-white border-black border-3 hover:shadow-none hover:bg-green hover:border-black hover:border-3 hover:text-black"
    >
      {children}
    </Button>
  );
};

export const DownloadButton = (props) => {
  const { variant = "outlined", children } = props;
  return (
    <Link to={"Aldrin Villalobos CV - Web Designer.pdf"} target="_blank">
      <Button
        variant={variant}
        className="normal-case flex items-center gap-2 rounded-none font-[600] text-[20px] text-white md:w-auto bg-black border-black border-3 hover:shadow-none hover:bg-green hover:border-black hover:border-3 hover:text-black"
      >
        {children}
      </Button>
    </Link>
  );
};

export const SendButton = (props) => {
  const { variant = "outlined", children } = props;
  return (
    <Button
      variant={variant}
      type="submit"
      className="normal-case flex items-center justify-center gap-2 rounded-none w-full md:w-auto font-[600] text-[20px] text-white bg-black border-black border-3 hover:shadow-none hover:bg-green hover:border-black hover:border-3 hover:text-black"
    >
      {children}
    </Button>
  );
};

export const OutlinedButton = (props) => {
  const { variant = "outlined", children } = props;
  return (
    <Button
      variant={variant}
      className="normal-case flex items-center rounded-none md:w-auto font-[600] text-[20px] text-black border-black border-3 hover:shadow-none hover:bg-green hover:border-black hover:border-3 hover:text-black"
    >
      {children}
    </Button>
  );
};
