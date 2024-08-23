import Copyright from "@/components/Copyright/Copyright";
import CustomerReviews from "@/components/CustomerReviews/Customer-Reviews";
import Footer from "@/components/Footer/Footer";
import MarketPlace from "@/components/MarketPlace/Market-Place";
import MetalValues from "@/components/MetalValues/Metal-Values";
import Navbar from "@/components/Navbar/Navbar";
import SecureEscrowService from "@/components/SecureEscrowService/Secure-Escrow-Service";
import WhyPreciousMarket from "@/components/WhyPreciousMarket/Why-Precious-Market";
import SimpleSlider from "@/components/Slider/Slider-Component";
import { fetchWebFeedbacks } from "../../services/website-feedback";
import { fetchProducts } from "../../services/product.services";
import { Suspense } from "react";
export default async function Home() {
  const reviews = await fetchWebFeedbacks(0, 4);
  const products = await fetchProducts();
  console.log(products);
  return (
    <>
      <div className=" h-auto w-full bg-[#E3BB59] ">
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
        </Suspense>
      </div>
      <div className="container mx-auto">
        <MetalValues />
      </div>
      <div className="w-full h-[1px] bg-gray-400"></div>
      <div className="container mx-auto">
        <SimpleSlider />
        <SecureEscrowService />
        <Suspense fallback={<div>Loading</div>}>
          <MarketPlace
            products={products?.products}
            cartItems={products.products}
          />
          <CustomerReviews
            heading={"Customer Reviews"}
            text={
              "Buy and Sell Precious Metals with Confidence and Peace of Mind"
            }
            reviews={reviews?.websiteFeedbacks}
          />
        </Suspense>
        <WhyPreciousMarket />
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
}
