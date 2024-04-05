import React from "react";
import Slider from "react-slick";

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

const SwiperImage = ({swiperData}) => {
  return (
      <Slider {...settings}>
        {swiperData.map((swiperItem, index) => (
          <img
            src={swiperItem?.image}
            alt={swiperItem?.title}
            className="lazy-img sm-mt-40"
            key={index}
          />
        ))}
      </Slider>
  );
};

export default SwiperImage;
