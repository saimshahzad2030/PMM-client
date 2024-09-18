import React, { Suspense } from "react";
import Copyright from "@/components/Copyright/Copyright";
import Footer from "@/components/Footer/Footer";
import MetalValues from "@/components/MetalValues/Metal-Values";
import Navbar from "@/components/Navbar/Navbar";
import MyAccount from "@/components/MyAccount/My-Account";
import { fetchUserDetails } from "../../../../services/user-login";
import { cookies } from "next/headers";

const MyAccountPage = async () => {
  const cookieStore = cookies();
  const userInfo = await fetchUserDetails(
    cookieStore.get("token").value,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false
  );
  console.log(userInfo.identityVerificationStatus);
  console.log(userInfo, "userInfo.user.plaidIdVerificationAccessToken");
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
        <MyAccount
          image={userInfo?.user?.imageUrl}
          name={`${userInfo?.user?.firstName} ${userInfo?.user?.lastName}`}
          gender={userInfo?.user?.gender}
          birthday={userInfo?.user?.dateOfBirth}
          email={userInfo?.user?.email}
          phone={userInfo?.user?.phone}
          buyerPaymentMethodVerified={
            userInfo?.user?.buyerPaymentMethodVerified == "TRUE" ? true : false
          }
          plaidAccessToken={userInfo?.user?.plaidAccessToken}
          plaidIdVerificationAccessToken={
            userInfo.user.plaidIdVerificationAccessToken
          }
          identityVerificationStatus={
            userInfo?.identityVerificationStatus
              ? userInfo.identityVerificationStatus
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

export default MyAccountPage;
