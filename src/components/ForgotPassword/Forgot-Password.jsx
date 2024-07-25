"use client"
import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Checkbox from '@mui/material/Checkbox';
import { CROSS } from '../../../constants/icons';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
import {
  Button,
  TextField, 
} from '@mui/material';
import Link from 'next/link';

const validationSchema = Yup.object({
   
  email: Yup.string().email('Invalid email format').required('Email is required'),
 });
const ForgotPassword =({handleBackdropClose, setEmailEntered, setEmailVerified, setForgotPassword}) => {
    const [submitButtonClicked,setSubmitButtonClicked] = useState(false) 
    React.useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
          document.body.style.overflow = 'auto'; 
        };
      }, []);
  return (
    <div className='form-container flex flex-col items-center w-11/12 md:w-8/12 lg:w-7/12 xl:w-5/12 bg-white py-6 pb-12 px-8 md:px-20 rounded-xl h-[90vh] overflow-y-auto' >
        <div className='w-full flex flex-col items-end'><img className=" mt-1 mr-1 cursor-pointer w-6 h-6" onClick={handleBackdropClose} src={CROSS.image} alt={CROSS.name}/>
        </div>
      <h1 className='lato-700  text-[30px] md:text-[32px] xl:text-[40px] text-gray-800 mb-6 text-center'>
        Forgot Password
      </h1>
         <p className='  text-[16px] md:text-[14px] xl:text-[18px] text-gray-600 mb-6 text-center'>Don't worry ! It happens. Please enter your email and we will send the OTP.</p>
      <Formik
        initialValues={{ 
          email: '', 
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
            setEmailEntered(true)
            setEmailVerified(true)
            setForgotPassword(false)
        }}
        
      >
        {({ errors, touched, handleChange, handleBlur, values }) => (
          <Form className='w-full'>
            <div className='grid grid-cols-2 w-full gap-y-2 gap-x-2'>
               
              <div className='flex flex-col items-center col-span-2'>
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  label="Enter your email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={submitButtonClicked &&touched.email && Boolean(errors.email)}
                  helperText={submitButtonClicked &&touched.email && errors.email}
                />
              </div>
              
              
             
               
              <div className='flex flex-col items-center col-span-2'>
                <button className=" button bg-[#E3BB59] text-white p-2 w-full" type="submit" onClick={()=>setSubmitButtonClicked(true)}>
                  Continue
                </button>
              </div>
               
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

 

export default ForgotPassword