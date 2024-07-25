"use client";
import Button from "@/components/Button/Button";
import React from "react";
import {
  MY_BANK_ACCOUNTS,
  MY_CREDIT_CARDS,
  MY_DIGITAL_WALLETS,
} from "../../../../../constants/constants";
import styles from "./payment-Options.module.css";
import { Backdrop } from "@mui/material";
import AddNewBank from "./AddNewBank/Add-New-Bank";
import AddNewCard from "./AddNewCard/Add-New-Card";
import AddNewWallet from "./AddNewWallet/Add-New-Wallet";
const PaymentOptions = () => {
  const [backdropopen, setBackdropOpen] = React.useState(false);
  const handleBackdropClose = () => {
    setBackdropOpen(false);
  };
  const handleBackdropOpen = () => {
    setBackdropOpen(true);
  };
  const [addNewBank, setAddNewBank] = React.useState(false);
  const [addNewCard, setAddNewCard] = React.useState(false);
  const [addNewWallet, setAddNewWallet] = React.useState(false);
  return (
    <>
      <div className="flex flex-col items-center w-full mb-8">
        <div className="w-full flex flex-row items-center justify-between py-4 border border-t-0 border-b-black border-r-0 border-l-0 mb-4">
          <h3 className="text-[12px] sm:text-[16px] md:text-[20px] text-[#404040]">
            My Credit/Debit Cards
          </h3>
          <Button
            text={"+ Add New Card"}
            bgColor={"[#E3BB59]"}
            textColor={"white"}
            others={"rounded-md border  text-[10px] sm:text-[14px]"}
            clickHandler={() => {
              setAddNewBank(false);
              setAddNewCard(true);
              setAddNewWallet(false);
              handleBackdropOpen()
            }}
            padding={"p-1 px-2 sm:p-2"}
          />
        </div>
        <div className={`w-full overflow-x-scroll ${styles.hideScrollbar} `}>
          <table className="table-auto w-full  mb-4 ">
            <tbody className="overflow-x-scroll text-[12px] sm:[text-14px] md:text-[16px]">
              {MY_CREDIT_CARDS.map((card, index) => (
                <tr key={index}>
                  <td
                    className={` py-4  text-start min-w-[120px] sm:min-w-[200px] `}
                  >
                    {card.cardName}
                  </td>
                  <td
                    className={` py-4  text-start min-w-[140px] sm:min-w-[200px] pr-8`}
                  >
                    {card.fullName}
                  </td>
                  <td
                    className={` py-4  text-start min-w-[160px] sm:min-w-[200px]`}
                  >
                    {card.accountNumber}
                  </td>
                  <td
                    className={` py-4  text-start min-w-[160px] sm:min-w-[200px] hidden md:block`}
                  ></td>

                  <td className={` py-4  text-start  `}>
                    <Button
                      text={"delete"}
                      textColor={"red-700"}
                      others={"underline text-end"}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-col items-center w-full mb-8">
        <div className="w-full flex flex-row items-center justify-between py-4 border border-t-0 border-b-black border-r-0 border-l-0 mb-4">
          <h3 className="text-[12px] sm:text-[16px] md:text-[20px] text-[#404040]">
            My Bank Accounts
          </h3>
          <Button
            text={"+ Add New Bank Account"}
            bgColor={"[#E3BB59]"}
            textColor={"white"}
            others={"rounded-md border  text-[10px] sm:text-[14px]"}
            clickHandler={() => {
              setAddNewCard(false);
              setAddNewBank(true);
              setAddNewWallet(false);
              handleBackdropOpen()
            }}
            padding={"p-1 px-2 sm:p-2"}
          />
        </div>
        <div className={`w-full overflow-x-scroll ${styles.hideScrollbar} `}>
          <table className="table-auto w-full  mb-4 ">
            <tbody className="overflow-x-scroll text-[12px] sm:[text-14px] md:text-[16px]">
              {MY_BANK_ACCOUNTS.map((bank, index) => (
                <tr key={index}>
                  <td
                    className={` py-4  text-start min-w-[120px] sm:min-w-[200px] `}
                  >
                    {bank.bankName}
                  </td>
                  <td
                    className={` py-4  text-start min-w-[140px] sm:min-w-[200px] pr-8`}
                  >
                    {bank.fullName}
                  </td>
                  <td
                    className={` py-4  text-start min-w-[160px] sm:min-w-[200px]`}
                  >
                    {bank.accountNumber}
                  </td>
                  <td
                    className={` py-4  text-start min-w-[160px] sm:min-w-[200px] hidden md:block`}
                  ></td>

                  <td className={` py-4  text-start  `}>
                    <Button
                      text={"delete"}
                      textColor={"red-700"}
                      others={"underline text-end"}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-col items-center w-full mb-8">
        <div className="w-full flex flex-row items-center justify-between py-4 border border-t-0 border-b-black border-r-0 border-l-0 mb-4">
          <h3 className="text-[14px] sm:text-[16px] md:text-[20px] text-[#404040]">
            Digital Wallet
          </h3>
          <Button
            text={"+ Add New Digital Wallet"}
            bgColor={"[#E3BB59]"}
            textColor={"white"}
            others={"rounded-md border  text-[10px] sm:text-[14px]"}
            clickHandler={() => {
              setAddNewCard(false);
              setAddNewBank(false);
              setAddNewWallet(true);
              handleBackdropOpen()
            }}
            padding={"p-1 sm:p-2"}
          />
        </div>
        <div className={`w-full overflow-x-scroll ${styles.hideScrollbar} `}>
          <table className="table-auto w-full  mb-4 ">
            <tbody className="overflow-x-scroll text-[12px] sm:[text-14px] md:text-[16px]">
              {MY_DIGITAL_WALLETS.map((wallet, index) => (
                <tr key={index}>
                  <td
                    className={` py-4  text-start min-w-[100px]  sm:min-w-[200px] w-3/12 `}
                  >
                    {wallet.walletName}
                  </td>
                  <td
                    className={` py-4  text-start min-w-[100px] sm:min-w-[200px] pr-8`}
                  >
                    {wallet.email}
                  </td>

                  <td
                    className={` py-4  text-start min-w-[160px] sm:min-w-[200px] hidden md:block`}
                  ></td>
                  <td
                    className={` py-4  text-start min-w-[160px] sm:min-w-[200px] hidden md:block`}
                  ></td>

                  <td className={` py-4  text-start  `}>
                    <Button
                      text={"delete"}
                      textColor={"red-700"}
                      others={"underline text-end"}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdropopen}
      >
        <div className="relative flex flex-col items-center w-full">
          {addNewBank && (
            <AddNewBank
              handleBackdropClose={handleBackdropClose}
              // setSigningIn={setSigningIn}
              // setCreatingAcccount={setCreatingAcccount}
              // setForgotPassword={setForgotPassword}
              // setUserLoggedIn={setUserLoggedIn}
            />
          )}
          {addNewCard && (
            <AddNewCard
              handleBackdropClose={handleBackdropClose}
              // setSigningIn={setSigningIn}
              // setCreatingAcccount={setCreatingAcccount}
              // setForgotPassword={setForgotPassword}
              // setUserLoggedIn={setUserLoggedIn}
            />
          )}
          {addNewWallet && (
            <AddNewWallet
              handleBackdropClose={handleBackdropClose}
              // setSigningIn={setSigningIn}
              // setCreatingAcccount={setCreatingAcccount}
              // setForgotPassword={setForgotPassword}
              // setUserLoggedIn={setUserLoggedIn}
            />
          )}
        </div>
      </Backdrop>
    </>
  );
};

export default PaymentOptions;