import React from "react";
import { MapPin, MailOpen, Phone, Clock } from "lucide-react";

function Topbar() {
  return (
    <div className='container-fluid bg-dark px-5 '>
      <div className='row gx-4 d-none d-lg-flex'>
        <div className='col-lg-6 text-start'>
          <div className='h-100 d-inline-flex align-items-center py-3 me-4'>
            <div className='btn-sm-square rounded-circle bg-theme-primary me-2'>
              <MapPin className="w-50 text-white"/>
            </div>
            <small className="text-secondary">123 Street, New York, USA</small>
          </div>
          <div className='h-100 d-inline-flex align-items-center py-3'>
            <div className='btn-sm-square rounded-circle bg-theme-primary me-2'>
              <MailOpen className="w-50 text-white"/>
            </div>
            <small className="text-secondary">info@example.com</small>
          </div>
        </div>
        <div className='col-lg-6 text-end'>
          <div className='h-100 d-inline-flex align-items-center py-3 me-4'>
            <div className='btn-sm-square rounded-circle bg-theme-primary me-2'>
              <Phone className="w-50 text-white"/>
            </div>
            <small className="text-secondary">+012 345 6789</small>
          </div>
          <div className='h-100 d-inline-flex align-items-center py-3'>
            <div className='btn-sm-square rounded-circle bg-theme-primary me-2'>
              <Clock className="w-50 text-white"/>
            </div>
            <small className="text-secondary">Mon - Fri : 9AM - 9PM</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
