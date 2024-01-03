import React from "react";

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 px-4 px-lg-5'>
      <a href='#' className='navbar-brand d-flex align-items-center'>
        <h2 className='m-0 text-theme-primary'>Data Solutions Insight</h2>
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
          <a href='#' className='nav-item nav-link active'>
            Home
          </a>
          <a href='#about' className='nav-item nav-link'>
            About
          </a>
          <a href='#service' className='nav-item nav-link'>
            Services
          </a>
          <a href='#project' className='nav-item nav-link'>
            Projects
          </a>
          {/* <a href='#contact' className='nav-item nav-link'>
            Contact
          </a> */}
        </div>
        
      </div>
    </nav>
  );
}

export default Navbar;
