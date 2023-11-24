import { Facebook, Instagram, Linkedin, X } from "lucide-react";
import React from "react";

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 px-4 px-lg-5'>
      <a href='index.html' className='navbar-brand d-flex align-items-center'>
        <h2 className='m-0 text-theme-primary'>D S I</h2>
      </a>
      <button
        type='button'
        className='navbar-toggler'
        data-bs-toggle='collapse'
        data-bs-target='#navbarCollapse'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarCollapse'>
        <div className='navbar-nav ms-auto py-4 py-lg-0'>
          <a href='index.html' className='nav-item nav-link active'>
            Home
          </a>
          <a href='about.html' className='nav-item nav-link'>
            About
          </a>
          <a href='service.html' className='nav-item nav-link'>
            Service
          </a>
          <a href='project.html' className='nav-item nav-link'>
            Project
          </a>
          <div className='nav-item dropdown'>
            <a
              href='#'
              className='nav-link dropdown-toggle'
              data-bs-toggle='dropdown'
            >
              Pages
            </a>
            <div className='dropdown-menu rounded-0 rounded-bottom m-0'>
              <a href='feature.html' className='dropdown-item'>
                Feature
              </a>
              <a href='quote.html' className='dropdown-item'>
                Free Quote
              </a>
              <a href='team.html' className='dropdown-item'>
                Our Team
              </a>
              <a href='testimonial.html' className='dropdown-item'>
                Testimonial
              </a>
              <a href='404.html' className='dropdown-item'>
                404 Page
              </a>
            </div>
          </div>
          <a href='contact.html' className='nav-item nav-link'>
            Contact
          </a>
        </div>
        <div className='h-100 d-lg-inline-flex align-items-center justify-content-center d-none'>
          <a
            className='btn btn-square rounded-circle bg-light text-theme-primary me-2'
            href=''
            style={{width: "43px", height: "43px"}}
          >
            <Facebook size={20}/>
          </a>
          <a
            className='btn btn-square rounded-circle bg-light text-theme-primary me-2'
            href=''
            style={{width:"43px", height: "43px"}}
          >
            <X size={20}/>
          </a>
          <a
            className='btn btn-square rounded-circle bg-light text-theme-primary me-2'
            href=''
            style={{width:"43px", height: "43px"}}
          >
            <Linkedin size={20}/>
          </a>
          <a
            className='btn btn-square rounded-circle bg-light text-theme-primary me-0'
            href=''
            style={{width:"43px", height: "43px"}}
          >
            <Instagram size={20}/>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
