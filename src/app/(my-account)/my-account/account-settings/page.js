import React, { Suspense } from "react";

import Copyright from "@/components/Copyright/Copyright";
import Footer from "@/components/Footer/Footer";
import MetalValues from "@/components/MetalValues/Metal-Values";
import Navbar from "@/components/Navbar/Navbar";
import AccountSettings from "@/components/MyAccount/AccountSettings/Account-Settings";
import { cookies } from "next/headers";
import {   fetchUserDetails } from "../../../../../services/user-login";

const AccountSettingsPage = async () => {
  const cookieStore = cookies();  
  const userInfo = await fetchUserDetails(cookieStore.get("token").value,false,true,false,false,false,true,true,true,false,false); 

  console.log(userInfo);
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
        <AccountSettings
          name={`${userInfo.user.firstName} ${userInfo.user.lastName}`}
          gender={
            userInfo.user.gender
          }
          birthday={
            userInfo.user.dateOfBirth
          }
          email={userInfo.user.email}
          phone={userInfo.user.phone}
          addresses = {userInfo.user.addresses}
          cards = {userInfo.user.creditCards}
          banks = {userInfo.user.bankAccounts}
          wallets = {userInfo.user.digitalWallets}
          image={userInfo.user?.imageUrl}
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

export default AccountSettingsPage;
