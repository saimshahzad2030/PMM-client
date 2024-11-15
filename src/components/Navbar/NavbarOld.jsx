"use client";
import React, { use, useEffect, useState } from "react";
import Link from "next/link";

import Backdrop from "@mui/material/Backdrop";
import {
  ACCOUNT,
  BUYING,
  cart,
  HAMBURGER,
  LOGOUT,
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
import { authGuard, logOut } from "../../../services/user-login";
import Loader from "../Loader/Loader";
import SearchBar from "../SearchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { setMode } from "@/redux/reducers/user-mode.reducer";

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
      className={`relative ${className} flex flex-row items-center lg:ml-0 ml-2`}
    >
      <span className=" font-bold mr-2 lg:block hidden">
        {user?.firstName || Cookies.get("firstname")}
      </span>
      <button
        onClick={handleDropdownToggle}
        className="overflow-hidden rounded-full flex flex-col items-center justify-center w-11 h-11 bg-white"
      >
        <img
          className="w-10 h-10 rounded-full cursor-pointer"
          src={
            userLoggedIn
              ? user?.imageUrl ||
                Cookies.get("imageUrl") ||
                USER_DEFAULT_IMAGE.image
              : HAMBURGER.image
          }
          alt="User"
        />
      </button>

      {dropdownOpen && (
        <div className="absolute top-[70%] right-0 mt-2 w-56 bg-white border rounded-lg shadow-lg z-10">
          <div className="flex flex-col items-start p-2 text-black">
            {/* Show loading state */}
            {loading && <p className="text-[#E3BB59]">Loading...</p>}

            {/* Logged-in state */}
            {!loading && userLoggedIn && (
              <>
                <button
                  className={`w-full  p-2 bg-[#2db84b] hover:bg-[#E3BB59] flex flex-row items-center transition-colors duration-300 ${
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
                <button
                  onClick={() => handleNavigation("/my-account", "My Account")}
                  className="flex flex-row items-center w-full text-left p-2 hover:bg-gray-100"
                >
                  {buttonloading && button === "My Account" ? (
                    <Loader color={"#E3BB59"} className="w-6 h-6 py-2" />
                  ) : (
                    <>
                      <img
                        className="w-6 h-6"
                        src={ACCOUNT.image}
                        alt={ACCOUNT.name}
                      />
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

const NavbarOld = ({}) => {
  const router = useRouter();
  // const user = useSelector((state) => state.user);
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
  const [creatingAccount, setCreatingAcccount] = React.useState(false);
  const [signingIn, setSigningIn] = React.useState(false);
  const [forgotPassword, setForgotPassword] = React.useState(false);
  const [emailEntered, setEmailEntered] = React.useState(false);
  const [emailVerified, setEmailVerified] = React.useState(false);
  const [otpEntered, setOtpEntered] = React.useState(false);
  const [otpVerified, setOtpVerified] = React.useState(false);
  const [button, setButton] = React.useState(null);

  const handleNavigation = (url, button) => {
    setButtonLoading(pathname != url);
    setButton(button);
    router.push(url);
  };
  useEffect(() => {
    if (searchParams.get("error") === "unauthorized") {
      setBackdropOpen(true);
      setCreatingAcccount(true);
    }
  }, [searchParams, pathname]);
  useEffect(() => {
    const fetchUser = async () => {
      const token = Cookies.get("token");
      if (token) {
        try {
          const userData = await authGuard(token);
          if (userData?.message == "User Authorized") {
            setUserLoggedIn(true);
          }
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
      <nav className=" fixed top-0 left-0  bg-[#E3BB59] h-auto w-full flex flex-row items-center justify-between text-white px-8 z-50">
        <div className="  container mx-auto flex flex-col items-center w-full  py-8 ">
          {/* <div className="w-full flex flex-row items-center justify-end">
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
              className={"hidden lg:flex"}
            />
          </div> */}
          <div className="relative flex flex-row items-center justify-between w-full  text-lg mt-2 sm:mt-0">
            <Link href={"/"} className=" text-[40px]    left-0">
              PMM
            </Link>

            <div className="relative hidden lg:flex flex-row w-6/12 lg:w-4/12  ">
              <SearchBar
                setSearchLoading={setSearchLoading}
                setBackdropOpen={setBackdropOpen}
              />
            </div>
            <div className="flex flex-row items-center justify-end">
              <img
                className=" w-8 h-8 cursor-pointer block lg:hidden"
                src={SEARCH_WITH_NO_BORDER.image}
                alt={SEARCH_WITH_NO_BORDER.name}
                onClick={toggleSearch}
              />
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
                // className={" lg:hidden ml-2"}
              />
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
            {/* <img
                className=" w-8 h-8 cursor-pointer block lg:hidden"
                src={HAMBURGER.image}
                alt={HAMBURGER.name}
                onClick={toggleMenu}
              /> */}
            {/* {isMenuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex flex-col items-center justify-center text-white transition-opacity duration-300">
                  <div className="flex flex-col items-center space-y-4">
                    <button
                      className="ml-2 button p-1 sm:p-2 text-[10px] sm:text-[16px]  bg-red-600 text-white border border-red-600   rounded-md w-[100px]"
                      onClick={async () => {
                        const logout = await logOut(setlogoutLoading);
                        if (logout.updatedUser) {
                          setUserLoggedIn(false);
                          handleLogout();
                        }
                      }}
                    >
                      {logoutLoading ? (
                        <Loader className={"py-[3px] "} />
                      ) : (
                        "Logout"
                      )}
                    </button>
                    <button
                      className="absolute top-4 right-4 text-2xl"
                      onClick={toggleMenu}
                    >
                      ✕
                    </button>
                  </div>
                </div>
              )} */}
            {/* </div> */}
          </div>
        </div>
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

export default NavbarOld;
