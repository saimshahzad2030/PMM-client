import Copyright from "@/components/Copyright/Copyright";
import Footer from "@/components/Footer/Footer";
import MarketPlacePage from "@/components/MarketPlace/Market-Place-Page";
import MetalValues from "@/components/MetalValues/Metal-Values";
import Navbar from "@/components/Navbar/Navbar";
import React, { Suspense } from "react";
import { fetchProducts } from "../../../../services/product.services";

const MarketPLace = async () => {
  const products = await fetchProducts();

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
        <MarketPlacePage
          products={products?.products}
          cartItems={products?.cartItems ? products.cartItems : []}
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

export default MarketPLace;
