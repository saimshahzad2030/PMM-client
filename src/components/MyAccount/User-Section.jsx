"use client"
import React from 'react'
import { VERIFIED,BELL } from '../../../constants/icons'
import { useRouter } from 'next/navigation'
const UserSection = ({User}) => {
  const router = useRouter();
  return (
    <>
    <span className='w-full text-center bg-[#F2F2F2] text-[#E3BB59] mb-12 py-2'>My Account</span>
    <div className='flex flex-col items-start md:flex-row md:items-end md:justify-between w-full'>
    <div className="flex flex-col items-start md:flex-row md:items-end md:justify-between  w-full mb-8">
                <div className="flex flex-row items-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 lg:w-[88px] lg:h-[88px] rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={User.image}
                      alt={User.name}
                    />
                  </div>
                  <div className="flex flex-col items-start ml-4">
                    <div className="flex flex-row items-center">
                      <p className="lato-700 text-[16px] md:text-[14px] lg:text-[16px] 2xl:text-[20px]">
                        {User.name}
                      </p>
                      <img
                        className="w-3 h-3 md:w-4 md:h-4 ml-2"
                        src={VERIFIED.image}
                        alt={VERIFIED.name}
                      />
                    </div>
                    <span className="text-[12px] md:text-[14px]">
                      Verified
                    </span>
                    <span className="text-[12px] md:text-[14px] underline text-[#2176BD]  cursor-pointer">
                      Edit profile
                    </span>
                  </div>
                </div>
                <div className="flex flex-row items-center mt-4 md:mt-0">
                    <span className='underline text-[#2176BD]  mr-1 sm:mr-4 cursor-pointer text-[10px] md:text-[14px] lg:text-[16px]'  onClick={()=>router.push('/my-account/track-my-orders')}>Track My Orders</span>
                    <img className='w-4 h-4 lg:w-6 lg:h-6  mr-1 sm:mr-4  cursor-pointer' src={BELL.image} alt={BELL.name} onClick={()=>router.push('/my-account/notifications')}/>
                    <button className='button text-[10px] sm:text-[16px] bg-[#E3BB59] text-white py-[3px] lg:py-[6px] px-2 mr-1 sm:mr-4 rounded-md border border-[#E3BB59] hover:bg-white hover:text-[#E3BB59] hover:border-[#E3BB59] transition-all duration-300'>My Shop</button>
                    <button className='button text-[10px] sm:text-[16px] bg-white text-[#E3BB59] py-[3px] lg:py-[6px] px-2 border border-[#E3BB59]  rounded-md hover:bg-[#E3BB59] hover:text-white hover:border-white transition-all duration-300'  onClick={()=>router.push('/my-account/account-settings')}>Account Settings</button>
                </div>
              </div>
    </div>
    <div className="w-full h-[2px] bg-gray-400"></div></>
  )
}

export default UserSection