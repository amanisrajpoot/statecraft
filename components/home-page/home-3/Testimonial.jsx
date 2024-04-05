"use client";

import Slider from "react-slick";
import testimonial from "@/data/testimonial";
import Image from "next/image";

const testimonialData = [
  {
    id: 1,
    title: "Very Solid!!",
    rating: 5,
    text: "I wanted to take a moment to extend my heartfelt congratulations on the launch of your incredible online mentorship program..! Your unwavering dedication and genuine commitment to empowering others serve as a true inspiration.",
    author: "Shailesh Machra",
    location: "IFS 2022",
    image: "/images/assets/testimonial1.jpeg",
  },
  {
    id: 2,
    title: "Very Solid!!",
    rating: 5,
    text: "Dear Statecrafts, Congratulations on the launch of your amazing online mentorship program! Your dedication and commitment to empowering others are truly inspiring. I believe your program will make a positive difference in the lives of your mentees. ",
    author: "Ravi Kumar Sihag",
    location: "IAS 2022",
    image: "/images/assets/testimonial2.jpeg",
  },
  {
    id: 3,
    title: "Very Solid!!",
    rating: 5,
    text: "I am deeply grateful for the unwavering support and guidance you provided during my UPSC preparation. Your academy has been instrumental in my progress, and I sincerely thank you. Also , I am deeply thrilled to know about your new SEEKH initiative.",
    author: "Ram Chandra",
    location: "ICAS 2020",
    image: "/images/assets/testimonial3.jpeg",
  },
  {
    id: 4,
    title: "Very Solid!!",
    rating: 5,
    text: "I wish to express my heartfelt thanks to Statecraft for playing an important role in my success. Their personalised support helped me analyse and work on my shortcomings. Their extensive support during Mains and Interview phases helped me immensely. ",
    author: "Vinod Jakhar",
    location: "IFS 2022",
    image: "/images/assets/testimonial4.jpeg",
  },
  {
    id: 5,
    title: "Very Solid!!",
    rating: 5,
    text: "Dear Statecraft, Congratulations on your new online mentorship program! Your unwavering dedication and genuine commitment to empowering others is truly inspiring. I am confident that your program will have a profound impact on the lives of your mentees.",
    author: "Beerendra Patel",
    location: "IFS 2021",
    image: "/images/assets/testimonial5.jpeg",
  },
  {
    id: 6,
    title: "Very Solid!!",
    rating: 5,
    text: "Statecraft Civil Services academy has come with a vision for good quality civil services online coaching specially for poor and the needy students at free cost. I wish both academy and aspirants all the best!",
    author: "Abhinav Kumar Gupta",
    location: "UPSC CSE 2019 - AIR 472",
    image: "/images/assets/testimonial6.jpeg",
  },
  {
    id: 7,
    title: "Very Solid!!",
    rating: 5,
    text: "I take this opportunity to congratulate 'STATECRAFT' for their endeavor to provide free online coaching for the poor and needy aspirants. I wish them all the success in the journey and with all the aspirants a bright future in this regard. All the very best 'TEAM STATECRAFT'",
    author: "Mrugender Lal",
    location: "IPS 2019",
    image: "/images/assets/testimonial7.jpeg",
  },
  {
    id: 8,
    title: "Very Solid!!",
    rating: 5,
    text: "It is a matter of immense pleasure to know that a high quality civil services academy is coming up in Bangalore in the form of 'STATECRAFT CIVIL SERVICES ACADEMY'. I wish Statecraft all the very best in bringing out the best from each aspirant.",
    author: "Daripelli Ramesh",
    location: "AIR - 690 CSE 2019",
    image: "/images/assets/testimonial8.jpeg",
  },
  {
    id: 9,
    title: "Very Solid!!",
    rating: 5,
    text: "It is a matter of immense pleasure to know that a high quality civil services academy is coming up in Bangalore in the form of 'STATECRAFT CIVIL SERVICES ACADEMY'. I wish Statecraft all the very best in bringing out the best from each aspirant and that the aspirants make good use of this opportunity.",
    author: "Anisha Tomar",
    location: "AIR - 94 UPSC CSE 2019",
    image: "/images/assets/testimonial9.jpeg",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {testimonialData.map((item) => (
          <div className="item max-h-40" key={item.id}>
            <div className="feedback-block-eleven">
              <div className="top-header d-flex align-items-center justify-content-between">
                <div>
                  <h4 className="tx-dark m0">{item.author}</h4>
                  <span className="opacity-50 fw-normal">{item.location}</span>
                  <ul className="style-none d-flex rating pt-15">
                    {Array.from({ length: item.rating }).map((_, index) => (
                      <li key={index}>
                        <i className="bi bi-star-fill" />
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <Image
                    width={100}
                    height={100}
                    src={item.image}
                    alt="tesimonial avatar"
                    className="rounded-circle"
                  />
                </div>
                <img src="/images/icon/icon_112.svg" alt="" width={50} />
              </div>
              <p className="tx-dark">{item.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Testimonial;
