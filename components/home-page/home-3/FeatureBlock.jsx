const featuresData = [
  {
    icon: "/images/icon/icon_124.svg",
    title: "Current Affairs",
    subtitle: "Over Millon+ Downloads",
  },
  {
    icon: "/images/icon/icon_125.svg",
    title: "Learn From Experts",
    subtitle: "Ex-IAS/IFS Faculty",
  },
  {
    icon: "/images/icon/icon_126.svg",
    title: "Interview Preparations",
    subtitle: "In Person Mock Rounds ",
  },
];

const FeatureBlock = () => {
  return (
    <>
      {featuresData.map((feature, index) => (
        <div key={index} className="col-lg-4 col-md-6">
          <div className="card-style-seventeen d-flex align-items-center mb-40">
            <div className="icon rounded-circle d-flex align-items-center justify-content-center">
              <img src={feature.icon} alt="icon" className="lazy-img" />
            </div>
            <div className="ps-4 text-wrapper">
              <h4 className="text-white m0">{feature.title}</h4>
              <p className="m0">{feature.subtitle}</p>
            </div>
          </div>
          {/* /.card-style-seventeen */}
        </div>
      ))}
    </>
  );
};

export default FeatureBlock;
