"use client";

import Slider from "react-slick";
import React, { useRef } from "react";
import Image from "next/image";

const Testimonial = () => {

  const testimonialData = [
    {
      id: 1,
      title: "Very Solid!!",
      rating: 5,
      text: "I wanted to take a moment to extend my heartfelt congratulations on the launch of your incredible online mentorship program..! Your unwavering dedication and genuine commitment to empowering others serve as a true inspiration.",
      author: "Shailesh Machra",
      location: "IFS 2022",
      image: "/images/assets/testimonial1.jpeg",
      backgroundColor: "#825EFF",
    },
    {
      id: 2,
      title: "Very Solid!!",
      rating: 5,
      text: "Dear Statecrafts, Congratulations on the launch of your amazing online mentorship program! Your dedication and commitment to empowering others are truly inspiring. I believe your program will make a positive difference in the lives of your mentees. ",
      author: "Ravi Kumar Sihag",
      location: "IAS 2022",
      image: "/images/assets/testimonial2.jpeg",
      backgroundColor: "#08CE97",
    },
    {
      id: 3,
      title: "Very Solid!!",
      rating: 5,
      text: "I am deeply grateful for the unwavering support and guidance you provided during my UPSC preparation. Your academy has been instrumental in my progress, and I sincerely thank you. Also , I am deeply thrilled to know about your new SEEKH initiative.",
      author: "Ram Chandra",
      location: "ICAS 2020",
      image: "/images/assets/testimonial3.jpeg",
      backgroundColor: "#FF8A3A",
    },
    {
      id: 4,
      title: "Very Solid!!",
      rating: 5,
      text: "I wish to express my heartfelt thanks to Statecraft for playing an important role in my success. Their personalised support helped me analyse and work on my shortcomings. Their extensive support during Mains and Interview phases helped me immensely. ",
      author: "Vinod Jakhar",
      location: "IFS 2022",
      image: "/images/assets/testimonial4.jpeg",
      backgroundColor: "#08CE97",
    },
    {
      id: 5,
      title: "Very Solid!!",
      rating: 5,
      text: "Dear Statecraft, Congratulations on your new online mentorship program! Your unwavering dedication and genuine commitment to empowering others is truly inspiring. I am confident that your program will have a profound impact on the lives of your mentees.",
      author: "Beerendra Patel",
      location: "IFS 2021",
      image: "/images/assets/testimonial5.jpeg",
      backgroundColor: "#FF8A3A",
    },
    {
      id: 6,
      title: "Very Solid!!",
      rating: 5,
      text: "Statecraft Civil Services academy has come with a vision for good quality civil services online coaching specially for poor and the needy students at free cost. I wish both academy and aspirants all the best!",
      author: "Abhinav Kumar Gupta",
      location: "UPSC CSE 2019 - AIR 472",
      image: "/images/assets/testimonial6.jpeg",
      backgroundColor: "#08CE97",
    },
    {
      id: 7,
      title: "Very Solid!!",
      rating: 5,
      text: "I take this opportunity to congratulate 'STATECRAFT' for their endeavor to provide free online coaching for the poor and needy aspirants. I wish them all the success in the journey and with all the aspirants a bright future in this regard. All the very best 'TEAM STATECRAFT'",
      author: "Mrugender Lal",
      location: "IPS 2019",
      image: "/images/assets/testimonial7.jpeg",
      backgroundColor: "#825EFF",
    },
    {
      id: 8,
      title: "Very Solid!!",
      rating: 5,
      text: "It is a matter of immense pleasure to know that a high quality civil services academy is coming up in Bangalore in the form of 'STATECRAFT CIVIL SERVICES ACADEMY'. I wish Statecraft all the very best in bringing out the best from each aspirant.",
      author: "Daripelli Ramesh",
      location: "AIR - 690 CSE 2019",
      image: "/images/assets/testimonial8.jpeg",
      backgroundColor: "#FF8A3A",
    },
    {
      id: 9,
      title: "Very Solid!!",
      rating: 5,
      text: "It is a matter of immense pleasure to know that a high quality civil services academy is coming up in Bangalore in the form of 'STATECRAFT CIVIL SERVICES ACADEMY'. I wish Statecraft all the very best in bringing out the best from each aspirant and that the aspirants make good use of this opportunity.",
      author: "Anisha Tomar",
      location: "AIR - 94 UPSC CSE 2019",
      image: "/images/assets/testimonial9.jpeg",
      backgroundColor: "#825EFF",
    },
  ];

  const data = [
    {
      imgSrc: "/images/media/img_02.png",
      backgroundColor: "#825EFF",
      rating: "Very solid, 8.3 out 10",
      text: "We’v 9,000 agents across are country, Find agents near your neighborhood.",
      author: "Martin Jonas",
      country: "USA",
    },
    {
      imgSrc: "/images/media/img_03.png",
      backgroundColor: "#08CE97",
      rating: "Very solid, 7.2 out 10",
      text: "We’v 9,000 agents across are country, Find agents near your neighborhood.",
      author: "Martin Jonas",
      country: "USA",
    },
    {
      imgSrc: "/images/media/img_02.png",
      backgroundColor: "#FF8A3A",
      rating: "Very solid, 9.1 out 10",
      text: "We’v 9,000 agents across are country, Find agents near your neighborhood.",
      author: "Martin Jonas",
      country: "USA",
    },
    {
      imgSrc: "/images/media/img_03.png",
      backgroundColor: "#08CE97",
      rating: "Very solid, 10 out 10",
      text: "We’v 9,000 agents across are country, Find agents near your neighborhood.",
      author: "Martin Jonas",
      country: "USA",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    autoPlay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const sliderRef = useRef(null);

  return (
    <>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-7">
            <div className="title-style-one text-center text-md-start">
              <h2 className="main-title fw-bold tx-dark m0">
                What <span>Other Aspirants</span> Say About us.
              </h2>
            </div>
            {/* /.title-style-one */}
          </div>
          <div className="col-lg-6 col-md-5 ms-auto d-flex justify-content-center justify-content-sm-end">
            <ul className="slider-arrows slick-arrow-one d-flex justify-content-center style-none mb-30">
              <li
                className="prev_f1 slick-arrow rounded-circle text-center fs-20 tran3s"
                onClick={() => sliderRef.current.slickPrev()}
              >
                <i className="bi bi-chevron-left" />
              </li>
              <li
                className="next_f1 slick-arrow rounded-circle text-center fs-20 tran3s"
                onClick={() => sliderRef.current.slickNext()}
              >
                <i className="bi bi-chevron-right" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* /.container */}

      <div className="inner-content mt-100 lg-mt-60">
        <div className="feedback_slider_one custom">
          <Slider {...settings} ref={sliderRef} arrows={false}>
            {testimonialData.map((item, index) => (
              <div className="item" key={index}>
                <div className="feedback-block-one pt-45 align-items-end d-sm-flex">
                  <div className="img-meta position-relative">
                    <Image
                      width={297}
                      height={397}
                      src={item.image}
                      alt="img"
                      className="m-auto"
                    />
                  </div>
                  <div className="text-wrapper">
                    <div
                      className="icon d-flex align-items-center justify-content-center rounded-circle mb-15"
                      style={{ backgroundColor: item.backgroundColor }}
                    >
                      <Image
                        width={28}
                        height={25}
                        src="/images/icon/icon_07.svg"
                        alt="img"
                      />
                    </div>
                    <div className="rating h3 fw-bold tx-dark">
                      {item.rating}
                    </div>
                    <p className="text-lg pt-35 pb-20">{item.text}</p>
                    <h6>
                      {item.author},
                      <span className="opacity-25">{item.location}</span>
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        {/* /.feedback_slider_one */}
      </div>
      {/* /.inner-content */}
    </>
  );
};

export default Testimonial;
