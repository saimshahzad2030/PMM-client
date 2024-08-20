'use client'
import React from "react";
import RouteComponent from "../RouteComponent/Route-Component";
import {
  MARKET_PLACE_PAGE,
  
} from "../../../constants/constants";
 
import JoinNowSection from "../JoinNowSection/Join-Now-Section"; 
import Productscomponent from "../Products/Products-component";
const Platinum = ({products,cartItems}) => {
   
  return (
    <div className="flex flex-col items-center w-full px-8 mt-4 mb-12">
      <RouteComponent
        mainRoute={" Platinum"}
        parentRoute={`Home > Market Place >`}
      />
      <Productscomponent
      products={products}
      selectedMetal={'platinum'}
      cartItems={cartItems}
      />
      <JoinNowSection
         
      />
    </div>
  );
};
 


export default Platinum;
