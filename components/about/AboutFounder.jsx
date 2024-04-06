import Image from "next/image";
import React from "react";

const AboutFounder = () => {
  const aboutData = {
    title: {
      subtitle: "Chief Advisor and Chief Mentor",
      mainTitle: (
        <>
          Mr. Muniyappa's Public service positions bring valuable insights.
        </>
      ),
    },
    content: {
      sectionTitle: "How he'll be helping you out?",
      description:
        "Mr. Muniyappa has joined us to provide a unique perspective on life after assuming such esteemed positions. He will offer invaluable insights into the roles, responsibilities, and challenges faced by officers in the civil services, shedding light on the multifaceted nature of public administration and he will also help students in understanding the demand of competitive exams.",
    },
    rating: {
      text: "Avg 4.8 rating makes us India's best UPSC, KPSC preparation Institute.",
      starsCount: 5,
    },
  };

  const starIcons = Array.from(
    { length: aboutData.rating.starsCount },
    (_, index) => (
      <li key={index}>
        <i className="bi bi-star-fill" />
      </li>
    )
  );

  return (
    <>
      <div className="col-md-6 order-md-last" data-aos="fade-right">
        <div className="img-meta d-inline-block position-relative ps-3 ps-lg-5 pb-50 sm-mt-90">
          <Image
            width={501}
            height={620}
            style={{ objectFit: "cover" }}
            src="/images/media/img_01.jpg"
            alt="shape"
            className="lazy-img"
          />
          <Image
            width={132}
            height={126}
            src="/images/shape/shape_09.svg"
            alt="shape"
            className="lazy-img shapes shape-one"
          />
          <Image
            width={8}
            height={8}
            src="/images/shape/shape_10.svg"
            alt="shape"
            className="lazy-img shapes shape-two"
          />
          <div className="shapes shape-three" />
          <Image
            width={8}
            height={8}
            src="/images/shape/shape_11.svg"
            alt="shape"
            className="lazy-img shapes shape-four"
          />
          <Image
            width={810}
            height={10}
            src="/images/shape/shape_12.svg"
            alt="shape"
            className="lazy-img shapes shape-five"
          />
          <div className="shapes shape-six" />
          <Image
            width={18}
            height={16}
            src="/images/shape/shape_13.svg"
            alt="shape"
            className="lazy-img shapes shape-seven"
          />
          <div className="card-one" data-aos="fade-up" data-aos-delay="250">
            <div className="icon d-flex align-items-center justify-content-center rounded-circle">
              <Image
                width={24}
                height={18}
                src="/images/icon/icon_06.svg"
                alt="shape"
                className="lazy-img"
              />
            </div>
            <div className="name fs-18 fw-500 tx-dark mb-10">
              - Mr. N C Muniyappa, <span className="opacity-50">CACM</span>
            </div>
            <p className="fs-18 m0">
            As you embark on this transformative journey, know that you are not alone!
            </p>
          </div>
          {/* /.card-one */}
        </div>
        {/* /.img-meta */}
      </div>

      <div className="col-lg-5 col-md-6 ms-auto order-md-first">
        <div className="block-style-one" data-aos="fade-left">
          <div className="title-style-one">
            <div className="sc-title text-uppercase">
              {aboutData.title.subtitle}
            </div>
            <h2 className="main-title fw-bold tx-dark m0">
              {aboutData.title.mainTitle}
            </h2>
          </div>
          <h4 className="tx-dark pt-65 pb-20 lg-pt-40 lg-pb-10">
            {aboutData.content.sectionTitle}
          </h4>
          <p className="fs-20">{aboutData.content.description}</p>
          {/* <p className="fs-18 mb-10 pt-30 lg-pt-20">
            <span className="fw-500 tx-dark">{aboutData.rating.text}</span>
          </p>
          <ul className="d-flex style-none rating">{starIcons}</ul> */}
        </div>
        {/* /.block-style-one */}
      </div>
      {/* End .col-5 */}

      
    </>
  );
};

export default AboutFounder;
