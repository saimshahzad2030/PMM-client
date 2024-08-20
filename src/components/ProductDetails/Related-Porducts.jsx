"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
import {
  MARKET_PLACE_PAGE,
  METAL_COIN,
  SLIDER_BG,
} from "../../../constants/constants";
import SingleProduct from "../Products/SingleProduct";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "@mui/material";
export default function RelatedPorducts({ products, cartItems }) {
  const [productsList,setProductsList] = React.useState(products)
  const [cart, setCart] = React.useState(cartItems);
  const isMediumScreen = useMediaQuery("(max-width: 780px)");
  const isSmallScreen = useMediaQuery("(max-width: 640px)");
  const isVerySmallScreen = useMediaQuery("(max-width: 640px)");
  // const relatedProducts = MARKET_PLACE_PAGE.filter((prod)=>{return prod.metal == productType})
  const router = useRouter();
  const productClickHandler = (id) => {
    router.push(`/market-place/product-details/${id}`);
  };
  return (
    <>
      <div className={`w-full   my-16 `}>
        <h1 className=" lato-700 text-[24px] md:text-[32px] xl:text-[40px] text-center mb-12">
          {"Related Products"}
        </h1>
        <Swiper
          slidesPerView={
            isVerySmallScreen ? 1 : isSmallScreen ? 2 : isMediumScreen ? 3 : 4
          }
          loop={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {productsList.map((rp) => (
            <SwiperSlide>
              <SingleProduct
                productClickHandler={() => {
                  productClickHandler(rp.id);
                }}
                product={rp}
                cartItems={cart}
                setCartProducts={setCart}
                setProducts={setProductsList}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
