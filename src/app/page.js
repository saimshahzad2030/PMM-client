import Copyright from "@/components/Copyright/Copyright";
import CustomerReviews from "@/components/CustomerReviews/Customer-Reviews";
import Footer from "@/components/Footer/Footer";
import MarketPlace from "@/components/MarketPlace/Market-Place";
import MetalValues from "@/components/MetalValues/Metal-Values";
import Navbar from "@/components/Navbar/Navbar";
import SecureEscrowService from "@/components/SecureEscrowService/Secure-Escrow-Service";
import WhyPreciousMarket from "@/components/WhyPreciousMarket/Why-Precious-Market";
import SimpleSlider from "@/components/Slider/Slider-Component";
import { CLIENT_REVIEWS } from "../../constants/constants";
import { fetchWebFeedbacks } from "../../services/website-feedback";
import { fetchProducts } from "../../services/product.services";
import { autoLogin } from "../../services/user-login";
import { cookies } from 'next/headers';
import { deleteAllCookies } from "../../utils/delete-all-cookies";
import { fetchCartItems } from "../../services/cart.services";
export default async function Home() {
  const cookieStore = cookies();
  const myCookie = cookieStore.get('token')?.value;
  const reviews = await fetchWebFeedbacks(0,4);
  const products = await fetchProducts();   
  const cartItems = await fetchCartItems(myCookie) 
  console.log(cartItems)
  return (
    <>
      <div className=" h-auto w-full bg-[#E3BB59] ">
        <Navbar/>
      </div>
      <div className="container mx-auto">
        <MetalValues />
      </div>
      <div className="w-full h-[1px] bg-gray-400"></div>
      <div className="container mx-auto">
        <SimpleSlider />
        <SecureEscrowService />
        <MarketPlace products = {products?.products} cartItems = {cartItems?.cartItems?cartItems.cartItems:[]}/> 
        <CustomerReviews
          heading={"Customer Reviews"}
          text={
            "Buy and Sell Precious Metals with Confidence and Peace of Mind"
          }
          reviews={reviews?.websiteFeedbacks}
        /> 
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
