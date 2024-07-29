"use client"
import React from "react";
import RouteComponent from "../RouteComponent/Route-Component";
import JoinNowSection from "../JoinNowSection/Join-Now-Section";
import Link from "next/link";
import { OUR_COMMITMENT } from "../../../constants/constants";
const OurCommitment = ({ route }) => {
  return (
    <div className="flex flex-col items-center w-full px-8 pb-8"> 
      <div className="flex flex-row w-full bg-[#F2F2F2] my-4">
        <Link
        className={`button w-3/12 border border-t-0 border-r-0 border-l-0 border-b-0 text-[#6D6D6D]"          } py-2 text-center `}
          href={"/about-us/precious-metal-market"}
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
          className={`button w-3/12 border border-t-0 border-r-0 border-l-0 border-b-[#E3BB59] text-[#E3BB59] border-b-2 py-2 text-center `}
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
            <h3 className="lato-700 text-[20px] mb-4">Our Commitment</h3>
            <p>We are committed to maintaining the highest standards of integrity and customer service. We continuously work to improve our platform and services to meet the evolving needs of our users. Our goal is to build long-lasting relationships based on trust, transparency, and mutual success.</p>
        </div>
        <img className="mt-8 md:mt-0 w-full md:w-[47%] h-auto rounded-lg" src={OUR_COMMITMENT.image} alt={OUR_COMMITMENT.name}/>

      </div>
      <JoinNowSection
         
      />
    </div>
  );
};
 

export default OurCommitment