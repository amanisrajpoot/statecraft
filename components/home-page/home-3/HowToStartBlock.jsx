"use client";

import Link from "next/link";
import React from "react";
import Slider from "react-slick";

const HowToStartBlock = () => {
  const settings = {
    dots: false,
    arrow: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };
  return (
    <div className="fancy-feature-fortyThree bg-black position-relative pt-130 pb-65 lg-pt-80">
      <div className="container">
        <div className="row ">
          <div
            className="col-xl-5 col-md-6 ms-auto order-md-last"
            data-aos="fade-right"
          >
            <div className="title-style-one mb-30">
              <h2
                className="main-title fw-500 text-white m0"
                style={{ fontSize: "36px" }}
              >
                UPSC
              </h2>
            </div>
            <p className="fs-20 text-white opacity-75 md-mb-30">
              About Civil Services
            </p>
            <p className="fs-20 text-white opacity-75 md-mb-30">
              Eligibility Criteria
            </p>
            <p className="fs-20 text-white opacity-75 md-mb-30">
              Prelims Syllabus
            </p>
            <p className="fs-20 text-white opacity-75 mb-50 md-mb-30">
              Mains Syllabus
            </p>
            {/* <p className="fs-20 text-white opacity-75 mb-50 md-mb-30">
              This short quiz will sort you out. Answer a few simple questions
              to get personal career advice and course recommendations.
            </p> */}
            {/* <Link
              href="/pages-menu/about-us-v2"
              className="btn-twentyFive fw-500 tran3s"
            >
              About UPSC <i className="bi bi-arrow-right ms-2" />
            </Link> */}

            <div className="title-style-one mb-30">
              <h2
                className="main-title fw-500 text-white m0"
                style={{ fontSize: "36px" }}
              >
                KPSC
              </h2>
            </div>
            <p className="fs-20 text-white opacity-75 md-mb-30">
              3 Days Crash Course
            </p>
            <p className="fs-20 text-white opacity-75 md-mb-30">Focus 40</p>
            <p className="fs-20 text-white opacity-75 md-mb-30">
              KPSC Current Affairs
            </p>
            <p className="fs-20 text-white opacity-75 mb-50 md-mb-30">
              KPSC KAS Mains Syllabus
            </p>
          </div>

          {/* End .col */}

          <div className="col-md-6 order-md-first" data-aos="fade-left">
            <Slider {...settings}>
              <img
                src="/images/assets/focus1.png"
                alt="media"
                className="lazy-img sm-mt-40"
              />
              <img
                src="/images/assets/focus1.png"
                alt="media"
                className="lazy-img sm-mt-40"
              />
            </Slider>
          </div>
          {/* End .col */}
        </div>
        {/* End .row */}
      </div>
      {/* /.container */}
    </div>
  );
};

export default HowToStartBlock;
