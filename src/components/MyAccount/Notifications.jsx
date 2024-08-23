"use client";
import React, { Suspense } from "react";
import UserSection from "./User-Section";
import { NOTIFICATIONS, USER } from "../../../constants/constants";
import RouteComponent from "../RouteComponent/Route-Component";
import { LOAD_MORE, NOTIFICATION_REMINDER } from "../../../constants/icons";

const Notifications = ({ notifications, image, name }) => { 
    const formatDateTime = (isoDate) => {
        const date = new Date(isoDate);
        return date.toLocaleString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          hour12: true,
        });
      };
  return (
    <div className="flex flex-col items-center w-full px-8">
      <RouteComponent
        parentRoute={"Home > My Account >"}
        mainRoute={" Notifications"}
      />
      <Suspense fallback={<div>Loading</div>}>
    <UserSection User={{image,name}}/>
    </Suspense>  
      <div className="flex flex-col items-center w-full my-12">
        <h3 className="text-start w-full mb-2">Notifications</h3>
        {notifications.length > 0 ? (
          <>
            {notifications.map((notification, index) => (
              <div className="flex flex-row items-center justify-start my-4 w-full">
                <div className="w-auto h-auto p-2 md:p-4 bg-[#EAF6FE] flex flex-col items-center justify-center rounded-md">
                  <img
                    className="w-8 h-auto"
                    src={NOTIFICATION_REMINDER.image}
                    alt={NOTIFICATION_REMINDER.name}
                  />
                </div>
                <div className="flex flex-col items-start ml-4 md:ml-4">
                  {/* <p className=" text-[14px] md:text-[16px]">
                    {notification.message}
                  </p> */}
                  <p className="text-gray-600  text-[12px] md:text-[16px]">
                  {notification.notificationText.charAt(0).toUpperCase() + notification.notificationText.slice(1)}

                  </p>
                  <p className="text-gray-600 mt-2 text-[11px] md:text-[12px]">
                    {formatDateTime(notification.notificationTime)}
                  </p>
                </div>
              </div>
            ))}
            <button className="flex flex-row items-center mt-8 text-gray-600">
              <img
                className="w-4 h-auto"
                src={LOAD_MORE.image}
                alt={LOAD_MORE.name}
              />{" "}
              &nbsp;&nbsp;Load more
            </button>
          </>
        ) : (
          <h2 className="text-gray-600 text-start w-full">
            No Notifications to show
          </h2>
        )}
      </div>
    </div>
  );
};

export default Notifications;
