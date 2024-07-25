"use client";
import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { TextField,useMediaQuery } from "@mui/material";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  fullname: Yup.string()
    .min(8, "full name must be complete")
    .required("Date is required"),
  dob: Yup.string().required("Date is required"),
  phone: Yup.number().min(11, "must be a valid number"),
  gender: Yup.string().required("Gender is Required"),
});
const PersonalInformation = ({ user }) => {
  const [submitButtonClicked, setSubmitButtonClicked] = useState(false);
  const isSmallScreen = useMediaQuery('(max-width: 640px)');

  return (
    <div className="form-container flex flex-col items-center w-full bg-white py-2 sm:py-6 pb-12 ">
      <Formik
        initialValues={{
          email: "",
          fullname: "",
          dob: "",
          phone: "",
          gender: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
        
      >
        {({ errors, touched, handleChange, handleBlur, values }) => (
          <Form className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-y-4 gap-x-2">
            <div className="flex flex-col items-center col-span-1">
                <TextField
                  fullWidth
                  id="fullname"
                  name="fullname"
                  label="Full name"
                  type="text"
                  value={values.fullname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    submitButtonClicked &&
                    touched.fullname &&
                    Boolean(errors.fullname)
                  }
                  helperText={
                    submitButtonClicked && touched.fullname && fullname.password
                  }
                  size={isSmallScreen?'small':'medium'}
                />
              </div>

              <div className="flex flex-col items-center col-span-1">
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
                  size={isSmallScreen?'small':'medium'}

                />
              </div>

              <div className="flex flex-col items-center col-span-1">
                <TextField
                  fullWidth
                  id="phone"
                  name="phone"
                  label="Phone number"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    submitButtonClicked &&
                    touched.phone &&
                    Boolean(errors.phone)
                  }
                  helperText={
                    submitButtonClicked && touched.phone && errors.phone
                  }
                  size={isSmallScreen?'small':'medium'}

                />
              </div>

              <div className="flex flex-col items-center col-span-1">
                <TextField
                  fullWidth
                  id="dob"
                  name="dob"
                  label="Date of birth"
                  value={values.dob}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    submitButtonClicked &&
                    touched.dob &&
                    Boolean(errors.dob)
                  }
                  helperText={
                    submitButtonClicked && touched.dob && errors.dob
                  }
                  size={isSmallScreen?'small':'medium'}

                />
              </div>
              <div className="flex flex-col items-center col-span-1">
                <TextField
                  fullWidth
                  id="gender"
                  name="gender"
                  label="Gender"
                  value={values.gender}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    submitButtonClicked &&
                    touched.gender &&
                    Boolean(errors.gender)
                  }
                  helperText={
                    submitButtonClicked && touched.gender && errors.gender
                  }
                  size={isSmallScreen?'small':'medium'}

                />
              </div>
                  
               
            </div>
            <div className="flex flex-col items-start w-full my-4">
                <button
                  className=" button bg-[#E3BB59] text-white p-1 sm:p-2 w-3/12 rounded-md border border-white hover:bg-white hover:text-[#E3BB59] hover:border-[#E3BB59] transition-all duration-300"
                  type="submit"
                  onClick={() => setSubmitButtonClicked(true)}
                >
                  Save
                </button>
              </div>
            
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PersonalInformation;
