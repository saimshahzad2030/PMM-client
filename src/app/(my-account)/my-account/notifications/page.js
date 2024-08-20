import React from 'react'

import Copyright from "@/components/Copyright/Copyright";
import Footer from "@/components/Footer/Footer"; 
import MetalValues from "@/components/MetalValues/Metal-Values";
import Navbar from "@/components/Navbar/Navbar";   
import Notifications from '@/components/MyAccount/Notifications';
import { cookies } from 'next/headers';
import { autoLogin } from '../../../../../services/user-login';
const NotificationsPage = async() => {
  
 
  const cookieStore = cookies(); 
  const notifications = await autoLogin(cookieStore.get('token').value) 
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
        <Notifications image = {notifications.user.imageUrl} name = {`${notifications.user.firstName} ${notifications.user.lastName}`} notifications = {notifications.user.notifications}/>
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

export default NotificationsPage;
