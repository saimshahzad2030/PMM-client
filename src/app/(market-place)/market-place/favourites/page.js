import Copyright from "@/components/Copyright/Copyright";
import Favourites from "@/components/Favourites/Favourites";
import Footer from "@/components/Footer/Footer";
import Gold from "@/components/MarketPlace/Gold"; 
import MetalValues from "@/components/MetalValues/Metal-Values";
import Navbar from "@/components/Navbar/Navbar";
import React, { Suspense } from "react";
import { autoLogin, fetchUserDetails } from "../../../../../services/user-login";
import { cookies } from 'next/headers';
import { fetchFavourites } from "../../../../../services/favourites.services";
import { fetchCartItems } from "../../../../../services/cart.services";

const FavouriteProductsPage = async() => {
  const cookieStore = cookies(); 

  const user = await fetchUserDetails(cookieStore.get('token').value,false,false,false,true,true,false,false,false,false,false)

  console.log(user.user.favourites)
  console.log(user.user.cart)
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
        <Favourites  user = {user.user}/>
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