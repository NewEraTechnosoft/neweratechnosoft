import React from "react";
const Header = React.lazy(() => import("../../Components/View/Header/Header"));
const About = React.lazy(() => import("../../Components/View/About/About"));
const Services = React.lazy(() =>
  import("../../Components/View/Services/Services")
);
const Technology = React.lazy(() =>
  import("../../Components/View/Technology/Technology")
);
const Expertise = React.lazy(() =>
  import("../../Components/View/Expertise/Expertise")
);
const ConnectBanner = React.lazy(() => import("../../Components/View/ConnectBanner/ConnectBanner"))

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <Services />
      <Technology />
      <Expertise />
      <ConnectBanner/>
    </div>
  );
};

export default Home;
