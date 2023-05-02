import React from "react";
import { NirmalKanani, RonakDomadiya } from "../../../../Assets";
import "./Pioneers.css";
import { Link } from "react-router-dom";

const Pioneers = () => {
  return (
    <section className="pioneers">
      <div className="row justify-content-center align-items-center g-2">
        <div className="col-12">
          <h3 className=" font-titleFont font-extrabold text-center text-4xl">
            New Era's Pioneers
          </h3>
        </div>
      </div>
      <div className="row justify-content-center align-items-center g-2 py-5">
        <div className="col-12 col-md-6 mb-3">
          <div className="pioneers-img" data-aos="zoom-out-up">
            <img
              src={NirmalKanani}
              className=" block rounded-lg img-fluid"
              alt="Nirmal Kanani CEO & Co-Founder Of New Era Technosoft"
            />
          </div>
        </div>
        <div className="col-12 col-md-6 mb-3">
          <div className="pioneers-details" data-aos="zoom-out-up">
            <h2 className="font-bodyFont font-extrabold text-black tracking-wide text-4xl">Nirmal Kanani</h2>
            <h4 className=" font-bodyFont font-bold text-neweraBlue tracking-wide mb-4" >Chief Exucative Officer (CEO)</h4>
            <p className="font-bodyFont font-medium text-lg text-gray-600">
              Hello, I'm Nirmal Kanani, Co-Founder and Chief Exucative Officer
              (CEO) of New Era Technosoft. I'm completely self-taught, with a
              lot left to learn and teaching myself tech skills. I started my
              career as a Software Developer at my first startup Alpha Web in Surat. With everyone's blessing
              and best wishes, become a Founder Of New Era Technosoft in 2022.
            </p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center align-items-center g-2 py-5">
        <div className="col-12 col-md-6 mb-3 order-2 order-md-1">
        <div className="pioneers-details" data-aos="zoom-out-up">
            <h2 className="font-bodyFont font-extrabold text-black tracking-wide text-4xl">Ronak Domadiya</h2>
            <h4 className=" font-bodyFont font-bold text-neweraBlue tracking-wide mb-4" >Chief Technology Officer (CTO)</h4>
            <p className="font-bodyFont font-medium text-lg text-gray-600">
              Hello, I'm Ronak Domadiya, Co-Founder and Chief Exucative Officer
              (CEO) of New Era Technosoft. I started my
              career as a Software Developer in Scaleteam Pvt. With everyone's blessing
              and best wishes, become a Founder Of New Era Technosoft in 2022.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6 mb-3 order-1 order-md-2">
        <div className="pioneers-img" data-aos="zoom-out-up">
            <img
              src={RonakDomadiya}
              className=" block rounded-lg img-fluid"
              alt="Nirmal Kanani CEO & Co-Founder Of New Era Technosoft"
            />
          </div>
        </div>
      </div>
      <div className="row justify-content-center align-items-center g-2 py-5">
        <div className="col-12 text-center">
            <Link to={"/team"} className=" font-bodyFont bg-neweraBlue hover:bg-neweraOrange duration-300 text-white font-bold py-2 px-5 rounded-md text-decoration-none">Meet Our Team</Link>
        </div>
      </div>
    </section>
  );
};

export default Pioneers;
