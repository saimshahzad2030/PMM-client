"use client"

import Link from "next/link";
import React from "react";
import { CONTACT, MAIL } from "../../../constants/icons";
import { PAYMENTS, SOCIALS } from "../../../constants/constants";

const Footer = () => {
  return (
    <div className=" flex flex-col items-center w-full py-12 px-8">
      <h2 className="lato-700 text-[35px] text-start w-full  my-4 ">
        PMM LOGO
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-6 gap-y-8 lg:gap-y-1 w-full">
        <div className="w-auto flex flex-col items-center">
          <div className="flex flex-col items-start w-full">
            <h4 className="lato-700 text-[16px] uppercase">Customer Support</h4>
            <Link href={"/faqs"} className="text-[16px] mt-4">
              FAQ
            </Link>
            <Link href={"/contact-us"} className="text-[16px] mt-4">
              Contact Us
            </Link>
            <Link href={"/terms-of-service"} className="text-[16px] mt-4">
              Terms of Service
            </Link>
            <Link href={"/privacy-policy"} className="text-[16px] mt-4">
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="w-auto flex flex-col items-center">
          <div className="flex flex-col items-start  w-full">
            <h4 className="lato-700 text-[16px] uppercase">info</h4>
            <Link href={"/blogs"} className="text-[16px] mt-4">
              Blog
            </Link>
            <Link href={"/how-it-works"} className="text-[16px] mt-4">
              How it works
            </Link>
          </div>
        </div>
        <div className="w-auto flex flex-col items-center">
          <div className="flex flex-col items-start  w-full">
            <h4 className="lato-700 text-[16px] uppercase ">my account</h4>
            <Link href={"/"} className="text-[16px] mt-4">
              Account log in
            </Link>
            <Link href={"/my-account/track-my-orders"} className="text-[16px] mt-4">
              Track my order
            </Link>
            <Link href={"/"} className="text-[16px] mt-4">
              Order history
            </Link>
          </div>
        </div>
        <div className="w-full flex flex-col items-center ">
          <div className="flex flex-col items-start w-full ">
            <h4 className="lato-700 text-[16px] uppercase">about us</h4>
            <Link href={"/shipping"} className="text-[16px] mt-4">
              Shipping
            </Link>
            <Link href={"/about-us/precious-metal-market"} className="text-[16px] mt-4">
              About precious metal market
            </Link>
            <Link href={"/website-reviews"} className="text-[16px] mt-4">
              Precious Metal Market Reviews
            </Link>
          </div>
        </div>
        <div className="w-full flex flex-col items-center sm:col-span-2">
          <div className="flex flex-col items-start   lg:w-11/12">
            <h4 className="lato-700 text-[16px] uppercase">subscribe</h4>
            <Link href={"/"} className="w-full mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lectus mauris, tincidunt nec efficitur sit amet, sollicitudin et
              risus.
            </Link>
            <div className="flex flex-row items-center w-full mt-1">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="pl-3 border border-[#E3BB59] h-full w-9/12 rounded-md  rounded-r-none "
              />
              <button className="h-auto text-white w-3/12 p-2 bg-[#E3BB59] rounded-md rounded-l-none ">
                send
              </button>
            </div>
            <div className="mt-4 flex flex-row items-center">
              <div className=" w-7 h-7 rounded-full bg-gray-200 flex flex-col items-center justify-center">
                <img
                  className="w-4 h-4 "
                  src={CONTACT.image}
                  alt={CONTACT.name}
                />
              </div>
              <span className="text-[16px] ml-2">012-3456-789</span>
            </div>
            <div className="mt-4 flex flex-row items-center">
              <div className=" w-7 h-7 rounded-full bg-gray-200 flex flex-col items-center justify-center">
                <img className="w-4 h-4" src={MAIL.image} alt={MAIL.name} />
              </div>
              <span className="text-[16px] ml-2">preciousmetalmarket@gmail.com</span>
            </div>
            <div className="flex flex-row items-center mt-4">
              {SOCIALS.map((social,index)=>(
                <img className="w-6 h-6 mr-4 cursor-pointer" src={social.image} alt={social.name} key={index}/>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center   sm:col-span-3">
          <div className="flex flex-col items-start  w-full">
            <h4 className="lato-700 text-[16px] uppercase">payment</h4>
             <div className="flex flex-row items-center">
              {
                PAYMENTS.map((payment,index)=>(
                  <img className="h-10 sm:h-20 w-auto mr-3" src={payment.image} alt={payment.name} key={index}/>
                ))
              }
             </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
