"use client";
import React, { useEffect } from "react";
import { STAR } from "../../../constants/icons";
import Button from "../Button/Button";

const ProductInfo = ({ product }) => {
  const [counter, setCounter] = React.useState(0);
  return (
    <div className="flex flex-col items-start justify-between w-full col-span-4 px-2 h-auto">
      <h1 className=" lato-700 text-[18px] md:text-[20px] xl:text-[32px] text-gray-700">
        {product.description}
      </h1>
      <div className="flex flex-row items-center ">
        {Array.from({ length: product.rating }, (_, index) => (
          <img className="w-5 h-auto mr-1" src={STAR.image} alt={STAR.name} />
        ))}
      </div>
      <div className="flex flex-row items-center mt-4">
        <h3 className="text-gray-800">{product.price}</h3>
        <h3 className="line-through text-gray-400 ml-4">{product.price}</h3>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between w-full my-8">
        <div className="w-auto md:w-auto grid grid-cols-3">
          <button className=" h-12 w-12 md:h-8 md:w-8 flex flex-col items-center justify-center button px-2 p-1 sm:p-2 border border-gray-400 text-gray-800 bg-white hover:bg-gray-800 hover:border-gray-800 hover:text-white transition-all duration-300" onClick={()=>setCounter(counter-1)}>-</button>
          <button className=" h-12 w-12 md:h-8 md:w-8 flex flex-col items-center justify-center button px-2 p-1 sm:p-2 border border-gray-400 text-gray-800 bg-white hover:bg-gray-800 hover:border-gray-800 hover:text-white transition-all duration-300">{counter}</button>
          <button className=" h-12 w-12 md:h-8 md:w-8 flex flex-col items-center justify-center button px-2 p-1 sm:p-2 border border-gray-400 text-gray-800 bg-white hover:bg-gray-800 hover:border-gray-800 hover:text-white transition-all duration-300" onClick={()=>setCounter(counter+1)}>+</button>
         
        </div>
        <Button
          text={"Buy Now"}
          textColor={"[#E3BB59]"}
          bgColor={"white"}
          others={"w-full mt-4 sm:mt-0 sm:w-[30%] border px-2 p-1 sm:p-2 rounded-md"}
          border={"[#E3BB59]"}
          borderAfter={"white"}
        />
        <Button
          text={"Add to Cart"}
          textColor={"white"}
          bgColor={"[#E3BB59]"}
          others={"w-full mt-4 sm:mt-0 sm:w-[30%] border px-2 p-1 sm:p-2 rounded-md"}
          border={"white"}
          borderAfter={"[#E3BB59]"}
        />
      </div>
      <div className="flex flex-col items-start">
      <p>Metal: {product.metal}</p>
      <p className="mt-2">Model: {product.model}</p>
      <p className="mt-2">Availability: {product.available}</p>
      </div>
      <ul className='list-disc list-inside  text-gray-700 pl-2   mt-4'>
                     {product.highlights.map((h)=>(
                        <li>{h}</li>
                     ))}
                </ul>
    </div>
  );
};

export default ProductInfo;
