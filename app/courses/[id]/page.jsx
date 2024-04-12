import DefaulHeader from "@/components/header/DefaulHeader";
import DefaultFooter from "@/components/footer/DefaultFooter";
import SocialShare from "@/components/portfolio/portfolio-details/SocialShare";
import ProjectDetails from "@/components/portfolio/portfolio-details/ProjectDetails";
import ProjectSlide from "@/components/portfolio/portfolio-details/ProjectSlide";
import CallToAction from "@/components/courses/CallToAction";
import PortfolioGallery from "@/components/portfolio/portfolio-details/PortfolioGallery";

import portfolioData from "@/data/portfolio";
import PortfolioDetailsTitle from "@/components/portfolio/portfolio-details/PortfolioDetailsTitle";
import Features from "@/components/home-page/home-3/Features";
export const metadata = {
  title:
    "Statecraft - Crafting the path of future..",
};

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
    courseLink: "",
    tags: ["prelims", "mains", "upsc", "kpsc"],
  },
  {
    id: 2,
    imgSrc: "/images/assets/featureCourses4.jpeg",
    description: "UPSC Interview Guidance Program",
    duration: "15 months",
    title: "UPSC Interview Guidance Program",
    difficulty: 5,
    ratingsCount: 310,
    coursePrice: [
      { price: 97750, discountedPrice: 115000, title: "Offline" },
      { price: 72250, discountedPrice: 85000, title: "Online" },
    ],
    courseLink: "",
    tags: ["prelims", "upsc", "kpsc"],
    gallery: [
      {
        src: "/images/assets/focus40One.png",
        width: "460",
        height: "400",
        alt: "media",
      },
      {
        src: "/images/assets/focus40Two.png",
        width: "460",
        height: "400",
        alt: "media",
      },
    ],
  },
  {
    id: 3,
    imgSrc: "/images/assets/featureCourses3.jpg",
    description: "3 Day Crash Course | KPSC KAS Prelims Batch",
    duration: "3 Days",
    title: "3 Day Crash Course",
    difficulty: 5,
    ratingsCount: 310,
    coursePrice: [
      { price: 1500, discountedPrice: 3000, title: "Offline" },
      { price: 1500, discountedPrice: 3000, title: "Online" },
    ],
    courseLink: "https://pages.razorpay.com/pl_NrmdFZW8Ri756o/view",
    tags: ["kpsc"],
    classes: "6 Hours",
    gallery: [
      {
        src: "/images/assets/3DayOne.png",
        width: "460",
        height: "400",
        alt: "media",
      },
      {
        src: "/images/assets/3DayTwo.png",
        width: "460",
        height: "400",
        alt: "media",
      },
      {
        src: "/images/assets/3DayThree.png",
        width: "460",
        height: "400",
        alt: "media",
      },
      {
        src: "/images/assets/3DayFour.png",
        width: "460",
        height: "400",
        alt: "media",
      },
    ],
  },
  {
    id: 4,
    imgSrc: "/images/assets/featureCourses4.jpg",
    description: "Focus 40 | KPSC KAS Prelims Batch",
    duration: "40 Days",
    title: "Focus 40",
    difficulty: 5,
    ratingsCount: 310,
    coursePrice: [
      { price: 10500, discountedPrice: 21000, title: "Offline" },
      { price: 10500, discountedPrice: 21000, title: "Online" },
    ],
    courseLink: "https://pages.razorpay.com/pl_NsBs2NfKBwNJ3e/view",
    tags: ["kpsc"],
    classes: "40 mins",
    limitedSeats: "40",
    totalTests: "40",
    gallery: [
      {
        src: "/images/assets/focus40One.png",
        width: "460",
        height: "400",
        alt: "media",
      },
      {
        src: "/images/assets/focus40Two.png",
        width: "460",
        height: "400",
        alt: "media",
      },
    ],
  },
  {
    id: 5,
    imgSrc: "/images/assets/featureCourses4.jpg",
    description: "Focus 60 | KPSC KAS Prelims Batch",
    duration: "60 Days",
    title: "Focus 60",
    difficulty: 5,
    ratingsCount: 310,
    coursePrice: [
      { price: 10500, discountedPrice: 21000, title: "Offline" },
      { price: 10500, discountedPrice: 21000, title: "Online" },
    ],
    courseLink: "https://pages.razorpay.com/pl_NsBs2NfKBwNJ3e/view",
    tags: ["kpsc"],
    classes: "60 mins",
    limitedSeats: "60",
    totalTests: "60",
    gallery: [
      {
        src: "/images/assets/focus40One.png",
        width: "460",
        height: "400",
        alt: "media",
      },
      {
        src: "/images/assets/focus40Two.png",
        width: "460",
        height: "400",
        alt: "media",
      },
    ],
  },
];

