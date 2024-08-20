import React from 'react'

import Copyright from "@/components/Copyright/Copyright";
import Footer from "@/components/Footer/Footer"; 
import MetalValues from "@/components/MetalValues/Metal-Values";
import Navbar from "@/components/Navbar/Navbar";    
import TrackMyOrders from '@/components/MyAccount/Track-My-Orders';
import { cookies } from 'next/headers';
import { autoLogin } from '../../../../../services/user-login';
import { fetchOrders } from '../../../../../services/order.services';
const TrackMyOrdersPage = async() => {
  
  const cookieStore = cookies(); 
  const orders = await fetchOrders(cookieStore.get('token').value)
  const userInfo = await autoLogin(cookieStore.get('token').value) 
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
        <TrackMyOrders orders= {orders.orders}  image={userInfo.user.imageUrl} name={`${userInfo.user.firstName} ${userInfo.user.lastName}`} />
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

export default TrackMyOrdersPage;
