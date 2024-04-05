import React from "react";
import FeatureBlock from "./FeatureBlock";

const featureBlockData = [
  {
    image: "/images/shape/shape_148.svg",
    title: "Shape",
  },
  {
    image: "/images/shape/shape_149.svg",
    title: "Shape",
  },
  {
    image: "/images/shape/shape_150.svg",
    title: "Shape",
  },
  {
    image: "/images/shape/shape_151.svg",
    title: "Shape",
  },
];

const FeatureBlockHeader = () => {
  return (
    <div className="fancy-feature-thirtyNine position-relative zn2 pt-90 pb-50 lg-pt-50 lg-pb-10">
      <div className="container">
        <div className="row gx-xxl-5">
          <FeatureBlock />
        </div>
      </div>
      {featureBlockData?.map((img, index) => (
        <img
          src={img.image}
          alt={img.title}
          className="shapes shape-one lazy-img"
        />
      ))}
    </div>
  );
};

export default FeatureBlockHeader;
