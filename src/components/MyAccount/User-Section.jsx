"use client";
import React, { useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import Button from "@mui/material/Button";
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
  usePlaidLinkSetup2,
} from "../../../services/plaid.services";
import { Alert } from "@mui/material";
import { usePlaidLink } from "react-plaid-link";
import { useSelector } from "react-redux";
import Link from "next/link";
const UserSection = ({
  plaidAccessToken,
  User,
  buyerPaymentMethodVerified,
  plaidIdVerificationAccessToken,
  identityVerificationStatus,
}) => {
  const [logoutLoading, setlogoutLoading] = React.useState(false);

  const [plaidToken, setPlaidToken] = React.useState(plaidAccessToken);
  const pathname = usePathname();
  const [paymentVerified, setPaymentVerified] = React.useState(
    buyerPaymentMethodVerified
  );
  const [loading, setLoading] = React.useState(false);
  const [imageloading, setImageLoading] = React.useState(false);
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
    const changeProfile = await editProfilePic(file, setImageLoading);
    if (changeProfile.updatedUser) {
      setUser((prevUser) => ({
        ...prevUser,
        image: changeProfile.imageUrl,
      }));
    }
  };

  const [linkToken, setLinkToken] = React.useState(null);
  const [idlinkToken, setIdLinkToken] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [bankError, setBankError] = React.useState(null);
  const [idError, setIdError] = React.useState(null);

  React.useEffect(() => {
    fetchLinkToken(setLinkToken, setIdLinkToken, setError);
  }, []);

  const [verificationDetails, setVerificationDetails] = React.useState(null);
  // React.useEffect(() => {
  //   console.log("verificationDetails: ", verificationDetails);
  // }, [verificationDetails]);
  // const [verificationToken, setVerificationToken] = React.useState(
  //   plaidIdVerificationAccessToken
  // );
  const [verificationToken, setVerificationToken] = React.useState(null);

  // const [buttonClicked, setButtonClicked] = React.useState(false);

  const buttonClickedRef = React.useRef(false);
  const handleLogout = () => {
    if (buttonClickedRef.current) {
      cookieStore.set("token", null);
      cookieStore.set("id", null);
      router.push("/");
    }
  };
  const { open: open1, ready: ready1 } = usePlaidLinkSetup(
    linkToken,
    setBankError,
    setPlaidToken
  );

  const handleClick = () => {
    if (buttonClickedRef.current) {
      setOpen(true);
    }
  };

  const { open: open2, ready: ready2 } = usePlaidLinkSetup2(
    idlinkToken,
    setIdError,
    setVerificationToken,
    setVerificationDetails,
    handleLogout,
    handleClick
  );
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const mode = useSelector((state) => state.mode);

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <>
      <span
        className={`w-full text-center bg-[#F2F2F2] text-[#E3BB59] ${
          user.image && plaidToken ? "mb-2" : "mb-12"
        } py-2`}
      >
        My Account
      </span>
      {/* <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Logging out"
        action={action}
      /> */}
      <div
        className={`flex flex-col items-start md:flex-row md:items-end md:justify-between w-full ${
          user.image && plaidToken ? "mt-2" : ""
        }`}
      >
        <div className="flex flex-col items-start md:flex-row md:items-end md:justify-between  w-full mb-8">
          <div className="flex flex-row items-center">
            <div className="flex flex-col items-center justify-center w-20 h-20 md:w-24 md:h-24 lg:w-[88px] lg:h-[88px] rounded-full overflow-hidden">
              {!imageloading ? (
                <img
                  className="w-full h-full object-cover"
                  src={user.image ? user.image : USER_DEFAULT_IMAGE.image}
                  alt={user.name}
                />
              ) : (
                <Loader color={"gray"} size={40} />
              )}
            </div>
            <div className="flex flex-col items-start ml-4">
              <div className="flex flex-row items-center">
                <p className="lato-700 text-[16px] md:text-[14px] lg:text-[16px] 2xl:text-[20px] capitalize">
                  {user.name}
                </p>
                {paymentVerified == true ||
                  (identityVerificationStatus == "success" &&
                    plaidAccessToken && (
                      <img
                        className="w-3 h-3 md:w-4 md:h-4 ml-2"
                        src={VERIFIED.image}
                        alt={VERIFIED.name}
                      />
                    ))}
              </div>
              <span className="text-[12px] md:text-[14px]">
                {paymentVerified == true ||
                (identityVerificationStatus == "success" && plaidAccessToken)
                  ? "Verified"
                  : "Not Verified"}
              </span>
              {/* <span className="text-[12px] md:text-[14px] underline text-[#2176BD]  cursor-pointer">
                      Edit profile
                    </span> */}
              <label className="text-[12px] md:text-[14px]  text-[#2176BD] cursor-pointer">
                {User?.image ? "Edit Profile Pic" : "Add Profile Pic"}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleProfileImageUpload}
                />
              </label>
              <Link
                className="text-[12px] md:text-[14px]  text-[#2176BD] cursor-pointer"
                href={"/my-account/account-settings"}
              >
                {"Edit Personal Information"}
              </Link>
            </div>
          </div>
          {paymentVerified == true ||
          ((identityVerificationStatus == "success" || mode == "Buyer") &&
            plaidAccessToken) ? (
            <>
              <div className="flex flex-row items-center mt-4 md:mt-0">
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
                {mode == "Buyer" && (
                  <button
                    className="button text-[10px] sm:text-[16px] bg-[#E3BB59] text-white py-[3px] lg:py-[6px] px-2 mr-1 sm:mr-4 rounded-md border border-[#E3BB59]  w-[80px] sm:w-[150px]"
                    onClick={() =>
                      handleNavigation(
                        "/my-account/track-my-orders",
                        "Track My Orders"
                      )
                    }
                  >
                    {loading && button == "Track My Orders" ? (
                      <Loader className={" py-[3px]   px-2 mr-1 "} />
                    ) : (
                      "Track My Orders"
                    )}
                  </button>
                )}

                {mode != "Buyer" && (
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
                )}
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
                plaidToken ? "mt-4" : ""
              } md:mt-0`}
            >
              <button
                className={`p-1 sm:p-2 ml-4 button text-[10px] sm:text-[16px] bg-[#3a9d48] hover:bg-[#449e50]   text-white  border border-[#59E36B]  rounded-md  min-w-[90px] sm:min-w-[150px] transition-colors duration-300 ${
                  identityVerificationStatus == "success" || mode == "Buyer"
                    ? "hidden"
                    : ""
                } `}
                onClick={() => {
                  if (!verificationToken) {
                    open2();
                  }
                  buttonClickedRef.current = true;
                }}
                disabled={!ready2}
              >
                {loading ? (
                  <Loader className={"py-[3px]"} />
                ) : (
                  "Verify Identity"
                )}
              </button>
              <button
                className={`p-1 sm:p-2 ml-2 button text-[10px] sm:text-[16px]  bg-[#3a9d48] hover:bg-[#449e50]   text-white  border border-[#59E36B]  rounded-md  min-w-[90px] sm:min-w-[150px] transition-colors duration-300 ${
                  plaidToken ? "hidden" : ""
                }`}
                onClick={() => {
                  if (!plaidToken) {
                    open1();
                  }
                }}
                disabled={!ready1}
              >
                {loading ? (
                  <Loader className={"py-[3px]"} />
                ) : (
                  "Verify Payment Method"
                )}
              </button>

              <button
                className="ml-2 button p-1 sm:p-2 text-[10px] sm:text-[16px]  bg-red-600 text-white border border-red-600   rounded-md w-[100px]"
                onClick={async () => {
                  const logout = await logOut(setlogoutLoading);
                  if (logout.updatedUser) {
                    buttonClickedRef.current = true;
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

      <div className="w-full h-[2px] bg-gray-400"></div>
    </>
  );
};

export default UserSection;
