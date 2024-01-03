import React from "react";
import Slider from "react-slick";

import testimonial1 from "../assets/testimonial/testimonial-1.jpg";
import testimonial2 from "../assets/testimonial/testimonial-2.jpg";
import testimonial3 from "../assets/testimonial/testimonial-3.jpg";

// function Testimonial() {
//   return (
//     <div className='container-xxl py-5 wow fadeInUp' data-wow-delay='0.1s'>
//       <div className='container'>
//         <div className='text-center wow fadeInUp' data-wow-delay='0.1s'>
//           <div
//             className='bg-theme-primary mb-3 mx-auto'
//             style={{ width: "60px", height: "2px" }}
//           ></div>
//           <h1 className='display-5 mb-5'>Testimonial</h1>
//         </div>
//         <div
//           className='owl-carousel testimonial-carousel wow fadeInUp'
//           data-wow-delay='0.1s'
//         >
//           <div
//             className='testimonial-item text-center'
//             data-dot="<img className='img-fluid' src='img/testimonial-1.jpg' alt=''>"
//           >
//             <p className='fs-5'>
//               Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo
//               duo labore sed sed. Magna ut diam sit et amet stet eos sed clita
//               erat magna elitr erat sit sit erat at rebum justo sea clita.
//             </p>
//             <h4>Client Name</h4>
//             <span className='text-primary'>Profession</span>
//           </div>
//           <div
//             className='testimonial-item text-center'
//             data-dot="<img className='img-fluid' src='img/testimonial-2.jpg' alt=''>"
//           >
//             <p className='fs-5'>
//               Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo
//               duo labore sed sed. Magna ut diam sit et amet stet eos sed clita
//               erat magna elitr erat sit sit erat at rebum justo sea clita.
//             </p>
//             <h4>Client Name</h4>
//             <span className='text-primary'>Profession</span>
//           </div>
//           <div
//             className='testimonial-item text-center'
//             data-dot="<img className='img-fluid' src='img/testimonial-3.jpg' alt=''>"
//           >
//             <p className='fs-5'>
//               Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo
//               duo labore sed sed. Magna ut diam sit et amet stet eos sed clita
//               erat magna elitr erat sit sit erat at rebum justo sea clita.
//             </p>
//             <h4>Client Name</h4>
//             <span className='text-primary'>Profession</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

function Testimonial() {
  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const testimonials = [
    {
      text: "Data Solutions Insight transformed our data handling capabilities. Their expertise in Power BI made our data analysis more intuitive and insightful.",
      name: "Emily Davis",
      profession: "Marketing Director",
      image: testimonial1,
    },
    {
      text: "The team at Data Solutions Insight provided exceptional service. Their work with Tableau brought our data visualization to a whole new level.",
      name: "Robert Moore",
      profession: "Business Strategy Manager:",
      image: testimonial2,
    },
    {
      text: "Choosing Data Solutions Insight was a game-changer for us. Their innovative approach and use of Sigma Computing dramatically improved our reporting process.",
      name: "Michael Johnson",
      profession: "IT Project Manager",
      image: testimonial3,
    },
  ];

  return (
    <div className='container-xxl py-5 wow fadeInUp' data-wow-delay='0.1s'>
      <div className='container'>
        <div className='text-center wow fadeInUp' data-wow-delay='0.1s'>
          <div
            className='bg-theme-primary mb-3 mx-auto'
            style={{ width: "60px", height: "2px" }}
          ></div>
          <h1 className='display-5 mb-5'>Testimonial</h1>
        </div>
        <Slider
          {...testimonialSettings}
          className='testimonial-carousel wow fadeInUp'
          data-wow-delay='0.1s'
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className='testimonial-item text-center'>
              <p className='fs-5'>{testimonial.text}</p>
              <img
                className='img-fluid rounded-circle mx-auto my-4'
                src={testimonial.image}
                alt=''
              />
              <h4>{testimonial.name}</h4>
              <span className='text-primary'>{testimonial.profession}</span>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonial;
