import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css";
import AOS from 'aos';
import Loader from "./Components/Global/Loader/Loader";

// Global Components
const Navigation = React.lazy(() =>
  import("./Components/Global/Navbar/Navigation")
);
const Footer = React.lazy(() => import("./Components/Global/Footer/Footer"));

// Pages
const Home = React.lazy(() => import("./Pages/Home/Home"));
const AboutUs = React.lazy(() => import("./Pages/AboutUs/AboutUs"));
const Services = React.lazy(() => import("./Pages/Services/Services"));
const InProgress = React.lazy(() => import("./Pages/InProgress/InProgress"));
const Products = React.lazy(() => import("./Pages/Products/Products"));

const App = () => {

  useEffect(() => {
    AOS.init({
      duration:"1000",
      once:true
    })
  })

  return (
    <BrowserRouter>
      <Suspense fallback={<Loader/>}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about-us" element={<AboutUs/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="*" element={<InProgress/>}/>
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
