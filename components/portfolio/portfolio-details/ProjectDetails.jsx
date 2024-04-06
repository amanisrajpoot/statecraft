const ProjectDetails = ({ details }) => {
  if (!details || !details.id) {
    return null; // or a message indicating that there are no project details
  }

  return (
    <>
      <h3 className="mb-20">{details.title}</h3>
      <p className="border-bottom pb-40 mb-35 lg-pb-20">
        {details.description}
      </p>
      <div className="col-12 mb-35">
        <div className="pt-title fw-bold tx-dark text-uppercase">Duration</div>
        <div className="pt-text">{details.duration}</div>
      </div>
      {/* End .col-12 */}

      <div className="col-12 mb-35">
        <div className="pt-title fw-bold tx-dark text-uppercase">Rating</div>
        <div className="pj-title course-review d-flex align-items-center mt-5">
          <ul className="style-none d-flex rating">
            {Array.from({ length: details.rating }, (_, i) => (
              <li className="active" key={i}>
                <i className="bi bi-star-fill" />
              </li>
            ))}
            {Array.from({ length: 5 - details.rating }, (_, i) => (
              <li key={i}>
                <i className="bi bi-star-fill" />
              </li>
            ))}
          </ul>
          <span className="pj-title fs-15 tx-dark ms-1">
            ({details.ratingsCount})
          </span>
        </div>
      </div>
      {/* End .col-12 */}

      <div className="col-12 mb-35">
        <div className="d-flex align-items-center justify-content-between mt-10 mb-10">
          {details?.coursePrice?.map((courseData, index) => (
            <div
              className="flex align-items-center justify-content-between mt-30 mb-10"
              key={index}
            >
              <div className="pt-title fw-bold tx-dark text-uppercase">
                {courseData?.title}
              </div>
              <div className="flex align-items-center justify-content-between">
                <strong className="price fw-300 fs-10 tx-dark">
                  ₹{courseData.price.toFixed(2)}
                </strong>
                <p className="fw-normal opacity-50">
                  <del>₹{courseData.discountedPrice.toFixed(2)}</del>
                </p>
              </div>
            </div>
          ))}

          {/* <a href="#" className="bookmark" title="Bookmark">
                        <i className="bi bi-bookmark" />
                      </a> */}
        </div>
      </div>
      {/* End .col-12 */}
    </>
  );
};

export default ProjectDetails;