const DynamicCoursesDetails = ({ params }) => {
  const id = params.id;
  const portfolio = courseData.find((item) => item.id == id) || courseData[0];

  return (
    <>
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <DefaulHeader />

      {/* 
        =============================================
        Feature Section Fifty One
        ============================================== 
        */}
      <PortfolioDetailsTitle portfolio={portfolio} />

      {/* 
			=============================================
				Portfolio Details Two
			============================================== 
			*/}
      <div className="portfolio-details-two pt-70 pb-50 lg-pb-10 md-pt-10">
        <div className="project-desctiption">
          <div className="container">
            <div className="row">
              <div className="col-lg-8" data-aos="fade-right">
                <ProjectSlide slide={portfolio} />
                {/* /#gallery-carousel */}
              </div>
              {/* End .col-lg-8 */}

              <div className="col-lg-4" data-aos="fade-left">
                <div className="sidebar ms-xl-5">
                  <div className="row">
                    <ProjectDetails details={portfolio} />
                  </div>
                  {/* End .row */}

                  {/* <SocialShare /> */}
                </div>
              </div>
              {/* End col-lg-4 */}
            </div>
            {/* End .row */}
            <div className="row">
              <Features />
            </div>
            <div className="col-xl-9  mt-120 lg-mt-80">
              <div
                className="title-style-twelve mb-45 lg-mb-30"
                data-aos="fade-up"
              >
                <div className="sc-title fst-italic position-relative">
                  Overview
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  About {portfolio?.title}
                </h2>
              </div>
              {/* /.title-style-twelve */}
              <p data-aos="fade-up">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullaum laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit volupta velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <p data-aos="fade-up">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum magna quis
                nostured.
              </p>

              <div className="row">
                <div className="col-xl-8">
                  <div
                    className="title-style-twelve mb-45 pt-75 lg-pt-40 lg-mb-30"
                    data-aos="fade-up"
                  >
                    <div className="sc-title fst-italic position-relative">
                      Work Proccess
                    </div>
                    <h2 className="main-title fw-500 tx-dark">
                      Find out the design solution.
                    </h2>
                  </div>
                  {/* /.title-style-twelve */}
                </div>
              </div>
              <p data-aos="fade-up">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p data-aos="fade-up">
                Enim eu turpis egestas pretium aenean pharetra. Dui accumsan sit
                amet nulla facilisi morbi tempus iaculis. Eu ultrices vitae
                auctor eu augue. Sed turpis tincidunt id aliquet risus Purus in
                massa tempor nec feugiat nisl pretium fusce. Feugiat vivamus at
                augue eget arcu dictum. Gravida quis blandit turpis cursus in
                hac habitasse platea dictumst.
              </p>
              <div className="row">
                <PortfolioGallery images={portfolio?.gallery} />
              </div>

              <div
                className="title-style-twelve mb-45 mt-120 lg-mb-30 lg-mt-80"
                data-aos="fade-up"
              >
                <div className="sc-title fst-italic position-relative">
                  Work Proccess
                </div>
                <h2 className="main-title fw-500 tx-dark">Final Result</h2>
              </div>
              {/* /.title-style-twelve */}

              <p data-aos="fade-up">
                Content creators and human resources personnel are able to
                seamlessly update the website through graphical interfaces, and
                the site simply rebuilds itself along with search engine indexes
                as the OpenWeb team continues to create.
              </p>
              <p data-aos="fade-up">
                Enim eu turpis egestas pretium aenean pharetra. Dui accumsan sit
                amet nulla facilisi mor tempu iaculis. Eu ultrices vitae auctor
                eu augue. Sed turpis tincidunt id aliquet risus Purus in massa
                tempor nec feugiat nisl pretium fusce. Feugiat vivamus at augue
                eget arcu dictum. Gravida quis blandit turpis cursus in hac
                habitasse platea dictumst.
              </p>
            </div>
            {/* End col-xl-9 */}
          </div>
          {/* End .container */}
        </div>
        {/* /.project-desctiption */}
      </div>
      {/* /.project-details */}

      {/*
			=====================================================
				Fancy Short Banner Twelve
			=====================================================
			*/}
      <CallToAction details={portfolio} />

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <DefaultFooter />
    </>
  );
};

export default DynamicCoursesDetails;
