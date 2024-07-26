import React from 'react'
import { VERIFIED,STAR, LOAD_MORE } from '../../../constants/icons'
import { CLIENT_REVIEWS } from '../../../constants/constants'
import Button from '../Button/Button'
import JoinNowSection from '../JoinNowSection/Join-Now-Section'
const AllReviews = () => {
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-12 w-full my-4 ">
        {CLIENT_REVIEWS.map((review, index) => (
          <div className="flex flex-col items-center w-full" key={index}>
            <div className="flex flex-col items-center w-full md:w-11/12 border border-gray-600 px-6 rounded-md py-4">
              <div className="flex flex-row items-center justify-between w-full">
                <div className="flex flex-row items-center w-7/12">
                  <div className="w-[28px] h-[28px] md:w-8 md:h-8 lg:w-[53px] lg:h-[53px] rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={review.image}
                      alt={review.name}
                    />
                  </div>
                  <div className="flex flex-col items-start ml-4">
                    <div className="flex flex-row items-center">
                      <p className="lato-700 text-[11px] md:text-[14px] lg:text-[16px] 2xl:text-[20px]">
                        {review.name}
                      </p>
                      <img
                        className="w-2 h-2 md:w-4 md:h-4 ml-2"
                        src={VERIFIED.image}
                        alt={VERIFIED.name}
                      />
                    </div>
                    <span className="text-[10px] md:text-[14px]">
                      Verified Buyer
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-start w-auto">
                  <span className=" text-[10px] md:text-[10px] lg:text-[14px]">
                    {review.date}
                  </span>
                  <div className="flex flex-row items-center ">
                    {Array.from({ length: review.rating }, (_, index) => (
                      <img
                        className="w-3 h-3 mr-1"
                        src={STAR.image}
                        alt={STAR.name}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="my-4 text-[10px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                lectus mauris, tincidunt nec efficitur sit amet, sollicitudin et
                risus. Nam nec lobortis nisi. Maecenas porttitor tristique
                lacinia. Quisq
              </p>
            </div>
          </div>
        ))}
      </div>
      <Button
        others={'border p-1 px-2 sm:p-2 mt-4 rounded-md flex flex-row items-center mb-8'}
        text={
            <>
            <p>Load more</p>
            <img className='w-4 h-auto ml-2' src={LOAD_MORE.image} alt={LOAD_MORE.name}/>
            </>
        }
        bgColor={'gray-300'}
        textColor={'gray-800'}  
      />

<div className=' w-full '>
<JoinNowSection
        text={
          "Join Precious Metal Market today and experience the easiest way to buy and sell precious metals online."
        }
        clickHandler={()=>{}}
      />
      <p className='text-gray-800 text-[12px] sm:text-[16px] lg::text-[24px]'>
         
If you would like to provide us with feedback, please email us at <span className='text-blue-600 '>support@preciousmetalmarket.com.</span> 
      </p>
</div>
      </>
  )
}

export default AllReviews