"use client";

import { useState } from "react";
import items from "@/data/portfolio";
import Link from "next/link";
import Image from "next/image";

const DownloadDetails = ({ downloadData }) => {
  //   const [filter, setFilter] = useState("*");

  return (
    <div className="portfolio-gallery-five pt-30">
      <div className="container">
        <ul className="style-none text-center isotop-menu-wrapper g-control-nav-two">
          <Link
            href={
              "https://drive.google.com/drive/folders/1RjbmfKHyviJF48MGLqQlvdH2TLDNU8Yz"
            }
            className="btn-twentyExtra fw-500 tran3s"
            data-aos="fade-up"
            data-aos-delay="300"
            target="_blank"
          >
            <li>All Downloads</li>
          </Link>
          {/* <li
            className={filter === "marketing" ? "is-checked" : ""}
            onClick={() => setFilter("marketing")}
          >
            Marketing
          </li>
          <li
            className={filter === "application" ? "is-checked" : ""}
            onClick={() => setFilter("application")}
          >
            Application
          </li>
          <li
            className={filter === "design" ? "is-checked" : ""}
            onClick={() => setFilter("design")}
          >
            Design
          </li>
          <li
            className={filter === "dev" ? "is-checked" : ""}
            onClick={() => setFilter("dev")}
          >
            Development
          </li> */}
        </ul>

        <div className="row pt-90 lg-pt-50 ">
          {downloadData.map((item) => (
            <div key={item.id} className={`col-lg-4 col-md-6 ${item.category}`}>
              <div className="portfolio-block-five hvr-shutter-out mb-50 lg-mb-30">
                <div className="img-meta position-relative">
                  <Image
                    width={410}
                    height={380}
                    src={item.imgSrc}
                    alt="gallary"
                    className="w-100 tran5s"
                  />

                  <div className="caption d-flex justify-content-center align-items-center flex-column">
                    <h6 className="pj-title">{item?.title}</h6>
                    <span className="tag">{item?.description}</span>
                    <Link
                      href={item?.link}
                      className="btn-twentyExtra fw-500 tran3s"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      Download Now
                    </Link>
                  </div>
                  {/* <!-- /.caption --> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DownloadDetails;
