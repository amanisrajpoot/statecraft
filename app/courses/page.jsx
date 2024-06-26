import DefaulHeader from "@/components/header/DefaulHeader";
import DefaultFooter from "@/components/footer/DefaultFooter";
import CallToAction from "@/components/portfolio/CallToAction";
import CourseDetails from "@/components/courses/CourseDetails";
import MenuTopTitle from "@/components/header/MenuTopTitle";
export const metadata = {
  title: "Statecraft - Crafting the path of future..",
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
      <MenuTopTitle
        title={"All Courses"}
        description={"Check out our Courses."}
      />

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
