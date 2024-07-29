"use client"
import React from 'react'
import RouteComponent from '../RouteComponent/Route-Component' 
import { USER } from '../../../constants/constants'
import UserSection from './User-Section'

const MyAccount = () => {
  return (
    <>
    <div className='w-full flex flex-col items-center px-8 mb-12'>
    <RouteComponent parentRoute={'Home >'} mainRoute={'My Account'}/>
    <UserSection User={USER}/>
    <div className='grid grid-cols-2 sm:grid-cols-4 w-full py-4'>
      <div className='flex flex-col items-start w-full'>
        <h3 className='text-gray-600 mt-4'>Name</h3>
        <h3 className='text-gray-600 mt-4'>Gender</h3>
        <h3 className='text-gray-600 mt-4'>Birthday</h3>
        <h3 className='text-gray-600 mt-4'>Email</h3>
        <h3 className='text-gray-600 mt-4'>Phone Number</h3>
      </div>
      <div className='flex flex-col items-start w-full'>
        <p className='mt-4'>{USER.name}</p>
        <p className='mt-4'>{USER.gender}</p>
        <p className='mt-4'>{USER.birthday}</p>
        <p className='mt-4'>{USER.email}</p>
        <p className='mt-4'>{USER.phone}</p>
        
      </div>
    </div>
    </div>
    </>
  )
}

export default MyAccount