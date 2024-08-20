import React, { Suspense } from "react";

import Copyright from "@/components/Copyright/Copyright";
import Footer from "@/components/Footer/Footer";
import MetalValues from "@/components/MetalValues/Metal-Values";
import Navbar from "@/components/Navbar/Navbar";
import MyAccount from "@/components/MyAccount/My-Account";
import { autoLogin } from "../../../../services/user-login";
import { cookies } from "next/headers";

const MyAccountPage = async () => {
  const cookieStore = cookies();
  const userInfo = await autoLogin(cookieStore.get("token").value);
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
        <MyAccount
          image={userInfo?.user?.imageUrl}
          name={`${userInfo?.user?.firstName} ${userInfo?.user?.lastName}`}
          gender={userInfo?.user?.gender}
          birthday={userInfo?.user?.dateOfBirth}
          email={userInfo?.user?.email}
          phone={userInfo?.user?.phone}
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
