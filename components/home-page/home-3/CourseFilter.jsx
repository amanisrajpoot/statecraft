"use client";

import { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";

const courseData = [
  {
    id: 2,
    imgSrc: "/images/assets/featureCourses2.jpg",
    description: "UPSC Interview Guidance Program",
    duration: "15 months",
    title: "UPSC Interview Guidance Program",
    difficulty: 4,
    ratingsCount: 210,
    coursePrice: [
      { price: 97750, discountedPrice: 115000, title: "Offline" },
      { price: 72250, discountedPrice: 85000, title: "Online" },
    ],
    tags: ["prelims", "upsc", "interview"],
  },
  {
    id: 3,
    imgSrc: "/images/assets/featureCourses3.jpg",
    description: "3 Day Crash Course | KPSC KAS Prelims Batch",
    duration: "3 Days",
    title: "3 Day Crash Course",
    difficulty: 5,
    ratingsCount: 70,
    coursePrice: [
      { price: 1500, discountedPrice: 3000, title: "Offline" },
      { price: 1500, discountedPrice: 3000, title: "Online" },
    ],
    tags: ["kpsc", "prelims"],
    classes: "6 Hours",
  },
  {
    id: 6,
    imgSrc: "/images/assets/banner/sprint60.jpeg",
    description: "Sprint 60 | UPSC Working Professional Batch",
    duration: "60 Days",
    title: "Sprint 60",
    difficulty: 4,
    ratingsCount: 61,
    coursePrice: [
      { price: 10500, discountedPrice: 21000, title: "Offline" },
      { price: 10500, discountedPrice: 21000, title: "Online" },
    ],
    tags: ["upsc", "prelims", "mains"],
    classes: "60 mins",
    limitedSeats: "60",
    totalTests: "60",
  },
];

const CourseFilter = () => {
  const [filter, setFilter] = useState("*");

  const filteredItems =
    filter === "*"
      ? courseData
      : courseData.filter((item) => item.tags.includes(filter));

  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <ul
        className="nav nav-tabs border-0 mb-130 lg-mb-80 md-mb-30"
        role="tablist"
        data-aos="fade-up"
      >
        <ul className="style-none text-center isotop-menu-wrapper d-flex flex-wrap">
          <li className="nav-item">
            <button
              className={filter === "*" ? "active nav-link" : "nav-link"}
              onClick={() => setFilter("*")}
            >
              All
            </button>
          </li>
          <li className="nav-item">
            <button
              className={filter === "upsc" ? "active nav-link" : "nav-link"}
              onClick={() => setFilter("upsc")}
            >
              UPSC
            </button>
          </li>
          <li className="nav-item">
            <button
              className={filter === "kpsc" ? "active nav-link" : "nav-link"}
              onClick={() => setFilter("kpsc")}
            >
              KPSC
            </button>
          </li>
          <li className="nav-item">
            <button
              className={filter === "prelims" ? "active nav-link" : "nav-link"}
              onClick={() => setFilter("prelims")}
            >
              Prelims
            </button>
          </li>
          <li className="nav-item">
            <button
              className={filter === "mains" ? "active nav-link" : "nav-link"}
              onClick={() => setFilter("mains")}
            >
              Mains
            </button>
          </li>
          {/* <li className="nav-item">
            <button
              className={filter === "art" ? "active nav-link" : "nav-link"}
              onClick={() => setFilter("art")}
            >
              Art
            </button>
          </li>
          <li className="nav-item">
            <button
              className={
                filter === "marketing" ? "active nav-link" : "nav-link"
              }
              onClick={() => setFilter("marketing")}
            >
              Marketing
            </button>
          </li> */}
        </ul>
      </ul>
      {/* End ul */}

      <div className="slider-wrapper">
        <div
          className="tab-content position-relative zn2 course_slider_one"
          data-aos="fade-up"
        >
          <div className="row">
            {/* <Slider {...settings}> */}
            {filteredItems.map((course) => (
              <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={course.id}>
                <div className="card-style-twenty tran3s">
                  <div className="img-meta">
                    <Image
                      width={315}
                      height={222}
                      src={course.imgSrc}
                      alt="media"
                      className="w-100"
                    />
                  </div>
                  {/* /.img-meta */}
                  <div className="course-data">
                    <Link
                      href={`courses/${course?.id}`}
                      className="course-title fw-500"
                    >
                      {course.title}
                    </Link>
                    <div className="d-flex align-items-center justify-  ">
                      <div className="course-by fs-12 tx-dark opacity-75">
                        {course.description}
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-  ">
                      <div className="course-duration fs-10 tx-dark">
                        {course.duration}
                      </div>
                    </div>
                    <div className="course-review d-flex align-items-center mt-5">
                      <ul className="style-none d-flex rating">
                        {Array.from({ length: course.difficulty }, (_, i) => (
                          <li className="active" key={i}>
                            <i className="bi bi-star-fill" />
                          </li>
                        ))}
                        {Array.from(
                          { length: 5 - course.difficulty },
                          (_, i) => (
                            <li key={i}>
                              <i className="bi bi-star-fill" />
                            </li>
                          )
                        )}
                      </ul>
                      <span className="fs-15 tx-dark ms-1">
                        ({course.ratingsCount})
                      </span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mt-10 mb-10">
                      {course?.coursePrice?.map((courseData, index) => (
                        <div
                          className="flex align-items-center justify-content-between mt-30 mb-10"
                          key={index}
                        >
                          <p className="price fw-500 fs-20 tx-dark">
                            {courseData?.title}
                          </p>
                          <div className="flex align-items-center justify-content-between">
                            <strong className="price fw-300 fs-10 tx-dark">
                              ₹{courseData.price.toFixed(2)}
                            </strong>
                            <p className="opacity-50 fw-normal line-through">
                              <del>
                                ₹{courseData.discountedPrice.toFixed(2)}
                              </del>
                            </p>
                          </div>
                        </div>
                      ))}

                      {/* <a href="#" className="bookmark" title="Bookmark">
                        <i className="bi bi-bookmark" />
                      </a> */}
                    </div>
                  </div>
                  {/* /.course-data */}
                </div>
                {/* /.card-style-twenty */}
              </div>
            ))}
            {/* </Slider> */}
          </div>
        </div>
        {/* /.tab-content */}
      </div>
    </>
  );
};

export default CourseFilter;
