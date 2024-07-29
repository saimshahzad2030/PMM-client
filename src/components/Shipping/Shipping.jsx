import React from "react";
import RouteComponent from "../RouteComponent/Route-Component";
import JoinNowSection from "../JoinNowSection/Join-Now-Section";
import styles from './Shipping.module.css'
import {
  DELIVERY_ISSUES,
  ORDER_PROCESSING_TIME,
  PACKAGING_AND_SECURITY,
  SHIPPING_FEES,
} from "../../../constants/icons";

const Shipping = () => {
  return (
    <div className="flex flex-col items-center w-full px-8">
      <RouteComponent parentRoute={"Home > "} mainRoute={"Shipping"} />
      <p className="my-4">
        Here at Precious Metal Market, we understand the importance of timely
        and secure delivery for your precious metal investments. We are
        committed to providing a reliable and efficient shipping process to
        ensure your orders arrive safely and promptly. Here's everything you
        need to know about our shipping services:
      </p>
      <h3 className="lato-700 text-[20px] mb-3 text-start w-full">
        Shipping Options
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-11 w-full gap-x-1 gap-y-3">
        <div className="col-span-11 md:col-span-3 w-full flex flex-col items-center">
          <p className=" text-gray-700 w-full lato-700 text-[16px] mb-3 text-start ">
          Standard Shipping
          </p>
          <ul className={`list-disc list-inside  text-gray-700 pl-2 mb-3 w-full ${styles['custom-list']}`}>
            <li>Delivery Time: 5-7 business days</li>
            <li>Carrier: UPS/FedEx</li>
            <li>Tracking: Available</li>
            <li>Insurance: Included</li>
          </ul>
        </div>
        <div className="col-span-11 md:col-span-1 w-full   h-full row-span-1 flex flex-col items-center">
          <div className=" w-[2px] bg-gray-400 h-full   "></div>
        </div>

        <div className="col-span-11 md:col-span-3 w-full flex flex-col items-center">
        <p className=" text-gray-700 w-full lato-700 text-[16px] mb-3 text-start ">
        Expedited Shipping
          </p>
          <ul className={`list-disc list-inside  text-gray-700 pl-2 mb-3 w-full ${styles['custom-list']}`}>
            <li>Delivery Time: 2-3 business days</li>
            <li>Carrier: UPS/FedEx</li>
            <li>Tracking: Available</li>
            <li>Insurance: Included</li>
          </ul>
        </div>
        <div className="col-span-11 md:col-span-1 w-full   h-full row-span-1 flex flex-col items-center">
          <div className=" w-[2px] bg-gray-400 h-full   "></div>
        </div>
        <div className="col-span-11 md:col-span-3 w-full flex flex-col items-center">
        <p className=" text-gray-700 w-full lato-700 text-[16px] mb-3 text-start ">
        Overnight Shipping
          </p>
          <ul className={`list-disc list-inside  text-gray-700 pl-2 mb-3 w-full ${styles['custom-list']}`}>
            <li>Delivery Time: 1 business day</li>
            <li>Carrier: UPS/FedEx</li>
            <li>Tracking: Available</li>
            <li>Insurance: Included</li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-2 gap-y-12 my-12">
        <div className="w-full col-span-1 flex flex-col items-center">
          <h3 className="lato-700 text-[20px] mb-1 text-center w-full">
            Packaging and Security
          </h3>
          <img
            className="w-12 h-auto mt-2 sm:mt-4"
            src={PACKAGING_AND_SECURITY.image}
            alt={PACKAGING_AND_SECURITY.name}
          />
          <p className="text-center w-11/12 sm:w-7/12 mt-2 sm:mt-4">
            We take great care in packaging your precious metals to ensure they
            arrive in perfect condition.{" "}
          </p>
        </div>
        <div className="w-full col-span-1 flex flex-col items-center">
          <h3 className="lato-700 text-[20px] mb-1 text-center w-full">
            Shipping Fees
          </h3>
          <img
            className="w-12 h-auto mt-2 sm:mt-4"
            src={SHIPPING_FEES.image}
            alt={SHIPPING_FEES.name}
          />
          <p className="text-center w-11/12 sm:w-7/12 mt-2 sm:mt-4">
            Shipping fees vary based on the delivery option selected and the
            total value of the order.{" "}
          </p>
        </div>
        <div className="w-full col-span-1 flex flex-col items-center">
          <h3 className="lato-700 text-[20px] mb-1 text-center w-full">
            Order Processing Time
          </h3>
          <img
            className="w-12 h-auto mt-2 sm:mt-4"
            src={ORDER_PROCESSING_TIME.image}
            alt={ORDER_PROCESSING_TIME.name}
          />
          <p className="text-center w-11/12 sm:w-7/12 mt-2 sm:mt-4">
            Orders are typically processed within 1-2 business days. You will
            receive an email confirmation once your order has been shipped,
            along with the tracking number.
          </p>
        </div>
        <div className="w-full col-span-1 flex flex-col items-center">
          <h3 className="lato-700 text-[20px] mb-1 text-center w-full">
            Delivery Issues
          </h3>
          <img
            className="w-12 h-auto mt-2 sm:mt-4"
            src={DELIVERY_ISSUES.image}
            alt={DELIVERY_ISSUES.name}
          />
          <p className="text-center w-11/12 sm:w-7/12 mt-2 sm:mt-4">
            If you encounter any issues with your delivery, such as delays, lost
            packages, or damage during transit, please contact our customer
            service team immediately. We will work diligently to resolve the
            issue and ensure you receive your order.{" "}
          </p>
        </div>
      </div>
      <h3 className="lato-700 text-[20px] mb-1 w-full">Customer Support</h3>
      <p className=" w-full">
        For any questions or concerns regarding shipping, please contact our
        customer support team at:
      </p>
      <p className="mt-4 w-full">
        Email: support@preciousmetalmarket.com Phone: 1-800-123-4567
      </p>
      <p className="mt-4 w-full">
        Your satisfaction is our top priority, and we are dedicated to providing
        a smooth and secure shipping experience for all our customers.
      </p>
      <JoinNowSection
        
      />
    </div>
  );
};

export default Shipping;
