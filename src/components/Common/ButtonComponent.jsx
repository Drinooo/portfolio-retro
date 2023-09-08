import { Button } from "@material-tailwind/react";
import React from "react";

export const ExploreButton = (props) => {
  const { variant = "filled", children, className } = props;
  return (
    <Button
      variant={variant}
      className="flex items-center gap-2 bg-black rounded-none w-full md:w-auto"
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="h-5 w-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
        />
      </svg>
    </Button>
  );
};
