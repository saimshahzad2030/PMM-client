"use client";
import React, { Suspense } from "react";
import RouteComponent from "../RouteComponent/Route-Component";
import UserSection from "./User-Section";
import { SHIPMENTS, USER } from "../../../constants/constants";
import ShipmentTrack from "./Shipment-Track";
import OrderActivites from "./Order-Activites";
import { formatDateTime } from "../../../services/date.services";

const TrackMyOrders = ({
  orders,
  image,
  name,
  buyerPaymentMethodVerified,
  plaidAccessToken,
  plaidIdVerificationAccessToken,
  identityVerificationStatus,
}) => {
  const [shippingSelected, setShippingSelected] = React.useState(true);
  const [shippings, setShippings] = React.useState(
    orders.filter((s) => {
      return s.Shippings.status !== "COMPLETED";
    })
  );
  return (
    <div className="flex flex-col items-center px-8 w-full">
      <RouteComponent
        parentRoute={"Home > My Account >"}
        mainRoute={" Track My Orders"}
      />
      <Suspense fallback={<div>Loading</div>}>
        <UserSection
          plaidAccessToken={plaidAccessToken}
          plaidIdVerificationAccessToken={plaidIdVerificationAccessToken}
          identityVerificationStatus={identityVerificationStatus}
          User={{ image, name }}
          buyerPaymentMethodVerified={buyerPaymentMethodVerified}
        />
      </Suspense>
      <div className="flex flex-row w-full bg-[#F2F2F2] my-4">
        <button
          className={`button w-6/12 border border-t-0 border-r-0 border-l-0 ${
            shippingSelected
              ? "border-b-[#E3BB59] text-[#E3BB59] border-b-2"
              : "border-b-0 text-[#6D6D6D]"
          } py-2 text-center `}
          onClick={() => {
            setShippingSelected(true);
            setShippings(
              orders.filter((s) => {
                return s.Shippings.status !== "COMPLETED";
              })
            );
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
            setShippings(
              orders.filter((s) => {
                return s.Shippings.status === "COMPLETED";
              })
            );
          }}
        >
          Completed
        </button>
      </div>
      {shippings.length > 0 ? (
        <>
          {shippings.map((shipment) => (
            <div className="w-full border border-[#E4E7E9]  pt-4 flex flex-col items-center my-4">
              <div className="w-full px-4">
                <div className="flex flex-row items-start justify-between w-full border border-[#F7E99E] bg-[#fffced] p-4">
                  <div className="flex flex-col items-start w-6/12  text-[10px] sm:text-[14px] text-gray-800">
                    <div>
                      {shipment.messageForSeller}.{" "}
                      <span>Quantity: {shipment.quantity}</span>
                    </div>
                    <p className="lato-700 text-[19px] sm:text-[24px] my-2 text-gray-800">
                      {shipment.price}
                    </p>
                    <p className=" text-[10px] sm:text-[14px] text-gray-800">
                      Receiver: {shipment.reciever.firstName}
                    </p>
                    <p className=" text-[10px] sm:text-[14px] text-gray-400 ">
                      {shipment.reciever.phone}
                    </p>
                    <p className=" text-[10px] sm:text-[14px] text-gray-400 ">
                      Pakistan, Kpk, Khi
                    </p>
                    <p className=" text-[10px] sm:text-[14px] mt-2 text-gray-800">
                      Sender: {shipment.sender.firstName}
                    </p>
                    <p className=" text-[10px] sm:text-[14px] text-gray-400 ">
                      {shipment.sender.phone}
                    </p>
                    <p className=" text-[10px] sm:text-[14px] text-gray-400 ">
                      {/* {shipment.sender.country}, {shipment.sender.state},{" "}
                  {shipment.reciever.city} */}
                      Pakistan, Kpk, Khi
                    </p>
                    <p className=" text-[10px] sm:text-[14px] mt-2 text-gray-800">
                      Order placed in:{" "}
                      {formatDateTime(shipment?.orderPlacedDate)}
                    </p>
                    <p className=" text-[10px] sm:text-[14px] mt-2 text-gray-800">
                      Order expected arrival:{" "}
                      {formatDateTime(shipment?.orderExpectedDate)}
                    </p>
                  </div>
                  <div className="flex flex-col flex-end w-auto text-end">
                    <p className="text-[12px] sm:text-20px text-gray-400">
                      Standard Shipping
                    </p>
                    <p className="text-[12px] sm:text-20px text-gray-800">
                      {shipment.id}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col items-center mt-4">
                <ShipmentTrack
                  shippingStatus={shipment.Shippings.shippingUpdate}
                  orderPlaced={shipment.orderPlaced}
                  orderPacked={shipment.orderPacked}
                  onTheRoad={shipment.onTheRoad}
                  delivered={shipment.delivered}
                  verificationProcess={shipment.undergoingVerificationProcess}
                  verificationPorcessCompleted={
                    shipment.verificationPorcessCompleted
                  }
                />
                <OrderActivites
                  activities={shipment.Shippings.ShippingNotifications}
                />
              </div>
            </div>
          ))}
        </>
      ) : (
        <p className="text-gray-700 my-4">
          {shippingSelected
            ? "You don't have any orders to show"
            : "None of your order has completed yet"}
        </p>
      )}
    </div>
  );
};

export default TrackMyOrders;
