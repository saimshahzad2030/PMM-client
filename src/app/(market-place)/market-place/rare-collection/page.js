import Copyright from "@/components/Copyright/Copyright";
import Footer from "@/components/Footer/Footer"; 
import Rare from "@/components/MarketPlace/Rare-Collection"; 
import MetalValues from "@/components/MetalValues/Metal-Values";
import Navbar from "@/components/Navbar/Navbar";
import React, { Suspense } from "react";
import { cookies } from "next/headers";  
import { fetchSpecificProducts } from "../../../../../services/product.services";

const SilverPage = async() => {
 
  const cookieStore = cookies(); 
  const silverProducts = await fetchSpecificProducts("rare",0,40,cookieStore.get('token').value)
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
        <Rare products = {silverProducts.products}/>
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

export default SilverPage;
