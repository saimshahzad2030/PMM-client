import Copyright from "@/components/Copyright/Copyright";
import Footer from "@/components/Footer/Footer";
import MetalValues from "@/components/MetalValues/Metal-Values";
import Navbar from "@/components/Navbar/Navbar";
import React, { Suspense } from "react";
import { METAL_VALUES } from "../../../../../constants/constants";
import SpotPrice from "@/components/SpotPrice/Spot-Price";
import { fetchProductByType } from "../../../../../services/product.services";
import { cookies } from "next/headers";
import { fetchUserDetails } from "../../../../../services/user-login";

const PalladiumSpotPricePage = async () => {
  const cookieStore = cookies();
  const myCookie = cookieStore.get("token")?.value;
  const productData = await fetchProductByType("palladium");
  if (cookieStore.get("token")?.value) {
    cartItems = await fetchUserDetails(
      cookieStore.get("token").value,
      false,
      false,
      false,
      false,
      true,
      false,
      false,
      false,
      false,
      false
    );
  }

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
          color={"#F84040"}
          spotPrice={METAL_VALUES.Palladium}
          metalName={"palladium"}
          related={productData?.relatedProducts}
          cartItems={
            cookieStore.get("token")?.value && cartItems?.user?.cart
              ? cartItems.user.cart
              : []
          }
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

export default PalladiumSpotPricePage;
