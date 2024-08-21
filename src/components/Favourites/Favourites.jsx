"use client";
import React from "react";
import RouteComponent from "../RouteComponent/Route-Component";
import { FAVOURITES } from "../../../constants/constants";
import SingleProduct from "../Products/SingleProduct";
const Favourites = ({   user }) => { 
const [products,setProducts] = React.useState(user.favourites)
console.log(user)
  return (
    <div className="flex flex-col items-start w-full px-8">
      <RouteComponent
        parentRoute={"Home > Market place > "}
        mainRoute={"Favourites"}
      />
      <h1 className="mt-8 w-full lato-700 text-gray-800 text-[24px] sm:text-[16px] md:text-[32px] text-center">
        Favourites
      </h1>
      {products.length > 0 ?
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-4 w-full gap-y-12 md:gap-y-8  px-4">
      {products.map((mp, index) => (
        <SingleProduct
          product={mp.product}   
          setProducts={setProducts}
        />
      ))}
    </div>:
    <h2 className="text-gray-700 text-center w-full mb-8">You haven't set any of product as favourite</h2>}
    </div>
  );
};

export default Favourites;
