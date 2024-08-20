import React from 'react'

const ProductSpecification = ({specification}) => {
  return ( 
       <div className='w-full my-4'>
         <h2 className='lato-700 text-gray-600'>Product Specificaitons</h2>
     <ul className='list-disc list-inside  text-gray-700 pl-2   mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-4'>

    {specification.map((spec)=>(
       <li className=''>{spec.specification}</li>
    ))}
</ul>
       </div>
  )
}

export default ProductSpecification