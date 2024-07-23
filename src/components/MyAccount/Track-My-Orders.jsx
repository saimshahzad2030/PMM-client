"use client";
import React from "react";
import RouteComponent from "../RouteComponent/Route-Component";
import UserSection from "./User-Section";
import { SHIPMENTS, USER } from "../../../constants/constants";
import ShipmentTrack from "./Shipment-Track";
import OrderActivites from "./Order-Activites";

const TrackMyOrders = () => {
  const [shippingSelected, setShippingSelected] = React.useState(true);
  return (
    <div className="flex flex-col items-center px-8 w-full">
      <RouteComponent
        parentRoute={"Home > My Account >"}
        mainRoute={" Track My Orders"}
      />
      <UserSection User={USER} />
      <div className="flex flex-row w-full bg-[#F2F2F2] my-4">
        <button
          className={`button w-6/12 border border-t-0 border-r-0 border-l-0 ${
            shippingSelected
              ? "border-b-[#E3BB59] text-[#E3BB59] border-b-2"
              : "border-b-0 text-[#6D6D6D]"
          } py-2 text-center `}
          onClick={() => {
            setShippingSelected(true);
          }}
        >
          Shipping
        </button>
        <button
          className={`button w-6/12 border border-t-0 border-r-0 border-l-0 ${
            !shippingSelected
              ? "border-b-[#E3BB59] text-[#E3BB59] border-b-2"
              : "border-b-0 text-[#6D6D6D]"
          } py-2 text-center `}
          onClick={() => {
            setShippingSelected(false);
          }}
        >
          Completed
        </button>
      </div>
      {SHIPMENTS.filter((s) => {
        if (shippingSelected) {
          return s.status !== "completed";
        } else {
          return s.status === "completed";
        }
      }).map((shipment) => (
        <div className="w-full border border-[#E4E7E9]  pt-4 flex flex-col items-center my-4">
          <div className="w-full px-4">
            <div className="flex flex-row items-start justify-between w-full border border-[#F7E99E] bg-[#fffced] p-4">
              <div className="flex flex-col items-start w-6/12  text-[10px] sm:text-[14px] text-gray-800">
                <p>
                  {shipment.description}.{" "}
                  <span >Quantity: {shipment.quantity}</span>
                </p>
                <p className="lato-700 text-[19px] sm:text-[24px] my-2 text-gray-800">{shipment.price}</p>
                <p className=" text-[10px] sm:text-[14px] text-gray-800">Receiver: {shipment.reciever.name}</p>
                <p className=" text-[10px] sm:text-[14px] text-gray-400 ">{shipment.reciever.contact}</p>
                <p className=" text-[10px] sm:text-[14px] text-gray-400 ">
                  {shipment.reciever.country}, {shipment.reciever.state},{" "}
                  {shipment.reciever.city}
                </p>
                <p className=" text-[10px] sm:text-[14px] mt-2 text-gray-800">Sender: {shipment.sender.name}</p>
                <p className=" text-[10px] sm:text-[14px] text-gray-400 ">{shipment.sender.contact}</p>
                <p className=" text-[10px] sm:text-[14px] text-gray-400 ">
                  {shipment.sender.country}, {shipment.sender.state},{" "}
                  {shipment.reciever.city}
                </p>
                <p className=" text-[10px] sm:text-[14px] mt-2 text-gray-800">Order placed in: {shipment.orderPlacedDate}</p>
                <p className=" text-[10px] sm:text-[14px] mt-2 text-gray-800">Order expected arrival: {shipment.orderExpectedArrival}</p>
              </div>
              <div className="flex flex-col flex-end w-auto text-end">
                <p className="text-[12px] sm:text-20px text-gray-400">Standard Shipping</p>
                <p className="text-[12px] sm:text-20px text-gray-800">{shipment.id}</p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center mt-4">
            <ShipmentTrack
              orderPlaced={shipment.orderPlaced}
              orderPacked={shipment.orderPacked}
              onTheRoad={shipment.onTheRoad}
              delivered={shipment.delivered}
              verificationProcess={shipment.undergoingVerificationProcess}
              verificationPorcessCompleted={
                shipment.verificationPorcessCompleted
              }
            />
            <OrderActivites activities={shipment.orderActivities} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrackMyOrders;
