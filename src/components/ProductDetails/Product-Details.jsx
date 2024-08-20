import React from 'react'

const ProductDetails = ({details,highlights}) => {
  return (
    <div className='grid grid-cols-2 gap-x-4 my-4'>
        <div className='flex flex-col w-full'>
            <h2 className='lato-700 text-gray-600'>Product Details</h2>
            <p className='text-gray-700'>{details}</p>
        </div>
        <div className='flex flex-col items-start w-full'>
        <h2 className='lato-700 text-gray-600'>Product Highlights</h2>

         <ul className='list-disc list-inside  text-gray-700 pl-2   mt-4'>
                     {highlights.map((h)=>(
                        <li>{h.highlight}</li>
                     ))}
                </ul>
        </div>
    </div>
  )
}

export default ProductDetails