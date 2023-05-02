import React from "react";
const WhoWeAre = React.lazy(() => import("./SubComponents/WhoWeAre/WhoWeAre"));
const Mission = React.lazy(() => import("./SubComponents/Mission/Mission"));
const Pioneers = React.lazy(() => import("./SubComponents/Pioneers/Pioneers"));

const AboutUs = () => {
  return (
    <div className="container">
      <WhoWeAre/>
      <Mission/>
      <Pioneers/>
    </div>
  );
};

export default AboutUs;
