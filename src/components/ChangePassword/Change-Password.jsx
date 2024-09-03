"use client";
import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Checkbox from "@mui/material/Checkbox";
import { CROSS } from "../../../constants/icons";

import { Visibility, VisibilityOff } from "@mui/icons-material";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
import { TextField, InputAdornment } from "@mui/material";
import Link from "next/link";
import { changePassOnForget } from "../../../services/user-login";

import { Snackbar, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Loader from "../Loader/Loader";
const validationSchema = Yup.object({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[@$!%*?&#]/,
      "Password must contain at least one special character"
    )
    .required("Password is required"),
  password2: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[@$!%*?&#]/,
      "Password must contain at least one special character"
    )
    .required("Password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});
const ChangePassword = ({
  email,
  handleBackdropClose,
  setSigningIn,
  setOtpVerified,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [loading, setLoading] = React.useState(false);
  const [submitButtonClicked, setSubmitButtonClicked] = useState(false);
  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };
  const [responseMessage, setResponseMessage] = useState(null);
  React.useEffect(() => {
    document.body.style.overflow = "hidden"; // Disable body scroll when form is open
    return () => {
      document.body.style.overflow = "auto"; // Enable body scroll when form is closed
    };
  }, []);

  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );
  return (
    <div className="form-container flex flex-col items-center w-11/12 md:w-8/12 lg:w-7/12 xl:w-5/12 bg-white py-6 pb-12 px-8 md:px-20 rounded-xl h-[90vh] overflow-y-auto">
      <div className="w-full flex flex-col items-end">
        <img
          className=" mt-1 mr-1 cursor-pointer w-6 h-6"
          onClick={handleBackdropClose}
          src={CROSS.image}
          alt={CROSS.name}
        />
      </div>
      <h1 className="lato-700  text-[30px] md:text-[32px] xl:text-[40px] text-gray-800 mb-6 text-center">
        Forgot Password
      </h1>
      <Formik
        initialValues={{
          password: "",
          password2: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          const changePass = await changePassOnForget(
            email,
            values.password,
            setLoading
          );
          if (changePass.message == "Password Succesfully changed") {
            setOpen(true);
            setResponseMessage(
              changePass.message + ". Redirecting you to login page"
            );
            setTimeout(() => {
              setOtpVerified(false);
              setSigningIn(true);
            }, 2000);
          } else {
            setResponseMessage("unexpected error occurred");
          }
          // handleBackdropClose()
        }}
      >
        {({ errors, touched, handleChange, handleBlur, values }) => (
          <Form className="w-full">
            <div className="grid grid-cols-2 w-full gap-y-2 gap-x-2">
              <div className="flex flex-col items-center col-span-2">
                <TextField
                  fullWidth
                  id="password"
                  name="password"
                  label="Enter new password"
                  type={showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    submitButtonClicked &&
                    touched.password &&
                    Boolean(errors.password)
                  }
                  helperText={
                    submitButtonClicked && touched.password && errors.password
                  }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={togglePasswordVisibility}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div className="flex flex-col items-start col-span-2 p-0 w-full">
                <p className="text-[12px] text-gray-700">
                  Please add all necessary characters to create safe password
                </p>
                <ul className="list-disc list-inside text-[12px] text-gray-700 pl-2 mb-3">
                  <li>Minimum character 12</li>
                  <li>One special character (!@%$)</li>
                  <li>One number</li>
                </ul>
              </div>
              <div className="flex flex-col items-center col-span-2">
                <TextField
                  fullWidth
                  id="password2"
                  name="password2"
                  label="Re-Enter Password"
                  type={showPassword2 ? "text" : "password"}
                  value={values.password2}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    submitButtonClicked &&
                    touched.password2 &&
                    Boolean(errors.password2)
                  }
                  helperText={
                    submitButtonClicked && touched.password2 && errors.password2
                  }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={togglePasswordVisibility2}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>

              <div className="flex flex-row items-center col-span-2 py-2">
                <Checkbox {...label} />
                <p className="text-black text-[12px]">
                  By creating an account you agree to Precious Metal Market,
                  <Link className="text-blue-600" href={"/"}>
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link className="text-blue-600" href={"/"}>
                    Terms & Conditions
                  </Link>{" "}
                  .
                </p>
              </div>
              <div className="flex flex-col items-center col-span-2">
                <button
                  className=" button bg-[#E3BB59] text-white p-2 w-full"
                  type="submit"
                  onClick={() => setSubmitButtonClicked(true)}
                >
                  {loading ? <Loader /> : "Update Password"}
                </button>
              </div>
            </div>
            <Snackbar
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
              message={responseMessage}
              action={action}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ChangePassword;
