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
      title: "Best CCTV & Security Solution For You",
      description:
        "Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.",
      btn1: "Read More",
      btn2: "Free Quote",
    },

    {
      img: img2,
      title: "Smart Security Solution For All Business",
      description:
        "Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.",
      btn1: "Read More",
      btn2: "Free Quote",
    },

    {
      img: img3,
      title: "Innovative Solution For Security System",
      description:
        "Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.",
      btn1: "Read More",
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
                    <div className='col-12 col-lg-8 text-center'>
                      <h1 className='display-3 text-white animated slideInDown mb-4'>
                        {item.title}
                      </h1>
                      <p className='fs-5 text-white mb-4 pb-2'>
                        {item.description}
                      </p>
                      <a
                        href='#'
                        className='btn btn-primary border-0 rounded-pill py-md-3 px-md-5 me-3 animated slideInLeft'
                      >
                        {item.btn1}
                      </a>
                      <a
                        href='#'
                        className='btn btn-light rounded-pill py-md-3 px-md-5 animated slideInRight'
                      >
                        {item.btn2}
                      </a>
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
