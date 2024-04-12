import Link from "next/link";
import React from "react";

import Footer2 from "@/components/footer/Footer2";
import CopyrightFooter2 from "@/components/footer/CopyrightFooter2";
import NewsLetter from "@/components/footer/NewsLetter";
import Header3 from "@/components/header/Header3";
import CourseCategory from "@/components/home-page/home-3/CourseCategory";
import CourseFeatured from "@/components/home-page/home-3/CourseFeatured";
import CourseFilter from "@/components/home-page/home-3/CourseFilter";
import Faq from "@/components/home-page/home-3/Faq";
import FeatureBlock from "@/components/home-page/home-3/FeatureBlock";
import FeatureBlock2 from "@/components/home-page/home-3/FeatureBlock2";
import Hero from "@/components/home-page/home-3/Hero";
import HowToStartBlock from "@/components/home-page/home-3/HowToStartBlock";
import SignUpBanner from "@/components/home-page/home-3/SignUpBanner";
import Testimonial from "@/components/home-page/home-3/Testimonial";
import HeroCorousel from "@/components/home-page/home-3/HeroCorousel";
import FeatureBlockHeader from "@/components/home-page/home-3/FeatureBlockHeader";

export const metadata = {
  title: "Statecraft - Crafting the path of future..",
};

const education = () => {
  return (
    <>
      {/* <!--  =============================================
        Theme Header3 Menu
        ============================================== 	--> */}
      <Header3 />
      {/* <!-- 
        =============================================
        Theme Hero Banner
        ============================================== 
        --> */}
      <HeroCorousel />
      <FeatureBlockHeader />
      <div class="mx-auto max-w-screen-lg mt-80 mb-20">
        <div class="text-center">
          <h2 class="text-lg font-semibold text-black">Crossword of the Day</h2>
        </div>
        <div class="mt-4">
        <iframe width="100%" height="700px" style={{border:"3px solid black", margin:"auto", display:"block"}} frameborder="0" src="https://crosswordlabs.com/embed/current-affair-suduko-2"></iframe>
        </div>
      </div>
      <Hero />
      {/* <!--
        =====================================================
        Feature Section Thirty Nine
        =====================================================
        --> */}
      {/*
        =====================================================
        Feature Section Forty
        =====================================================
        */}

      {/*
    =====================================================
    Feature Section Forty One
    =====================================================
    */}
    
      <div className="fancy-feature-fortyOne position-relative mt-160 lg-mt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6" data-aos="fade-right">
              <div className="title-style-one mb-40 pt-30 lg-pt-10 lg-mb-20">
                <div className="sc-title text-uppercase">Choose your path</div>
                <h2 className="main-title fw-500 tx-dark m0">What's New</h2>
              </div>
              {/* End title */}
              <Faq />
              {/* /.accordion-style-six */}
              <a href="#" className="btn-one fw-500 mt-50 md-mt-40">
                Explorer All
              </a>
            </div>
            {/* End col-xl-5 */}

            <div
              className="col-xxl-6 col-xl-7 col-lg-6 ms-auto"
              data-aos="fade-left"
            >
              <div className="wrapper position-relative ps-sm-3 pe-sm-3 ps-xl-5 pe-xl-5 md-mt-70">
                <div className="row">
                  <CourseFeatured />
                </div>
                <img
                  src="/images/shape/shape_152.svg"
                  alt="shape"
                  className="lazy-img shapes shape-one h-screen"
                />
                <img
                  src="/images/shape/shape_153.svg"
                  alt="shape"
                  className="lazy-img shapes shape-two"
                />
              </div>
              {/* /.wrapper */}
            </div>
            {/* End col-xl-6 */}
          </div>
        </div>
      </div>
      {/* /.fancy-feature-fortyOne */}

      {/* 
		=============================================
		Feature Section Forty Two
		============================================== 
		*/}
    {/* <div>
      <div>
      <h2 className="main-title fw-500 tx-dark m0">Crossword of the Day</h2>
      </div>
      <iframe width="100%" height="700px" style={{border:"3px solid black", margin:"auto", display:"block"}} frameborder="0" src="https://crosswordlabs.com/embed/current-affair-suduko-2"></iframe>
    </div> */}
      <div className="fancy-feature-fortyTwo position-relative pt-130 pb-180 mt-180 lg-pt-80 lg-pb-80 xs-mt-120">
        <div className="rating-box">
          <img src="/images/shape/shape_154.svg" alt="media" />
          <div className="rate fw-500 tx-dark">
            A+ <br />
            <span>Courses</span>
          </div>
        </div>
        {/* End rating-box */}

        <div className="container">
          <div className="wrapper position-relative">
            <div className="title-style-one mb-30">
              <h2 className="main-title fw-500 tx-dark m0">
                Featured Courses
              </h2>
            </div>
            <CourseFilter />
            {/* /.slider-wrapper */}
          </div>
          {/* /.wrapper */}
        </div>
        {/* End .container */}
      </div>

      {/* <!-- 
		=============================================
		Feature Section Forty Three
			============================================== 
		--> */}
      <HowToStartBlock />

      {/*
			=====================================================
				Feedback Section Thirteen
			=====================================================
			*/}
      <div
        className="feedback-section-thirteen position-relative mt-130 pb-25 lg-mt-100"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-8 col-sm-10 m-auto">
              <div className="title-style-one text-center mb-40 lg-mb-20">
                <h2 className="main-title fw-500 tx-dark m0">
                  Our Champion's Chronicles
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* End .container */}

        <div className="inner-content">
          <div className="slider-wrapper">
            <div className="feedback_slider_seven">
              <Testimonial />
            </div>
            {/* /.feedback_slider_seven */}
          </div>
          {/* /.slider-wrapper */}
        </div>
        {/* /.inner-content */}
      </div>

      {/* <!-- 
			=============================================
				Feature Section Forty Four
			============================================== 
			--> */}
      <FeatureBlock2 />

      {/* <!-- 
		=============================================
		Feature Section Forty Five
		============================================== 
		--> */}
      <SignUpBanner />

      {/*
		=====================================================
		Footer
		=====================================================
		*/}
      <div className="footer-style-eleven theme-basic-footer position-relative">
        <div className="bg-wrapper position-relative">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-2 footer-intro mb-40">
                <div className="logo">
                  <Link href="/">
                    <img src="/images/logo/logo_01.png" alt="brand" />
                  </Link>
                </div>
              </div>
              {/* End .col */}

              <Footer2 />

              <div className="col-xl-4 col-lg-5 mb-30 form-widget">
                <h5 className="footer-title tx-dark fw-normal">Newslettert</h5>
                <h6 className="pt-15 pb-20 md-pt-10">Join our newsletter</h6>
                <NewsLetter />
                <div className="fs-14 mt-10">
                  We only send interesting and relevant emails.
                </div>
              </div>
              {/* End .col-xl-4 */}
            </div>
            {/* End .row */}
          </div>
          {/* /.container */}
        </div>
        {/* /.bg-wrapper */}
        <CopyrightFooter2 />
        {/* /.bottom-footer */}
        <img
          src="/images/shape/shape_158.svg"
          alt="shape"
          className="lazy-img shapes shape-one"
        />
      </div>
      {/* /.footer-style-eleven */}
    </>
  );
};

export default education;
