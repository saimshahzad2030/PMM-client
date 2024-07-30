import Copyright from "@/components/Copyright/Copyright";
import Footer from "@/components/Footer/Footer";
import Palladium from "@/components/MarketPlace/Palladium";
import MetalValues from "@/components/MetalValues/Metal-Values";
import Navbar from "@/components/Navbar/Navbar";
import GoldSpotPrice from "@/components/SpotPrice/Spot-Price";
import React from "react";
import { MARKET_PLACE_PAGE, METAL_VALUES } from "../../../../../constants/constants";
import SpotPrice from "@/components/SpotPrice/Spot-Price";

const SilverSpotPricePage = () => {
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
        <SpotPrice
        color={'#CFCFCF'}
          spotPrice={METAL_VALUES[1]}
          metalName={"silver"}
          recommended={MARKET_PLACE_PAGE.filter((prod) => {
            return prod.metal == "silver";
          })}
        />
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

export default SilverSpotPricePage;
