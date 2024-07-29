 
 
"use client";
import React from "react"; 
import { Formik, Form, Field } from "formik";
import * as Yup from "yup"; 
import { Visibility, VisibilityOff } from '@mui/icons-material';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
import Checkbox from '@mui/material/Checkbox';
import Link from "next/link";
import {
  
  TextField, 
  IconButton,
    InputAdornment,  useTheme, useMediaQuery
} from '@mui/material';
import Button from "@/components/Button/Button";
const validationSchema = Yup.object({
  oldpassword: Yup.string().required("full name is required"),
  newpassword: Yup.date().required("Must be a date").required("required"), 
  newpassword2: Yup.string().required("Address is required"),
});
const ChangePassword = ({ handleBackdropClose }) => {
    const [oldPasswordVisibility,setOldPasswordVisibility] = React.useState(false)
    const [newPasswordVisibility,setNewPasswordVisibility] = React.useState(false)
    const [newPasswordVisibility2,setNewPasswordVisibility2] = React.useState(false)
  const [submitButtonClicked, setSubmitButtonClicked] = React.useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const togglePasswordVisibility = () => {
    setOldPasswordVisibility(!oldPasswordVisibility);
  };
  const togglePasswordVisibility2 = () => {
    setNewPasswordVisibility(!newPasswordVisibility);
  }; 
  const togglePasswordVisibility3 = () => {
    setNewPasswordVisibility2(!newPasswordVisibility2);
  };
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
      <h4 className="text-center w-full text-gray-900 lato-700 text-[20px] sm:text-[16px] md:text-[24px] mb-8">Change Password</h4>
     
      

      <Formik
        initialValues={{
            oldpassword: "",
            newpassword: "",
            newpassword2: "", 
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched, handleChange, handleBlur, values }) => (
          <Form className="flex flex-col items-center md:flex-row md:items-start justify-between w-full  my-2">
            <div className="w-full  grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center w-full   col-span-2 ">
              <TextField
                  fullWidth
                  id="oldpassword"
                  name="oldpassword"
                  label="Enter Old Password"
                  type={oldPasswordVisibility ? 'text' : 'password'}

                  value={values.oldpassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={submitButtonClicked &&touched.oldpassword && Boolean(errors.oldpassword)}
                  helperText={submitButtonClicked &&touched.oldpassword && errors.oldpassword}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={togglePasswordVisibility}
                        >
                          {oldPasswordVisibility ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div className="flex flex-col items-center w-full   col-span-2 ">
              <TextField
                  fullWidth
                  id="newpassword"
                  name="newpassword"
                  label="Enter New Password"
                  type={newPasswordVisibility ? 'text' : 'password'}

                  value={values.newpassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={submitButtonClicked &&touched.newpassword && Boolean(errors.newpassword)}
                  helperText={submitButtonClicked &&touched.newpassword && errors.newpassword}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={togglePasswordVisibility2}
                        >
                          {newPasswordVisibility ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              
              <div className='flex flex-col items-start col-span-2 p-0 w-full'>
                <p className='text-[12px] sm:text-[14px] md:text-[16px] text-gray-700'>Please add all necessary characters to create safe password</p>
                 <ul className='list-disc list-inside text-[12px] sm:text-[14px] md:text-[16px] text-gray-700 pl-2 mb-3'>
                    <li>Minimum character 12</li>
                    <li>One special character (!@%$)</li>
                    <li>One number</li>
                </ul>
              </div>
              <div className="flex flex-col items-center w-full   col-span-2 ">
              <TextField
                  fullWidth
                  id="newpassword2"
                  name="newpassword2"
                  label="Re-Enter Password"
                  type={newPasswordVisibility2 ? 'text' : 'password'}

                  value={values.newpassword2}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={submitButtonClicked &&touched.newpassword2 && Boolean(errors.newpassword2)}
                  helperText={submitButtonClicked &&touched.newpassword2 && errors.newpassword2}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={togglePasswordVisibility3}
                        >
                          {newPasswordVisibility2 ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div className='flex flex-row items-center col-span-2 py-2'>
              <Checkbox {...label} />
              <p className='text-black text-[12px] sm:text-[14px] md:text-[16px]'>By creating an account you agree to Precious Metal Market,<Link className="text-blue-600" href={'/'}>Privacy Policy</Link> and <Link className="text-blue-600" href={'/'}>Terms & Conditions</Link> .</p>
              </div>
              <div className="w-full col-span-2 flex flex-row items-center justify-end" >
             
                 
                 <button className="p-1 sm:p-2 w-full button bg-[#E3BB59] text-white  border rounded-md border-[#E3BB59] hover:border-[#E3BB59] hover:text-[#E3BB59] hover:bg-white transition-all duration-300" type="submit" onClick={()=>setSubmitButtonClicked(true)}>
                 Update
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
 

export default ChangePassword