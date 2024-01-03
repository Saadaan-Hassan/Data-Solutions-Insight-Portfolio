import React from "react";
import { Database, BarChart3, PencilRuler } from "lucide-react";

function Facts() {
  const data = [
    {
      icon: <Database className='text-theme-primary' />,
      title: "Analytics Meets Engineering",
      description:
        "At Data Solutions Insight, we merge analytics with engineering, creating solutions that redefine business intelligence. Our approach turns data complexity into strategic success.",
    },

    {
      icon: <BarChart3 className='text-theme-primary' />,
      title: "Engineering Data, Crafting Futures",
      description:
        "Data Solutions Insight engineers data to craft the future of business. We combine analytical depth with engineering precision to drive innovation and informed decision-making.",
    },

    {
      icon: <PencilRuler className='text-theme-primary' />,
      title: "Data Precision, Business Vision",
      description:
        "Blending data analytics with engineering insight, we at Data Solutions Insight craft precision-driven business strategies. Our expertise transforms data into visionary solutions for future success.",
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
                  <h1 className='display-1 mb-0 text-secondary'>
                    0{index + 1}
                  </h1>
                </div>
                <h5 className='text-white'>{item.title}</h5>
                <hr className='w-25' />
                <span
                  className='text-secondary'
                  style={{ textAlign: "justify" }}
                >
                  {item.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Facts;
