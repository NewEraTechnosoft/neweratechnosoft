import React from "react";
import {
  android,
  appleIos,
  graphQL,
  mongo,
  nodeJs,
  reactJs,
} from "../../../Assets";
import "./Expertise.css";

const Expertise = () => {
  const technologyStack = [
    {
      label: "Node Js",
      icon: nodeJs,
      colorCode: "rgb(142, 211,46",
    },
    {
      label: "React",
      icon: reactJs,
      colorCode: "rgb(97,218,251)",
    },
    {
      label: "React Native",
      icon: reactJs,
      colorCode: "rgb(97,218,251)",
    },
    {
      label: "mongoDB",
      icon: mongo,
      colorCode: "rgb(16,170,80)",
    },
    {
      label: "android",
      icon: android,
      colorCode: "rgb(170,193,72)",
    },
    {
      label: "iOS",
      icon: appleIos,
      colorCode: "rgb(10,10,10)",
    },
    {
      label: "GraphQL",
      icon: graphQL,
      colorCode: "rgb(255,0,152)",
    },
  ];

  return (
    <section className="expertise">
      <div className="container py-5">
        <div className="row justify-content-center align-items-center g-2">
          <div className="col-12 text-center my-4">
            <h2 className="font-bold font-bodyFont text-5xl">EXPERTISE</h2>
          </div>
        </div>
        <div className="row justify-content-center g-2  pt-5">
          <div className="col-12 col-md-3 text-center text-md-start">
            <div className="expertise-header">
              <h3 className=" font-titleFont text-neweraBlue leading-normal mb-3">
                Technology is an Art, We are Artist
              </h3>
              <p className=" font-bodyFont text-lg text-black font-semibold">
                Every Business is unique. We pick the right tools for your
                business
              </p>
            </div>
          </div>
          <div className="col-12 col-md-9 md:ps-4">
            <div className="row justify-content-center align-items-center g-2">
              {technologyStack?.map((item, index) => {
                return (
                  <div className="col-12 col-md-4 col-lg-3" key={index}>
                    <div
                      className="all-tech"
                      style={{ borderColor: item?.colorCode }}
                    >
                      <img
                        src={item?.icon}
                        alt={item?.label}
                        className="techno-icon"
                      />
                      <p
                        className="tech-label font-bodyFont font-semibold text-lg"
                        style={{ color: item?.colorCode }}
                      >
                        {item?.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
