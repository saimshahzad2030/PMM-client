import React from 'react'

import Copyright from "@/components/Copyright/Copyright";
import Footer from "@/components/Footer/Footer"; 
import MetalValues from "@/components/MetalValues/Metal-Values";
import Navbar from "@/components/Navbar/Navbar";
import JoinUs from '@/components/AboutUs/Join-Us';    
import RouteComponent from '@/components/RouteComponent/Route-Component';
import { ABOUT_US_BG } from '../../../../constants/constants';
const JoinUsPage = () => {
  return (
    <>
      <div className=" h-auto w-full bg-[#E3BB59]">
        <Navbar />
      </div>
      <div className="container mx-auto">
        <MetalValues />
      </div>

      <div className="w-full h-[1px] bg-gray-400"></div>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center w-full px-8'>
          <RouteComponent parentRoute={"Home > About us > "} mainRoute={'Join us'} />

        </div>
      </div>
      <img className='w-full h-[50vh] sm:h-[280px] md:h-[300px] lg:h-[400px] xl:h-[500px]' src={ABOUT_US_BG.image} alt={ABOUT_US_BG.name}/>
      <div className="container mx-auto">
        <JoinUs route={'Join us'}/>
        
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

export default JoinUsPage;
