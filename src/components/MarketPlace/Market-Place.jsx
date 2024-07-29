"use client"
import React from 'react'
import {  MARKET_PLACE_PAGE, METAL_COIN } from '../../../constants/constants'
import { HEART } from '../../../constants/icons'
import Link from 'next/link'
import SingleProduct from '../Products/SingleProduct'
import { useRouter } from 'next/navigation'
const MarketPlace = () => {
  const router = useRouter();
  const productClickHandler=(id)=>{
    router.push(`/market-place/product-details/${id}`)
  }
  return (
    <div className='flex flex-col items-center w-full my-8 mt-16'>
      <h1 className=' lato-700 text-[24px] md:text-[32px] xl:text-[40px]'>
        Market Place
      </h1>
       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-4 w-full gap-y-12 md:gap-y-8  px-4'>
        {
            MARKET_PLACE_PAGE.map((mp,index)=>(
     
        <SingleProduct product={mp} productClickHandler={productClickHandler}/>
            ))
        }
       </div>
       <Link href={'/market-place'} className='text-[#E3BB59] underline '>View More</Link>
    </div>
  )
}

export default MarketPlace