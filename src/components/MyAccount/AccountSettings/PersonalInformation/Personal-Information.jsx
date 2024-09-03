"use client";
import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  TextField,
  useMediaQuery,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { updateInfo } from "../../../../../services/account-info.services";
import { Snackbar, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Loader from "@/components/Loader/Loader";
import dayjs from "dayjs";
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  fullname: Yup.string()
    .min(8, "full name must be complete")
    .required("Date is required"),
  dob: Yup.date().required("Date is required"),
  phone: Yup.number()
    .min(11, "must be a valid number")
    .required("Phone is Required"),
  gender: Yup.string().required("Gender is Required"),
});
const PersonalInformation = ({ user }) => {
  const [submitButtonClicked, setSubmitButtonClicked] = useState(false);
  const [loading, setLoading] = useState(false);

  const [selectedDate, setSelectedDate] = React.useState(
    user?.birthday ? dayjs(user?.birthday) : null
  );

  const isSmallScreen = useMediaQuery("(max-width: 640px)");
  const [responseMessage, setResponseMessage] = React.useState(null);

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
    <div className="form-container flex flex-col items-center w-full bg-white py-2 sm:py-6 pb-12 ">
      <Formik
        initialValues={{
          email: user.email,
          fullname: user.name,
          dob: selectedDate,
          phone: user.phone,
          gender: user.gender,
        }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          const formattedValues = {
            ...values,
            dob: values.dob ? values.dob.toISOString() : null, // Convert to ISO string or desired format
          };
          const user = await updateInfo(
            formattedValues.email,
            formattedValues.fullname,
            formattedValues.dob,
            formattedValues.phone,
            formattedValues.gender,
            setLoading
          );
          setOpen(true);
          setResponseMessage(user.message);
        }}
      >
        {({
          errors,
          touched,
          handleChange,
          handleBlur,
          values,
          setFieldValue,
        }) => (
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
                  size={isSmallScreen ? "small" : "medium"}
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
                  size={isSmallScreen ? "small" : "medium"}
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
                  size={isSmallScreen ? "small" : "medium"}
                />
              </div>

              <div className="flex flex-col items-center col-span-1">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    className="w-full"
                    name="dob"
                    label="Date of birth"
                    value={selectedDate}
                    onChange={(newValue) => {
                      setFieldValue("dob", newValue);
                      setSelectedDate(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        fullWidth
                        name="dob"
                        id="dob"
                        variant="outlined"
                        margin="normal"
                        error={
                          submitButtonClicked &&
                          touched.dob &&
                          Boolean(errors.dob)
                        }
                        helperText={
                          submitButtonClicked && touched.dob && errors.dob
                        }
                      />
                    )}
                  />
                </LocalizationProvider>
                <p className="text-red-700 text-[11px] w-full text-start">
                  {submitButtonClicked && touched.dob && errors.dob}
                </p>
              </div>
              {/* <div className="flex flex-col items-center col-span-1">
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
              </div> */}
              <div className="flex flex-col items-center col-span-1">
                <FormControl
                  fullWidth
                  error={
                    submitButtonClicked &&
                    touched.gender &&
                    Boolean(errors.gender)
                  }
                  size={isSmallScreen ? "small" : "medium"}
                >
                  <InputLabel id="gender-label">Gender</InputLabel>
                  <Select
                    labelId="gender-label"
                    id="gender"
                    name="gender"
                    value={values.gender}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="Gender"
                  >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                  </Select>
                  {submitButtonClicked &&
                    touched.gender &&
                    Boolean(errors.gender) && (
                      <div style={{ color: "red", fontSize: "12px" }}>
                        {errors.gender}
                      </div>
                    )}
                </FormControl>
              </div>
            </div>
            <div className="flex flex-col items-start w-full my-4">
              <button
                className=" button bg-[#E3BB59] text-white p-1 sm:p-2 w-3/12 rounded-md border border-white hover:bg-white hover:text-[#E3BB59] hover:border-[#E3BB59] transition-all duration-300"
                type="submit"
                onClick={() => {
                  setSubmitButtonClicked(true);
                }}
              >
                {loading ? <Loader color={"#E3BB59"} /> : "Save"}
              </button>
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

export default PersonalInformation;
