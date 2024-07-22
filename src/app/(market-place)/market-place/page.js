import Copyright from "@/components/Copyright/Copyright";
import Footer from "@/components/Footer/Footer";
import MarketPlacePage from "@/components/MarketPlace/Market-Place-Page";
import MetalValues from "@/components/MetalValues/Metal-Values";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const MarketPLace = () => {
  return (
    <>
      <div className=" h-auto w-full bg-[#E3BB59]">
        <Navbar />
      </div>
      <div className="container mx-auto">
        <MetalValues />
      </div>

      <div className="w-full h-[1px] bg-gray-400"></div>
      <div className="container mx-auto">
        <MarketPlacePage />
      </div>
      <div className="w-full h-[2px] bg-gray-400"></div>
      <div className="container mx-auto">
        <Footer />
      </div>
      <div className="w-full h-[2px] bg-gray-400"></div>
      <div className="container mx-auto">
        <Copyright />
      </div>
    </>
  );
};

export default MarketPLace;
