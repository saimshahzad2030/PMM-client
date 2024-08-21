import Copyright from "@/components/Copyright/Copyright";
import Footer from "@/components/Footer/Footer";
import Palladium from "@/components/MarketPlace/Palladium";
import MetalValues from "@/components/MetalValues/Metal-Values";
import Navbar from "@/components/Navbar/Navbar";
import GoldSpotPrice from "@/components/SpotPrice/Spot-Price";
import React, { Suspense } from "react";
import { MARKET_PLACE_PAGE, METAL_VALUES } from "../../../../../constants/constants";
import SpotPrice from "@/components/SpotPrice/Spot-Price";
import { cookies } from "next/headers";
import { fetchCartItems } from "../../../../../services/cart.services";
import { fetchProductByType } from "../../../../../services/product.services";
import { fetchUserDetails } from "../../../../../services/user-login";

const PlatinumSpotPricePage = async() => {
  const cookieStore = cookies();
  const myCookie = cookieStore.get('token')?.value;
  const productData = await fetchProductByType("platinum") 
  const cartItems = await fetchUserDetails(cookieStore.get('token').value,false,false,false,false,true,false,false,false,false,false)
console.log(productData)

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
        <SpotPrice
        color={'#00AA30'}
          spotPrice={METAL_VALUES[2]}
          metalName={"platinum"}
          related = {productData?.relatedProducts}
          cartItems ={cartItems.user.cart?cartItems.user.cart:[]}

        />
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

export default PlatinumSpotPricePage;
