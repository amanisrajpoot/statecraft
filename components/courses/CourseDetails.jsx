"use client";

import { useState } from "react";
import items from "@/data/portfolio";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import Link from "next/link";
import Image from "next/image";

const CourseDetails = () => {
  const [filter, setFilter] = useState("*");

  const courseData = [
    {
      id: 1,
      imgSrc: "/images/assets/featureCourses1.jpg",
      description: "Prelims Cum Mains Foundation(2025)",
      duration: "15 months",
      title: "Foundation Program",
      difficulty: 5,
      ratingsCount: 310,
      coursePrice: [
        { price: 97750, discountedPrice: 115000, title: "Offline" },
        { price: 72250, discountedPrice: 85000, title: "Online" },
      ],
      tags: ["prelims", "mains", "upsc", "kpsc"],
    },
    {
      id: 2,
      imgSrc: "/images/assets/featureCourses2.jpg",
      description: "UPSC Interview Guidance Program",
      duration: "15 months",
      title: "UPSC Interview Guidance Program",
      difficulty: 3,
      ratingsCount: 310,
      coursePrice: [
        { price: 97750, discountedPrice: 115000, title: "Offline" },
        { price: 72250, discountedPrice: 85000, title: "Online" },
      ],
      tags: ["prelims", "upsc", "kpsc"],
    },
    {
      id: 3,
      imgSrc: "/images/assets/featureCourses3.jpg",
      description: "3 Day Crash Course | KPSC KAS Prelims Batch",
      duration: "3 Days",
      title: "3 Day Crash Course",
      difficulty: 1,
      ratingsCount: 310,
      coursePrice: [
        { price: 1500, discountedPrice: 3000, title: "Offline" },
        { price: 1500, discountedPrice: 3000, title: "Online" },
      ],
      tags: ["kpsc"],
      classes: "6 Hours",
    },
    {
      id: 4,
      imgSrc: "/images/assets/featureCourses4.jpg",
      description: "Focus 40 | KPSC KAS Prelims Batch",
      duration: "40 Days",
      title: "Focus 40",
      difficulty: 3,
      ratingsCount: 310,
      coursePrice: [
        { price: 10500, discountedPrice: 21000, title: "Offline" },
        { price: 10500, discountedPrice: 21000, title: "Online" },
      ],
      tags: ["kpsc"],
      classes: "40 mins",
      limitedSeats: "40",
      totalTests: "40",
    },
    {
      id: 5,
      imgSrc: "/images/assets/featureCourses4.jpg",
      description: "Focus 60 | KPSC KAS Prelims Batch",
      duration: "60 Days",
      title: "Focus 60",
      difficulty: 3,
      ratingsCount: 310,
      coursePrice: [
        { price: 10500, discountedPrice: 21000, title: "Offline" },
        { price: 10500, discountedPrice: 21000, title: "Online" },
      ],
      tags: ["kpsc"],
      classes: "60 mins",
      limitedSeats: "60",
      totalTests: "60",
    },
  ];

  return (
    <div className="portfolio-gallery-seven pt-30">
      <div className="container">
        <ul className="style-none text-center isotop-menu-wrapper g-control-nav-two">
          <li
            className={filter === "*" ? "is-checked" : ""}
            onClick={() => setFilter("*")}
          >
            All
          </li>
          <li
            className={filter === "prelims" ? "is-checked" : ""}
            onClick={() => setFilter("prelims")}
          >
            Prelims
          </li>
          <li
            className={filter === "mains" ? "is-checked" : ""}
            onClick={() => setFilter("mains")}
          >
            Mains
          </li>
          <li
            className={filter === "upsc" ? "is-checked" : ""}
            onClick={() => setFilter("upsc")}
          >
            UPSC
          </li>
          <li
            className={filter === "kpsc" ? "is-checked" : ""}
            onClick={() => setFilter("kpsc")}
          >
            KPSC
          </li>
        </ul>

        <div className="row pt-90 lg-pt-50">
          <Gallery>
            {courseData.map((item) => (
              <div
                key={item.id}
                className={`col-lg-4 col-md-6 ${item.category}`}
              >
                <div className="portfolio-block-four mb-50">
                  <div className="img-meta position-relative">
                    <Image
                      width={410}
                      height={340}
                      src={item.imgSrc}
                      alt="gallary"
                      className="w-100"
                    />

                    <Item
                      original={item.imgSrc}
                      thumbnail={item.imgSrc}
                      width={410}
                      height={340}
                    >
                      {({ ref, open }) => (
                        <span
                          role="button"
                          title="Click for large view"
                          className="fancybox expend-btn d-flex align-items-center justify-content-center tran3s"
                          ref={ref}
                          onClick={open}
                        >
                          <i className="bi bi-plus-lg"></i>
                        </span>
                      )}
                    </Item>
                  </div>
                  {item?.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="tag"
                      style={{ textTransform: "uppercase" }}
                    >
                      {tag + " "}
                    </span>
                  ))}
                  <Link
                    href={`/courses/${item.id}`}
                    className="title tran3s d-flex flex-column align-items-center"
                  >
                    <span className="pj-name tran3s fw-500">{item.title}</span>
                  </Link>
                  <div className="course-data">
                    <div className="d-flex align-items-center justify-  ">
                      <div className="pj-title course-by fs-12 tx-dark opacity-75">
                        {item.description}
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-  ">
                      <div className="pj-title course-duration fs-10 tx-dark">
                        {item.duration}
                      </div>
                    </div>
                    <div className="pj-title course-review d-flex align-items-center mt-5">
                      <ul className="style-none d-flex rating">
                        {Array.from({ length: item.difficulty }, (_, i) => (
                          <li className="active" key={i}>
                            <i className="bi bi-star-fill" />
                          </li>
                        ))}
                        {Array.from({ length: 5 - item.difficulty }, (_, i) => (
                          <li key={i}>
                            <i className="bi bi-star-fill" />
                          </li>
                        ))}
                      </ul>
                      {/* <span className="pj-title fs-15 tx-dark ms-1">
                        ({item.ratingsCount})
                      </span> */}
                    </div>
                    <div className="d-flex align-items-center justify-content-between mt-10 mb-10">
                      {item?.coursePrice?.map((courseData, index) => (
                        <div
                          className="flex align-items-center justify-content-between mt-30 mb-10"
                          key={index}
                        >
                          <p className="pj-title price fw-500 fs-20 tx-dark">
                            {courseData?.title}
                          </p>
                          <div className="flex align-items-center justify-content-between">
                            <strong className="pj-title price fw-300 fs-10 tx-dark">
                              ₹{courseData.price.toFixed(2)}
                            </strong>
                            <p className="pj-title opacity-50 fw-normal line-through">
                              <del>
                                ₹{courseData.discountedPrice.toFixed(2)}
                              </del>
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Gallery>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
