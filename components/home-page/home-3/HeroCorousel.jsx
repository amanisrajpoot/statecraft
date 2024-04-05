'use client'

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SwiperImage from "@/components/common/SwiperImage";

const heroSwiperImage = [
    {
      image: "/images/assets/CrashCourse1.png",
      title: "3 Days Crash Course",
    },
    {
      image: "/images/assets/CrashCourse2.png",
      title: "Focus 40",
    },
    {
      image: "/images/assets/CrashCourse3.png",
      title: "Tests",
    },
  ];

const HeroCorousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear"
  }
  return (
    <div className="hero-banner-twelve pt-225 pb-120 lg-pb-80 md-pt-200">
      <div className="container">
        <SwiperImage swiperData={heroSwiperImage}/>

          {/* <div className="col-md-6">
            <div className="text-wrapper" data-aos="fade-right">
              <h1 className="hero-heading fw-500 tx-dark" style={{fontSize:"3rem"}}>
                Congratulations to all successful Candidates
              </h1>
              <p className="text-lg tx-dark mb-30 pt-35 lg-pt-20 lg-mb-20">
                India's Top Coaching Institute for UPSC CSE
              </p>
              <div className="d-lg-flex align-items-center">
                <a
                  href="#"
                  className="btn-twentyFour fw-500 position-relative d-inline-flex align-items-center me-5 mt-30"
                >
                  <span>Explore all Courses</span>
                  <img
                    src="/images/icon/icon_123.svg"
                    alt="icon"
                    className="ms-3"
                  />
                </a>
                <div className="btn-eighteen position-relative d-inline-block tx-dark mt-15 md-mt-20">
                  <a href="#" className="fw-500 tran3s">
                    Join for Free Now!
                  </a>
                </div>
              </div>
            </div>
          </div> */}

          {/* End col-6 */}

          {/* End col-6 */}
        {/* /.row */}
      </div>
      {/* /.container */}
    </div>
  );
};

export default HeroCorousel;
