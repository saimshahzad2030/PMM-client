"use client"
import React from "react";
import RouteComponent from "../RouteComponent/Route-Component";
const HowItWorks = () => {
  return (
    <div className="w-full px-8 flex flex-col items-start my-8 ">
      <RouteComponent mainRoute={" Blogs"} parentRoute={`Home > `} />
      <h1 className=" lato-700 text-[18px] md:text-[24px] xl:text-[32px] w-full mb-8">
        Buying and Selling Precious Metals Made Easy
      </h1>
      <p>Step-by-Step Guide</p>

      <h3 className="mt-3   lato-700 text-[16px] md:text-[16px] xl:text-[20px]  w-full">
        1. Sign Up and Create an Account
      </h3>
      <p className="text-gray-600 ">
        We have streamlined the process of buying and selling precious metals to
        ensure a secure and user-friendly experience. Whether you are a
        first-time buyer or a seasoned investor, our platform offers a seamless
        and transparent way to trade.
      </p>

      <h3 className="mt-6   lato-700 text-[16px] md:text-[16px] xl:text-[20px]  w-full">
        2. Browse and Search Listings
      </h3>
      <p className="text-gray-600 ">
        Explore Products: Browse our extensive catalog of gold, silver,
        platinum, and other precious metals. Use our search and filter options
        to find the exact items you’re looking for. Detailed Listings: Each
        product listing includes detailed information, high-quality images, and
        the current price, helping you make informed decisions.
      </p>

      <h3 className="mt-6   lato-700 text-[16px] md:text-[16px] xl:text-[20px]  w-full">
        3. Make a Purchase
      </h3>
      <p className="text-gray-600 ">
        Select and Add to Cart: Once you find the precious metal you want to
        buy, select the quantity and add it to your cart. Checkout: Proceed to
        checkout where you will review your order, choose a payment method, and
        provide shipping information. Secure Payment: All payments are processed
        through our secure payment gateway, ensuring your financial information
        is protected.
      </p>

      <h3 className="mt-6   lato-700 text-[16px] md:text-[16px] xl:text-[20px]  w-full">
        4. Use Our Escrow Service
      </h3>
      <p className="text-gray-600 ">
        We have streamlined the process of buying and selling precious metals to
        ensure a secure and user-friendly experience. Whether you are a
        first-time buyer or a seasoned investor, our platform offers a seamless
        and transparent way to trade.
      </p>

      <h3 className="mt-6   lato-700 text-[16px] md:text-[16px] xl:text-[20px]  w-full">
        5. Shipping and Delivery
      </h3>
      <p className="text-gray-600 ">
        Seller Ships Item: After your purchase is confirmed, the seller will
        ship the item to your provided address. You will receive tracking
        information to monitor the shipment. Timely Delivery: Delivery times may
        vary based on your location and shipping method chosen. We work with
        reliable shipping partners to ensure timely delivery of your precious
        metals.
      </p>

      <h3 className="mt-6   lato-700 text-[16px] md:text-[16px] xl:text-[20px]  w-full">
        6. Receive and Confirm
      </h3>
      <p className="text-gray-600 ">
        Inspect Your Order: Upon receiving your order, carefully inspect the
        item to ensure it meets your expectations and matches the listing
        description. Confirm Delivery: Confirm the receipt and condition of your
        item on our platform. This step releases the payment from escrow to the
        seller.
      </p>
      <h3 className="mt-6   lato-700 text-[16px] md:text-[16px] xl:text-[20px]  w-full">
        7. Leave a Review
      </h3>
      <p className="text-gray-600 ">
        Feedback: After completing your transaction, leave a review for the
        seller. Your feedback helps maintain the quality and reliability of our
        marketplace. Build Reputation: Sellers build their reputation through
        positive reviews, which can help you and other buyers make informed
        decisions.
      </p>

      <h3 className="mt-6   lato-700 text-[16px] md:text-[16px] xl:text-[20px]  w-full">
        Why use Precious Metal Market?
      </h3>
      <p className="text-gray-600 ">
        Secure Transactions: Our escrow service ensures that your funds are safe
        until you receive and confirm your order.
      </p>
      <p className="text-gray-600 ">
        Transparency: Clear pricing, detailed listings, and honest reviews help
        you make informed decisions.
      </p>
      <p className="text-gray-600 ">
        Wide Selection: Access a diverse range of precious metals from reputable
        sellers.
      </p>
      <p className="text-gray-600 ">
        Expert Support: Our team is here to assist you every step of the way,
        ensuring a smooth and satisfying trading experience.
      </p>
      <h3 className="mt-6   lato-700 text-[16px] md:text-[16px] xl:text-[20px]  w-full">
      Contact us
      </h3>
      <p className="text-gray-600 ">
      If you need further assistance, our customer support team is available to help. Reach out to us via email or phone for prompt and reliable support.
      </p>
      <button className="mt-2 button bg-[#E3BB59] text-white border border-[#E3BB59] hover:border-[#E3BB59] hover:bg-white hover:text-[#E3BB59] transition-all duration-300 px-2 p-1 sm:p-2 rounded-md">Contact us</button>
    </div>
  );
};

export default HowItWorks;
