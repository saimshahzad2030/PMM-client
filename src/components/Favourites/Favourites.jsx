"use client";
import React from "react";
import RouteComponent from "../RouteComponent/Route-Component";
import { FAVOURITES } from "../../../constants/constants";
import SingleProduct from "../Products/SingleProduct";
const Favourites = ({ favourites, cartItems }) => {
  const [cartProducts, setCartProducts] = React.useState(cartItems);

  return (
    <div className="flex flex-col items-start w-full px-8">
      <RouteComponent
        parentRoute={"Home > Market place > "}
        mainRoute={"Favourites"}
      />
      <h1 className="my-8 w-full lato-700 text-gray-800 text-[24px] sm:text-[16px] md:text-[32px] text-center">
        Favourites
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-4 w-full gap-y-12 md:gap-y-8  px-4">
        {favourites.map((mp, index) => (
          <SingleProduct
            product={mp.product}
            favourite={true}
            cartItems={cartProducts}
            setCartProducts={setCartProducts}
          />
        ))}
      </div>
    </div>
  );
};

export default Favourites;
