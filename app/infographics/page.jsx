import DefaulHeader from "@/components/header/DefaulHeader";
import DefaultFooter from "@/components/footer/DefaultFooter";
import PortfolioGallery4 from "@/components/portfolio/PortfolioGallery4";
import DownloadDetails from "@/components/downloads/DownloadDetails";
export const metadata = {
  title: "StateCraft || Crafting the Path to Succes...",
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
      {/* <MenuTopTitle
        title={"All Infographics"}
        description={"Check out our Infographics."}
      /> */}

      <div className="fancy-feature-fiftyOne position-relative mt-200">
            <div className="container">
              <div className="row">
                <div className="col-lg-7" data-aos="fade-right">
                  <div className="title-style-five mb-65 lg-mb-40">
                    <div className="sc-title-two fst-italic position-relative">
                      {"All Infographics"}
                    </div>
                    <h2 className="main-title fw-500 tx-dark">{"Check out our Infographics."}</h2>
                  </div>
                </div>
              </div>
            </div>
            {/* /.container */}
            <img
              src="/images/shape/shape_172.svg"
              alt="shap"
              className="lazy-img shapes shape-two"
            />
            <img
              src="/images/shape/shape_175.svg"
              alt="shap"
              className="lazy-img shapes shape-three"
            />
          </div>


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
