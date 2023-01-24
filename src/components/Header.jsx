import React from "react";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = Object.entries(
  importAll(require.context("../assets/Header", false, /\.(png|jpe?g|svg)$/))
);

const Items = () => {
  return (
    <div className="flex flex-row flex-wrap content-center items-center justify-between mb-10 space-x-28">
      {images.map((image) => (
        <div>
          <img src={image[1]} alt={image[0]} className="h-16 sm:h-19 " />
          <caption className="font-bold text-xs">
            {image[0].split(".")[0]}
          </caption>
        </div>
      ))}
    </div>
  );
};

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
