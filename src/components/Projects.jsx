import React from "react";
import portfolio1 from "../assets/portfolio/portfolio-1.jpg";
import portfolio2 from "../assets/portfolio/portfolio-2.jpg";
import portfolio3 from "../assets/portfolio/portfolio-3.jpg";
import portfolio4 from "../assets/portfolio/portfolio-4.jpg";
import portfolio5 from "../assets/portfolio/portfolio-5.jpg";
import portfolio6 from "../assets/portfolio/portfolio-6.jpg";

import { Eye, Link } from "lucide-react";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "lorem ipsum dolor sit amet consectetur adipisicing elit ",
      image: portfolio1,
    },
    {
      id: 2,
      title: "Project 2",
      description: "lorem ipsum dolor sit amet consectetur adipisicing elit ",
      image: portfolio2,
    },
    {
      id: 3,
      title: "Project 3",
      description: "lorem ipsum dolor sit amet consectetur adipisicing elit ",
      image: portfolio3,
    },
    {
      id: 4,
      title: "Project 4",
      description: "lorem ipsum dolor sit amet consectetur adipisicing elit ",
      image: portfolio4,
    },
    {
      id: 5,
      title: "Project 5",
      description: "lorem ipsum dolor sit amet consectetur adipisicing elit ",
      image: portfolio5,
    },
    {
      id: 6,
      title: "Project 6",
      description: "lorem ipsum dolor sit amet consectetur adipisicing elit ",
      image: portfolio6,
    },
  ];
  return (
    <div className='container-xxl py-5'>
      <div className='container'>
        <div className='text-center wow fadeInUp' data-wow-delay='0.1s'>
          <div
            className='bg-theme-primary mb-3 mx-auto'
            style={{ width: "60px", height: "2px" }}
          ></div>
          <h1 className='display-5 mb-5'>Our Projects</h1>
        </div>
        <div className='row mt-n2 wow fadeInUp' data-wow-delay='0.3s'>
          <div className='col-12 text-center'>
            <ul className='list-inline mb-5' id='portfolio-flters'>
              <li className='mx-2 active' data-filter='*'>
                All
              </li>
              <li className='mx-2' data-filter='.first'>
                Complete Projects
              </li>
              <li className='mx-2' data-filter='.second'>
                Ongoing Projects
              </li>
            </ul>
          </div>
        </div>
        <div className='row g-4 portfolio-container'>
          {projects.map((project) => (
            <div
              className='col-lg-4 col-md-6 portfolio-item first wow fadeInUp'
              data-wow-delay='0.1s'
              key={project.id}
            >
              <div className='portfolio-inner'>
                <img className='img-fluid w-100' src={project.image} alt='' style={{aspectRatio: '16/10'}}/>
                <div className='text-center p-4'>
                  <p className='text-theme-primary mb-2'>{project.title}</p>
                  <h5 className='lh-base mb-0'>{project.description}</h5>
                </div>
                <div className='portfolio-text text-center bg-white p-4'>
                  <p className='text-theme-primary mb-2'>{project.title}</p>
                  <h5 className='lh-base mb-3'>{project.description}</h5>
                  <div className='d-flex justify-content-center'>
                    <a
                      className='btn btn-square btn-primary border-0 rounded-circle mx-1'
                      href={project.image}
                      data-lightbox='portfolio'
                      style={{ width: "43px", height: "42px" }}
                    >
                      <Eye size={21}/>
                    </a>
                    <a
                      className='btn btn-square btn-primary border-0 rounded-circle mx-1'
                      href='#'
                      style={{ width: "43px", height: "42px" }}
                    >
                      <Link size={20}/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
