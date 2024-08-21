import React, { Suspense } from 'react'

import Copyright from "@/components/Copyright/Copyright";
import Footer from "@/components/Footer/Footer"; 
import MetalValues from "@/components/MetalValues/Metal-Values";
import Navbar from "@/components/Navbar/Navbar";    
import TrackMyOrders from '@/components/MyAccount/Track-My-Orders';
import { cookies } from 'next/headers';
import { autoLogin, fetchUserDetails } from '../../../../../services/user-login';
import { fetchOrders } from '../../../../../services/order.services';
const TrackMyOrdersPage = async() => { 
  const cookieStore = cookies(); 
  const orderDetails = await fetchUserDetails(cookieStore.get("token").value,false,false,false,false,false,false,false,false,true,false); 
  console.log(orderDetails.user.imageUrl)
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
        <TrackMyOrders orders= {orderDetails.user.recieverOrders}  image={orderDetails.user.imageUrl} name={`${orderDetails.user.firstName} ${orderDetails.user.lastName}`} />
    
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
