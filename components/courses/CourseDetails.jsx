"use client";

import { useState } from "react";
import items from "@/data/portfolio";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import Link from "next/link";
import Image from "next/image";

const CourseDetails = () => {
  const [filter, setFilter] = useState("*");

  const filteredItems =
    filter === "*"
      ? items.slice(40, 45)
      : items.slice(40, 45).filter((item) => item.category.includes(filter));

  const courseData = [
    {
      id: 1,
      imgSrc: "/images/assets/featureCourses1.jpg",
      description: "Prelims Cum Mains Foundation(2025)",
      duration: "15 months",
      title: "Foundation Program",
      rating: 5,
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
      rating: 5,
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
      rating: 5,
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
      rating: 5,
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
              <div key={item.id} className={`col-lg-12 ${item.category}`}>
                <div className="portfolio-block-six mb-40">
                  <div className="img-meta position-relative">
                    <Image
                      width={1320}
                      height={600}
                      src={item.imgSrc}
                      alt="gallary"
                      className="w-100 tran5s"
                    />

                    <Item
                      original={item.imgSrc}
                      thumbnail={item.imgSrc}
                      width={1320}
                      height={600}
                    >
                      {({ ref, open }) => (
                        <span
                          role="button"
                          className="fancybox tran3s overlay-icon zoom-icon"
                          title="Click for large view"
                          ref={ref}
                          onClick={open}
                        >
                          <i className="bi bi-plus"></i>
                        </span>
                      )}
                    </Item>
                    <div className="caption tran3s d-flex justify-content-end flex-column">
                      {item?.tags?.map((tag, index) => (
                        <span key={index} className="tag">
                          {item.tag}
                        </span>
                      ))}
                      <h6>
                        <Link href={`/courses/${item.id}`} className="pj-title">
                          {item.title}
                        </Link>
                      </h6>
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
                            {Array.from({ length: item.rating }, (_, i) => (
                              <li className="active" key={i}>
                                <i className="bi bi-star-fill" />
                              </li>
                            ))}
                            {Array.from({ length: 5 - item.rating }, (_, i) => (
                              <li key={i}>
                                <i className="bi bi-star-fill" />
                              </li>
                            ))}
                          </ul>
                          <span className="pj-title fs-15 tx-dark ms-1">
                            ({item.ratingsCount})
                          </span>
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

                          {/* <a href="#" className="bookmark" title="Bookmark">
                        <i className="bi bi-bookmark" />
                      </a> */}
                        </div>
                      </div>
                    </div>
                    {/* <!-- /.caption --> */}
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
