"use client";
import React from "react";
import RouteComponent from "../RouteComponent/Route-Component";
import { MARKET_PLACE_PAGE } from "../../../constants/constants";

import JoinNowSection from "../JoinNowSection/Join-Now-Section";
import Productscomponent from "../Products/Products-component";
const Gold = ({ userLoggedIn, products, cartItems, totalPages }) => {
  return (
    <div className="flex flex-col items-center w-full px-8 mt-4 mb-12">
      <RouteComponent
        mainRoute={" Gold"}
        parentRoute={`Home > Market Place >`}
      />
      <Productscomponent
        products={products}
        cartItems={cartItems}
        totalPages={totalPages}
        selectedMetal={"gold"}
      />
      <JoinNowSection />
    </div>
  );
};

export default Gold;
