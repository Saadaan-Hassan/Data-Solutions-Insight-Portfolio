import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import "./style.css";
import Spinner from "./components/Spinner";
import Facts from "./components/Facts";
import About from "./components/About";
import Services from "./components/Services";
import Features from "./components/Features";
import Projects from "./components/Projects";
import Quote from "./components/Quote";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import { ArrowUp } from "lucide-react";

function App() {
  return (
    <>
      {/* <Spinner /> */}
      <Topbar />
      <Navbar />
      <Carousel />
      <Facts />
      <About />
      <Services />
      <Features />
      <Projects />
      <Quote />
      <Team />
      <Testimonial />
      <Footer />

      {/* Copyright Start */}
      <div className='container-fluid py-4' style={{ background: "#000000" }}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 text-center text-md-start mb-3 mb-md-0'>
              &copy;{" "}
              <a className='border-bottom text-decoration-none' href='#'>
                Data Solution Insight
              </a>
              , All Right Reserved.
            </div>
          </div>
        </div>
      </div>
      {/* Copyright End */}

      {/* Back to Top  */}
      <a
        href='#'
        className='btn btn-lg btn-primary border-0 btn-lg-square rounded-circle back-to-top'
        style={{ width: "53px", height: "53px" }}
      >
        <ArrowUp size={20} />
      </a>
    </>
  );
}

export default App;
