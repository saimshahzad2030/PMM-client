"use client";
import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Checkbox from "@mui/material/Checkbox";
import { CROSS } from "../../../constants/icons";

import {Snackbar} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Visibility, VisibilityOff } from "@mui/icons-material"; 
const label = { inputProps: { "aria-label": "Checkbox demo" } };
import {   TextField, 
  IconButton,
    InputAdornment } from "@mui/material";
import Link from "next/link";
import { signup } from "../../../services/user-signup"; 
import Loader from "../Loader/Loader";
const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
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
  password2: Yup.string()
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
const SignupForm = ({
  handleBackdropClose,
  setCreatingAcccount,
  setSigningIn,
}) => {
  const [submitButtonClicked, setSubmitButtonClicked] = useState(false);
  const [pass1Visibility,setPass1Visibility] = React.useState(false)
    const [pass2Visibility,setPass2Visibility] = React.useState(false)
    const [loading,setLoading] = React.useState(false)
  React.useEffect(() => {
    document.body.style.overflow = "hidden"; // Disable body scroll when form is open
    return () => {
      document.body.style.overflow = "auto"; // Enable body scroll when form is closed
    };
  }, []);
  const togglePassword1Visibility = () => {
    setPass1Visibility(!pass1Visibility);
  };
  const togglePassword2Visibility = () => {
    setPass2Visibility(!pass2Visibility);
  };  
  const [responseMessage,setResponseMessage] = useState(null)
 

    const [open, setOpen] = React.useState(false);

   
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
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
    <div className="form-container flex flex-col items-center w-11/12 md:w-8/12 lg:w-7/12 xl:w-5/12 bg-white py-6 pb-12 px-8 md:px-20 rounded-xl h-[90vh] overflow-y-scroll">
      <div className="w-full flex flex-col items-end">
        <img
          className=" mt-1 mr-1 cursor-pointer w-6 h-6"
          onClick={handleBackdropClose}
          src={CROSS.image}
          alt={CROSS.name}
        />
      </div>
      <h1 className="lato-700  text-[30px] md:text-[32px] xl:text-[40px] text-gray-800 mb-6 text-center">
        Create an Account
      </h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          password2: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async(values) => {
          console.log(values);
          const userSignup = await signup(
            values.email,
            values.password,
            values.firstName,
            values.lastName,
            setLoading
          );
          if(userSignup.user){
            setOpen(true);
            setResponseMessage(userSignup.message);
            setTimeout(()=>{
              // handleBackdropClose()
              setCreatingAcccount(false);
              setSigningIn(true);
            },1500)
            
          }
          else{
            setOpen(true);
            setResponseMessage(userSignup.message);
          }
        }}
      >
        {({ errors, touched, handleChange, handleBlur, values }) => (
          <Form className="w-full">
            <div className="grid grid-cols-2 w-full gap-y-2 gap-x-2">
              <div className="flex flex-col items-center col-span-2 md:col-span-1">
                <TextField
                  fullWidth
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    submitButtonClicked &&
                    touched.firstName &&
                    Boolean(errors.firstName)
                  }
                  helperText={
                    submitButtonClicked && touched.firstName && errors.firstName
                  }
                />
              </div>
              <div className="flex flex-col items-center col-span-2 md:col-span-1">
                <TextField
                  fullWidth
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    submitButtonClicked &&
                    touched.lastName &&
                    Boolean(errors.lastName)
                  }
                  helperText={
                    submitButtonClicked && touched.lastName && errors.lastName
                  }
                />
              </div>
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
                  type={pass1Visibility?'text':'password'}
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
                          onClick={togglePassword1Visibility}
                        >
                          {pass1Visibility ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div className="flex flex-col items-center col-span-2">
                <TextField
                  fullWidth
                  id="password2"
                  name="password2"
                  label="Re-Enter Password"
                  type={pass2Visibility?'text':'password'}

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
                          onClick={togglePassword2Visibility}
                        >
                          {pass2Visibility ? <Visibility /> : <VisibilityOff />}
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
                  {loading?<Loader/>:'Sign Up'}
                </button>
              </div>
              <div className="flex flex-col items-center col-span-2">
                <p className="text-black text-[10px] sm:text-[14px] w-full text-center">
                  Already have an account?&nbsp;&nbsp;&nbsp;{" "}
                  <span
                    className="cursor-pointer text-blue-600"
                    onClick={() => {
                      setCreatingAcccount(false);
                      setSigningIn(true);
                    }}
                  >
                    Log in
                  </span>
                </p>
              </div>
            </div>
            <Snackbar
         anchorOrigin={{ vertical:'top', horizontal:'center' }}
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

export default SignupForm;
