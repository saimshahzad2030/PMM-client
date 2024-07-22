import React from 'react'

const RouteComponent = ({parentRoute,mainRoute}) => {
  return (
    <div className='flex flex-row items-center justify-start w-full my-4'>
        <p className='text-gray-600'>{parentRoute}</p>
        <p className='text-[#E3BB59]'>&nbsp;{mainRoute}</p>
    </div>
  )
}

export default RouteComponent