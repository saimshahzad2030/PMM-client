import React, { Suspense } from "react";

import Copyright from "@/components/Copyright/Copyright";
import Footer from "@/components/Footer/Footer";
import MetalValues from "@/components/MetalValues/Metal-Values";
import Navbar from "@/components/Navbar/Navbar";
import OurCommitment from "@/components/AboutUs/Our-Commitment";
import RouteComponent from "@/components/RouteComponent/Route-Component";
import { ABOUT_US_BG } from "../../../../constants/constants";
const OurCommitmentPage = () => {
  return (
    <>
      <div className=" h-auto w-full bg-[#E3BB59]">
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
        </Suspense>
      </div>
      <div className="container mx-auto">
        <MetalValues />
      </div>

      <div className="w-full h-[1px] bg-gray-400"></div>
      <div className="container mx-auto">
        <div className="flex flex-col items-center w-full px-8">
          <RouteComponent
            parentRoute={"Home > About us > "}
            mainRoute={"Our Commitment"}
          />
        </div>
      </div>
      <img
        className="w-full h-[50vh] sm:h-[280px] md:h-[300px] lg:h-[400px] xl:h-[500px]"
        src={ABOUT_US_BG.image}
        alt={ABOUT_US_BG.name}
      />
      <div className="container mx-auto">
        <OurCommitment route={"Our Commitment"} />
      </div>
      <div className="w-full h-1 bg-[#E3BB59]"></div>

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

export default OurCommitmentPage;
