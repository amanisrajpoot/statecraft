import DefaulHeader from "@/components/header/DefaulHeader";
import DefaultFooter from "@/components/footer/DefaultFooter";
import PortfolioGallery4 from "@/components/portfolio/PortfolioGallery4";
import MenuTopTitle from "@/components/header/menuTopTitle";
import DownloadDetails from "@/components/downloads/DownloadDetails";
export const metadata = {
  title: "Portfolio V4 || Jano - Creative Multipurpose React NextJS Template",
};

const infographicsData = [
  {
    id: 1,
    imgSrc: "/images/assets/infographicsOne.png",
    title: "Have we lost the fight against Climate Change",
    link: "https://drive.google.com/file/d/1kNW3n_KhDdRXnWzTbwRj5Px7JG8L1Xsa/view",
  },
  {
    id: 2,
    imgSrc: "/images/assets/infographicsTwo.jpg",
    title: "Cop 28",
    link: "https://statecraft.in/wp-content/uploads/2023/12/COP-28.pdf",
  },
];

const Infographics = () => {
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
        title={"All Infographics"}
        description={"Check out our Infographics."}
      />

      {/* <!-- 
        =============================================
        Portfolio Gallery Three
        ============================================== 
        --> */}
      <DownloadDetails downloadData={infographicsData} />

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <DefaultFooter />
    </>
  );
};

export default Infographics;
