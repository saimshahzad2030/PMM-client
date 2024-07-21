"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./Slider-Component.jsx";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { METAL_COIN, SLIDER_BG } from "../../../constants/constants";

export default function SimpleSlider() {
  return (
    <>
      <div className={`w-full ${styles.mainDiv}`}>
        <Swiper
          slidesPerView={1} 
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className={`${styles.slideBg} flex flex-row items-center justify-center relative text-white`}>
              <img src={SLIDER_BG.image} className="h-[300px] w-full sm:h-auto sm:w-full"/>
              <div className="grid grid-cols-2 absolute w-11/12">
<div className="flex flex-col items-center justify-center">
<img src={METAL_COIN.image} alt={METAL_COIN.name} className="w-8/12 sm:w-9/12 h-auto"/>
</div>                <div className="w-full flex flex-col items-center justify-center  ">
                  <div className="flex flex-col items-start sm:pr-0 pr-2">
                  <h1 className=" lato-700 text-[18px] sm:text-[20px] xl:text-[40px]">Lorem ipsum dolor sit amet</h1>
                  <p className="text-[12px] sm:text-[16px]">consectetur adipiscing elit. Vivamus lectus mauris, tincidunt nec efficitur sit amet, sollicitudin et risus. Nam nec lobortis nis</p>
                  <button className="button bg-[#E3BB59] px-2 py-1 sm:p-2 mt-4 w-auto sm:w-4/12">Buy Now</button>
                  </div>

                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${styles.slideBg} flex flex-row items-center justify-center relative text-white`}>
              <img src={SLIDER_BG.image} className="h-[300px] w-full sm:h-auto sm:w-full"/>
              <div className="grid grid-cols-2 absolute w-11/12">
<div className="flex flex-col items-center justify-center">
<img src={METAL_COIN.image} alt={METAL_COIN.name} className="w-8/12 sm:w-9/12 h-auto"/>
</div>                <div className="w-full flex flex-col items-center justify-center  ">
                  <div className="flex flex-col items-start sm:pr-0 pr-2">
                  <h1 className=" lato-700 text-[18px] sm:text-[20px] xl:text-[40px]">Lorem ipsum dolor sit amet</h1>
                  <p className="text-[12px] sm:text-[16px]">consectetur adipiscing elit. Vivamus lectus mauris, tincidunt nec efficitur sit amet, sollicitudin et risus. Nam nec lobortis nis</p>
                  <button className="button bg-[#E3BB59] px-2 py-1 sm:p-2 mt-4 w-auto sm:w-4/12">Buy Now</button>
                  </div>

                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${styles.slideBg} flex flex-row items-center justify-center relative text-white`}>
              <img src={SLIDER_BG.image} className="h-[300px] w-full sm:h-auto sm:w-full"/>
              <div className="grid grid-cols-2 absolute w-11/12">
<div className="flex flex-col items-center justify-center">
<img src={METAL_COIN.image} alt={METAL_COIN.name} className="w-8/12 sm:w-9/12 h-auto"/>
</div>                <div className="w-full flex flex-col items-center justify-center  ">
                  <div className="flex flex-col items-start sm:pr-0 pr-2">
                  <h1 className=" lato-700 text-[18px] sm:text-[20px] xl:text-[40px]">Lorem ipsum dolor sit amet</h1>
                  <p className="text-[12px] sm:text-[16px]">consectetur adipiscing elit. Vivamus lectus mauris, tincidunt nec efficitur sit amet, sollicitudin et risus. Nam nec lobortis nis</p>
                  <button className="button bg-[#E3BB59] px-2 py-1 sm:p-2 mt-4 w-auto sm:w-4/12">Buy Now</button>
                  </div>

                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${styles.slideBg} flex flex-row items-center justify-center relative text-white`}>
              <img src={SLIDER_BG.image} className="h-[300px] w-full sm:h-auto sm:w-full"/>
              <div className="grid grid-cols-2 absolute w-11/12">
<div className="flex flex-col items-center justify-center">
<img src={METAL_COIN.image} alt={METAL_COIN.name} className="w-8/12 sm:w-9/12 h-auto"/>
</div>                <div className="w-full flex flex-col items-center justify-center  ">
                  <div className="flex flex-col items-start sm:pr-0 pr-2">
                  <h1 className=" lato-700 text-[18px] sm:text-[20px] xl:text-[40px]">Lorem ipsum dolor sit amet</h1>
                  <p className="text-[12px] sm:text-[16px]">consectetur adipiscing elit. Vivamus lectus mauris, tincidunt nec efficitur sit amet, sollicitudin et risus. Nam nec lobortis nis</p>
                  <button className="button bg-[#E3BB59] px-2 py-1 sm:p-2 mt-4 w-auto sm:w-4/12">Buy Now</button>
                  </div>

                </div>
              </div>
            </div>
          </SwiperSlide> 
        </Swiper>
      </div>
    </>
  );
}
