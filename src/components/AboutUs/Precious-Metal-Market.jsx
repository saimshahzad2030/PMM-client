"use client"
import React from "react";
import RouteComponent from "../RouteComponent/Route-Component";
import JoinNowSection from "../JoinNowSection/Join-Now-Section";
import Link from "next/link";
import { PRECIOUS_METAL_MARKET1, PRECIOUS_METAL_MARKET2 } from "../../../constants/constants";
const PreciousMetalMarket = ({ route }) => {
  return (
    <div className="flex flex-col items-center w-full px-8 mb-8"> 
      <div className="flex flex-row w-full bg-[#F2F2F2] my-4">
        <Link
          href={"/about-us/precious-metal-market"}
          className={`button w-3/12 border border-t-0 border-r-0 border-l-0 border-b-[#E3BB59] text-[#E3BB59] border-b-2 py-2 text-center `}
        >
          Metal Market
        </Link>
        <Link
          href={"/about-us/why-choose-us"}
          className={`button w-3/12 border border-t-0 border-r-0 border-l-0 border-b-0 text-[#6D6D6D]"          } py-2 text-center `}
        >
          Why Choose Us?
        </Link>
        <Link
          href={"/about-us/our-commitment"}
          className={`button w-3/12 border border-t-0 border-r-0 border-l-0 border-b-0 text-[#6D6D6D]"          } py-2 text-center `}
        >
          Our Commitment
        </Link>
        <Link
          href={"/about-us/join-us"}
          className={`button w-3/12 border border-t-0 border-r-0 border-l-0 border-b-0 text-[#6D6D6D]"          } py-2 text-center `}
        >
          Join Us
        </Link>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between w-full py-8">
        <div className="flex flex-col items-start justify-center w-full md:w-[47%]">
            <h3 className="lato-700 text-[20px] mb-4">Precious Metal  Market</h3>
            <p>Precious Metal Market, we are dedicated to creating a secure, transparent, and efficient online platform for trading precious metals. Whether you are a seasoned investor, a collector, or someone new to the world of precious metals, our marketplace offers a wide range of gold, silver, platinum, and other valuable metals to suit your needs.</p>
        </div>
        <img className="mt-8 md:mt-0 w-full md:w-[47%] h-auto rounded-lg" src={PRECIOUS_METAL_MARKET1.image} alt={PRECIOUS_METAL_MARKET1.name}/>


      </div>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full">
        <img className="mt-8 md:mt-0 w-full md:w-[47%] h-auto rounded-lg" src={PRECIOUS_METAL_MARKET2.image} alt={PRECIOUS_METAL_MARKET2.name}/>
        <div className="flex flex-col items-start justify-center w-full md:w-[47%]">


            <h3 className="lato-700 text-[20px] mb-4">Our Mission</h3>
            <p>Our mission is to provide a trustworthy and user-friendly environment where buyers and sellers can conduct transactions with confidence. We strive to simplify the process of buying and selling precious metals by offering a platform that combines robust security features with ease of use.</p>
        </div>
         
      </div>
      <JoinNowSection
        text={
          "Join Precious Metal Market today and experience the easiest way to buy and sell precious metals online."
        }
        clickHandler={() => {}}
      />
    </div>
  );
};

export default PreciousMetalMarket;
