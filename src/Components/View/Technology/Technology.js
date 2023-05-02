import React from "react";
import { technologyImage } from "../../../Assets";

const Technology = () => {
  return (
    <section className="technology">
      <div className="container">
        <div className="row justify-content-center align-items-center g-2 py-5">
          <div className="col-12 col-md-6 mb-3" data-aos="fade-right">
            <h5 className=" font-titleFont font-bold text-2xl sm:text-4xl leading-normal sm:leading-relaxed mb-3">
              We're Using latest{" "}
              <span className=" text-neweraBlue font-extrabold">
                Technology
              </span>
              <br /> In Projects
            </h5>
            <div className="about-content">
              <p className=" text-black font-bodyFont text-lg tracking-wide font-medium">
                A software development company with a years of business
                excellence, we can develop reliable, scalable and secure
                software solutions for any OS, browser and device. We bring
                together deep industry expertise and the latest IT advancements
                to deliver custom solutions and products that perfectly fit the
                needs and behavior of their users.
              </p>
            </div>
          </div>
          <div
            className="col-12 col-md-6 mb-3 ps-0 ps-sm-4"
            data-aos="fade-left"
          >
            <div className="technology-image">
              <img
                src={technologyImage}
                alt="New Era Technosoft About Us Media"
                className="rounded-lg "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
