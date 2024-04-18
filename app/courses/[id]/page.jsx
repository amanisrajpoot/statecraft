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
    startDate: "03/05/2024",
    endDate: "05/05/2024",
    courseUSP:[1,3,4],
    coursePrice: [
      { price: 1500, discountedPrice: 3000, title: "Offline" },
      { price: 1500, discountedPrice: 3000, title: "Online" },
    ],
    faculty: [
      "Vijay Kumar sir (popularly known ad Walking Encyclopaedia) having 20+ years of teaching experience",
      "Mahendra Sir ( Presently Tehsildar) 15+ years of teaching experience "
    ],
    details:["Are you ready to conquer the KPSC KAS Prelims with confidence and finesse? Look no further than our intensive 3-day crash course tailored specifically for aspirants like you!", "In just three power-packed days, our course provides a comprehensive one-time solution for mastering Karnataka History and Karnataka Geography, the backbone of the KPSC KAS Prelims examination. Led by renowned experts, including Vijay Kumar sir, popularly known as the Walking Encyclopaedia, with over 20 years of teaching experience, and Mahendra Sir, presently a Tehsildar, boasting 15+ years of teaching expertise.",],
    resultDetails:["Upon successful completion of the 3-day crash course, students will acquire an in-depth understanding of Karnataka History and Geography, pivotal for excelling in the KPSC KAS Prelims. Guided by distinguished educators Vijay Kumar sir and Mahendra Sir, participants will gain not only knowledge but also confidence and finesse in approaching exam questions.",
    "The intensive curriculum, coupled with personalized attention from experienced faculty, ensures that participants grasp key concepts effectively. With a solid foundation in Karnataka History and Geography, students will be empowered to tackle exam questions confidently and effectively, setting them on the path to success in the KPSC KAS Prelims."],
    gallery: [
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
    imgSrc: ["/images/assets/course3/english.jpeg", "/images/assets/course3/kannada.jpeg"],
    description: "3 Days Crash Course for Karnataka History and Karnataka Geography",
    duration: "3 Days",
    title: "3 Day Crash Course | KPSC KAS Prelims Batch",
    tags: ["kpsc"],
    classes: "6 Hours",
    difficulty: 5,
    ratingsCount: 31,
    courseLink: "https://pages.razorpay.com/pl_NrmdFZW8Ri756o/view",
    startDate: "03/05/2024",
    endDate: "05/05/2024",
    courseUSP:[5,7,8],
    coursePrice: [
      { price: 1500, discountedPrice: 3000, title: "Offline" },
      { price: 1500, discountedPrice: 3000, title: "Online" },
    ],
    faculty: [
      "Vijay Kumar sir (popularly known ad Walking Encyclopaedia) having 20+ years of teaching experience",
      "Mahendra Sir ( Presently Tehsildar) 15+ years of teaching experience "
    ],
    details:["Are you ready to conquer the KPSC KAS Prelims with confidence and finesse? Look no further than our intensive 3-day crash course tailored specifically for aspirants like you!", "In just three power-packed days, our course provides a comprehensive one-time solution for mastering Karnataka History and Karnataka Geography, the backbone of the KPSC KAS Prelims examination. Led by renowned experts, including Vijay Kumar sir, popularly known as the Walking Encyclopaedia, with over 20 years of teaching experience, and Mahendra Sir, presently a Tehsildar, boasting 15+ years of teaching expertise.",],
    resultDetails:["Upon successful completion of the 3-day crash course, students will acquire an in-depth understanding of Karnataka History and Geography, pivotal for excelling in the KPSC KAS Prelims. Guided by distinguished educators Vijay Kumar sir and Mahendra Sir, participants will gain not only knowledge but also confidence and finesse in approaching exam questions.",
    "The intensive curriculum, coupled with personalized attention from experienced faculty, ensures that participants grasp key concepts effectively. With a solid foundation in Karnataka History and Geography, students will be empowered to tackle exam questions confidently and effectively, setting them on the path to success in the KPSC KAS Prelims."],
    gallery: [
      {
        src: "/images/assets/3DayTwo.png",
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
    startDate: "03/05/2024",
    endDate: "05/05/2024",
    courseUSP:[1,3,4],
    coursePrice: [
      { price: 1500, discountedPrice: 3000, title: "Offline" },
      { price: 1500, discountedPrice: 3000, title: "Online" },
    ],
    faculty: [
      "Vijay Kumar sir (popularly known ad Walking Encyclopaedia) having 20+ years of teaching experience",
      "Mahendra Sir ( Presently Tehsildar) 15+ years of teaching experience "
    ],
    details:["Are you ready to conquer the KPSC KAS Prelims with confidence and finesse? Look no further than our intensive 3-day crash course tailored specifically for aspirants like you!", "In just three power-packed days, our course provides a comprehensive one-time solution for mastering Karnataka History and Karnataka Geography, the backbone of the KPSC KAS Prelims examination. Led by renowned experts, including Vijay Kumar sir, popularly known as the Walking Encyclopaedia, with over 20 years of teaching experience, and Mahendra Sir, presently a Tehsildar, boasting 15+ years of teaching expertise.",],
    resultDetails:["Upon successful completion of the 3-day crash course, students will acquire an in-depth understanding of Karnataka History and Geography, pivotal for excelling in the KPSC KAS Prelims. Guided by distinguished educators Vijay Kumar sir and Mahendra Sir, participants will gain not only knowledge but also confidence and finesse in approaching exam questions.",
    "The intensive curriculum, coupled with personalized attention from experienced faculty, ensures that participants grasp key concepts effectively. With a solid foundation in Karnataka History and Geography, students will be empowered to tackle exam questions confidently and effectively, setting them on the path to success in the KPSC KAS Prelims."],
    gallery: [
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
    startDate: "03/05/2024",
    endDate: "05/05/2024",
    courseUSP:[1,3,4],
    coursePrice: [
      { price: 1500, discountedPrice: 3000, title: "Offline" },
      { price: 1500, discountedPrice: 3000, title: "Online" },
    ],
    faculty: [
      "Vijay Kumar sir (popularly known ad Walking Encyclopaedia) having 20+ years of teaching experience",
      "Mahendra Sir ( Presently Tehsildar) 15+ years of teaching experience "
    ],
    details:["Are you ready to conquer the KPSC KAS Prelims with confidence and finesse? Look no further than our intensive 3-day crash course tailored specifically for aspirants like you!", "In just three power-packed days, our course provides a comprehensive one-time solution for mastering Karnataka History and Karnataka Geography, the backbone of the KPSC KAS Prelims examination. Led by renowned experts, including Vijay Kumar sir, popularly known as the Walking Encyclopaedia, with over 20 years of teaching experience, and Mahendra Sir, presently a Tehsildar, boasting 15+ years of teaching expertise.",],
    resultDetails:["Upon successful completion of the 3-day crash course, students will acquire an in-depth understanding of Karnataka History and Geography, pivotal for excelling in the KPSC KAS Prelims. Guided by distinguished educators Vijay Kumar sir and Mahendra Sir, participants will gain not only knowledge but also confidence and finesse in approaching exam questions.",
    "The intensive curriculum, coupled with personalized attention from experienced faculty, ensures that participants grasp key concepts effectively. With a solid foundation in Karnataka History and Geography, students will be empowered to tackle exam questions confidently and effectively, setting them on the path to success in the KPSC KAS Prelims."],
    gallery: [
      
      {
        src: "/images/assets/focus40Two.png",
        width: "460",
        height: "400",
        alt: "media",
      },
    ],
  },
  {
    id: 6,
    imgSrc: "/images/assets/banner/sprint60.jpeg",
    description: "Sprint 60 | UPSC Working Professional Batch",
    duration: "60 Days",
    title: "Sprint 60",
    difficulty: 4,
    ratingsCount: 31,
    coursePrice: [
      { price: 10500, discountedPrice: 21000, title: "Offline" },
      { price: 10500, discountedPrice: 21000, title: "Online" },
    ],
    courseLink: "https://rzp.io/l/MeTC7oT",
    tags: ["kpsc"],
    classes: "60 mins",
    limitedSeats: "60",
    totalTests: "60",
    startDate: "03/05/2024",
    endDate: "05/07/2024",
    courseUSP:[1,5,8],
    faculty: [
      "Vijay Kumar sir (popularly known ad Walking Encyclopaedia) having 20+ years of teaching experience",
      "Mahendra Sir ( Presently Tehsildar) 15+ years of teaching experience "
    ],
    details:["Unlock Your UPSC Potential with Our Comprehensive 60-Day Crash Course! Are you a working professional striving to conquer the UPSC Civil Services Examination? Look no further than our meticulously designed 60-day crash course, crafted to propel you towards success.", "In this intensive program, we've distilled the essence of UPSC preparation into a structured, time-efficient curriculum. Led by seasoned experts with decades of experience, our course will empower you to master the core subjects and sharpen your exam-winning strategies, all while juggling your professional commitments.","Dive deep into the intricacies of Indian Polity, Geography, History, and more, with personalized guidance from our esteemed faculty. Benefit from their insider perspectives, time-tested techniques, and unwavering support as you navigate the challenging UPSC landscape."],
    resultDetails:["Whether you're a first-time aspirant or a seasoned contender, this 60-day sprint course is your gateway to UPSC success. Unlock your full potential, strengthen your conceptual understanding, and fine-tune your preparation with our comprehensive, result-oriented approach.",
    "Embark on this transformative journey and emerge as a confident, well-equipped UPSC candidate, ready to ace the Prelims and Mains examinations. Enroll now and let our expertise be your guiding light towards your dream of becoming a civil servant."],
    gallery: [
      {
        src: "/images/assets/focus40Two.png",
        width: "960",
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
                <ProjectSlide slide={portfolio.imgSrc} />
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
              <Features details={portfolio.courseUSP}/>
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
                {portfolio.details[0]}
              </p>
              <p data-aos="fade-up">
                {portfolio.details[1]}
              </p>  
              
              <div className="row">
                <PortfolioGallery images={portfolio?.gallery} />
              </div>

              <div
                  className="title-style-twelve mb-45 mt-45 lg-mb-30"
                  data-aos="fade-up"
                  data-aos-delay="400" // Adjusted the delay value
                >
                  <div className="sc-title fst-italic position-relative">
                    Result
                  </div>
                  <h2 className="main-title fw-500 tx-dark">
                    The Final Outcome of {portfolio?.title.split("|")[0]}
                  </h2>
                </div>
                {/* /.title-style-twelve */}
                <p data-aos="fade-up" data-aos-delay="400"> {/* Adjusted the delay value */}
                  {portfolio.resultDetails[0]}  
                </p>
                <p data-aos="fade-up" data-aos-delay="400"> {/* Adjusted the delay value */}
                  {portfolio.resultDetails[1]}
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
