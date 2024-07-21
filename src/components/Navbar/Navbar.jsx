"use client"
import React from 'react'
import Link from 'next/link'
import style from './Navbar.module.css'
import { cart ,SEARCH} from '../../../constants/icons'
const Navbar = () => {
  return (
    <nav className='bg-[#E3BB59] h-auto w-full container mx-auto flex flex-row items-center justify-between text-white'>
        <div className='  mr-8 flex flex-col items-center w-full  py-4 pb-10'>

            <div className='flex flex-row items-center w-full justify-end  text-lg'>
                <Link href={"/"}>My Account</Link>
                <img className='ml-4 w-6 h-6' src={cart.image} alt={cart.name}/>
            </div>
            <div className='relative flex flex-row items-center justify-end w-full  text-lg'>
        <h1 className='ml-8 text-[40px] absolute left-10'>PMM</h1>
              
              <div className='flex flex-row items-center justify-end w-full'>
              <div className='relative flex flex-row w-6/12 lg:w-4/12'>
              <input type='text' className={`${style['search-input']} w-full bg-[#E3BB59] border border-white rounded-lg pl-2`} placeholder='Search'/>
              <img className='absolute w-auto h-full right-0 cursor-pointer' src={SEARCH.image} alt={SEARCH.name}/>
              
              </div>
              <div className=' hidden lg:flex flex-row items-center ml-12'>
                <p><Link href={'/'}>Gold</Link>&nbsp;&nbsp;|&nbsp;&nbsp;</p>
                <p><Link href={'/'}>Silver</Link>&nbsp;&nbsp;|&nbsp;&nbsp;</p>
                <p><Link href={'/'}>Platinum</Link>&nbsp;&nbsp;|&nbsp;&nbsp;</p>
                <p><Link href={'/'}>Pladium</Link>&nbsp;&nbsp;|&nbsp;&nbsp;</p>
                <p><Link href={'/'}>Sell</Link></p>
                
                </div>
              </div>
            </div>
            
        </div>
    </nav>
  )
}

export default Navbar