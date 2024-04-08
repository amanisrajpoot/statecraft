import DefaulHeader from "@/components/header/DefaulHeader";
import DefaultFooter from "@/components/footer/DefaultFooter";
import PortfolioGallery4 from "@/components/portfolio/PortfolioGallery4";
import MenuTopTitle from "@/components/header/menuTopTitle";
import DownloadDetails from "@/components/downloads/DownloadDetails";
export const metadata = {
  title: "Portfolio V4 || Jano - Creative Multipurpose React NextJS Template",
};

const downloadData = [
  {
    id: 1,
    imgSrc: "/images/assets/downloadsImgOne.png",
    title: "Hijab and Freedom of Religion",
    link: "",
  },
  {
    id: 2,
    imgSrc: "/images/assets/downloadsImgTwo.png",
    title: "WTO Dispute Regarding India",
    link: "",
  },
  {
    id: 3,
    imgSrc: "/images/assets/downloadsImgThree.png",
    title: "India becomes World's Population Topper",
    link: "",
  },
  {
    id: 4,
    imgSrc: "/images/assets/downloadsImgFour.png",
    title: "30 years to Panchayati Raj Institute",
    link: "",
  },
  {
    id: 5,
    imgSrc: "/images/assets/downloadsImgFive.png",
    title: "Space Diplomacy & Geopolitics",
    description:
      "A StatecraftIAS Academy initiative for holistic Interview preparation",
    link: "",
  },
  {
    id: 6,
    imgSrc: "/images/assets/downloadsImgSix.png",
    title: "Economic Growth V/s Environmental Conservation",
    link: "",
  },
  {
    id: 7,
    imgSrc: "/images/assets/downloadsImgSeven.png",
    title: "Green Hydrogen Policy And Rare Earth Material",
    link: "",
  },
  {
    id: 8,
    imgSrc: "/images/assets/downloadsImgEight.png",
    title: "Artificial Intelligence and Emerging Technology",
    link: "",
  },
];

const Downloads = () => {
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
        title={"All Downloads"}
        description={"Check out our Downloads."}
      />

      {/* <!-- 
        =============================================
        Portfolio Gallery Three
        ============================================== 
        --> */}
      <DownloadDetails downloadData={downloadData} />

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <DefaultFooter />
    </>
  );
};

export default Downloads;
