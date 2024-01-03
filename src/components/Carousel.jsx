import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../assets/carousel/carousel-1.jpg";
import img2 from "../assets/carousel/carousel-2.jpg";
import img3 from "../assets/carousel/carousel-3.jpg";

function Carousel() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const data = [
    {
      img: img1,
      title: "Transforming Data into Actionable Intelligence",
      description:
        "Discover the art of insightful decision-making with Data Solutions Insight. We expertly convert complex data into actionable intelligence, fueling strategic business growth.",
      btn2: "Free Quote",
    },
    {
      img: img2,
      title: "Charting Your Path Through Data Complexity",
      description:
        "Data Solutions Insight navigates the intricate maze of data, simplifying complexities into clear, actionable insights. Our expertise lights the way for businesses to harness the full potential of their data.",
      btn2: "Free Quote",
    },

    {
      img: img3,
      title: "Pioneering Data Analysis for Tomorrow's Solutions",
      description:
        "At the forefront of data innovation, Data Solutions Insight offers cutting-edge analysis to craft solutions for tomorrow's challenges. We merge analytical prowess with foresight, shaping the future of data-driven decision-making.",
      btn2: "Free Quote",
    },
  ];

  return (
    <div className='container-fluid p-0 pb-5'>
      <Slider
        className='owl-carousel header-carousel position-relative'
        {...settings}
      >
        {data.map((item, index) => (
          <div key={index}>
            <div className='owl-carousel-item position-relative text-center'>
              <img
                className='img-fluid '
                src={item.img}
                alt=''
                style={{ aspectRatio: "14/7" }}
              />
              <div className='carousel-inner'>
                <div className='container'>
                  <div className='row justify-content-center'>
                    <div className='col-12 col-lg-10 text-center'>
                      <h1 className='display-3 text-theme-primary animated slideInDown mb-4 capitalize fs-1 fw-semibold'>
                        {item.title}
                      </h1>
                      <p className='fs-5 text-white mb-4 pb-2 fw-light w-75 mx-auto'>
                        {item.description}
                      </p>

                      {/* <a
                        href='#contact'
                        className='btn btn-primary border-0 rounded-pill py-md-3 px-md-5 animated slideInRight'
                      >
                        {item.btn2}
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
