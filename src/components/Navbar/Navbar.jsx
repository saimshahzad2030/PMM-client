"use client";
import React from "react";
import Link from "next/link";
import style from "./Navbar.module.css";

import { styled } from '@mui/system';
import Backdrop from "@mui/material/Backdrop";
import {
  cart,
  CROSS,
  HAMBURGER,
  SEARCH,
  SEARCH_BLACK,
  SEARCH_WITH_NO_BORDER,
} from "../../../constants/icons";
import LoginForm from "../LoginForm/Login-Form";
import SignupForm from "../SignupForm/Signup-Form";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [userLoggedIn, setUserLoggedIn] = React.useState(false);
  const [backdropopen, setBackdropOpen] = React.useState(false);
  const [creatingAccount, setCreatingAcccount] = React.useState(false);
  const [signingIn, setSigningIn] = React.useState(false);
  const handleBackdropClose = () => {
    setBackdropOpen(false);
    setSigningIn(false)
setCreatingAcccount(false)
  };
  const handleBackdropOpen = () => {
    setBackdropOpen(true);
  };
  const handleSignin = ()=>{
    handleBackdropOpen()
    setSigningIn(true)
  }
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };  
  return (
    <>
      <nav className="bg-[#E3BB59] h-auto w-full container mx-auto flex flex-row items-center justify-between text-white">
        <div className="  mr-8 flex flex-col items-center w-full  py-4 pb-10">
          <div className="flex flex-row items-center w-full justify-end text-[10px] sm:text-lg">
            {userLoggedIn ? (
              <Link href={"/"}>My Account</Link>
            ) : (
              <>
                <button classname="cursor-pointer text-white"
                onClick={handleSignin}>
                  Signin</button>
                &nbsp;&nbsp;&nbsp;or&nbsp;&nbsp;&nbsp;
                <button classname="cursor-pointer text-white"
                onClick={()=>{handleBackdropOpen()
                  setCreatingAcccount(true)}}>
                  Create Account
                </button>
              </>
            )}
            <img className="ml-4 w-6 h-6" src={cart.image} alt={cart.name} />
          </div>
          <div className="relative flex flex-row items-center justify-between w-full  text-lg mt-2 sm:mt-0">
            <h1 className="ml-4 lg:ml-6 text-[40px] absolute left-4 lg:left-10">
              PMM
            </h1>

            <div className="flex flex-row items-center justify-end w-full">
              <div className="relative hidden lg:flex flex-row w-6/12 lg:w-4/12">
                <input
                  type="text"
                  className={` ${style["search-input"]} w-full bg-[#E3BB59] border border-white rounded-lg pl-2`}
                  placeholder="Search"
                />
                <img
                  className="absolute w-auto h-full right-0 cursor-pointer"
                  src={SEARCH.image}
                  alt={SEARCH.name}
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
                  <div className="flex flex-col items-center space-y-4">
                    <div className="relative flex flex-row w-full ">
                      <input
                        type="text"
                        className={` ${style["search-input"]} w-full bg-white border border-black rounded-lg pl-2`}
                        placeholder="Search"
                      />
                      <img
                        className="absolute w-auto h-full right-0 cursor-pointer"
                        src={SEARCH_BLACK.image}
                        alt={SEARCH_BLACK.name}
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
                    <p>
                      <Link href={"/market-place/gold"}>Gold</Link>
                    </p>
                    <p>
                      <Link href={"/market-place/silver"}>Silver</Link>
                    </p>
                    <p>
                      <Link href={"/market-place/platinum"}>Platinum</Link>
                    </p>
                    <p>
                      <Link href={"/market-place/palladium"}>Pladium</Link>
                    </p>
                    <p>
                      <Link href={"/"}>Sell</Link>
                    </p>
                    <button
                      className="absolute top-4 right-4 text-2xl"
                      onClick={toggleMenu}
                    >
                      ✕
                    </button>
                  </div>
                </div>
              )}
              <div className=" hidden lg:flex flex-row items-center ml-12">
                <p>
                  <Link href={"/market-place/gold"}>Gold</Link>
                  &nbsp;&nbsp;|&nbsp;&nbsp;
                </p>
                <p>
                  <Link href={"/market-place/silver"}>Silver</Link>
                  &nbsp;&nbsp;|&nbsp;&nbsp;
                </p>
                <p>
                  <Link href={"/market-place/platinum"}>Platinum</Link>
                  &nbsp;&nbsp;|&nbsp;&nbsp;
                </p>
                <p>
                  <Link href={"/market-place/palladium"}>Pladium</Link>
                  &nbsp;&nbsp;|&nbsp;&nbsp;
                </p>
                <p>
                  <Link href={"/"}>Sell</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdropopen}
        // onClick={handleBackdropClose}
      >
      <div className="relative flex flex-col items-center w-full">
         {signingIn && <LoginForm/>}
      {creatingAccount && <SignupForm handleBackdropClose={handleBackdropClose}/>}
      </div>

      </Backdrop>
    </>
  );
};

export default Navbar;
