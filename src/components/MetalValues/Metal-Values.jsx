import React from 'react'
import { METAL_VALUES } from '../../../constants/constants'

const MetalValues = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-4  w-full py-4 '>
      {METAL_VALUES.map((metal,index)=>(
        
          <div className=' flex flex-row items-center w-full justify-center' key={index}>
            <div className='flex flex-row w-11/12 justify-evenly text-gray-600 text-[12px] md:text-[11px] lg:text-[14px] xl:text-[16px]
            '>
            <div className='grid grid-cols-4 w-full text-center'>
            <span className=''>{metal.name}</span>
            <span>{metal.price1}</span>
            <span className='text-[#E3BB59]'>{metal.price2}</span>
            <span className={`${metal.status=='negative'?'text-red-700':'text-green-700'}`}>{metal.status==='negative'?'-':'+'}{metal.rate}</span>
            </div>
            </div>
          </div>
      ))}
    </div>
  )
}

export default MetalValues