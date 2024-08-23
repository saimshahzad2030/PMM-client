import Copyright from "@/components/Copyright/Copyright";
import MetalValues from "@/components/MetalValues/Metal-Values";
import Navbar from "@/components/Navbar/Navbar";
import Product from "@/components/ProductDetails/Product";
import React, { Suspense } from "react";
import { fetchProduct } from "../../../../../../services/product.services";
import { cookies } from "next/headers";
import { fetchUserDetails } from "../../../../../../services/user-login";
import Footer from "@/components/Footer/Footer";
const ProductDetailspage = async ({ params }) => {
  const cookieStore = cookies();
  const productId = params.id;
  const productData = await fetchProduct(productId);
  const cartItems = await fetchUserDetails(
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
        <Product
          cartItems={cartItems.user.cart ? cartItems.user.cart : []}
          product={productData.product}
          related={productData?.relatedProducts}
          reviews={productData?.productReview}
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

export default ProductDetailspage;
