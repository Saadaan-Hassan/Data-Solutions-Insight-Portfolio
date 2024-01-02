import React from "react";
import quote from "../assets/quote.jpg";

function Quote() {
  return (
    <div
      id='contact'
      className='container-fluid bg-light overflow-hidden my-5 px-lg-0'
    >
      <div className='container quote px-lg-0'>
        <div className='row g-0 mx-lg-0'>
          <div className='col-lg-6 ps-lg-0' style={{ minHeight: "400px" }}>
            <div className='position-relative h-100'>
              <img
                className='position-absolute img-fluid w-100 h-100'
                src={quote}
                style={{ objectFit: "cover" }}
                alt=''
              />
            </div>
          </div>
          <div
            className='col-lg-6 quote-text py-5 wow fadeIn'
            data-wow-delay='0.5s'
          >
            <div className='p-lg-5'>
              <div
                className='bg-theme-primary mb-3'
                style={{ width: "60px", height: "2px" }}
              ></div>
              <h1 className='display-5 mb-5'>Free Quote</h1>
              <p className='mb-4 pb-2'>
                Reach out to Data Solution Insights today for a complimentary,
                personalized quote tailored to your data analytics and
                engineering needs.
              </p>
              <form>
                <div className='row g-3'>
                  <div className='col-12 col-sm-6'>
                    <input
                      type='text'
                      className='form-control border-0'
                      placeholder='Your Name'
                      style={{ height: "55px" }}
                    />
                  </div>
                  <div className='col-12 col-sm-6'>
                    <input
                      type='email'
                      className='form-control border-0'
                      placeholder='Your Email'
                      style={{ height: "55px" }}
                    />
                  </div>
                  <div className='col-12 col-sm-6'>
                    <input
                      type='text'
                      className='form-control border-0'
                      placeholder='Your Mobile'
                      style={{ height: "55px" }}
                    />
                  </div>
                  <div className='col-12 col-sm-6'>
                    <select
                      className='form-select border-0'
                      style={{ height: "55px" }}
                    >
                      <option selected>Select A Service</option>
                      <option value='1'>Service 1</option>
                      <option value='2'>Service 2</option>
                      <option value='3'>Service 3</option>
                    </select>
                  </div>
                  <div className='col-12'>
                    <textarea
                      className='form-control border-0'
                      placeholder='Special Note'
                    ></textarea>
                  </div>
                  <div className='col-12'>
                    <button
                      className='btn btn-primary border-0 w-100 py-3'
                      type='submit'
                    >
                      Get A Free Quote
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quote;
