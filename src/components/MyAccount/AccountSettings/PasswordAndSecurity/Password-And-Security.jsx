"use client";
import React from "react";
import { Backdrop } from "@mui/material";
import AccountDeletetionConfirmation from "./Account-Deletetion-Confirmation";
import ChangePassword from "./Change-Password";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { logOut } from "../../../../../services/user-login";
import Loader from "@/components/Loader/Loader";
const PasswordAndSecurity = () => {
  const [logoutLoading, setlogoutLoading] = React.useState(false);
  const id = Cookies.get("id");
  const [accountDeletionClicked, setAccountDeletionClicked] =
    React.useState(false);
  const [accountDeletionConfirmeed, setAccountDeletionConfirmed] =
    React.useState(false);
  const [changeAccountPassword, setChangeAccountPassword] =
    React.useState(false);
  const [userLogout, setUserLogout] = React.useState(false);
  const [backdropopen, setBackdropOpen] = React.useState(false);
  const handleBackdropClose = () => {
    setBackdropOpen(false);
  };
  const handleBackdropOpen = () => {
    setBackdropOpen(true);
  };
  const router = useRouter();
  const handleLogout = () => {
    cookieStore.set("token", null);
    cookieStore.set("id", null);
    router.push("/");
  };
  return (
    <div className="w-full flex flex-col items-center my-4">
      {!accountDeletionClicked && (
        <>
          <div className="w-full flex flex-row items-center justify-between my-3">
            <p className="text-gray-700 text-[12px] sm:text-[16px]">
              Logout from this session
            </p>
            <button
              className="button p-1  text-[12px] sm:text-[16px] sm:p-2 bg-red-600 text-white border border-red-600   rounded-md w-[120px] sm:w-[200px] "
              onClick={async () => {
                const logout = await logOut(setlogoutLoading);
                if (logout.updatedUser) {
                  handleLogout();
                }
              }}
            >
              {logoutLoading ? <Loader /> : "Logout"}
            </button>
          </div>

          <div className="w-full flex flex-row items-center justify-between my-3">
            <p className="text-gray-700 text-[12px] sm:text-[16px]">
              Change Password
            </p>
            <button
              className="button p-1   text-[12px] sm:text-[16px] sm:p-2 bg-[#E3BB59] text-white border border-[#E3BB59] hover:text-[#E3BB59] hover:border-[#E3BB59] hover:bg-white transition-all duration-300 rounded-md w-[120px] sm:w-[200px] "
              onClick={() => {
                setChangeAccountPassword(true);
                setAccountDeletionClicked(false);
                setAccountDeletionConfirmed(false);

                handleBackdropOpen();
              }}
            >
              Set Password
            </button>
          </div>
          <div className="w-full flex flex-row items-center justify-between my-3">
            <p className="text-gray-700 text-[12px] sm:text-[16px]">
              Request Account Deletion
            </p>
            <button
              className="button p-1  text-[12px] sm:text-[16px] sm:p-2 bg-red-600 text-white border border-red-600 hover:text-red-600 hover:border-red-600 hover:bg-white transition-all duration-300 rounded-md w-[120px] sm:w-[200px] "
              onClick={() => {
                setAccountDeletionClicked(true);
                setChangeAccountPassword(false);
                setAccountDeletionConfirmed(false);
              }}
            >
              Delete
            </button>
          </div>
        </>
      )}

      {accountDeletionClicked && (
        <div className="w-full flex flex-col items-center my-3">
          <h2 className="w-full text-gray-800 text-start">Account Deletion</h2>
          <ul className="  list-outside list-disc pl-5 space-y-2 w-full ml-2 mt-4">
            <li>
              Continuing with the application will be considered as your
              confirmation that there are no pending buying or selling
              transactions in your account.
            </li>
            <li>
              After successful deletion of your account, you will not be able to
              log in to a deleted account and view previous account history.
            </li>
          </ul>
          <div className="w-full flex flex-col items-start">
            <button
              className=" mt-4 sm:mt-12 ml-2 button p-1 px-4  text-[16px] sm:text-[16px] sm:p-2 sm:px-8 bg-red-600 text-white border border-red-600 hover:text-red-600 hover:border-red-600 hover:bg-white transition-all duration-300 rounded-md  "
              onClick={() => {
                setAccountDeletionConfirmed(true);
                setChangeAccountPassword(false);
                handleBackdropOpen();
              }}
            >
              Proceed
            </button>
          </div>
        </div>
      )}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdropopen}
      >
        {accountDeletionClicked && accountDeletionConfirmeed && (
          <AccountDeletetionConfirmation
            id={id}
            handleBackdropClose={handleBackdropClose}
          />
        )}
        {changeAccountPassword && (
          <ChangePassword handleBackdropClose={handleBackdropClose} />
        )}
        {/* { userLogout && (
          <ChangePassword
            handleBackdropClose={handleBackdropClose}
          />
        )} */}
      </Backdrop>
    </div>
  );
};

export default PasswordAndSecurity;
