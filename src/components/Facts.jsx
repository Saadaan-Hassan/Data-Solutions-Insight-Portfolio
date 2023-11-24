import React from "react";
import { Database, BarChart3, PencilRuler } from "lucide-react";

function Facts() {
  const data = [
    {
      icon: <Database className='text-theme-primary' />,
      title: "Home Security",
      description:
        "Vero elitr justo clita lorem ipsum dolor at sed stet sit diam rebum ipsum et diam justo clita et",
    },

    {
      icon: <BarChart3 className='text-theme-primary' />,
      title: "Access Control",
      description:
        "Vero elitr justo clita lorem ipsum dolor at sed stet sit diam rebum ipsum et diam justo clita et",
    },

    {
      icon: <PencilRuler className='text-theme-primary' />,
      title: "24/7 Support",
      description:
        "Vero elitr justo clita lorem ipsum dolor at sed stet sit diam rebum ipsum et diam justo clita et",
    },
  ];
  return (
    <div className='container-xxl py-5'>
      <div className='container'>
        <div className='row g-4'>
          {data.map((item, index) => (
            <div
              key={index}
              className='col-md-6 col-lg-4 wow fadeIn'
              data-wow-delay='0.1s'
            >
              <div className='h-100 bg-dark p-4 p-xl-5'>
                <div className='d-flex align-items-center justify-content-between mb-4'>
                  <div
                    className='btn-square rounded-circle'
                    style={{
                      width: "64px",
                      height: "64px",
                      background: "#000000",
                    }}
                  >
                    {item.icon}
                  </div>
                  <h1 className='display-1 mb-0' style={{ color: "#000000" }}>
                    0{index + 1}
                  </h1>
                </div>
                <h5 className='text-white'>{item.title}</h5>
                <hr className='w-25' />
                <span className='text-secondary'>{item.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Facts;
