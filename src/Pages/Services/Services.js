import React, { useState } from "react";
import { ServicesHeader } from "../../Assets";
import ModelHireUs from "../../Components/Global/ModelHireUs/ModelHireUs";
const Services = React.lazy(() => import("../../Components/View/Services/Services"))

const ServicesPage = () => {

  const [ model, setModel ] = useState(false)

  return (
    <section className="container">
      <div className="row justify-content-center align-items-center g-2 py-5">
        <div
          className="col-12 col-md-6 order-2 order-md-1 mb-3"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <h2 className=" font-titleFont font-bold tracking-wide mb-4">
            Maximize Businesses Benifts Out Of IT Resources.
          </h2>
          <p className=" font-bodyFont font-semibold text-gray-600 text-lg tracking-wide mb-4">
            New Era provides web development, Mobile Apps Development services
            designed to help you grow your business, iincrease your ROI, and
            one-up the competition.
          </p>
          <button className="font-bodyFont bg-neweraBlue text-white hover:bg-neweraOrange duration-300 py-2 px-5 rounded-lg" onClick={() => setModel(true)}>Hire Us</button>
        </div>
        <div
          className="col-12 col-md-6 order-1 order-md-2 mb-3"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <img src={ServicesHeader} alt="Services New Era Technosoft" />
        </div>
      </div>
      <ModelHireUs model={model} setmodel={setModel}/>
      <Services/>
    </section>
  );
};

export default ServicesPage;
