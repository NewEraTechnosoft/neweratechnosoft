import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

const ConnectBanner = () => {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center g-2 py-5">
        <div className="col-12">
          <div
            className="connect-banner"
            style={{ borderColor: "#6608AF" }}
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <div className=" md:flex justify-between align-items-center text-center md:text-left">
              <h3 className="font-bodyFont font-bold mb-4 mb-md-0">
                Let's Connect & Build Great Things Together!
              </h3>
              <Link
                to={"/contact-us"}
                className="bg-neweraBlue hover:bg-neweraOrange duration-300 text-white font-bold py-2 px-4 rounded-md text-decoration-none"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectBanner;
