import Image from "next/image";
import React from "react";

const featuresData = [
  {
    id: 1,
    iconSrc: "/images/assets/3dkpscOne.png",
    title: "Current Affairs Classes",
    description:
      "We run our service on Google Cloud, which guarantees premium availability and reliability and one of the fastest networks out there.",
  },
  {
    id: 2,
    iconSrc: "/images/assets/3dkpscTwo.png",
    title: "Focus Sheet (PYQ Analysis)​",
    description:
      "We are consistently among the first to integrate and offer the latest speed technologies such as the newest PHP versions.",
  },
  {
    id: 3,
    iconSrc: "/images/assets/3dkpscThree.png",
    title: "Online Test Discussion",
    description:
      "We developed a custom PHP setup that cuts the TTFB (time to first byte) and makes the overall resource usage more efficient.",
  },
  {
    id: 4,
    iconSrc: "/images/assets/3dkpscFour.png",
    title: "CSAT Classes",
    description:
      "Free CDN powered by CloudFlare allows you to cache content and serve it from servers closest to your visitors for faster web serving.",
  },
  {
    id: 5,
    iconSrc: "/images/assets/3dkpscFive.png",
    title: "Synopsis of Test Papers",
    description:
      "Our MySQL setup allows for a large number of requests to be processed simultaneously and masterfully handles heavy queries.",
  },
  {
    id: 6,
    iconSrc: "/images/assets/3dkpscSix.png",
    title: "Subject Matter Experts",
    description:
      "For WordPress sites, we have developed a powerful plugin that gives you control over the server and makes it significantly faster.",
  },
];

const Features = ({details}) => {
  const filteredFeatures = featuresData.filter((feature) => details.includes(feature.id));
  return (
    <>
      {filteredFeatures.map((feature) => (
      <div
          key={feature.id}
          className="col-lg-4 col-sm-6 d-flex mt-40"
          data-aos="fade-up"
          data-aos-delay={`${(feature.id - 1) * 100}`}
        >
          <div className="card-style-twentyFive">
            <div className="icon d-flex align-items-end">
              <Image
                width={45}
                height={45}
                src={feature.iconSrc}
                alt="icon"
                className="lazy-img mh-100"
              />
            </div>
            <h4 className="mt-40 lg-mt-30 mb-20">{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
          {/* /.card-style-twentyFive */}
        </div>
      ))}
    </>
  );
};

export default Features;
