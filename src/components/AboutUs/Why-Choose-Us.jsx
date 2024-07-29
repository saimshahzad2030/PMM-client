"use client"
import React from "react";
import RouteComponent from "../RouteComponent/Route-Component";
import JoinNowSection from "../JoinNowSection/Join-Now-Section";
import Link from "next/link";
import { WHY_CHOOSE_US_1, WHY_CHOOSE_US_2, WHY_CHOOSE_US_3, WHY_CHOOSE_US_4 } from "../../../constants/constants";
const WhyChooseUs = ({ route }) => {
  return (
    <div className="flex flex-col items-center w-full px-8 mb-8">
      <div className="flex flex-row w-full bg-[#F2F2F2] my-4">
        <Link
          href={"/about-us/precious-metal-market"}
          className={`button w-3/12 border border-t-0 border-r-0 border-l-0 border-b-0 text-[#6D6D6D]  py-2 text-center`}
        >
          Metal Market
        </Link>
        <Link
          href={"/about-us/why-choose-us"}
          className={`button w-3/12 border border-t-0 border-r-0 border-l-0 border-b-[#E3BB59] text-[#E3BB59] border-b-2 py-2 text-center`}
          >
          Why Choose Us?
        </Link>
        <Link
          href={"/about-us/our-commitment"}
          className={`button w-3/12 border border-t-0 border-r-0 border-l-0 border-b-0 text-[#6D6D6D]  py-2 text-center `}
          
        >
          Our Commitment
        </Link>
        <Link
          href={"/about-us/join-us"}
          className={`button w-3/12 border border-t-0 border-r-0 border-l-0 border-b-0 text-[#6D6D6D]  py-2 text-center `}
        >
          Join Us
        </Link>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between w-full py-8">
        <div className="flex flex-col items-start justify-center w-full md:w-[47%]">
            <h3 className="lato-700 text-[20px] mb-4">Secure Transactions</h3>
            <p>Security is our top priority. We utilize advanced encryption technologies and an escrow service to ensure that all transactions are secure and that both buyers and sellers are protected. Our platform is designed to prevent fraud and to provide peace of mind to all users.</p>
        </div>
        <img className="mt-8 md:mt-0 w-full md:w-[47%] h-auto rounded-lg" src={WHY_CHOOSE_US_1.image} alt={WHY_CHOOSE_US_1.name}/>

      </div>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full py-8">
      <img className="mt-8 md:mt-0 w-full md:w-[47%] h-auto rounded-lg" src={WHY_CHOOSE_US_2.image} alt={WHY_CHOOSE_US_2.name}/>

        <div className="flex flex-col items-start justify-center w-full md:w-[47%]">
            <h3 className="lato-700 text-[20px] mb-4">Transparent Pricing</h3>
            <p>We believe in transparency. Our pricing structure is clear, and there are no hidden fees. Buyers and sellers can see all costs upfront, allowing them to make informed decisions. We also provide real-time market data to help users stay updated with the latest trends and prices.</p>
        </div> 
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between w-full py-8">

        <div className="flex flex-col items-start justify-center w-full md:w-[47%]">
            <h3 className="lato-700 text-[20px] mb-4">Wide Selection</h3>
            <p>Our marketplace features a diverse selection of precious metals from reputable sellers around the world. Whether you are looking for bullion, coins, or collectible items, you will find a wide range of products to choose from.</p>
        </div>
        <img className="mt-8 md:mt-0 w-full md:w-[47%] h-auto rounded-lg" src={WHY_CHOOSE_US_3.image} alt={WHY_CHOOSE_US_3.name}/>

      </div>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full py-8">
      <img className="mt-8 md:mt-0 w-full md:w-[47%] h-auto rounded-lg" src={WHY_CHOOSE_US_4.image} alt={WHY_CHOOSE_US_4.name}/>

        <div className="flex flex-col items-start justify-center w-full md:w-[47%]">
            <h3 className="lato-700 text-[20px] mb-4">Expert Support</h3>
            <p>Our team of experts is here to assist you. Whether you have questions about a specific product, need help with the buying or selling process, or require support with using our platform, we are always ready to help. Our customer support team is dedicated to providing prompt and reliable assistance.</p>
        </div>
         
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between w-full py-8">

        <div className="flex flex-col items-start justify-center w-full md:w-[47%]">
            <h3 className="lato-700 text-[20px] mb-4">User-Friendly Interface</h3>
            <p>We have designed our platform to be intuitive and easy to navigate. Whether you are browsing listings, placing an order, or managing your account, you will find that our website offers a seamless experience.</p>
        </div>
        <img className="mt-8 md:mt-0 w-full md:w-[47%] h-auto rounded-lg" src={WHY_CHOOSE_US_1.image} alt={WHY_CHOOSE_US_1.name}/>

      </div>
      <JoinNowSection
        
      />
    </div>
  );
};
  
export default WhyChooseUs