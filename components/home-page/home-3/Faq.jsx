import React from "react";

const faqData = [
  {
    id: 1,
    question: "Offline / Live-Online GS Foundation Course 2025",
    answer:
    "Offline / Live-Online GS Foundation Course 2025: 11 April, 9 AM | 21 March, 5 PM | 12 March, 9 AM | GTB Nagar Delhi: 23 April, 5:30 PM | Click here to register & know more",
  },
  {
    id: 2,
    question: "Abhyaas Prelims 2024",
    answer:
      "Abhyaas Prelims 2024 | 21 April, 12 May & 26 May | 100+ Cities | Offline Mode Only | Click here to know more & register",
  },
  {
    id: 3,
    question: "Live/Online/Offline GS फाउंडेशन कोर्स 2025",
    answer:
      "Live/Online/Offline GS फाउंडेशन कोर्स 2025 | हिन्दी माध्यम बैच | 10 अप्रैल, सुबह 9 बजे और 5 मार्च दोपहर 1 बजे | अधिक जानकारी एवं पंजीकरण के लिए क्लिक करें",
  },
];

const Faq = () => {
  return (
    <div className="accordion accordion-style-six" id="accordionOne">
      {faqData.map((item, index) => (
        <div className="accordion-item" key={item.id}>
          <div className="accordion-header" id={`heading${item.id}`}>
            <button
              className="accordion-button font-size:0.75rem"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${item.id}`}
              aria-expanded={index === 0 ? "true" : "false"}
              aria-controls={`collapse${item.id}`}
            >
              {item.question}
            </button>
          </div>
          <div
            id={`collapse${item.id}`}
            className={`accordion-collapse collapse${
              index === 0 ? " show" : ""
            }`}
            aria-labelledby={`heading${item.id}`}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body font-size:0.75rem">
              <p>{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
