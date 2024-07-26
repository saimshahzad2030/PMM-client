import Copyright from "@/components/Copyright/Copyright";
import Footer from "@/components/Footer/Footer"; 
import Rare from "@/components/MarketPlace/Rare-Collection"; 
import MetalValues from "@/components/MetalValues/Metal-Values";
import Navbar from "@/components/Navbar/Navbar";
import Product from "@/components/ProductDetails/Product"; 
import React from "react";

const ProductDetailspage = ({params}) => {
  return (
    <>
      <div className=" h-auto w-full bg-[#E3BB59]">
        <Navbar />
      </div>
      <div className="container mx-auto">
        <MetalValues />
      </div>

      <div className="w-full h-[1px] bg-gray-400"></div>
      <div className="container mx-auto">
        {/* before ssr i am passing product id but after ssr the product wil
        be directly send from this server component(page) to the my client comonent */}
        <Product productId={params.id}/>
        
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
 

export default ProductDetailspage