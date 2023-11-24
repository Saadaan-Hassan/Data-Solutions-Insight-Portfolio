import React from "react";
import {Users, UploadCloud} from 'lucide-react'
import about from '../assets/about.jpg'

function About() {
  return (
    <div className='container-fluid bg-light overflow-hidden my-5 px-lg-0'>
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
              <p className='mb-4 pb-2' style={{textAlign:'justify'}}>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo erat amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatem illum veniam magni maiores itaque, ipsam inventore minus totam voluptas a quas tempore, consectetur voluptatum in iste rerum harum quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe praesentium possimus labore. Voluptatem quibusdam natus laborum deleniti nulla eum amet?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus cum placeat nobis consectetur perferendis pariatur cupiditate repudiandae vel commodi ducimus, quia eligendi, laboriosam, dolorum nisi mollitia esse cumque dolore necessitatibus! Facilis magnam quasi cupiditate? In illo asperiores ut eum delectus!
              </p>
              <div className='row g-4 mb-4 pb-3'>
                <div className='col-sm-6 wow fadeIn' data-wow-delay='0.1s'>
                  <div className='d-flex align-items-center'>
                    <div
                      className='btn-square bg-white rounded-circle'
                      style={{ width: "64px", height: "64px" }}
                    >
                      <Users className="text-theme-primary" size={40}/>
                    </div>
                    <div className='ms-4'>
                      <h2 className='mb-1' data-toggle='counter-up'>
                        1234
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
                      <UploadCloud className="text-theme-primary" size={40}/>
                    </div>
                    <div className='ms-4'>
                      <h2 className='mb-1' data-toggle='counter-up'>
                        1234
                      </h2>
                      <p className='fw-medium text-theme-primary mb-0'>
                        Projects Done
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <a href='' className='btn btn-primary border-0 rounded-pill py-3 px-5'>
                Explore More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
