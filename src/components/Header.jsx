import React from "react";
import { Items } from "./Items";

export const Header = () => {
  return (
    <div className="mx-5 flex flex-col content-center items-center justify-center border-4 border-black">
      <div className="flex flex-col py-9 text-center font-serif">
        <p className="mb-2">Find it first on Fundstarter.</p>
        <p className="mb-2">
          Fundstarter is where early adopters and innovation seekers find
          lively,
          <br />
          imaginative ideas before it hits the mainstream.
        </p>
        Which Projects interest you?
      </div>
      <Items />
    </div>
  );
};
