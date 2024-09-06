"use client";
import React, { useEffect } from "react";
import {
  VERIFIED,
  BELL,
  USER_DEFAULT_IMAGE,
  GREEN_TICK,
} from "../../../constants/icons";
import { useRouter } from "next/navigation";
import {
  addDrivingLiscense,
  editProfilePic,
  logOut,
} from "../../../services/user-login";
import Loader from "../Loader/Loader";
import { usePathname } from "next/navigation";
import {
  fetchLinkToken,
  usePlaidLinkSetup,
} from "../../../services/plaid.services";
import { Alert } from "@mui/material";
const UserSection = ({
  plaidAccessToken,
  User,
  buyerPaymentMethodVerified,
  licenseImage,
  verificationMessage,
}) => {
  const requirements = [
    "you must have to set your profile pic",
    "you must have provide your driving license details",
    "you must have provide your banking details",
    // "Your account is undergoing verification please wait usually it takes 4-5 hours of post-account request.",
  ];
  const [logoutLoading, setlogoutLoading] = React.useState(false);

  const [plaidToken, setPlaidToken] = React.useState(plaidAccessToken);
  const pathname = usePathname();
  const [paymentVerified, setPaymentVerified] = React.useState(
    buyerPaymentMethodVerified
  );
  const [verificationProcessMessage, setVerificationProcessMessage] =
    React.useState(verificationMessage);
  const [licenseImg, setLicenseImg] = React.useState(licenseImage);
  const [loading, setLoading] = React.useState(false);
  const [user, setUser] = React.useState(User);
  const [button, setButton] = React.useState(null);
  const router = useRouter();
  const handleNavigation = (url, button) => {
    setLoading(pathname != url);
    setButton(button);
    router.push(url);
  };
  const handleProfileImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const changeProfile = await editProfilePic(file);
    if (changeProfile.updatedUser) {
      setUser((prevUser) => ({
        ...prevUser,
        image: changeProfile.imageUrl,
      }));
      setVerificationProcessMessage(
        changeProfile?.updatedUser.verificationMessage
      );
    }
  };

  const handleLiscenseUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const changeProfile = await addDrivingLiscense(file, setLoading);
    if (changeProfile?.licenseImage) {
      setLicenseImg(changeProfile?.licenseImage);
      setVerificationProcessMessage(
        changeProfile?.updatedUser.verificationMessage
      );
      console.log(changeProfile?.updatedUser.verificationMessage);
    }
    console.log(changeProfile);
  };
  const [linkToken, setLinkToken] = React.useState(null);
  const [error, setError] = React.useState(null);
  const handleLogout = () => {
    cookieStore.set("token", null);
    cookieStore.set("id", null);
    router.push("/");
  };
  React.useEffect(() => {
    fetchLinkToken(setLinkToken, setError);
  }, []);

  const { open, ready } = usePlaidLinkSetup(
    linkToken,
    setError,
    setPlaidToken,
    setVerificationProcessMessage
  );
  useEffect(() => {
    console.log(verificationProcessMessage);
  }, [verificationProcessMessage]);
  return (
    <>
      <span
        className={`w-full text-center bg-[#F2F2F2] text-[#E3BB59] ${
          licenseImg && user.image && plaidToken ? "mb-2" : "mb-12"
        } py-2`}
      >
        My Account
      </span>
      {verificationProcessMessage != "DetailsRequired" &&
        !paymentVerified &&
        licenseImg &&
        user.image &&
        plaidToken && (
          <Alert severity="info" sx={{ width: "100%", marginBottom: "20px" }}>
            {verificationProcessMessage &&
              (verificationProcessMessage == "UnderGoingVerification"
                ? "Your account is undergoing verification please wait usually it takes 4-5 hours of post-account request."
                : verificationProcessMessage == "LicenseInvalid"
                ? "Your license is invalid"
                : "Your License image is not matching with your profile image")}
          </Alert>
        )}
      <div
        className={`flex flex-col items-start md:flex-row md:items-end md:justify-between w-full ${
          licenseImg && user.image && plaidToken ? "mt-2" : ""
        }`}
      >
        <div className="flex flex-col items-start md:flex-row md:items-end md:justify-between  w-full mb-8">
          <div className="flex flex-row items-center">
            <div className="w-20 h-20 md:w-24 md:h-24 lg:w-[88px] lg:h-[88px] rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={user.image ? user.image : USER_DEFAULT_IMAGE.image}
                alt={user.name}
              />
            </div>
            <div className="flex flex-col items-start ml-4">
              <div className="flex flex-row items-center">
                <p className="lato-700 text-[16px] md:text-[14px] lg:text-[16px] 2xl:text-[20px] capitalize">
                  {user.name}
                </p>
                {paymentVerified == true && (
                  <img
                    className="w-3 h-3 md:w-4 md:h-4 ml-2"
                    src={VERIFIED.image}
                    alt={VERIFIED.name}
                  />
                )}
              </div>
              <span className="text-[12px] md:text-[14px]">
                {paymentVerified == true ? "Verified" : "Not Verified"}
              </span>
              {/* <span className="text-[12px] md:text-[14px] underline text-[#2176BD]  cursor-pointer">
                      Edit profile
                    </span> */}
              <label className="text-[12px] md:text-[14px] underline text-[#2176BD] cursor-pointer">
                {User?.image ? "Edit profile" : "Add profile"}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleProfileImageUpload}
                />
              </label>
            </div>
          </div>
          {paymentVerified == true ? (
            <>
              <div className="flex flex-row items-center mt-4 md:mt-0">
                <span
                  className="underline text-[#2176BD]  mr-1 sm:mr-4 cursor-pointer text-[11px] sm:text-[14px] md:text-[14px] lg:text-[16px]"
                  onClick={() =>
                    handleNavigation(
                      "/my-account/track-my-orders",
                      "Track My Orders"
                    )
                  }
                >
                  {loading && button == "Track My Orders" ? (
                    <Loader color={"#E3BB59"} />
                  ) : (
                    "Track My Orders"
                  )}
                </span>
                {loading && button == "Notifications" ? (
                  <Loader
                    color={"#E3BB59"}
                    className={"w-4 h-4 lg:w-6 lg:h-6  mr-1 sm:mr-4"}
                  />
                ) : (
                  <img
                    className="w-4 h-4 lg:w-6 lg:h-6  mr-1 sm:mr-4  cursor-pointer"
                    src={BELL.image}
                    alt={BELL.name}
                    onClick={() =>
                      handleNavigation(
                        "/my-account/notifications",
                        "Notifications"
                      )
                    }
                  />
                )}
                <button
                  className="button text-[10px] sm:text-[16px] bg-[#E3BB59] text-white py-[3px] lg:py-[6px] px-2 mr-1 sm:mr-4 rounded-md border border-[#E3BB59] min-w-[55px] sm:min-w-[100px]"
                  onClick={() =>
                    handleNavigation("/my-account/my-shop", "My Shop")
                  }
                >
                  {loading && button == "My Shop" ? (
                    <Loader className={" py-[3px]   px-2 mr-1 "} />
                  ) : (
                    "My Shop"
                  )}
                </button>
                <button
                  className="button text-[10px] sm:text-[16px] bg-white text-[#E3BB59] py-[3px] lg:py-[6px] px-2 border border-[#E3BB59]  rounded-md  min-w-[90px] sm:min-w-[150px]"
                  onClick={() =>
                    handleNavigation(
                      "/my-account/account-settings",
                      "Account Settings"
                    )
                  }
                >
                  {loading && button == "Account Settings" ? (
                    <Loader color={"#E3BB59"} className={"py-[3px]"} />
                  ) : (
                    "Account Settings"
                  )}
                </button>
              </div>
            </>
          ) : (
            <div
              className={`flex flex-row items-center ${
                licenseImg || plaidToken ? "mt-4" : ""
              } md:mt-0`}
            >
              <button
                className={`p-1 sm:p-2 flex flex-row items-center justify-center button text-[10px] sm:text-[16px] bg-[#59E36B] hover:bg-[#3a9d48]   text-white py-[3px] lg:py-[6px] px-2 border border-[#59E36B]  rounded-md  min-w-[90px] sm:min-w-[150px] transition-colors duration-300 ${
                  verificationProcessMessage != "LicenseInvalid" &&
                  verificationProcessMessage !=
                    "LicenseImageNotMatchingWithProfile"
                    ? "hidden"
                    : ""
                }`}
                disabled={!ready}
              >
                {loading ? (
                  <Loader className={"py-[3px]"} />
                ) : (
                  <label className="text-[12px] md:text-[14px] text-white cursor-pointer">
                    Add Driving License
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleLiscenseUpload}
                    />
                  </label>
                )}
              </button>
              <button
                className={`p-1 sm:p-2 ml-4  flex flex-row items-center justify-center button text-[10px] sm:text-[16px] bg-[#59E36B] hover:bg-[#3a9d48]   text-white py-[3px] lg:py-[6px] px-2 border border-[#59E36B]  rounded-md  min-w-[90px] sm:min-w-[150px] transition-colors duration-300 ${
                  plaidToken ? "hidden" : ""
                }`}
                onClick={() => {
                  if (!plaidToken) {
                    open();
                  }
                }}
                disabled={!ready}
              >
                {loading ? (
                  <Loader className={"py-[3px]"} />
                ) : (
                  "Verify Payment Method"
                )}
              </button>

              <button
                className="ml-2 button p-1 text-[12px] md:text-[14px] sm:p-2 bg-red-600 text-white border border-red-600   rounded-md w-auto"
                onClick={async () => {
                  const logout = await logOut(setlogoutLoading);
                  if (logout.updatedUser) {
                    handleLogout();
                  }
                }}
              >
                {logoutLoading ? <Loader className={"py-[3px] "} /> : "Logout"}
              </button>
            </div>
          )}
        </div>
      </div>
      {!buyerPaymentMethodVerified && (
        <div className="flex flex-col items-start w-full">
          {!user.image && !plaidToken && !licenseImg && <h2>Note:</h2>}
          {requirements.map((req, index) => (
            <p
              className={`w-full ${index == 0 && user.image ? "hidden" : ""} ${
                index == 1 && licenseImg ? "hidden" : ""
              }
            ${index == 2 && plaidToken ? "hidden" : ""}
             `}
              key={index}
            >
              {req}
            </p>
          ))}
        </div>
      )}

      <div className="w-full h-[2px] bg-gray-400"></div>
    </>
  );
};

export default UserSection;
