import React from 'react'

import Copyright from "@/components/Copyright/Copyright";
import Footer from "@/components/Footer/Footer"; 
import MetalValues from "@/components/MetalValues/Metal-Values";
import Navbar from "@/components/Navbar/Navbar";   
import Notifications from '@/components/MyAccount/Notifications';
import MyShop from '@/components/MyShop/My-Shop';
const MyShoppage = () => {
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
        {/* <Notifications/> */}
        <MyShop/>
      </div>
      <div className="w-full h-1 bg-[#E3BB59]"></div>
      
      <div className="container mx-auto">
      <Footer/>
      </div>
      <div className="w-full h-[2px] bg-gray-400"></div>
      <div className="container mx-auto">
        <Copyright/>
      </div>
      </>
  );
};
 

export default MyShoppage