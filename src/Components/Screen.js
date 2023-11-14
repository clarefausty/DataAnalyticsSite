import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Analytics from "./Analytics";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
import Cards from "./Cards";


const Screen = () => {
  
  return (
    <div>
      <div className="border-blue-800 ">
        <Navbar />
        <Hero/>
        <Analytics />
        <Newsletter />
        <Cards/>
        <Footer />
      </div>
    </div>
  );
};

export default Screen;
