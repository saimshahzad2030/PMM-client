"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./Single-Slide.module.css";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { METAL_COIN, SLIDER_BG } from "../../../constants/constants";

export default function SingleSlide({images,slidesPerView,loop,navigation,direction, imageWidth}) {
  return (
    <>
      <div className={`w-full ${styles.mainDiv}  `}>
        <Swiper
        loop={loop} 
        
          slidesPerView={slidesPerView}
           pagination={{
            clickable: true,
          }} 
          direction={direction}
          navigation={navigation}
          modules={[Pagination,Navigation]}
          className="mySwiper"
        >
             {images.map((img,index)=>(
                    <SwiperSlide key={index} >
                    <div className="flex flex-col items-center justify-center w-full h-[90vh] md:h-[400px] lg:h-[500px] bg-[#F2F2F2]">
                      <img
                        className={`${imageWidth} h-auto `}
                        src={img.image}
                        alt={img.name}
                      />
                    </div>
                  </SwiperSlide>
                ))}
           
        </Swiper>
      </div>
    </>
  );
}
