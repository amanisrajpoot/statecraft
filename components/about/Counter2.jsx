"use client";

import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const data = [
  {
    count: 0.35,
    label: "Hours of lecture given",
    unit: "k",
    delay: "100",
    factor: 10, // Adjust this factor based on your precision needs
  },
  {
    count: 4.8,
    label: "3,280 ratings given",
    unit: <i className="bi bi-star-fill" />,
    delay: "200",
    factor: 1,
  },
  {
    count: 10,
    label: "Trusted Educators",
    unit: "+",
    delay: "300",
    factor: 1,
  },
];

const Counter2 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    if (inView) {
      setStartCounting(true);
    }
  }, [inView]);

  return (
    <>
      {data.map((item, index) => (
        <div
          className="col-lg-4 col-sm-6"
          key={index}
          data-aos="fade-up"
          data-aos-delay={item.delay}
        >
          <div className="counter-block-three text-center mt-40" ref={ref}>
            <div className="main-count fw-500 tx-dark">
              {startCounting ? (
                <CountUp
                  end={item.count * item.factor}
                  duration={2.5}
                  separator=","
                  decimals={item.factor > 1 ? 1 : 0} // Set decimals based on factor
                />
              ) : (
                <span className="counter">{item.count}</span>
              )}
              {item.unit}
            </div>
            <p className="tx-dark fs-18 m0">{item.label}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Counter2;
