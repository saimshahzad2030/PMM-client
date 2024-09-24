import React, { Suspense } from "react";
import Copyright from "@/components/Copyright/Copyright";
import Footer from "@/components/Footer/Footer";
import MetalValues from "@/components/MetalValues/Metal-Values";
import Navbar from "@/components/Navbar/Navbar";
import Notifications from "@/components/MyAccount/Notifications";
import { cookies } from "next/headers";
import { fetchUserDetails } from "../../../../../services/user-login";
const NotificationsPage = async () => {
  const cookieStore = cookies();
  const notifications = await fetchUserDetails(
    cookieStore.get("token").value,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    false
  );
  return (
    <>
      <div className=" h-auto w-full bg-[#E3BB59]">
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
        </Suspense>
      </div>
      <div className="container mx-auto">
        <MetalValues />
      </div>

      <div className="w-full h-[1px] bg-gray-400"></div>
      <div className="container mx-auto">
        <Notifications
          image={notifications.user.imageUrl}
          name={`${notifications.user.firstName} ${notifications.user.lastName}`}
          notifications={
            notifications?.user?.recieverOrders[0]?.Shippings
              ?.ShippingNotifications
              ? notifications.user.recieverOrders[0].Shippings
                  .ShippingNotifications
              : []
          }
          buyerPaymentMethodVerified={
            notifications?.user?.buyerPaymentMethodVerified == "TRUE"
              ? true
              : false
          }
          plaidAccessToken={notifications?.user?.plaidAccessToken}
          plaidIdVerificationAccessToken={
            notifications.user.plaidIdVerificationAccessToken
          }
          identityVerificationStatus={
            notifications?.identityVerificationStatus
              ? notifications.identityVerificationStatus
              : null
          }
        />
      </div>
      <div className="w-full h-1 bg-[#E3BB59]"></div>

      <div className="container mx-auto">
        <Footer />
      </div>
      <div className="w-full h-[2px] bg-gray-400"></div>
      <div className="container mx-auto">
        <Copyright />
      </div>
    </>
  );
};

export default NotificationsPage;
