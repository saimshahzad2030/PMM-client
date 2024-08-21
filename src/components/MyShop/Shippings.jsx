"use client"
import React from 'react'
import { SHIPMENTS } from '../../../constants/constants';
import ShipmentTrack from '../MyAccount/Shipment-Track';
import OrderActivites from '../MyAccount/Order-Activites';
const Shippings = ({shipmentsList,formatDateTime}) => {
  return (
    <>
    {shipmentsList.map((shipment) => (
        <div className="w-full border border-[#E4E7E9]  pt-4 flex flex-col items-center my-4">
          <div className="w-full px-4">
            <div className="flex flex-row items-start justify-between w-full border border-[#F7E99E] bg-[#fffced] p-4">
              <div className="flex flex-col items-start w-6/12  text-[10px] sm:text-[14px] text-gray-800">
                <div>
                  {shipment.messageForSeller}.{" "}
                  <span >Quantity: {shipment.quantity}</span>
                </div>
                <p className="lato-700 text-[19px] sm:text-[24px] my-2 text-gray-800">{`$ ${shipment.price}`}</p>
                <p className=" text-[10px] sm:text-[14px] text-gray-800">Receiver: {shipment.reciever.firstName}</p>
                <p className=" text-[10px] sm:text-[14px] text-gray-400 ">{shipment.reciever.phone}</p>
                <p className=" text-[10px] sm:text-[14px] text-gray-400 ">
                Pakistan, Kpk,{" "}
                Khi
                </p>
                <p className=" text-[10px] sm:text-[14px] mt-2 text-gray-800">Sender: {shipment.sender.firstName}</p>
                <p className=" text-[10px] sm:text-[14px] text-gray-400 ">{shipment.sender.phone}</p>
                <p className=" text-[10px] sm:text-[14px] text-gray-400 ">
                Pakistan, Kpk,{" "}
                Khi
                </p>
                <p className=" text-[10px] sm:text-[14px] mt-2 text-gray-800">Order placed in: {formatDateTime(shipment.orderPlacedDate)}</p>
                <p className=" text-[10px] sm:text-[14px] mt-2 text-gray-800">Order expected arrival: {formatDateTime(shipment.orderExpectedDate)}</p>
              </div>
              <div className="flex flex-col flex-end w-auto text-end">
                <p className="text-[12px] sm:text-20px text-gray-400">Standard Shipping</p>
                <p className="text-[12px] sm:text-20px text-gray-800">{shipment.id}</p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center mt-4">
            <ShipmentTrack
              shippingStatus={shipment.Shippings.shippingUpdate}
            />
            <OrderActivites activities={shipment.Shippings.ShippingNotifications} />
          </div>
        </div>
      ))}</>
  )
}

export default Shippings