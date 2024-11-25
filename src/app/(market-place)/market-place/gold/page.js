import Copyright from "@/components/Copyright/Copyright";
import Footer from "@/components/Footer/Footer";
import Gold from "@/components/MarketPlace/Gold";
import MetalValues from "@/components/MetalValues/Metal-Values";
import Navbar from "@/components/Navbar/Navbar";
import React, { Suspense } from "react";
import { cookies } from "next/headers";
import { fetchSpecificProducts } from "../../../../../services/product.services";
import { fetchUserDetails } from "../../../../../services/user-login";

const GoldPage = async () => {
  const cookieStore = cookies();
  const goldProducts = await fetchSpecificProducts("gold", 0, 40);
  let cartItems;
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
        <Gold
          cartItems={
            cookieStore.get("token")?.value && cartItems?.user?.cart
              ? cartItems.user.cart
              : []
          }
          products={goldProducts.products}
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

export default GoldPage;
