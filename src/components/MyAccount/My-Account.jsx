"use client"
import React from 'react'
import RouteComponent from '../RouteComponent/Route-Component'  
import UserSection from './User-Section'

const MyAccount = ({name,email,phone,birthday,gender,image}) => { 
  return (
    <>
    <div className='w-full flex flex-col items-center px-8 mb-12'>
    <RouteComponent parentRoute={'Home >'} mainRoute={'My Account'}/>
    <UserSection User={{image,name}}/>
    <div className='grid grid-cols-2 sm:grid-cols-4 w-full py-4'>
      <div className='flex flex-col items-start w-full'>
        <h3 className='text-gray-600 mt-4'>Name</h3>
        <h3 className='text-gray-600 mt-4'>Gender</h3>
        <h3 className='text-gray-600 mt-4'>Birthday</h3>
        <h3 className='text-gray-600 mt-4'>Email</h3>
        <h3 className='text-gray-600 mt-4'>Phone Number</h3>
      </div>
      <div className='flex flex-col items-start w-full'>
        <p className='mt-4 capitalize'>{name}</p>
        <p className='mt-4'>{gender?gender:'not specified yet'}</p>
        <p className='mt-4'>{birthday?birthday.split('T')[0]:'not specified'}</p>
        <p className='mt-4'>{email}</p>
        <p className='mt-4'>{phone?phone:'not specified yet'}</p>
        
      </div>
    </div>
    </div>
    </>
  )
}

export default MyAccount