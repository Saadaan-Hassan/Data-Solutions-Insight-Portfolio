import React from "react";
import { ArrowRight, BarChart2, Computer, Cpu, Server } from "lucide-react";

function Services() {
  const data = [
    {
      icon: <BarChart2 className='text-theme-primary' size={50} />,
      title: "Power BI Services",
      text: "Transforming raw data into dynamic, insightful dashboards with Power BI expertise.",
    },
    {
      icon: <Computer className='text-theme-primary' size={50} />,
      title: "Tableau Desktop",
      text: "Crafting compelling data visualizations and analytics using Tableau Desktop.",
    },
    {
      icon: <Server className='text-theme-primary' size={50} />,
      title: "Tableau Server",
      text: "Empowering teams with collaborative, server-based data solutions via Tableau.",
    },
    {
      icon: <Cpu className='text-theme-primary' size={50} />,
      title: "Sigma Computing",
      text: "Leveraging Sigma Computing for advanced, user-friendly data analysis and reporting.",
    },
  ];

  return (
    <div id='service' className='container-xxl py-5'>
      <div className='container'>
        <div className='text-center'>
          <div
            className='bg-theme-primary mb-3 mx-auto'
            style={{ width: "60px", height: "2px" }}
          ></div>
          <h1 className='display-5 mb-5'>Our Services</h1>
        </div>
        <div className='row g-0 service-row'>
          {data.map((item, index) => (
            <div
              className='col-md-6 col-lg-3 wow fadeIn'
              data-wow-delay={index * 0.2 + "s"}
            >
              <div className='service-item border h-100 p-5'>
                <div
                  className='btn-square bg-light rounded-circle mb-4'
                  style={{ width: "64px", height: "64px" }}
                >
                  {item.icon}
                </div>
                <h4 className='mb-3'>{item.title}</h4>
                <p className='mb-4' >{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
