import { Button } from "@material-tailwind/react";
import React from "react";

export const ExploreButton = (props) => {
  const { variant = "outlined", children } = props;
  return (
    <Button
      variant={variant}
      className="flex items-center gap-2 rounded-none md:w-auto text-white bg-black border-black border-3 hover:shadow-none hover:bg-green hover:border-black hover:border-3 hover:text-black"
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
      className="flex items-center rounded-none md:w-auto text-white bg-black border-black border-3 hover:shadow-none hover:bg-green hover:border-black hover:border-3 hover:text-black"
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
      className="flex items-center gap-2 rounded-none w-full md:w-auto text-white border-black border-3 hover:shadow-none hover:bg-green hover:border-black hover:border-3 hover:text-black"
    >
      {children}
    </Button>
  );
};

export const DownloadButton = (props) => {
  const { variant = "outlined", children } = props;
  return (
    <Button
      variant={variant}
      className="flex items-center gap-2 rounded-none text-white md:w-auto bg-black border-black border-3 hover:shadow-none hover:bg-green hover:border-black hover:border-3 hover:text-black"
    >
      {children}
    </Button>
  );
};

export const SendButton = (props) => {
  const { variant = "outlined", children } = props;
  return (
    <Button
      variant={variant}
      type="submit"
      className="flex items-center gap-2 rounded-none w-full md:w-auto text-white bg-black border-black border-3 hover:shadow-none hover:bg-green hover:border-black hover:border-3 hover:text-black"
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
      className="flex items-center rounded-none md:w-auto text-black border-black border-3 hover:shadow-none hover:bg-green hover:border-black hover:border-3 hover:text-black"
    >
      {children}
    </Button>
  );
};