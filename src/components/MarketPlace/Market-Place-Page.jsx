'use client'
import React from "react";
import RouteComponent from "../RouteComponent/Route-Component";
import {
  MARKET_PLACE_PAGE,
  
} from "../../../constants/constants";
 
import JoinNowSection from "../JoinNowSection/Join-Now-Section"; 
import Productscomponent from "../Products/Products-component";
const MarketPlacePage = ({products}) => {
   
  return (
    <div className="flex flex-col items-center w-full px-8 mt-4 mb-12">
      <RouteComponent
        mainRoute={"  Market Place"}
        parentRoute={`Home > `}
      />
      <Productscomponent
      products={products}
      selectedMetal={'dsad'}
      
      />
      <JoinNowSection
    
      />
    </div>
  );
};
 

export default MarketPlacePage;
