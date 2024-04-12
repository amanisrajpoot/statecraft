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
    {
      image: "/images/assets/CrashCourse4.jpeg",
      title: "Banners",
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
      <div className="hero-banner-twelve pt-225 pb-120 lg-pb-80 md-pt-200">
        <div className="container">
          <SwiperImage swiperData={heroSwiperImage} />
        </div>
      </div>
    </>
  );
};

export default HeroCorousel;
