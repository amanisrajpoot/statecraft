'use client'

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
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
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="text-wrapper" data-aos="fade-right">
              <h1 className="hero-heading fw-500 tx-dark" style={{fontSize:"3rem"}}>
                You're just one step away from choosing the path to success..
              </h1>
              <p className="text-lg tx-dark mb-30 pt-35 lg-pt-20 lg-mb-20">
                India's Top Coaching Institute for UPSC CSE
              </p>
              <div className="d-lg-flex align-items-center">
                <a
                  href="/courses"
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
          </div>
          {/* End col-6 */}

          <div
            className="col-xxl-6 col-xl-5 col-md-6 ms-auto text-end"
            data-aos="fade-left"
          >
          <Slider {...settings}>
            <img
              src="/images/assets/corouselStateOne.png"
              alt="img"
              className="lazy-img"
            />
            <img
              src="/images/assets/corouselStateTwo.png"
              alt="img"
              className="lazy-img"
            />
            <img
               src="/images/assets/corouselStateThree.png"
              alt="img"
              className="lazy-img"
            />

          </Slider>
            
            <div className="image-holder zn2 d-inline-block position-relative sm-mt-60">
              
              {/* <div className="media-img">
                <Image
                  width={490}
                  height={542}
                  layout="responsive"
                  src="/images/media/img_58.jpg"
                  alt="img"
                  className="lazy-img"
                />
              </div> */}

              {/* <div
                className="card-style card-one d-flex flex-column justify-content-center align-items-center"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <h4>120k+</h4>
                <p>Online Videos</p>
              </div> */}
              {/* /.card-one */}

              {/* <div
                className="card-style card-two d-flex flex-column justify-content-center align-items-center"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <h4>200+</h4>
                <p>Categories</p>
              </div> */}
              {/* /.card-one */}

              {/* <div
                className="card-style card-three d-flex flex-column justify-content-center align-items-center"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <h5>80k+ Students</h5>
                <div className="avatar d-flex align-items-center">
                  <img src="/images/media/img_59.jpg" alt="" />
                  <img src="/images/media/img_60.jpg" alt="" />
                  <img src="/images/media/img_61.jpg" alt="" />
                  <img src="/images/media/img_62.jpg" alt="" />
                  <span className="avatar_image avatar_fallback">
                    <i className="bi bi-arrow-right-short" />
                  </span>
                </div>
              </div> */}
              {/* /.card-one */}

              <img
                src="/images/shape/shape_146.svg"
                alt="shape"
                className="shapes shape-one lazy-img"
              />
              <img
                src="/images/shape/shape_147.svg"
                alt="shape"
                className="shapes shape-two lazy-img"
              />
            </div>
          </div>
          {/* End col-6 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </div>
  );
};

export default Hero;
