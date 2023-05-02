import React from "react";
import "./Mission.css";
import {
  CarrtingIcon,
  QualityIcon,
  ResponsibilityIcon,
  SatisfactionIcon,
  TechnologyIcon,
} from "../../../../Assets";

const Mission = () => {
  const coreData = [
    {
      label: "Quality",
      icon: QualityIcon,
    },
    {
      label: "Satisfaction",
      icon: SatisfactionIcon,
    },
    {
      label: "Carrying",
      icon: CarrtingIcon,
    },
    {
      label: "Technology",
      icon: TechnologyIcon,
    },
    {
      label: "Responsibility",
      icon: ResponsibilityIcon,
    },
  ];

  return (
    <section className="our-vision-section my-4">
        <div className="row justify-content-center align-items-center g-2">
            <div className="col-12">
                <h3 className=" font-titleFont font-extrabold text-center text-4xl">Our Vision, Mission & Core Values</h3>
            </div>
        </div>
      <div className="row justify-content-center align-items-center g-2 py-5">
        <div className="col-12 col-md-6 mb-3">
          <div className="vision-box our-mission mb-4">
            <h5 className="vision-title text-neweraBlue font-bodyFont font-extrabold text-xl">
              Our Mission
            </h5>
            <div className="flex align-items-start pb-3">
              <h2 className="vision-box-title text-neweraBlue text-4xl font-semibold font-titleFont me-3">
                1
              </h2>
              <p className="vision-contain text-neweraBlue text-xl font-bodyFont font-semibold">
                Knowledge sharing on upcoming technologies by digital presence
              </p>
            </div>
            <div className="flex align-items-start pb-3">
              <h2 className="vision-box-title text-neweraBlue text-4xl font-semibold font-titleFont me-3">
                2
              </h2>
              <p className="vision-contain text-neweraBlue text-xl font-bodyFont font-semibold">
                Grow businesses through power of digital transformation
              </p>
            </div>
          </div>
          <div className="vision-box our-vision">
            <h5 className="vision-title text-neweraBlue font-bodyFont font-extrabold text-xl">
              Our Vision
            </h5>
            <div className="flex align-items-start pb-3">
              <p className="vision-contain text-neweraBlue text-xl font-bodyFont font-semibold">
                To become well recognised team by transforming & scaling
                businesses worldwide
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 mb-3">
          <div className="vision-box core-value">
            <div>
            <h5 className=" vision-title text-neweraBlue font-bodyFont font-extrabold text-xl">Core Values</h5>
            <ul className="core-value-list p-0 list-unstyled">
              {coreData?.map((item, index) => {
                return (
                  <li className="flex justify-start align-items-center pb-4" key={item?.label}>
                    <img src={item?.icon} alt="" className="core-img" />
                    <p className="core-contain mb-0">{item?.label}</p>
                  </li>
                );
              })}
            </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
