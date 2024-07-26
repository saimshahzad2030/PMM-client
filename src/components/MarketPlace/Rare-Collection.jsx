'use client'
import React from "react";
import RouteComponent from "../RouteComponent/Route-Component";
import {
  MARKET_PLACE_PAGE,
  
} from "../../../constants/constants";
 
import JoinNowSection from "../JoinNowSection/Join-Now-Section"; 
import Productscomponent from "../Products/Products-component";
const Rare = () => {
   
  return (
    <div className="flex flex-col items-center w-full px-8 mt-4 mb-12">
      <RouteComponent
        mainRoute={" Rare"}
        parentRoute={`Home > Market Place >`}
      />
      <Productscomponent
      products={MARKET_PLACE_PAGE}
      selectedMetal={'rare'}
      />
      <JoinNowSection
        text={
          "Join Precious Metal Market today and experience the easiest way to buy and sell precious metals online."
        }
        clickHandler={()=>{}}
      />
    </div>
  );
};
 


export default Rare;
