"use client";
import React, { useState } from "react";
import Link from "next/link";
import Tooltip from "@mui/material/Tooltip";
import Backdrop from "@mui/material/Backdrop";
import {
  ACCOUNT,
  BELL,
  BUYING,
  cart,
  HAMBURGER,
  LOGOUT,
  SEARCH,
  SEARCH_BLACK,
  SEARCH_WITH_NO_BORDER,
  SELLING,
  USER_DEFAULT_IMAGE,
} from "../../../constants/icons";
import LoginForm from "../LoginForm/Login-Form";
import SignupForm from "../SignupForm/Signup-Form";
import ForgotPassword from "../ForgotPassword/Forgot-Password";
import OtpVerification from "../OtpVerification/Otp-Verification";
import ChangePassword from "../ChangePassword/Change-Password";
import Cookies from "js-cookie";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import {
  authGuard,
  fetchUserDetails,
  logOut,
} from "../../../services/user-login";
import Loader from "../Loader/Loader";
import SearchBar from "../SearchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { setMode } from "@/redux/reducers/user-mode.reducer";
import { NOTIFICATIONS } from "../../../constants/constants";
import TooltipComponent from "../Tooltip/Tooltip";

const UserMenu = ({
  handleBackdropOpen,
  handleSignin,
  userLoggedIn,
  loading,
  setUserLoggedIn,
  handleLogout,
  handleNavigation,
  dropdownOpen,
  setDropdownOpen,
  setCreatingAcccount,
  logoutLoading,
  buttonloading,
  button,
  className,
}) => {
  const user = useSelector((state) => state.user);
  const [modeChangeLoading, setModeChangeLoading] = useState(false);
  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const mode = useSelector((state) => state.mode);
  const dispatch = useDispatch();
  const handleModeChange = () => {
    setModeChangeLoading(true);
    setTimeout(() => {
      dispatch(setMode(mode === "Buyer" ? "Seller" : "Buyer"));
      handleNavigation("/my-account", "My Account");
      setModeChangeLoading(false);
    }, 3000);
  };
  return (
    <div
      className={`relative ${className} flex flex-row items-center lg:ml-0 ml-2 `}
    >
      <button
        onClick={handleDropdownToggle}
        className={` text-white  overflow-hidden rounded-full flex flex-col items-center justify-center  w-8 h-8  bg-[#E3BB59] ${
          !userLoggedIn && " sm:hidden"
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-10 h-10 rounded-full cursor-pointer fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22Z"
            fill="none"
          />
          <path
            d="M18.75 8C18.75 8.41421 18.4142 8.75 18 8.75H6C5.58579 8.75 5.25 8.41421 5.25 8C5.25 7.58579 5.58579 7.25 6 7.25H18C18.4142 7.25 18.75 7.58579 18.75 8Z"
            fill="currentColor"
          />
          <path
            d="M18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12Z"
            fill="currentColor"
          />
          <path
            d="M18.75 16C18.75 16.4142 18.4142 16.75 18 16.75H6C5.58579 16.75 5.25 16.4142 5.25 16C5.25 15.5858 5.58579 15.25 6 15.25H18C18.4142 15.25 18.75 15.5858 18.75 16Z"
            fill="currentColor"
          />
        </svg>
      </button>
      <Link
        href={"/"}
        className="ml-2 sm:ml-4 text-xl sm:text-2xl lg:text-4xl font-extrabold "
      >
        <img
          src="/assets/logo.jpg"
          className="sm:h-12 sm:w-auto h-auto w-28"
          alt="logo"
        />
      </Link>

      {dropdownOpen && (
        <div className="absolute top-[70%] left-0  mt-2 w-56 bg-white border rounded-lg shadow-lg z-10">
          <div className="flex flex-col items-start p-2 text-[#E3BB59]">
            {loading && <p className="text-[#E3BB59]">Loading...</p>}

            {!loading && userLoggedIn && (
              <>
                <button
                  className={`w-full  p-2  bg-[#E3BB59] flex flex-row items-center transition-colors duration-300 ${
                    modeChangeLoading ? "text-center" : "text-left"
                  }`}
                  onClick={() => {
                    handleModeChange();
                  }}
                >
                  {userLoggedIn &&
                    (modeChangeLoading ? (
                      <Loader className="w-6 h-6" color={"white"} />
                    ) : (
                      <>
                        <img
                          className="w-6 h-6"
                          src={mode == "Buyer" ? SELLING.image : BUYING.image}
                          alt={mode == "Buyer" ? SELLING.name : BUYING.name}
                        />
                        <p className="text-white ml-2">
                          Switch to {mode == "Buyer" ? "Selling" : "Buying"}
                        </p>
                      </>
                    ))}
                </button>
                {loading ? (
                  <Loader color={"white"} />
                ) : (
                  <>
                    <Link
                      href={"/"}
                      className="w-full  group flex flex-row items-center  p-2 hover:bg-gray-100"
                    >
                      <img
                        className="w-6 h-6"
                        src={cart.image}
                        alt={cart.name}
                      />
                      <span className="ml-2">Home</span>
                    </Link>
                    {mode == "Seller" ? (
                      <Link
                        href={"/"}
                        className="w-full group flex flex-row items-center  p-2 hover:bg-gray-100"
                      >
                        <img
                          className="w-6 h-6"
                          src={ACCOUNT.image}
                          alt={ACCOUNT.name}
                        />
                        <span className="ml-2">List A Product</span>
                      </Link>
                    ) : (
                      <Link
                        href={"/my-account/track-my-orders"}
                        className="w-full group flex flex-row items-center  p-2 hover:bg-gray-100"
                      >
                        <img
                          className="w-6 h-6"
                          src={ACCOUNT.image}
                          alt={ACCOUNT.name}
                        />
                        <span className="ml-2">Orders</span>
                      </Link>
                    )}
                    <Link
                      href={"/about-us/precious-metal-market"}
                      className="w-full group flex flex-row items-center   p-2 hover:bg-gray-100"
                    >
                      <svg
                        width="800px"
                        height="800px"
                        viewBox="0 0 512 512"
                        version="1.1"
                        className="w-6 h-auto"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>about</title>
                        <g
                          id="Page-1"
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <g
                            id="about-white"
                            fill="currentColor"
                            transform="translate(42.666667, 42.666667)"
                          >
                            <path
                              d="M213.333333,3.55271368e-14 C95.51296,3.55271368e-14 3.55271368e-14,95.51168 3.55271368e-14,213.333333 C3.55271368e-14,331.153707 95.51296,426.666667 213.333333,426.666667 C331.154987,426.666667 426.666667,331.153707 426.666667,213.333333 C426.666667,95.51168 331.154987,3.55271368e-14 213.333333,3.55271368e-14 Z M213.333333,384 C119.227947,384 42.6666667,307.43872 42.6666667,213.333333 C42.6666667,119.227947 119.227947,42.6666667 213.333333,42.6666667 C307.44,42.6666667 384,119.227947 384,213.333333 C384,307.43872 307.44,384 213.333333,384 Z M240.04672,128 C240.04672,143.46752 228.785067,154.666667 213.55008,154.666667 C197.698773,154.666667 186.713387,143.46752 186.713387,127.704107 C186.713387,112.5536 197.99616,101.333333 213.55008,101.333333 C228.785067,101.333333 240.04672,112.5536 240.04672,128 Z M192.04672,192 L234.713387,192 L234.713387,320 L192.04672,320 L192.04672,192 Z"
                              id="Shape"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <span className="ml-2">About</span>
                    </Link>
                  </>
                )}
                <button
                  onClick={() => handleNavigation("/my-account", "My Account")}
                  className="flex flex-row items-center w-full text-left p-2 hover:bg-gray-100"
                >
                  {buttonloading && button === "My Account" ? (
                    <Loader color={"#E3BB59"} className="w-6 h-6 py-2" />
                  ) : (
                    <>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="w-5 sm:w-6 h-auto transition-transform transform hover:scale-125 duration-300"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <p className="text-[#E3BB59] ml-2">My Account</p>
                    </>
                  )}
                </button>

                <button
                  className="w-full text-left p-2 hover:bg-gray-100 flex flex-row items-center"
                  onClick={() => handleNavigation("/cart", "Cart")}
                >
                  {userLoggedIn &&
                    (buttonloading && button === "Cart" ? (
                      <Loader color={"#E3BB59"} className="w-6 h-6 py-2" />
                    ) : (
                      <>
                        <img
                          className="w-6 h-6"
                          src={cart.image}
                          alt={cart.name}
                        />
                        <p className="text-[#E3BB59] ml-2">Cart</p>
                      </>
                    ))}
                </button>
                <button
                  className="w-full text-left p-2 hover:bg-gray-100 flex flex-row items-center"
                  onClick={handleLogout}
                >
                  {logoutLoading ? (
                    <Loader color={"#E3BB59"} className="w-6 h-6 py-2" />
                  ) : (
                    <>
                      <img
                        className="w-6 h-6"
                        src={LOGOUT.image}
                        alt={LOGOUT.name}
                      />
                      <p className="text-[#ef4242] ml-2">Logout</p>
                    </>
                  )}
                </button>
              </>
            )}

            {/* Logged-out state */}
            {!loading && !userLoggedIn && (
              <>
                <button
                  className="w-full text-left p-2 hover:bg-gray-100"
                  onClick={() => {
                    setDropdownOpen(false);
                    handleSignin();
                  }}
                >
                  Sign in
                </button>
                <button
                  className="w-full text-left p-2 hover:bg-gray-100"
                  onClick={() => {
                    setDropdownOpen(false);
                    handleBackdropOpen();
                    setCreatingAcccount(true);
                  }}
                >
                  Create Account
                </button>
              </>
            )}

            {/* Cart button */}
          </div>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const router = useRouter();
  const mode = useSelector((state) => state.mode);
  const [logoutLoading, setlogoutLoading] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const [userLoggedIn, setUserLoggedIn] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [buttonloading, setButtonLoading] = React.useState(true);
  const [otpId, setOtpId] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [searchLoading, setSearchLoading] = React.useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [backdropopen, setBackdropOpen] = React.useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = React.useState(false);
  const [creatingAccount, setCreatingAcccount] = React.useState(false);
  const [signingIn, setSigningIn] = React.useState(false);
  const [forgotPassword, setForgotPassword] = React.useState(false);
  const [emailEntered, setEmailEntered] = React.useState(false);
  const [emailVerified, setEmailVerified] = React.useState(false);
  const [otpEntered, setOtpEntered] = React.useState(false);
  const [otpVerified, setOtpVerified] = React.useState(false);
  const [button, setButton] = React.useState(null);
  const [notifications, setNotifications] = React.useState(null);
  const [notificationLoader, setNotificationLoader] = React.useState(false);

  const handleNavigation = (url, button) => {
    setButtonLoading(pathname != url);
    setButton(button);
    router.push(url);
  };
  React.useEffect(() => {
    if (searchParams.get("error") === "unauthorized") {
      setBackdropOpen(true);
      setCreatingAcccount(true);
    }
  }, [searchParams, pathname]);
  React.useEffect(() => {
    const fetchUser = async () => {
      const token = Cookies.get("token");
      if (token) {
        try {
          // const userData = await authGuard(token);
          // if (userData?.message == "User Authorized") {
          setUserLoggedIn(true);
          // }
        } catch (error) {
          console.error("Failed to auto-login:", error);
        }
      }
      setLoading(false);
    };

    fetchUser();
  }, []);
  const handleLogout = () => {
    setlogoutLoading(true);
    setUserLoggedIn(false);
    cookieStore.set("token", null);
    cookieStore.set("id", null);
    handleBackdropClose();
    setBackdropOpen(false);
    Cookies.remove("firstname");
    Cookies.remove("imageUrl");
    Cookies.remove("token");
    Cookies.remove("id");
    setDropdownOpen(false);
    router.push("/");
    setTimeout(() => {
      setlogoutLoading(false);
    }, 3000);
  };
  const handleBackdropClose = () => {
    setButton(null);
    setBackdropOpen(false);
    setSigningIn(false);
    setCreatingAcccount(false);
    setForgotPassword(false);
    setEmailEntered(false);
    setEmailVerified(false);
    setOtpEntered(false);
    setOtpVerified(false);
  };
  const handleBackdropOpen = () => {
    setBackdropOpen(true);
  };
  const handleSignin = () => {
    setBackdropOpen(close);
    handleBackdropOpen();
    setSigningIn(true);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  const [link, setLink] = React.useState(null);
  const [linkloading, setLinkLoading] = React.useState(true);

  const routeTo = (url, button) => {
    setLinkLoading(pathname != url);
    setLink(button);
    router.push(url);
    console.log(url);
    console.log(button);
  };

  return (
    <>
      <nav className=" fixed top-0 left-0  bg-[#E3BB59] h-auto w-full flex flex-row items-center justify-between text-white px-4 sm:px-8 z-50">
        <div className="  container mx-auto flex flex-row items-center justify-between w-full  py-8 ">
          <div className="flex flex-row items-center justify-start">
            {/* <img
            className=" w-8 h-8 cursor-pointer block lg:hidden"
            src={SEARCH_WITH_NO_BORDER.image}
            alt={SEARCH_WITH_NO_BORDER.name}
            onClick={toggleSearch}
          /> */}
            <UserMenu
              handleSignin={handleSignin}
              userLoggedIn={userLoggedIn}
              loading={loading}
              setUserLoggedIn={setUserLoggedIn}
              handleLogout={handleLogout}
              handleNavigation={handleNavigation}
              dropdownOpen={dropdownOpen}
              setDropdownOpen={setDropdownOpen}
              setCreatingAcccount={setCreatingAcccount}
              handleBackdropOpen={handleBackdropOpen}
              button={button}
              logoutLoading={logoutLoading}
              buttonloading={buttonloading}
              // className={" w-4/12"}
            />
          </div>

          {loading ? (
            <Loader className={"hidden md:block"} />
          ) : (
            userLoggedIn && (
              <div className="hidden md:flex flex-row items-center w-full justify-center text-lg font-bold ">
                <button
                  onClick={() => handleNavigation("/", "Home")}
                  className="ml-[24px] relative group"
                >
                  {buttonloading && button === "Home" ? <Loader /> : <>Home</>}
                  <span className="rounded-full absolute bottom-[-5px] left-0 w-0 h-[4px] bg-white transition-all group-hover:w-full duration-300 "></span>
                </button>
                {mode == "Seller" ? (
                  <button
                    onClick={() =>
                      handleNavigation("/my-account/my-shop", "Shop")
                    }
                    className="ml-[24px] relative group"
                  >
                    {buttonloading && button === "Shop" ? (
                      <Loader />
                    ) : (
                      <>
                        Sell
                        <span className="rounded-full absolute bottom-[-5px] left-0 w-0 h-[4px] bg-white transition-all group-hover:w-full duration-300 "></span>
                      </>
                    )}
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      handleNavigation("/my-account/track-my-orders", "Orders")
                    }
                    className="ml-[24px] relative group"
                  >
                    {buttonloading && button === "Orders" ? (
                      <Loader />
                    ) : (
                      <>
                        Orders
                        <span className="rounded-full absolute bottom-[-5px] left-0 w-0 h-[4px] bg-white transition-all group-hover:w-full duration-300 "></span>
                      </>
                    )}
                  </button>
                )}

                <button
                  onClick={() =>
                    handleNavigation("/about-us/precious-metal-market", "About")
                  }
                  className="ml-[24px] relative group"
                >
                  {buttonloading && button === "About" ? (
                    <Loader />
                  ) : (
                    <>
                      About
                      <span className="rounded-full absolute bottom-[-5px] left-0 w-0 h-[4px] bg-white transition-all group-hover:w-full duration-300 "></span>
                    </>
                  )}
                </button>
              </div>
            )
          )}
          {!userLoggedIn && (
            <TooltipComponent title={"Search"}>
              <button
                onClick={() => {
                  setIsSearchOpen(true);
                }}
                className="ml-4"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="mr-4 sm:mr-0 w-5 sm:w-6 h-auto transition-transform transform hover:scale-125 duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </TooltipComponent>
          )}
          {loading ? (
            <Loader />
          ) : userLoggedIn ? (
            <div className="flex flex-row items-center  justify-end  mr-2">
              <TooltipComponent title={"Account"}>
                <button
                  onClick={() => handleNavigation("/my-account", "My Account")}
                  className="ml-4"
                >
                  {buttonloading && button === "My Account" ? (
                    <Loader className="w-6 h-6 " />
                  ) : (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-5 sm:w-6 h-auto transition-transform transform hover:scale-125 duration-300"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  )}
                </button>
              </TooltipComponent>

              <TooltipComponent title={"Search"}>
                <button
                  onClick={() => {
                    setIsSearchOpen(true);
                  }}
                  className="ml-4"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-5 sm:w-6 h-auto transition-transform transform hover:scale-125 duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </TooltipComponent>
              <TooltipComponent title={"Cart"}>
                <button
                  onClick={() => handleNavigation("/cart", "Cart")}
                  className="ml-4"
                >
                  {buttonloading && button === "Cart" ? (
                    <Loader color={"white"} className="w-6 h-6 py-2" />
                  ) : (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-5 sm:w-6 h-auto transition-transform transform hover:scale-125 duration-300"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.2998 5H22L20 12H8.37675M21 16H9L7 3H4M4 8H2M5 11H2M6 14H2M10 20C10 20.5523 9.55228 21 9 21C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19C9.55228 19 10 19.4477 10 20ZM21 20C21 20.5523 20.5523 21 20 21C19.4477 21 19 20.5523 19 20C19 19.4477 19.4477 19 20 19C20.5523 19 21 19.4477 21 20Z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  )}
                </button>
              </TooltipComponent>
              <TooltipComponent title={"Notifications"}>
                <div className="ml-4  relative inline-block">
                  {/* Button */}
                  <button
                    onClick={async () => {
                      setIsNotificationsOpen(!isNotificationsOpen);
                      setNotificationLoader(true);
                      const notifications = await fetchUserDetails(
                        Cookies.get("token"),
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
                      setNotifications(
                        notifications?.user?.recieverOrders[0]?.Shippings
                          ?.ShippingNotifications
                          ? notifications.user.recieverOrders[0].Shippings
                              .ShippingNotifications
                          : []
                      );
                      setNotificationLoader(false);
                    }}
                    className="mt-1 focus:outline-none"
                  >
                    <svg
                      viewBox="0 0 24 26"
                      fill="none"
                      className="w-5 sm:w-6 h-auto transition-transform transform hover:scale-125 duration-300"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 4.33333C15.6819 4.33333 18.6667 7.3181 18.6667 11V14.2396C18.6667 14.7294 18.8464 15.2022 19.1718 15.5683L21.7808 18.5035C22.6407 19.4708 21.954 21 20.6597 21H3.34025C2.04598 21 1.35927 19.4708 2.21913 18.5035L4.82813 15.5683C5.15355 15.2022 5.3333 14.7294 5.33331 14.2396L5.33333 11C5.33333 7.3181 8.3181 4.33333 12 4.33333ZM12 4.33333V1M10.6666 25H13.3333"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  {/* Notification Dropdown */}
                  {isNotificationsOpen && (
                    <div className="my-4 absolute right-0 mt-2 w-64 bg-white shadow-lg border border-gray-200 rounded-lg z-10 overflow-hidden">
                      <ul>
                        {notificationLoader ? (
                          <Loader color={"#E3BB59"} className={"my-4 mx-2"} />
                        ) : notifications && notifications.length > 0 ? (
                          notifications.map((notification, index) => (
                            <li
                              key={index}
                              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            >
                              <span className="font-medium">
                                {notification.title || "New Notification"}
                              </span>
                              <p className="text-sm text-gray-600">
                                {notification.message ||
                                  "You have a new notification"}
                              </p>
                            </li>
                          ))
                        ) : (
                          <li className="my-4 mx-2 text-black">
                            No notifications to show
                          </li>
                        )}
                      </ul>
                    </div>
                  )}
                </div>
              </TooltipComponent>
            </div>
          ) : (
            <div className="sm:flex  flex-row items-center  justify-end  mr-2 hidden">
              <button
                onClick={() => {
                  handleSignin();
                }}
                className="ml-2 flex flex-row items-center bg-white text-[#E3BB59] rounded-lg p-2 hover:scale-110 duration-300 transition-transform"
              >
                <span>Login</span>
                <svg
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  className="w-4 sm:w-4 h-auto  ml-2"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>user</title>
                  <path d="M4 28q0 0.832 0.576 1.44t1.44 0.576h20q0.8 0 1.408-0.576t0.576-1.44q0-1.44-0.672-2.912t-1.76-2.624-2.496-2.144-2.88-1.504q1.76-1.088 2.784-2.912t1.024-3.904v-1.984q0-3.328-2.336-5.664t-5.664-2.336-5.664 2.336-2.336 5.664v1.984q0 2.112 1.024 3.904t2.784 2.912q-1.504 0.544-2.88 1.504t-2.496 2.144-1.76 2.624-0.672 2.912z"></path>
                </svg>
              </button>
              <button
                onClick={() => {
                  handleBackdropOpen();
                  setCreatingAcccount(true);
                }}
                className="ml-2 flex flex-row items-center bg-[#E3BB59] hover:scale-110 text-white border border-white rounded-lg p-2 transition-transform duration-300"
              >
                <span>Signup</span>
                <svg
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  className="w-4 sm:w-4 h-auto  ml-2"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>user</title>
                  <path d="M4 28q0 0.832 0.576 1.44t1.44 0.576h20q0.8 0 1.408-0.576t0.576-1.44q0-1.44-0.672-2.912t-1.76-2.624-2.496-2.144-2.88-1.504q1.76-1.088 2.784-2.912t1.024-3.904v-1.984q0-3.328-2.336-5.664t-5.664-2.336-5.664 2.336-2.336 5.664v1.984q0 2.112 1.024 3.904t2.784 2.912q-1.504 0.544-2.88 1.504t-2.496 2.144-1.76 2.624-0.672 2.912z"></path>
                </svg>
              </button>
            </div>
          )}
        </div>
        {isSearchOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex flex-col items-center justify-center text-white transition-opacity duration-300">
            <div className="flex flex-col items-center space-y-4 w-full">
              <div className="relative flex flex-row w-10/12 ">
                <SearchBar
                  setSearchLoading={setSearchLoading}
                  setBackdropOpen={setBackdropOpen}
                />
              </div>
              <button
                className="absolute top-4 right-4 text-2xl"
                onClick={toggleSearch}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </nav>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdropopen}
      >
        <div className="relative flex flex-col items-center w-full">
          {searchLoading && <Loader />}
          {signingIn && (
            <LoginForm
              handleBackdropClose={handleBackdropClose}
              setSigningIn={setSigningIn}
              setCreatingAcccount={setCreatingAcccount}
              setForgotPassword={setForgotPassword}
              setUserLoggedIn={setUserLoggedIn}
            />
          )}
          {creatingAccount && (
            <SignupForm
              handleBackdropClose={handleBackdropClose}
              setSigningIn={setSigningIn}
              setCreatingAcccount={setCreatingAcccount}
            />
          )}
          {forgotPassword && (
            <ForgotPassword
              setOtpId={setOtpId}
              handleBackdropClose={handleBackdropClose}
              setEmailEntered={setEmailEntered}
              setEmailVerified={setEmailVerified}
              setForgotPassword={setForgotPassword}
              setEmail={setEmail}
            />
          )}
          {emailVerified && (
            <OtpVerification
              otpId={otpId}
              handleBackdropClose={handleBackdropClose}
              setOtpEntered={setOtpEntered}
              setOtpVerified={setOtpVerified}
              setEmailVerified={setEmailVerified}
              email={email}
            />
          )}
          {otpVerified && (
            <ChangePassword
              handleBackdropClose={handleBackdropClose}
              setSigningIn={setSigningIn}
              setOtpVerified={setOtpVerified}
              email={email}
            />
          )}
        </div>
      </Backdrop>
    </>
  );
};

export default Navbar;
