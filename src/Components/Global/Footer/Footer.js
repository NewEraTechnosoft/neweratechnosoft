import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row justify-content-center g-2 my-4">
          <div className="col-12 col-md-6 col-lg-3 mb-3">
            <div className="footer-one">
              <h4 className="text-white font-bodyFont text-xl font-semibold mb-4 uppercase">
                New Era Technosoft
              </h4>
              <ul className="p-0 list-unstyled font-bodyFont">
                <li className="mb-2">
                  <Link
                    to={"/"}
                    className="text-decoration-none font-semibold text-gray-500 hover:text-neweraOrange duration-200 ease-in-out"
                  >
                    Home
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to={"/about-us"}
                    className="text-decoration-none font-semibold text-gray-500 hover:text-neweraOrange duration-200 ease-in-out "
                  >
                    About Us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to={"/services"}
                    className="text-decoration-none font-semibold text-gray-500 hover:text-neweraOrange duration-200 ease-in-out "
                  >
                    Services
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to={"/career"}
                    className="text-decoration-none font-semibold text-gray-500 hover:text-neweraOrange duration-200 ease-in-out "
                  >
                    Career
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to={"/contact-us"}
                    className="text-decoration-none font-semibold text-gray-500 hover:text-neweraOrange duration-200 ease-in-out "
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-3">
            <div className="footer-two">
              <h4 className="text-white font-bodyFont text-xl font-semibold mb-4 uppercase">
                Services
              </h4>
              <ul className="p-0 list-unstyled font-bodyFont">
                <li className="mb-2">
                  <Link
                    to={"/"}
                    className="text-decoration-none font-semibold text-gray-500 hover:text-neweraOrange duration-200 ease-in-out "
                  >
                    Website Development
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to={"/services"}
                    className="text-decoration-none font-semibold text-gray-500 hover:text-neweraOrange duration-200 ease-in-out "
                  >
                    Website Design
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to={"/services"}
                    className="text-decoration-none font-semibold text-gray-500 hover:text-neweraOrange duration-200 ease-in-out "
                  >
                    Software Development
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to={"/services"}
                    className="text-decoration-none font-semibold text-gray-500 hover:text-neweraOrange duration-200 ease-in-out "
                  >
                    E-Commerce Development
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to={"/services"}
                    className="text-decoration-none font-semibold text-gray-500 hover:text-neweraOrange duration-200 ease-in-out "
                  >
                    Mobile App Development
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to={"/services"}
                    className="text-decoration-none font-semibold text-gray-500 hover:text-neweraOrange duration-200 ease-in-out "
                  >
                    Game Development
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-3">
            <div className="footer-three">
              <h4 className="text-white font-bodyFont text-xl font-semibold mb-4 uppercase">
                Hire Developers
              </h4>
              <ul className="p-0 list-unstyled font-bodyFont">
                <li className="mb-2">
                  <Link
                    to={"/"}
                    className="text-decoration-none font-semibold text-gray-500 hover:text-neweraOrange duration-200 ease-in-out "
                  >
                    React Developers
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to={"/services"}
                    className="text-decoration-none font-semibold text-gray-500 hover:text-neweraOrange duration-200 ease-in-out "
                  >
                    React Native Developer
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to={"/services"}
                    className="text-decoration-none font-semibold text-gray-500 hover:text-neweraOrange duration-200 ease-in-out "
                  >
                    Nodejs Developers
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to={"/services"}
                    className="text-decoration-none font-semibold text-gray-500 hover:text-neweraOrange duration-200 ease-in-out "
                  >
                    Android Developers
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to={"/services"}
                    className="text-decoration-none font-semibold text-gray-500 hover:text-neweraOrange duration-200 ease-in-out "
                  >
                    iOS Developers
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to={"/services"}
                    className="text-decoration-none font-semibold text-gray-500 hover:text-neweraOrange duration-200 ease-in-out "
                  >
                    Game Development
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-3">
            <div className="footer-four">
              <h4 className="text-white font-bodyFont text-xl font-semibold mb-4 uppercase">
                We're Here To Help
              </h4>
              <ul className="p-0 list-unstyled font-bodyFont">
                <li className="mb-2">
                  <div className="flex">
                    <i className="fa-solid fa-location-dot font-bold text-white text-2xl me-3"></i>
                    <address className="text-gray-500 font-semibold">
                      702-703, 7th Floor, APMC, Krushi Bazar, Sahara Darwaja,
                      Ring Road, Surat - 395002
                    </address>
                  </div>
                </li>
                <li className="mb-2">
                  <div className="flex align-items-center">
                    <i className="fa-solid fa-phone font-bold text-white text-2xl me-3"></i>
                    <span className="text-gray-500 font-semibold">
                      +91 74338 69237
                    </span>
                  </div>
                </li>
                <li className="mb-2">
                  <div className="flex">
                    <i className="fa-solid fa-envelope font-bold text-white text-2xl me-3"></i>
                    <div>
                      <span className=" text-gray-500 font-semibold">
                        <label htmlFor="Career">Career : </label>{" "}
                        hr@neweratechnosoft.com
                      </span>
                      <span className=" text-gray-500 font-semibold">
                        <label htmlFor="Career">Inquiry : </label>{" "}
                        info@neweratechnosoft.com
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-gray-800" style={{ height: "1px" }}></div>
        <div className="row justify-content-center align-items-center g-2 py-3">
          <div className="col-12 col-md-6 text-center text-sm-start">
            <span className=" font-bodyFont text-gray-500 font-semibold text-lg">
              Copyright©2022. All Right Reserved.
            </span>
          </div>
          <div className="col-12 col-md-6">
            <ul className="p-0 list-unstyled flex align-items-center justify-center sm:justify-end">
              <li>
                <a href="/">
                  <i className="fa-brands fa-facebook-f font-semibold mx-3 text-lg text-gray-500 hover:text-neweraOrange duration-300 ease-in-out"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fa-brands fa-instagram font-semibold mx-3 text-lg text-gray-500 hover:text-neweraOrange duration-300 ease-in-out"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fa-brands fa-linkedin-in font-semibold mx-3 text-lg text-gray-500 hover:text-neweraOrange duration-300 ease-in-out"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fa-brands fa-twitter font-semibold mx-3 text-lg text-gray-500 hover:text-neweraOrange duration-300 ease-in-out"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
