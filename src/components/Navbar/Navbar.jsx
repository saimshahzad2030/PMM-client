"use client";
import React, { use, useEffect } from "react";
import Link from "next/link";

import Backdrop from "@mui/material/Backdrop";
import {
  cart,
  HAMBURGER,
  SEARCH_BLACK,
  SEARCH_WITH_NO_BORDER,
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
// import { useSelector } from "react-redux";
const Navbar = ({}) => {
  const router = useRouter();
  // const user = useSelector((state) => state.user);
  const [logoutLoading, setlogoutLoading] = React.useState(false);

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
    cookieStore.set("token", null);
    cookieStore.set("id", null);
    router.push("/");
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
        <div className="  container mx-auto flex flex-col items-center w-full  py-4 pb-10">
          <div
            className={`flex flex-row items-center w-full justify-end text-[14px] sm:text-lg pb-1`}
          >
            {loading && <p className="text-[#E3BB59]">dsad</p>}
            {!loading && userLoggedIn && (
              <div className="flex flex-row items-center">
                <button
                  onClick={() => handleNavigation("/my-account", "My Account")}
                >
                  {buttonloading && button == "My Account" ? (
                    <Loader />
                  ) : (
                    "My Account"
                  )}
                </button>
                <button
                  className="ml-2 button px-2 py-[2px] text-[10px] sm:text-[16px] bg-red-600   text-white border border-red-400   rounded-md w-[80px]"
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
              </div>
            )}
            {!loading && !userLoggedIn && (
              <>
                <button
                  className="cursor-pointer text-white"
                  onClick={handleSignin}
                >
                  Sign in
                </button>
                &nbsp;&nbsp;&nbsp;or&nbsp;&nbsp;&nbsp;
                <button
                  className="cursor-pointer text-white"
                  onClick={() => {
                    handleBackdropOpen();
                    setCreatingAcccount(true);
                  }}
                >
                  Create Account
                </button>
              </>
            )}
            <button
              className="w-auto flex flex-col items-center justify-center"
              onClick={() => handleNavigation("/cart", "Cart")}
            >
              {userLoggedIn &&
                (buttonloading && button == "Cart" ? (
                  <Loader className={"ml-4 w-6 h-6 "} />
                ) : (
                  <img
                    className="ml-4 w-6 h-6 cursor-pointer"
                    src={cart.image}
                    alt={cart.name}
                  />
                ))}
            </button>
          </div>
          <div className="relative flex flex-row items-center justify-between w-full  text-lg mt-2 sm:mt-0">
            <Link href={"/"} className=" text-[40px] absolute    left-0">
              PMM
            </Link>

            <div className="flex flex-row items-center justify-end lg:justify-center w-full">
              <div className="relative hidden lg:flex flex-row w-6/12 lg:w-4/12  ">
                <SearchBar
                  setSearchLoading={setSearchLoading}
                  setBackdropOpen={setBackdropOpen}
                />
              </div>
              <img
                className=" w-8 h-8 cursor-pointer block lg:hidden"
                src={SEARCH_WITH_NO_BORDER.image}
                alt={SEARCH_WITH_NO_BORDER.name}
                onClick={toggleSearch}
              />
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
              <img
                className=" w-8 h-8 cursor-pointer block lg:hidden"
                src={HAMBURGER.image}
                alt={HAMBURGER.name}
                onClick={toggleMenu}
              />
              {isMenuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex flex-col items-center justify-center text-white transition-opacity duration-300">
                  <div className="flex flex-col items-center space-y-4">
                    {/* <Link href={"/market-place/gold"}>Gold</Link>

                    <Link href={"/market-place/silver"}>Silver</Link>

                    <Link href={"/market-place/platinum"}>Platinum</Link>

                    <Link href={"/market-place/palladium"}>Pladium</Link>

                    <Link href={"/my-account/my-shop"}>Sell</Link> */}

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
              )}
              {/* <div className=" hidden lg:flex flex-row items-center ml-12">
                <button
                  className="w-[40px]"
                  onClick={() => {
                    console.log("asd");
                    routeTo("/market-place/gold", "Gold");
                  }}
                >
                  {linkloading && link == "Gold" ? <Loader /> : "Gold"}
                </button>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <button
                  className="w-[50px]"
                  onClick={() => {
                    routeTo("/market-place/silver", "Silver");
                  }}
                >
                  {linkloading && link == "Silver" ? <Loader /> : "Silver"}
                </button>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <button
                  className="w-[70px]"
                  onClick={() => {
                    routeTo("/market-place/platinum", "Platinum");
                  }}
                >
                  {linkloading && link == "Platinum" ? <Loader /> : "Platinum"}
                </button>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <button
                  className="w-[70px]"
                  onClick={() => {
                    routeTo("/market-place/palladium", "Pladium");
                  }}
                >
                  {linkloading && link == "Pladium" ? <Loader /> : "Pladium"}
                </button>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <button
                  className="w-[45px]"
                  onClick={() => {
                    routeTo("/", "Sell");
                  }}
                >
                  {linkloading && link == "Sell" ? <Loader /> : "Sell"}
                </button>
              </div> */}
            </div>
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

export default Navbar;
