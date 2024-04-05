const coursesData = [
  {
    id: 1,
    tag: "UPSC",
    title: "Current Affairs",
    list: [
      "12th Feb Current Affairs",
      "10th Feb Current Affairs",
      "9th Feb Current Affairs",
      "8th Feb Current Affairs",
      "List Item",
    ],
    title2: "Editorials",
    list2: [
      "12th Feb Editorials",
      "10th Feb Editorials",
      "9th Feb Editorials",
      "8th Feb Editorials",
    ],
  },
  {
    id: 2,
    tag: "KPSC",
    title: "Current Affairs",
    list: [
      "10th Feb Current Affairs",
      "9th Feb Current Affairs",
      "8th Feb Current Affairs",
      "7th Feb Current Affairs",
      "6th Feb Current Affairs",
      "5th Feb Current Affairs",
      "3rd Feb Current Affairs",
      "1st Feb Current Affairs",
    ],
  },
  // {
  //   id: 3,
  //   tag: "PRO",
  //   title: "Programming & Coding",
  //   level: "Pro",
  //   numClasses: 20,
  //   tag2: "TRENDING",
  // },
  // {
  //   id: 4,
  //   tag: "FREE",
  //   title: "IT & Tecnology",
  //   level: "Mid",
  //   numClasses: 13,
  //   tag2: "FEATURED",
  // },
];

const CourseFeatured = () => {
  return (
    <>
      {coursesData.map((course) => (
        <div className="col-sm-6 d-flex flex-column space-fix" key={course.id}>
          <a
            href="#"
            className="card-style-nineteen position-relative d-flex flex-column tran3s mb-40 xs-mb-20"
          >
            {/* <span className="tag fw-500 text-white text-uppercase">
              {course.tag}
            </span> */}
            <h4 className="mb-0 mt-15 font-bold">{course.tag}</h4>
            <h6 className="mb-0 mt-15">{course.title}</h6>
            {course?.list &&
              course.list.map((listItem, index) => (
                <ul className="style-none pb-2 lg-pb-2 d-flex justify-content-between">
                  <li key={index}>{listItem}</li>
                  {/* <li>{course.numClasses} Classes</li> */}
                </ul>
              ))}
            <h6 className="mb-0 mt-25">{course.title2}</h6>
            {course?.list2 &&
              course.list2.map((listItem, index) => (
                <ul className="style-none pb-2 lg-pb-2 d-flex justify-content-between">
                  <li key={index}>{listItem}</li>
                  {/* <li>{course.numClasses} Classes</li> */}
                </ul>
              ))}

            {/* <span className="tag2 fw-bold tx-dark text-uppercase mt-auto">
              {course.tag2}
            </span> */}
          </a>
          {/* /.card-style-nineteen */}
        </div>
      ))}
    </>
  );
};

export default CourseFeatured;
