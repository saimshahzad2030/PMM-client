import Copyright from "@/components/Copyright/Copyright";
import Favourites from "@/components/Favourites/Favourites";
import Footer from "@/components/Footer/Footer";
import Gold from "@/components/MarketPlace/Gold"; 
import MetalValues from "@/components/MetalValues/Metal-Values";
import Navbar from "@/components/Navbar/Navbar";
import React, { Suspense } from "react";
import { autoLogin } from "../../../../../services/user-login";
import { cookies } from 'next/headers';
import { fetchFavourites } from "../../../../../services/favourites.services";
import { fetchCartItems } from "../../../../../services/cart.services";

const FavouriteProductsPage = async() => {
  const cookieStore = cookies(); 

  const favourites = await fetchFavourites(cookieStore.get('token').value)
  const cartItems = await fetchCartItems(cookieStore.get('token').value)  
  console.log(cartItems.cartItems)
  return (
    <>
      <div className=" h-auto w-full bg-[#E3BB59]">
      <Suspense fallback={<div>Loading...</div>}>

<Navbar />
</Suspense>
      </div>
      <div className="container mx-auto">
        <MetalValues />
      </div>

      <div className="w-full h-[1px] bg-gray-400"></div>
      <div className="container mx-auto">
        <Favourites favourites = {favourites.favourites} cartItems = {cartItems.cartItems?cartItems.cartItems:[]}/>
      </div>
      <div className="w-full h-[2px] bg-gray-400"></div>
      <div className="container mx-auto">
        <Footer />
      </div>
      <div className="w-full h-[2px] bg-gray-400"></div>
      <div className="container mx-auto">
        <Copyright />
      </div>
    </>
  );
};
 

export default FavouriteProductsPage