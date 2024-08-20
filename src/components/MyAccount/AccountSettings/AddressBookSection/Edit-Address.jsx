"use client";
import React from "react";
import { Snackbar, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { TextField, useMediaQuery } from "@mui/material";
import Button from "@/components/Button/Button";
import {
  addNewAddress,
  deleteAddress,
  updateAddress,
} from "../../../../../services/address.services";
const validationSchema = Yup.object({
  fullname: Yup.string().required("full name is required"),
  phone: Yup.string().required("Phone is required"),
  city: Yup.string().required("City is required"),
  address: Yup.string().required("Address is required"),
  state: Yup.string().required("State is required"),
  postalcode: Yup.string().required("String is required"),
});
const EditAddress = ({
  editAddress,
  address,
  cancelClickHandler,
  setAllAddress,
}) => {
  const [submitButtonClicked, setSubmitButtonClicked] = React.useState(false);
  //edit window open:
  const [deliveryType, setDeliveryType] = React.useState(
    editAddress ? address.addressType : "HOME"
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
    <>
      <Formik
        initialValues={{
          address: editAddress ? address.address : "",
          fullname: editAddress ? address.fullName : "",
          postalcode: editAddress ? address.postalcode : "",
          phone: editAddress ? address.phone : "",
          city: editAddress ? address.city : "",
          state: editAddress ? address.state : "",
          deliverytype: deliveryType,
        }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          values.deliverytype = deliveryType;
          if (editAddress) {
            const updatedAddress = await updateAddress(
              address.id,
              values.fullname,
              values.phone,
              values.address,
              Number(values.postalcode),
              values.city,
              values.state,
              values.deliverytype,
              "DEFAULT"
            );
            if (true && updatedAddress.newAddress) {
              setAllAddress((prevItems) =>
                prevItems.map((item) =>
                  item.id === address.id
                    ? {
                        ...item,
                        fullName:values.fullname,
                        phone:values.phone,
                        address:       values.address,
                        postalcode:Number(values.postalcode),
                        city:values.city,
                        state:values.state,
                        addressType:values.deliverytype
                      }
                    : item
                )
              );

              cancelClickHandler();
            } else {
              console.log(updatedAddress);
              setResponseMessage(updatedAddress.message);
              setOpen(true);
            }
          } else {
            const newAddress = await addNewAddress(
              values.fullname,
              values.phone,
              values.address,
              Number(values.postalcode),
              values.city,
              values.state,
              values.deliverytype
            );
            if (true && newAddress.newAddress) {
              setAllAddress((prevAddress) => [
                ...prevAddress,
                newAddress.newAddress,
              ]);
              cancelClickHandler();
            } else {
              setOpen(true);
            }
          }
        }}
      >
        {({ errors, touched, handleChange, handleBlur, values }) => (
          <Form className="flex flex-col items-center md:flex-row md:items-start justify-between w-full px-4 my-8">
            <div className="w-full md:w-6/12 flex flex-col items-start">
              <div className="flex flex-col items-center w-full md:w-11/12  ">
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

              <div className="flex flex-col items-center w-full md:w-11/12  mt-4">
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
                  className="text-[10px]"
                />
              </div>
            </div>

            <div className="w-full md:w-6/12 flex flex-col  items-start md:items-end mt-4 md:mt-0">
              <div className="flex flex-col items-end w-full md:w-11/12 ">
                <TextField
                  fullWidth
                  id="address"
                  name="address"
                  label="House/Unit/Flr #, Bldg Name, Blk or Lot #"
                  type="text"
                  value={values.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    submitButtonClicked &&
                    touched.address &&
                    Boolean(errors.address)
                  }
                  helperText={
                    submitButtonClicked && touched.address && fullname.address
                  }
                  size={isSmallScreen ? "small" : "medium"}
                />
              </div>

              <div className="flex flex-col items-end w-full md:w-11/12  mt-4">
                <TextField
                  fullWidth
                  id="postalcode"
                  name="postalcode"
                  label="Postal Code"
                  value={values.postalcode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    submitButtonClicked &&
                    touched.postalcode &&
                    Boolean(errors.postalcode)
                  }
                  helperText={
                    submitButtonClicked &&
                    touched.postalcode &&
                    errors.postalcode
                  }
                  size={isSmallScreen ? "small" : "medium"}
                />
              </div>

              <div className="flex flex-col items-end w-full md:w-11/12  mt-4">
                <TextField
                  fullWidth
                  id="city"
                  name="city"
                  label="City"
                  value={values.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    submitButtonClicked && touched.city && Boolean(errors.city)
                  }
                  helperText={
                    submitButtonClicked && touched.city && errors.city
                  }
                  size={isSmallScreen ? "small" : "medium"}
                />
              </div>

              <div className="flex flex-col items-end w-full md:w-11/12  mt-4">
                <TextField
                  fullWidth
                  id="state"
                  name="state"
                  label="state"
                  value={values.state}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    submitButtonClicked &&
                    touched.state &&
                    Boolean(errors.state)
                  }
                  helperText={
                    submitButtonClicked && touched.state && errors.state
                  }
                  size={isSmallScreen ? "small" : "medium"}
                />
              </div>
              <div className="flex flex-col items-end w-full md:w-11/12  mt-4">
                <p className="w-full text-start text-gray-400">
                  Select label for effective delivery
                </p>
                <div className="flex flex-row items-center justify-between w-full mt-2">
                  <Button
                    bgColor={
                      editAddress
                        ? deliveryType == "HOME"
                          ? "[#E3BB59]"
                          : "white"
                        : deliveryType == "HOME"
                        ? "[#E3BB59]"
                        : "white"
                    }
                    textColor={deliveryType == "HOME" ? "white" : "gray-400"}
                    text={"Home"}
                    others={
                      deliveryType == "HOME"
                        ? "border  w-[48%] rounded-md border-[#E3BB59]"
                        : "border  w-[48%] rounded-md border-gray-600"
                    }
                    padding={"p-1 sm:p-2"}
                    clickHandler={() => {
                      setDeliveryType("HOME");
                    }}
                    borderAfter={deliveryType == "OFFICE" && "[#E3BB59]"}
                    textAfter={deliveryType == "OFFICE" && "[#E3BB59]"}
                  />
                  <Button
                    bgColor={
                      editAddress
                        ? deliveryType == "OFFICE"
                          ? "[#E3BB59]"
                          : "white"
                        : deliveryType == "OFFICE"
                        ? "[#E3BB59]"
                        : "white"
                    }
                    textColor={deliveryType == "OFFICE" ? "white" : "gray-400"}
                    text={"Office"}
                    others={
                      deliveryType == "OFFICE"
                        ? "border  w-[48%] rounded-md border-[#E3BB59]"
                        : "border  w-[48%] rounded-md border-gray-600"
                    }
                    padding={"p-1 sm:p-2"}
                    borderAfter={
                      deliveryType == "HOME" ? "[#E3BB59]" : "[#E3BB59]"
                    }
                    textAfter={
                      deliveryType == "OFFICE" ? "[#E3BB59]" : "gray-600"
                    }
                    clickHandler={() => {
                      setDeliveryType("OFFICE");
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col items-end w-full md:w-11/12  mt-4">
                <div
                  className={`flex flex-row items-center justify-between w-full mt-2`}
                >
                  {editAddress ? (
                    <button className="underline w-[30%] p-1 sm:p-2 rounded-md  text-red-700"
                    onClick={async()=>{
                      const response = await deleteAddress(address.id) 
                      setAllAddress((prevItems) => prevItems.filter(item => item.id !== address.id)) ;
                      cancelClickHandler()

                    }}
                    >
Delete
                    </button>
                  
                  ) : (
                    <Button
                      others={" w-3/12 p-1 sm:p-2 rounded-md "}
                      textColor={"white"}
                      text={"white"}
                    />
                  )}
                  <Button
                    others={
                      "border border-[#E3BB59] p-1 sm:p-2 w-[30%] rounded-md "
                    }
                    bgColor={"white"}
                    text={"Cancel"}
                    textColor={"[#E3BB59]"}
                    clickHandler={() => {
                      cancelClickHandler();
                    }}
                  />
                  <button type="submit" className="border p-1 sm:p-2 w-[30%] rounded-md bg-[#E3BB59] text-white hover:text-[#E3BB59] hover:bg-white hover:border-[#E3BB59] transition-all duration-300">
                    Save
                  </button>
                   
                </div>
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
    </>
  );
};

export default EditAddress;
