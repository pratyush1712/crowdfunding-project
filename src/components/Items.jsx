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

export const Items = () => {
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
