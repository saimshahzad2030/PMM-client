"use client";
import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Checkbox from "@mui/material/Checkbox";
import { CROSS } from "../../../constants/icons";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
import { TextField } from "@mui/material";
import Link from "next/link";
import { login } from "../../../services/user-login";
import { Snackbar, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Loader from "../Loader/Loader";
import { useRouter } from "next/navigation";
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
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
});
const LoginForm = ({
  handleBackdropClose,
  setCreatingAcccount,
  setSigningIn,
  setForgotPassword,
  setUserLoggedIn,
}) => {
  const [loading, setLoading] = React.useState(false);
  const [submitButtonClicked, setSubmitButtonClicked] = useState(false);
  const [responseMessage, setResponseMessage] = useState(null);
  React.useEffect(() => {
    document.body.style.overflow = "hidden"; // Disable body scroll when form is open
    return () => {
      document.body.style.overflow = "auto"; // Enable body scroll when form is closed
    };
  }, []);

  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const reload = () => {
    router.refresh();
  };

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
    <div className="form-container flex flex-col items-center w-11/12 md:w-8/12 lg:w-7/12 xl:w-5/12 bg-white py-6 pb-12 px-8 md:px-16 rounded-xl h-[90vh] overflow-y-auto">
      <div className="w-full flex flex-col items-end">
        <img
          className=" mt-1 mr-2 cursor-pointer w-6 h-6"
          onClick={handleBackdropClose}
          src={CROSS.image}
          alt={CROSS.name}
        />
      </div>
      <h1 className="lato-700  text-[30px] md:text-[32px] xl:text-[40px] text-gray-800 mb-6 text-center">
        Signin
      </h1>

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          // handleBackdropClose()
          const userLogin = await login(
            values.email,
            values.password,
            setLoading
          );
          console.log(userLogin);
          setOpen(true);
          setResponseMessage(userLogin?.message);
          console.log(userLogin?.message);
          if (userLogin.updatedUser) {
            setUserLoggedIn(true);
            setTimeout(() => {
              setSigningIn(false);
              handleBackdropClose();
              reload();
            }, 1500);
          }
        }}
      >
        {({ errors, touched, handleChange, handleBlur, values }) => (
          <Form className="w-full">
            <div className="grid grid-cols-2 w-full gap-y-2 gap-x-2">
              <div className="flex flex-col items-center col-span-2">
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  label="Email"
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

              <div className="flex flex-col items-center col-span-2">
                <TextField
                  fullWidth
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
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
                />
              </div>

              <div className="flex flex-row items-center justify-between col-span-2 py-2">
                <div className="flex flex-row items-center">
                  <Checkbox {...label} />
                  <p className="text-black text-[12px] sm:text-[16px]">
                    Remember me
                  </p>
                </div>
                <button
                  className="text-blue-600  text-[12px] sm:text-[16px]"
                  onClick={() => {
                    setForgotPassword(true);
                    setSigningIn(false);
                  }}
                >
                  forgot password?{" "}
                </button>
              </div>
              <div className="flex flex-col items-center col-span-2">
                <button
                  className=" button bg-[#E3BB59] text-white p-2 w-full"
                  type="submit"
                  onClick={() => setSubmitButtonClicked(true)}
                >
                  {loading ? <Loader className={"py-[3px]"} /> : `sdasdsa`}
                </button>
              </div>
              <div className="flex flex-col items-center col-span-2">
                <p className="text-black  text-[10px] sm:text-[14px] w-full text-center">
                  New to Precious Metal Market? &nbsp;&nbsp;&nbsp;{" "}
                  <span
                    className="cursor-pointer text-blue-600"
                    onClick={() => {
                      setCreatingAcccount(true);
                      setSigningIn(false);
                    }}
                  >
                    Create an Account
                  </span>
                </p>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={responseMessage}
        action={action}
      />
    </div>
  );
};

export default LoginForm;
