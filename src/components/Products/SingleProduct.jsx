"use client"
import React from 'react'
import { HEART, HEART_FILLED } from '../../../constants/icons' 
import { useRouter } from 'next/navigation'
const SingleProduct = ({product,buttonClickHandler,buttonText,favourite}) => {
  const router = useRouter();
  const productClickHandler = (id)=>{
    router.push(`/market-place/product-details/${id}`)

  } 
  const [heartLogo,setHeartLogo] = React.useState(favourite?HEART_FILLED:HEART)
  return (
    <div className="flex flex-col items-center w-full cursor-pointer" 
    onClick={()=>productClickHandler(product.id)}
    >
      <div className="flex flex-col items-center w-11/12 bg-gray-100">
        <div className="min-w-full h-full relative flex flex-col items-center justify-center bg-gray-200">
          <img
            className="w-9/12 h-full py-4 px-4"
            src={product.imageUrl}
            alt={product.imageName}
          />
          <img
            className="w-6 h-6 absolute right-3 top-3 cursor-pointer"
            src={heartLogo.image}
            alt={heartLogo.name}
            onClick={(e) => {
              e.stopPropagation();
              // console.log('heart clicked');
              if(heartLogo.name ==='heart'){
                  setHeartLogo(HEART_FILLED)
              }
              else{
                setHeartLogo(HEART)

              }
            }}
          />
        </div>
        <div className="flex flex-col w-full px-2">
          <span className="text-[10px] text-[#FF0F00] mt-2">
            Best Seller
          </span>
          <p className="text-[14px] md:text-[13px] xl:text-[16px]">
            {product.description}
          </p>
          <span className="w-full text-end lato-700 text-[14px] md:text-[12px] xl:text-[17px]">
            {product.price}
          </span>
          <div className="flex flex-col items-center w-full mb-2">
            <button className="button bg-[#E3BB59] w-11/12 py-2 rounded-[8px] mt-2 border border-white text-white hover:text-[#E3BB59] hover:bg-white hover:border-[#E3BB59] transition-all duration-300"
           onClick={(e) => {
            e.stopPropagation();
            console.log('s');
          }}
          // onClick={()=>console.log('sdad')}
            >
              {buttonText?buttonText:'Add to Cart'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct