"use client";
import React from "react";
import {
  AMERICAN_EXPRESS,
  PROTECTED,
  VISA,
} from "../../../../../../constants/icons";

import {Snackbar,IconButton} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { TextField, useTheme, useMediaQuery } from "@mui/material";
import Button from "@/components/Button/Button";
import { addBank } from "../../../../../../services/bank.services";
const validationSchema = Yup.object({
  accountnumber: Yup.number("must be a number").required("Account No. is required").integer("must be a number"),
  accountname: Yup.string("must be a string").required("required"), 
  bankname: Yup.string("must be a string").required("bankname is required"),
});
const AddNewBank = ({ handleBackdropClose,setBankList }) => {
  const [submitButtonClicked, setSubmitButtonClicked] = React.useState(false); 
  const theme = useTheme();
  const [responseMessage,setResponseMessage] = React.useState(null)
 

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
      <h4 className="text-start w-full text-gray-900 lato-700">Add New Bank Account</h4>
      <div className="mt-4 flex flex-row items-start w-full rounded-md border-2 border-[#2DB224] bg-[#EAF7E9] p-4">
        <img
          className="w-4 sm:w-8 h-auto"
          src={PROTECTED.image}
          alt={PROTECTED.name}
        />
        <div className="flex flex-col items-start   sm:mt-[2px] ml-2 sm:ml-4">
          <p className="text-[#2DB224] text-[13px] sm:[text-14px] md:text-[16px]">Your Account details are protected.</p>
          <p className="text-gray-700  text-[12px] sm:[text-12px] md:text-[14px]">
            Your Account details are protected.
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between mt-4 w-full">
        <h4 className="text-start w-full text-gray-400 lato-700">
        Account Details
        </h4>
         
      </div>

      <Formik
        initialValues={{
          accountname: "",
          accountnumber: "",
          bankname: "", 
        }}
        validationSchema={validationSchema}
        onSubmit={async(values) => {
          const newBank = await addBank(values.bankname,values.accountname,values.accountnumber)
          if(newBank.message== "New Bank Added"){
            setBankList((prevItems) =>[...prevItems,newBank.newBankAccount ]) 
            values.accountname = ""
            values.accountnumber = ""
            values.bankname = ""
            handleBackdropClose()
          }
          else{
            setResponseMessage(newBank.message)
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
                    submitButtonClicked && touched.accountname && errors.accountname
                  } 
                />
              </div>

              
              <div className="flex flex-col items-center w-full  col-span-2   ">
              <TextField
                  fullWidth
                  id="accountnumber"
                  name="accountnumber"
                  label="Account Number"
                  type="text"
                  value={values.accountnumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    submitButtonClicked &&
                    touched.accountnumber &&
                    Boolean(errors.accountnumber)
                  }
                  helperText={
                    submitButtonClicked && touched.accountnumber && errors.accountnumber
                  }   
                />
                
              </div>
              <div className="flex flex-col items-center w-full   col-span-2 ">
              <TextField
                  fullWidth
                  id="bankname"
                  name="bankname"
                  label="Bank Name"
                  type="text"
                  value={values.bankname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    submitButtonClicked &&
                    touched.bankname &&
                    Boolean(errors.bankname)
                  }
                  helperText={
                    submitButtonClicked && touched.bankname && errors.bankname
                  } 
                />
              </div>
              <div className="w-full col-span-2 flex flex-row items-center justify-end" >
               
                <button className="p-1 sm:p-2  border rounded-md w-3/12 mr-4 text-gray-800" onClick={()=>handleBackdropClose()}>Cancel</button>
                 
                 <button className="p-1 sm:p-2 w-3/12 button bg-[#E3BB59] text-white  border rounded-md border-[#E3BB59] hover:border-[#E3BB59] hover:text-[#E3BB59] hover:bg-white transition-all duration-300" type="submit" onClick={()=>setSubmitButtonClicked(true)}>
                 Save
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <Snackbar
         anchorOrigin={{ vertical:'top', horizontal:'center' }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={responseMessage}
        action={action}
      />
    </div>
  );
};

export default AddNewBank;
