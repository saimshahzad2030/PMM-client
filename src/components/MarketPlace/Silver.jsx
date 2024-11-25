"use client";
import React from "react";
import RouteComponent from "../RouteComponent/Route-Component";
import { MARKET_PLACE_PAGE } from "../../../constants/constants";

import JoinNowSection from "../JoinNowSection/Join-Now-Section";
import Productscomponent from "../Products/Products-component";
const Silver = ({ products, cartItems, totalPages }) => {
  return (
    <div className="flex flex-col items-center w-full px-8 mt-4 mb-12">
      <RouteComponent
        mainRoute={" Silver"}
        parentRoute={`Home > Market Place >`}
      />
      <Productscomponent
        products={products}
        selectedMetal={"silver"}
        cartItems={cartItems}
        totalPages={totalPages}
      />
      <JoinNowSection />
    </div>
  );
};

export default Silver;
