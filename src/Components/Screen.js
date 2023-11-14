import React from "react";
import Navbar from "./Navbar";
import data from "./data";
import Hero from "./Hero";
import Analytics from "./Analytics";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
import Card from "./Card";


const Screen = () => {
  const getCard = data.map(function (datum) {
    return <Card {...datum} />;
  });
  return (
    <div>
      <div className="border-blue-800 ">
        <Navbar />
        <Hero/>
        <Analytics />
        <Newsletter />
        <div className="w-full bg-white py-[10rem] px-4">
          <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
            {getCard}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Screen;
