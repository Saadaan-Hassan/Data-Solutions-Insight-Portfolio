import React from "react";

import member1 from "../assets/team/team-1.jpg";
import member2 from "../assets/team/team-2.jpg";
import member3 from "../assets/team/team-3.jpg";
import member4 from "../assets/team/team-4.jpg";
import { Facebook, Instagram, Linkedin } from "lucide-react";

function Team() {
  const members = [
    {
      id: 1,
      name: "Full Name",
      designation: "Designation",
      image: member1,
    },
    {
      id: 2,
      name: "Full Name",
      designation: "Designation",
      image: member2,
    },
    {
      id: 3,
      name: "Full Name",
      designation: "Designation",
      image: member3,
    },
    {
      id: 4,
      name: "Full Name",
      designation: "Designation",
      image: member4,
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
          <h1 className='display-5 mb-5'>Team Members</h1>
        </div>
        <div className='row g-4'>
          {members.map((member) => (
            <div
              key={member.id}
              className='col-lg-3 col-md-6 wow fadeInUp'
              data-wow-delay={`${member.id * 0.1}s`}
            >
              <div className='team-item'>
                <div className='overflow-hidden position-relative'>
                  <img className='img-fluid' src={member.image} alt='' />
                  <div className='team-social'>
                    <a
                      className='btn btn-square btn-dark rounded-circle m-1'
                      href='#'
                      style={{ width: "42px", height: "42px" }}
                    >
                      <Facebook size={18} />
                    </a>
                    <a
                      className='btn btn-square btn-dark rounded-circle m-1'
                      href='#'
                      style={{ width: "42px", height: "42px" }}
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      className='btn btn-square btn-dark rounded-circle m-1'
                      href='#'
                      style={{ width: "42px", height: "42px" }}
                    >
                      <Instagram size={18} />
                    </a>
                  </div>
                </div>
                <div className='text-center p-4'>
                  <h5 className='mb-0'>{member.name}</h5>
                  <span className='text-theme-primary'>{member.designation}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
