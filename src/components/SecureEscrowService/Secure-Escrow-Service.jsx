import React from 'react'
import { cart } from '../../../constants/icons'
import { SERVICES } from '../../../constants/constants'
const SecureEscrowService = () => {
  return (
    <div className='flex flex-col items-center w-full my-8 mt-16 text-center'>
      <h1 className=' lato-700 text-[24px] md:text-[32px] xl:text-[40px]'>
        Secure Escrow Service
      </h1>
      <h3 className='mt-2 lato text-[12px] md:text-[16px] xl:text-[24px] px-8'>Buy and Sell Precious Metal with Confidence and Peace of Mind</h3>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-4  mt-12'>
        {
          SERVICES.map((service,index)=>(
<div className='w-full flex flex-col items-center' key={index}>
          <div className='w-10/12 flex flex-col items-center'>
          <img className='  w-20 h-20 ' src={service.image} alt={service.name}/>
          <h3 className=' mt-4 lato-700  md:text-[18px] xl:text-[24px]'>{service.name}</h3>
          <p className='text-center text-[12px] md:text-[16px] xl:text-[20px] mt-2'>{service.text}</p>
          </div>
        </div>
          ))
        }
        
      </div>
    </div>
  )
}

export default SecureEscrowService