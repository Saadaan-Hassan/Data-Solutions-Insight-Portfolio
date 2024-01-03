import React from "react";
import { Users, UploadCloud } from "lucide-react";
import about from "../assets/about.jpg";

function About() {
  return (
    <div
      id='about'
      className='container-fluid bg-light overflow-hidden my-5 px-lg-0'
    >
      <div className='container about px-lg-0'>
        <div className='row g-0 mx-lg-0'>
          <div className='col-lg-6 ps-lg-0' style={{ minHeight: "400px" }}>
            <div className='position-relative h-100'>
              <img
                className='position-absolute img-fluid w-100 h-100'
                src={about}
                style={{ objectFit: "cover" }}
                alt=''
              />
            </div>
          </div>
          <div
            className='col-lg-6 about-text py-5 wow fadeIn'
            data-wow-delay='0.5s'
          >
            <div className='p-lg-5'>
              <div
                className='bg-theme-primary mb-3'
                style={{ width: "60px", height: "2px" }}
              ></div>
              <h1 className='display-5 mb-4'>About Us</h1>
              <p style={{ textAlign: "justify" }}>
                Welcome to Data Solutions Insight. Our company is the
                collaborative brainchild of expert data analysts and engineers,
                committed to transforming complex data into actionable business
                intelligence. We specialize in a broad spectrum of data
                analytics and engineering services, from predictive modeling to
                data visualization, tailored to empower your business decisions.
              </p>
              <p style={{ textAlign: "justify" }}> 
                Our team, comprised of seasoned professionals from diverse
                industries, brings a depth of knowledge and innovative
                problem-solving skills. We prioritize a collaborative approach,
                working closely with clients to understand their unique
                challenges and objectives. This ensures customized, impactful
                solutions that drive growth and efficiency.
              </p>
              <p style={{ textAlign: "justify" }}> 
                At Data Solutions Insight, we uphold the highest standards of
                data integrity and confidentiality. We recognize the
                significance of trust and privacy in our client relationships
                and are dedicated to securing all data we handle.
              </p>
              <p className='mb-4 pb-2' style={{ textAlign: "justify" }}>
                Join us on a journey where data becomes your most strategic
                asset, illuminating new opportunities and guiding your business
                towards a data-driven future.
              </p>
              <div className='row g-4 mb-4 pb-3'>
                <div className='col-sm-6 wow fadeIn' data-wow-delay='0.1s'>
                  <div className='d-flex align-items-center'>
                    <div
                      className='btn-square bg-white rounded-circle'
                      style={{ width: "64px", height: "64px" }}
                    >
                      <Users className='text-theme-primary' size={40} />
                    </div>
                    <div className='ms-4'>
                      <h2 className='mb-1' data-toggle='counter-up'>
                        20
                      </h2>
                      <p className='fw-medium text-theme-primary mb-0'>
                        Happy Clients
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-sm-6 wow fadeIn' data-wow-delay='0.3s'>
                  <div className='d-flex align-items-center'>
                    <div
                      className='btn-square bg-white rounded-circle'
                      style={{ width: "64px", height: "64px" }}
                    >
                      <UploadCloud className='text-theme-primary' size={40} />
                    </div>
                    <div className='ms-4'>
                      <h2 className='mb-1' data-toggle='counter-up'>
                        12
                      </h2>
                      <p className='fw-medium text-theme-primary mb-0'>
                        Projects Done
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <a
                href=''
                className='btn btn-primary border-0 rounded-pill py-3 px-5'
              >
                Explore More
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
