"use client"
import React from 'react'

const JoinNowSection = () => {
  return (
    <div className='w-full flex flex-col items-center border border-[#E3BB59] my-4 py-8 rounded-md'>
        <p className='w-11/12 sm:w-9/12 md:w-6/12 lg:w-5/12 text-center text-gray-600'>Join Precious Metal Market today and experience the easiest way to buy and sell precious metals online.</p>
        <button className='button rounded-md bg-[#E3BB59] p-2 text-white text-center border border-[#E3BB59] mt-4 hover:text-[#E3BB59] hover:bg-white hover:border-[#E3BB59] transition-all duration-300' onClick={()=>{console.log('first')}}>Join Now</button>
    </div>
  )
}

export default JoinNowSection