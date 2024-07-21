import React from "react";
import { READ_MORE, WHY_US } from "../../../constants/icons";
import Link from "next/link";
const WhyPreciousMarket = () => {
  return (
    <div className="flex flex-col items-center w-full mt-16 text-center px-8 md:px-0">
      <h1 className=" lato-700 text-[24px] md:text-[32px] xl:text-[40px]">Why Precious Metal Market?</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 w-full my-8 ">
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col items-center w-full md:w-11/12">
            <img
              className="w-full h-auto rounded-lg"
              src={WHY_US.image}
              alt={WHY_US.name}
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-col items-center w-full md:w-11/12">
            <p className="w-full text-start lato-700 text-[20px] md:text-[18px] xl:text-[24px]">
              Precious Metal Market{" "}
            </p>
            <span className="w-full text-start text-[12px] md:text-[14px] xl:text-[20px] mt-1">
              We are dedicated to creating a secure, transparent, and efficient
              online platform for trading precious metals. Whether you are a
              seasoned investor, a collector, or someone new to the world of
              precious metals, our marketplace offers a wide range of gold,
              silver, platinum, and other valuable metals to suit your needs.
            </span>
            <Link href={"/"} className="text-[#E3BB59] flex flex-row items-center w-full mt-2">
          Read More
          <img className="w-4 h-4 ml-2" src={READ_MORE.image} alt={READ_MORE.name}/>
        </Link>
          </div>
        </div>
      </div> 
        
 
    </div>
  );
};

export default WhyPreciousMarket;
