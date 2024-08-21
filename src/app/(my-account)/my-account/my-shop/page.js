import React, { Suspense } from "react";

import Copyright from "@/components/Copyright/Copyright";
import Footer from "@/components/Footer/Footer";
import MetalValues from "@/components/MetalValues/Metal-Values";
import Navbar from "@/components/Navbar/Navbar";
import Notifications from "@/components/MyAccount/Notifications";
import MyShop from "@/components/MyShop/My-Shop";
import { cookies } from "next/headers";
import {
  autoLogin,
  fetchSellerDetails,
} from "../../../../../services/user-login";
import { fetchShipments } from "../../../../../services/shipments.services";
const MyShoppage = async () => {
  const cookieStore = cookies();
  const myProducts = await autoLogin(cookieStore.get("token").value);
  const sellerDetails = await fetchSellerDetails(
    cookieStore.get("token").value
  );
  const shipments = await fetchShipments(cookieStore.get("token").value);
  console.log(shipments);
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
        <MyShop
          image={myProducts.user.imageUrl}
          name={`${myProducts.user.firstName} ${myProducts.user.lastName}`}
          myProducts={myProducts.user.products}
          authenticationRequired={sellerDetails.authenticationRequired}
          url={sellerDetails?.url}
          shipments = {shipments.shipments}
        /> 
      </div>
      <div className="w-full h-1 bg-[#E3BB59]"></div>

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

export default MyShoppage;
