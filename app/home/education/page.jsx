'use client'

import Link from "next/link";
import React from "react";
import dynamic from 'next/dynamic';

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
import MediaQuery from 'react-responsive';
import { useRouter } from 'next/navigation';

const CrosswordProvider = dynamic(() => import('@jaredreisinger/react-crossword').then(mod => mod.CrosswordProvider), { ssr: false });
const DirectionClues = dynamic(() => import('@jaredreisinger/react-crossword').then(mod => mod.DirectionClues), { ssr: false });
const CrosswordGrid = dynamic(() => import('@jaredreisinger/react-crossword').then(mod => mod.CrosswordGrid), { ssr: false });

import { useState, useEffect } from "react";
// export const metadata = {
//   title: "Statecraft - Crafting the path of future..",
// };

const education = () => {
  const [width, setWidth] = useState(undefined);
  const router = useRouter();
  const clue = '';
  const data = {
    across: {
      1: {"clue": "The 46th Antarctic Treaty Consultative Meeting is hosted by this Indian ministry (6, 8)", "answer": "EARTHSCIENCES", "row": 0, "col": 0},
      4: {"clue": "The system developed by DRDO for extended targeting of submarines (5)", "answer": "SMART", "row": 2, "col": 0},
      6: {"clue": "The first Indian research base in Antarctica (8)", "answer": "DAKSHINGANGOTRI", "row": 4, "col": 0},
      8: {"clue": "The number of main territorial claims in Antarctica (8)", "answer": "EIGHT", "row": 6, "col": 0},
      10: {"clue": "A treaty aimed at addressing plastic pollution globally (6, 6)", "answer": "PLASTICSTREATY", "row": 8, "col": 0},
      12: {"clue": "The classification status achieved by IREDA recently (8)", "answer": "NAVRATNA", "row": 10, "col": 0},
      13: {"clue": "The court emphasized elections as this within India's constitutional framework (10)", "answer": "CONSTITUTIONAL", "row": 12, "col": 0}
  },
  
  down: {
      1: {"clue": "One of the six performance indicators for a PSU to qualify for Navratna status (8)", "answer": "NETPROFIT", "row": 0, "col": 1},
      2: {"clue": "The Indian Institute of Astrophysics captured the passage of the moon in front of this star (7)", "answer": "ANTARES", "row": 0, "col": 5},
      3: {"clue": "This Hindu ritual is significant for marriage registration under the Hindu Marriage Act, 1955 (9)", "answer": "SAPTAPADI", "row": 1, "col": 8},
      5: {"clue": "The treaty negotiations were held in this Canadian city (6)", "answer": "OTTAWA", "row": 3, "col": 4},
      7: {"clue": "The observatory where the SMART system was tested (5)", "answer": "ODISHA", "row": 5, "col": 6},
      9: {"clue": "These monkeys are rare and serve as biodiversity indicators (3, 7)", "answer": "REDCOLOBUS", "row": 7, "col": 3},
      11: {"clue": "The framework for understanding quarks (10)", "answer": "CHROMODYNAMICS", "row": 9, "col": 5},
      14: {"clue": "The phenomenon of particle dynamics studied through quark clumps (6)", "answer": "QUARKS", "row": 13, "col": 1}
  }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth);

      const handleResize = () => {
        setWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [width]);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash && hash.includes('#crossword')) {
      const crosswordSection = document.getElementById('crossword');
      crosswordSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, [router.asPath]);
  
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
    <div class="mx-auto max-w-screen-lg mt-80 mb-20" id="crossword">
        <div class="text-center">
          <h2 class="text-lg font-semibold text-black">Crossword of the Day</h2>
        </div>
        <div class="mt-4" style={{display: 'flex', justifyContent:'center'}}>
        {/* <iframe width="100%" height="700px" style={{border:"3px solid black", margin:"auto", display:"block"}} frameborder="0" src="https://crosswordlabs.com/embed/todays-current-affair-suduko"></iframe> */}
        
        <CrosswordProvider data={data}>
          <div style={{display:`${width > 1290?'flex':''}`,gap: '8em',}}>
          {width <= 1290 ? (
                <>
                  <div style={{ width: '24em', paddingLeft:'2em'}}>
                    <CrosswordGrid />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '4em', paddingTop: '2em', 
                    paddingLeft:'1em', paddingRight:'1em' }}>
                    <DirectionClues direction="across" />
                    <DirectionClues direction="down" />
                  </div>
                </>
              ) : (
                <div style={{paddingLeft:'2em', paddingRight:'2em', display: 'flex', justifyContent: 'center', gap: '4em', }}>
                  <DirectionClues direction="across" />
                  <div style={{ minWidth: '24em' }}>
                    <CrosswordGrid />
                  </div>
                  <DirectionClues direction="down" />
                </div>
              )}

          </div>
        </CrosswordProvider>
        </div>
      </div>
      
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
