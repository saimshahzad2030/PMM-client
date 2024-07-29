"use client"

import React from "react";
import RouteComponent from "../RouteComponent/Route-Component";
import { READ_MORE } from "../../../constants/icons";
import Link from "next/link";
import { ARTICLES, ARTICLES_IMAGE } from "../../../constants/constants";
import JoinNowSection from "../JoinNowSection/Join-Now-Section";

import Pagination from "@mui/material/Pagination";
const Blogs = () => {
  return (
    <div className="flex flex-col items-start w-full px-8 mt-4 mb-12">
      <RouteComponent mainRoute={" Blogs"} parentRoute={`Home > `} />
      <h1 className=" lato-700 text-[18px] md:text-[24px] xl:text-[32px] w-full">
        Welcome to the Precious Metal Market Blog
      </h1>
      <h3 className="mt-2   lato text-[16px] md:text-[16px] xl:text-[20px]  w-full">
        Latest Insights, Trends, and News in the World of Precious Metals
      </h3>
      <p className="mt-2 lato text-[14px] md:text-[12px] xl:text-[16px]  w-full">
        Stay informed with the latest updates, expert analysis, and valuable
        insights on precious metals. Our blog is your go-to resource for
        understanding market trends, investment strategies, and the global
        economic factors influencing the value of precious metals.
      </p>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-12">
        {ARTICLES.map((article, index) => (
          <>
            {index == 0 ? (
              <div className="w-full flex flex-col items-start col-span-1 sm:col-span-2 md:col-span-3 my-4">
                <h1 className=" lato-700 text-[16px] md:text-[24px] xl:text-[32px] w-full">
                Featured Articles
      </h1>
      <div className="flex flex-col items-center w-full relative">
        <span className="bg-white text-gray-500 rounded-full p-2 absolute top-10 right-10">5 mins read</span>
      <img className="w-full h-auto max-h-[400px] mt-4" src={ARTICLES_IMAGE.image} alt={ARTICLES_IMAGE.name}/>
      </div>
      <h3 className="mt-4 lato-700 text-[16px] sm:text-[16px] md:text-[16px] xl:text-[20px]  w-full">
      {article.description}</h3>
      <p className=" text-[12px] sm:text-[16px] md:text-[16px] xl:text-[20px]  w-full">{article.startingText}</p>
      <Link href={`/blogs/${index}`} className="text-[#887035] flex flex-row items-center w-full mt-2 mb-16">
          Read More
          <img className="w-4 h-4 ml-2" src={READ_MORE.image} alt={READ_MORE.name}/>
        </Link>
        <h3 className="mt-2 lato text-[12px] md:text-[16px] xl:text-[20px]  w-full">
        Recent Articles</h3>    
              </div>
            ) : (
              <div className="w-full flex flex-col items-start col-span-1 relative">
                <span className="bg-white text-gray-500 rounded-full p-2 absolute top-5 right-5">5 mins read</span>
                <img className="w-full h-auto rounded-lg" src={ARTICLES_IMAGE.image} alt = {ARTICLES_IMAGE.name}/>
                <h4 className="lato-700 text-[18px] mt-4">{article.description}</h4>
                <p className="truncate-multiline text-[16px]">{article.startingText}</p>
                <Link href={`/blogs/${index}`} className="text-[#887035] flex flex-row items-center w-full mt-2 mb-16">
          Read More
          <img className="w-4 h-4 ml-2" src={READ_MORE.image} alt={READ_MORE.name}/>
        </Link>
              </div>
            )}
          </>
        ))}
      </div>
      {/* <Link href={"/"} className="text-[#887035] flex flex-row items-center w-full mt-2">
          Read More
          <img className="w-4 h-4 ml-2" src={READ_MORE.image} alt={READ_MORE.name}/>
        </Link> */}
         <div className="w-full flex flex-row justify-center my-4">
            <Pagination count={10} />
          </div>
        <JoinNowSection  />

    </div>
  );
};

export default Blogs;
