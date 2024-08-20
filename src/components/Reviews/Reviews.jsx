"use client";
import React from "react";
import Button from "../Button/Button";
import RouteComponent from "../RouteComponent/Route-Component";
import AllReviews from "./All-Reviews";
import RatingComponent from "./Rating";
import Feedback from "./Feedback";

const Reviews = ({heading,text,reviews,total}) => {
  const [feedbacks,setFeedbacks] = React.useState(reviews)
  const [submitANewFeedback, setSubmitANewFeedback] = React.useState(false); 
  return (
  <>
      <div className="w-full flex flex-col items-center px-8">
      <div className="flex flex-col items-center w-full  ">
        <RouteComponent parentRoute={"Home > "} mainRoute={"Website Reviews"} />
      </div>
      <div className="w-full flex flex-col items-center  mt-8 mb-12">
      <h1 className="text-center  lato-700 text-[24px] md:text-[32px] xl:text-[40px] ">
          {heading}
        </h1>
        <h3 className="text-center mt-1 lato text-[12px] md:text-[16px] xl:text-[24px]  ">
         {text}
        </h3>
    {submitANewFeedback?
     
     <> 
        <Feedback  setFeedbacks = {setFeedbacks}/>
         </>
    : 
       
       <>
       
        <Button
          others={"border p-1 px-2 sm:p-2 mt-4 rounded-md"}
          text={"Submit a feedback"}
          bgColor={"[#E3BB59]"}
          textColor={"white"}
          border={"[#E3BB59]"}
          borderAfter={"[#E3BB59]"}
          clickHandler={()=>{setSubmitANewFeedback(true)}}
        />
        <AllReviews reviews={feedbacks}  start = {feedbacks.length} end = {feedbacks.length + 4}   setFeedbacks = {setFeedbacks} total = {total}/> </>
    }
      </div>
      </div>
    </>
  );
};

export default Reviews;
