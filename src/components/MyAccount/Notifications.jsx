import React from 'react'
import UserSection from './User-Section'
import { NOTIFICATIONS, USER } from '../../../constants/constants'
import RouteComponent from '../RouteComponent/Route-Component'
import { LOAD_MORE, NOTIFICATION_REMINDER } from '../../../constants/icons'

const Notifications = () => {
  return (
    <div className='flex flex-col items-center w-full px-8'>
        <RouteComponent parentRoute={'Home > My Account >'} mainRoute={' Notifications'}/>
        <UserSection User={USER}/>
        <div className='flex flex-col items-center w-full my-12'>
            <h3 className='text-start w-full mb-2'>Notifications</h3>
            {NOTIFICATIONS.map((notification,index)=>(
                <div className='flex flex-row items-start my-4'>
                    <div className='w-auto h-auto p-2 md:p-4 bg-[#EAF6FE] flex flex-col items-center justify-center rounded-md'>
                    <img className='w-12 h-auto' src={NOTIFICATION_REMINDER.image} alt={NOTIFICATION_REMINDER.name} />
                        </div>
                    <div className='flex flex-col items-start ml-4 md:ml-12'>
                        <p className=' text-[14px] md:text-[20px]'>{notification.message}</p>
                        <p className='text-gray-600  text-[14px] md:text-[20px]'>{notification.description}</p>
                        <p className='text-gray-600 mt-2 text-[10px] md:text-[20px]'>{notification.time}</p>
                    </div>
                    </div>
            ))}
            <button className='flex flex-row items-center mt-8 text-gray-600'><img className='w-4 h-auto' src={LOAD_MORE.image} alt={LOAD_MORE.name}/> &nbsp;&nbsp;Load more</button>
        </div>
    </div>
  )
}

export default Notifications