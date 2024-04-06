import DefaulHeader from "@/components/header/DefaulHeader";
import DefaultFooter from "@/components/footer/DefaultFooter";
import PortfolioTopTitle from "@/components/portfolio/PortfolioTopTitle";
import CallToAction from "@/components/portfolio/CallToAction";
import CourseDetails from "@/components/courses/CourseDetails";
export const metadata = {
  title: "Portfolio V6 || Jano - Creative Multipurpose React NextJS Template",
};
const Courses = () => {
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
      <PortfolioTopTitle />

      {/* <!-- 
        =============================================
        Portfolio Gallery six
        ============================================== 
        --> */}
      <CourseDetails />

      {/*
			=====================================================
				Fancy Short Banner Twelve
			=====================================================
			*/}
      {/* <CallToAction /> */}

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <DefaultFooter />
    </>
  );
};

export default Courses;
