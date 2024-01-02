import React from "react";
import { Headphones, SmartphoneNfc, ShieldCheck, ScanEye } from "lucide-react";
import feature from "../assets/feature.jpg";

function Features() {
  return (
    <div className='container-fluid bg-light overflow-hidden my-5 px-lg-0'>
      <div className='container feature px-lg-0'>
        <div className='row g-0 mx-lg-0'>
          <div
            className='col-lg-6 feature-text py-5 wow fadeIn'
            data-wow-delay='0.5s'
          >
            <div className='p-lg-5'>
              <div
                className='bg-theme-primary mb-3'
                style={{ width: "60px", height: "2px" }}
              ></div>
              <h1 className='display-5 mb-5'>Why Choose Us</h1>
              <p className='mb-4 pb-2' style={{textAlign: "justify"}}>
              At Data Solution Insights, we stand out for our deep expertise in advanced data tools like Power BI, Tableau, and Sigma Computing. Our approach combines cutting-edge technology with personalized service, ensuring that each solution is tailored to your unique business needs. Choose us for our commitment to excellence, our innovative analytics strategies, and our dedication to transforming data into tangible business value.
              </p>
              <div className='row g-4'>
                <div className='col-6'>
                  <div className='d-flex align-items-center'>
                    <div
                      className='btn-square bg-white rounded-circle'
                      style={{ width: "64px", height: "64px" }}
                    >
                      <ScanEye
                        className='text-theme-primary'
                        size={50}
                        style={{ strokeWidth: 1.3 }}
                      />
                    </div>
                    <div className='ms-4'>
                      <p className='text-theme-primary mb-2'>Trusted</p>
                      <h5 className='mb-0'>Security</h5>
                    </div>
                  </div>
                </div>
                <div className='col-6'>
                  <div className='d-flex align-items-center'>
                    <div
                      className='btn-square bg-white rounded-circle'
                      style={{ width: "64px", height: "64px" }}
                    >
                      <ShieldCheck
                        className='text-theme-primary'
                        size={50}
                        style={{ strokeWidth: 1.3 }}
                      />
                    </div>
                    <div className='ms-4'>
                      <p className='text-theme-primary mb-2'>Quality</p>
                      <h5 className='mb-0'>Services</h5>
                    </div>
                  </div>
                </div>
                <div className='col-6'>
                  <div className='d-flex align-items-center'>
                    <div
                      className='btn-square bg-white rounded-circle'
                      style={{ width: "64px", height: "64px" }}
                    >
                      <SmartphoneNfc
                        className='text-theme-primary'
                        size={50}
                        style={{ strokeWidth: 1.3 }}
                      />
                    </div>
                    <div className='ms-4'>
                      <p className='text-theme-primary mb-2'>Smart</p>
                      <h5 className='mb-0'>Systems</h5>
                    </div>
                  </div>
                </div>
                <div className='col-6'>
                  <div className='d-flex align-items-center'>
                    <div
                      className='btn-square bg-white rounded-circle'
                      style={{ width: "64px", height: "64px" }}
                    >
                      <Headphones
                        className='text-theme-primary'
                        size={50}
                        style={{ strokeWidth: 1.3 }}
                      />
                    </div>
                    <div className='ms-4'>
                      <p className='text-theme-primary mb-2'>24/7 Hours</p>
                      <h5 className='mb-0'>Support</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6 pe-lg-0' style={{ minHeight: "400px" }}>
            <div className='position-relative h-100'>
              <img
                className='position-absolute img-fluid w-100 h-100'
                src={feature}
                style={{ objectFit: "cover" }}
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
