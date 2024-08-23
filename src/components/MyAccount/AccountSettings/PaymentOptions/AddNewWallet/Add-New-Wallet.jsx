"use client";
import React from "react";
import {
  AMERICAN_EXPRESS,
  PROTECTED,
  VISA,
} from "../../../../../../constants/icons";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { TextField, useTheme, useMediaQuery } from "@mui/material";
import Button from "@/components/Button/Button";
import { Email } from "@mui/icons-material";
import { addDigitalCard } from "../../../../../../services/wallet.service";
import Loader from "@/components/Loader/Loader";
const validationSchema = Yup.object({
  walletname: Yup.string().required("full name is required"),
  accountname: Yup.number("must be a number").required("can't be empty"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
});
const AddNewWallet = ({
  handleBackdropClose,
  setWalletList,
  setOpen,
  setResponseMessage,
}) => {
  const [submitButtonClicked, setSubmitButtonClicked] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  return (
    <div className="form-container flex flex-col items-center w-11/12 sm:w-8/12 bg-white p-4 sm:p-8 rounded-sm h-[90vh] overflow-y-auto">
      <div className="w-full flex flex-col items-end">
        <button
          onClick={() => {
            handleBackdropClose();
          }}
          className="text-black"
        >
          X
        </button>
      </div>
      <h4 className="text-start w-full text-gray-900 lato-700">
        Add New Digital Wallet Account
      </h4>
      <div className="mt-4 flex flex-row items-start w-full rounded-md border-2 border-[#2DB224] bg-[#EAF7E9] p-4">
        <img
          className="w-4 sm:w-8 h-auto"
          src={PROTECTED.image}
          alt={PROTECTED.name}
        />
        <div className="flex flex-col items-start   sm:mt-[2px] ml-2 sm:ml-4">
          <p className="text-[#2DB224] text-[13px] sm:[text-14px] md:text-[16px]">
            Your Account details are protected.
          </p>
          <p className="text-gray-700  text-[12px] sm:[text-12px] md:text-[14px]">
            Your Account details are protected.
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between mt-4 w-full">
        <h4 className="text-start w-full text-gray-400 lato-700">
          Account Details
        </h4>
        <div className="flex flex-row items-center justify-end  "></div>
      </div>

      <Formik
        initialValues={{
          accountname: "",
          email: "",
          walletname: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          console.log(values);
          // setSubmitButtonClicked(true)
          const newCard = await addDigitalCard(
            values.accountname,
            values.walletname,
            values.email,
            setLoading
          );
          if (newCard.newDigitalWallet) {
            setWalletList((prevItems) => [
              ...prevItems,
              newCard.newDigitalWallet,
            ]);
            handleBackdropClose();
            setOpen(true);
            setResponseMessage(newCard.message);
            values.walletname = "";
            values.email = "";
            values.accountname = "";
          } else {
            setOpen(true);
            setResponseMessage(newCard.message);
          }
        }}
      >
        {({ errors, touched, handleChange, handleBlur, values }) => (
          <Form className="flex flex-col items-center md:flex-row md:items-start justify-between w-full  my-2">
            <div className="w-full  grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center w-full   col-span-2 ">
                <TextField
                  fullWidth
                  id="accountname"
                  name="accountname"
                  label="Account Name"
                  type="text"
                  value={values.accountname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    submitButtonClicked &&
                    touched.accountname &&
                    Boolean(errors.accountname)
                  }
                  helperText={
                    submitButtonClicked &&
                    touched.accountname &&
                    errors.accountname
                  }
                />
              </div>

              <div className="flex flex-col items-center w-full  col-span-2   ">
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  label="Email"
                  type="text"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    submitButtonClicked &&
                    touched.email &&
                    Boolean(errors.email)
                  }
                  helperText={
                    submitButtonClicked && touched.email && errors.email
                  }
                />
              </div>
              <div className="flex flex-col items-center w-full   col-span-2 ">
                <TextField
                  fullWidth
                  id="walletname"
                  name="walletname"
                  label="Wallet"
                  type="text"
                  value={values.walletname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    submitButtonClicked &&
                    touched.walletname &&
                    Boolean(errors.walletname)
                  }
                  helperText={
                    submitButtonClicked &&
                    touched.walletname &&
                    errors.walletname
                  }
                />
              </div>
              <div className="w-full col-span-2 flex flex-row items-center justify-end">
                <button
                  className="p-1 sm:p-2  border rounded-md w-3/12 mr-4 text-gray-800"
                  onClick={() => handleBackdropClose()}
                >
                  Cancel
                </button>
                <button
                  className="p-1 sm:p-2 w-3/12 button bg-[#E3BB59] text-white  border rounded-md border-[#E3BB59] "
                  type="submit"
                  onClick={() => {
                    setSubmitButtonClicked(true);
                  }}
                >
                  {loading ? <Loader /> : "Save"}
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddNewWallet;
