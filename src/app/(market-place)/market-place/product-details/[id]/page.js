 
import Copyright from "@/components/Copyright/Copyright";
import Footer from "@/components/Footer/Footer"; 
import Rare from "@/components/MarketPlace/Rare-Collection"; 
import MetalValues from "@/components/MetalValues/Metal-Values";
import Navbar from "@/components/Navbar/Navbar";
import Product from "@/components/ProductDetails/Product"; 
import React from "react";
import { MARKET_PLACE_PAGE } from "../../../../../../constants/constants";
import { notFound } from "next/navigation";
import { fetchProduct, fetchRelatedProducts } from "../../../../../../services/product.services";
import { fetchCartItems } from "../../../../../../services/cart.services";
// async function getProduct(productId) {
//   const blog = MARKET_PLACE_PAGE.find((blog,index) => index == productId);

//   if (!blog) {
//     return null;
//   }
//   return blog;
// }
import { cookies } from "next/headers";
import { fetchWebFeedbacks } from "../../../../../../services/website-feedback";
const ProductDetailspage = async ({params}) => {
  const cookieStore = cookies(); 

  const productId = params.id; 
  const productData = await fetchProduct(productId) 
  
  // const reviews = await fetchWebFeedbacks(0,4); 
  const cartItems = await fetchCartItems(cookieStore.get('token').value) 
 
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
        <Product cartItems={cartItems.cartItems} product = {productData.product} related={productData?.relatedProducts} reviews = {productData?.productReview}/>
        
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




