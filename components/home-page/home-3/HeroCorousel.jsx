'use client'

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SwiperImage from "@/components/common/SwiperImage";

const heroSwiperImage = [
    {
      image: "/images/assets/banner/brandBanner.png",
      title: "Banner",
    },
    {
      image: "/images/assets/banner/CrashCourse.png",
      title: "3 Days Crash Course",
    },
    {
      image: "/images/assets/banner/sprint60.jpeg",
      title: "Sprint 60",
    },
    {
      image: "/images/assets/banner/superman.jpeg",
      title: "Superman",
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
    <>
      <div className="hero-banner-twelve pt-200 pb-50 lg-pb-80 md-pt-200" style={{minWidth:"100%"}}>
        <div className="container">
          <SwiperImage swiperData={heroSwiperImage} />
        </div>
      </div>
    </>
  );
};

export default HeroCorousel;
