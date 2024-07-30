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

export default function SingleSlide({imageName,imageUrl}) {
  return (
    <>
      <div className={`w-full ${styles.mainDiv}  `}>
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
             {[1,2,3,4].map((img,index)=>(
                    <SwiperSlide key={index}>
                    <div className="flex flex-col items-center justify-center w-full h-[90vh] md:h-[400px] lg:h-[500px] bg-[#F2F2F2]">
                      <img
                        className="w-6/12 h-auto "
                        src={imageUrl}
                        alt={imageName}
                      />
                    </div>
                  </SwiperSlide>
                ))}
           
        </Swiper>
      </div>
    </>
  );
}
