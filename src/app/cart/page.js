// "use client"
import React from 'react' 
import Copyright from "@/components/Copyright/Copyright";
import Footer from "@/components/Footer/Footer"; 
import MetalValues from "@/components/MetalValues/Metal-Values";
import Navbar from "@/components/Navbar/Navbar";      
import Cart from '@/components/Cart/Cart';

import { Suspense } from 'react';
import { autoLogin } from '../../../services/user-login';  
 import { cookies } from 'next/headers';
import { fetchCartItems } from '../../../services/cart.services';
export default async function  CartPage(){
 
  
  const cookieStore = cookies(); 
  const cart = await fetchCartItems(cookieStore.get('token').value) 
  
  // console.log(cart.cartItems )
  const groupedProducts = cart.cartItems.reduce((acc, currentItem) => {
    const sellerId = currentItem.product.sellerId;
    const existingGroup = acc.find(group => group[0]?.product.sellerId === sellerId);
  
    if (existingGroup) {
      existingGroup.push(currentItem);
    } else {
      acc.push([currentItem]);
    }
  
    return acc;
  }, []);
  
  console.log(groupedProducts);
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
        <Cart  data={groupedProducts}/>
 
        
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
   