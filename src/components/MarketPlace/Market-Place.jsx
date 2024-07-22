import React from 'react'
import { MARKET_PLACE, METAL_COIN } from '../../../constants/constants'
import { HEART } from '../../../constants/icons'
import Link from 'next/link'
const MarketPlace = () => {
  return (
    <div className='flex flex-col items-center w-full my-8 mt-16'>
      <h1 className=' lato-700 text-[24px] md:text-[32px] xl:text-[40px]'>
        Market Place
      </h1>
       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-4 w-full gap-y-12 md:gap-y-8  px-4'>
        {
            MARKET_PLACE.map((mp,index)=>(
                <div className='flex flex-col items-center w-full' key={index}>
            <div className='flex flex-col items-center w-11/12 bg-gray-100'>
                <div className='min-w-full h-full relative flex flex-col items-center justify-center bg-gray-200'>
                <img  className='w-9/12 h-full py-4 px-4' src={mp.imageUrl} alt={mp.imageName}/>
                <img  className='w-6 h-6 absolute right-3 top-3' src={HEART.image} alt={HEART.name}/>
                </div>
                <div className='flex flex-col w-full px-2'>
                <span className='text-[12px] text-[#FF0F00] mt-2'>Best Seller</span>
                <p className='text-[16px] md:text-[14px] xl:text-[18px]'>{mp.description}</p>
                <span className='w-full text-end lato-700 text-[16px] md:text-[15px] xl:text-[20px]'>{mp.price}</span>
                <div className='flex flex-col items-center w-full mb-2'>
                <button className='button bg-[#E3BB59] w-11/12 py-2 rounded-[8px] mt-2 text-white'>Add to Cart </button>
                
                </div>
                </div>
            </div>
        </div>
            ))
        }
       </div>
       <Link href={'/market-place'} className='text-[#E3BB59] underline '>View More</Link>
    </div>
  )
}

export default MarketPlace