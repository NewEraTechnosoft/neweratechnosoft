import React from "react";
import { aboutImage } from "../../../Assets";

const About = () => {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center g-2 py-5">
        <div className="col-12 col-md-6 mb-3" data-aos="fade-right">
          <div className="about-image  border-neweraOrange" >
            <img
              src={aboutImage}
              alt="New Era Technosoft About Us Media"
              className="rounded-lg shadow-md img-fluid"
            />
          </div>
        </div>
        <div className="col-12 col-md-6 mb-3 ps-0 ps-sm-4" data-aos="fade-left">
          <h5 className=" font-titleFont font-bold text-2xl sm:text-4xl leading-normal sm:leading-relaxed mb-3">
            We're Team Of{" "}
            <span className=" text-neweraBlue font-extrabold">Experience</span>
            <br /> IT Speacialities
          </h5>
          <div className="about-content">
            <p className=" text-black font-bodyFont text-lg tracking-wide font-medium">
              New Era Technosoft Best And Top IT Company In Surat which has
              skills and expertise to facilitate complex business solutions. We
              Provide Complete digital solution for your brand.{" "}
            </p>
            <p className=" text-black font-bodyFont text-lg tracking-wide font-medium">
              Our team of Expert plan and create the most attractive website
              which help start ups in delivering complete solution because we
              optimize the operation which allows them to seize
              opportunities,achieve revenue targets and deliver maximized value,
              we help building brands online.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
