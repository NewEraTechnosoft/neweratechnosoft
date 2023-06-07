import React from "react";

const Services = () => {
  const servicesData = [
    {
      title: "Software Development",
      icon: "fa-solid fa-file-code",
      description: `Your one-stop destination for all kinds of software development. We provide expert consultation and project management to give you control of your project.`,
    },
    {
      title: "Mobile App Development",
      icon: `fa-solid fa-mobile-screen-button`,
      description: `We develop a Hybrid Mobile Application using React-Native(FACEBOOK) framework, which let your overall budget down and saves the time`,
    },
    {
      title: "Web Development",
      icon: "fa-solid fa-code",
      description: `Mobile-Friendly Responsive Website Designing and Development using next-generation most powerfull edge technology for your business.`,
    },
    {
      title: "Game Development",
      icon: "fa-solid fa-gamepad",
      description: `Game Development is the art of creating games and describes the design, development and release of a game. .`,
    },
    {
      title: "eCommerce Development",
      icon: `fa-solid fa-cart-arrow-down`,
      description: `We can move your offline store to online and help to increase the revenue by providing an e-commerce solution.`,
    },
    {
      title: "UI Development",
      icon: "fa-brands fa-uikit",
      description: `Software development services help plan, design, develop, integrate, test, manage and evolve software solutions.`,
    },
  ];

  return (
    <div className="container">
      <div className="row g-2 py-5">
        <div className="col-12 mb-4">
            <div className=" text-center">
                <span className=" font-bodyFont font-semibold sm:text-2xl text-neweraOrange mb-3">WHAT WE OFFER YOU</span>
                <h2 className=" font-titleFont mb-4 text-2xl sm:text-6xl sm:leading-normal tracking-wide">New Era Technosoft Offered You <span className="text-neweraBlue">High</span> Quality IT Services</h2>
            </div>
        </div>
        {servicesData?.map((item, index) => {
          return (
            <div className="col-12 col-md-4 mb-3" key={index}>
              <div className=" bg-white rounded-lg p-4 text-center transform hover:translate-y-2 hover:shadow-xl transition duration-300 cursor-pointer">
                  <div className=" border-neweraBlue mb-3">
                    <i className={`${item?.icon} text-neweraBlue text-5xl hover:text-neweraOrange duration-300`}></i>
                  </div>
                  <div className="services-content">
                    <h3 className=" font-titleFont">{item?.title}</h3>
                    <p className="font-bodyFont font-normal text-lg">{item?.description}</p>
                  </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
