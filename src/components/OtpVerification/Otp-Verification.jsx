"use client"
import React, { useState } from 'react';
import { Formik, Form, Field,FieldArray  } from 'formik';
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
    otp: Yup.array()
      .of(
        Yup.string()
          .matches(/^[0-9]$/, 'Must be a single digit')
          .required('Required')
      )
      .length(4, 'Must be exactly 4 digits'),
  });
  
  const OtpVerification = ({ handleBackdropClose, setOtpEntered, setOtpVerified,email,setEmailVerified }) => {
    const [submitButtonClicked, setSubmitButtonClicked] = useState(false);
    const [timer, setTimer] = useState(120);

    React.useEffect(() => {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'auto';
      };
    }, []);
    const resetTimer = () => {
        setTimer(120);
      };
    React.useEffect(() => {
        document.body.style.overflow = 'hidden';
        const interval = setInterval(() => {
          setTimer(prevTimer => {
            if (prevTimer <= 1) {
              clearInterval(interval);
              return 0;
            }
            return prevTimer - 1;
          });
        }, 1000);
    
        return () => {
          clearInterval(interval);
          document.body.style.overflow = 'auto';
        };
      }, []);
    
    return (
      <div className='form-container flex flex-col items-center w-11/12 md:w-8/12 lg:w-7/12 xl:w-5/12 bg-white py-6 pb-12 px-8 md:px-20 rounded-xl h-[90vh] overflow-y-auto'>
        <div className='w-full flex flex-col items-end'>
          <img
            className="mt-1 mr-1 cursor-pointer w-6 h-6"
            onClick={handleBackdropClose}
            src={CROSS.image}
            alt={CROSS.name}
          />
        </div>
        <h1 className='lato-700 text-[30px] md:text-[32px] xl:text-[40px] text-gray-800 mb-6 text-center'>
          OTP Verification
        </h1>
        <p className='text-[16px] md:text-[14px] xl:text-[18px] text-gray-600 mb-6 text-center'>
          Enter the OTP sent to {email}
        </p>
        <Formik
          initialValues={{
            otp: ['', '', '', ''],
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            setSubmitButtonClicked(true);
            setOtpEntered(true);
            setOtpVerified(true);
            setEmailVerified(false)
          }}
        >
          {({ errors, touched, handleChange, handleBlur, values }) => (
            <Form className='w-full'>
              <div className='flex justify-center space-x-2 mb-4'>
                <FieldArray
                  name="otp"
                  render={arrayHelpers => (
                    <>
                      {values.otp.map((digit, index) => (
                        <TextField
                          key={index}
                          id={`otp-${index}`}
                          name={`otp.${index}`}
                          value={digit}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={submitButtonClicked && touched.otp && Boolean(errors.otp?.[index])}
                          helperText={submitButtonClicked && touched.otp && errors.otp?.[index]}
                          inputProps={{
                            maxLength: 1,
                            style: { textAlign: 'center' },
                          }}
                          style={{ width: '20%' }}
                        />
                      ))}
                    </>
                  )}
                />
              </div>
              <div className="flex flex-col items-center col-span-2">
        <span className='text-black text-[10px] sm:text-[14px] w-full text-center'>OTP expires in: {timer} seconds</span>
      </div>
              <div className='flex flex-col items-center col-span-2 '>
                 <p className='text-black  text-[10px] sm:text-[14px] w-full text-center my-2'>Haven't recieved?&nbsp;&nbsp;&nbsp; <span className='cursor-pointer text-blue-600'  onClick={resetTimer}>Resend</span></p>
              </div>
              
              <div className='flex flex-col items-center col-span-2 my-4'>
                <Button
                  className="button bg-[#E3BB59] text-white p-2 w-full"
                  type="submit"
                  onClick={() => setSubmitButtonClicked(true)}
                >
                  Continue
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    );
  };
  
  export default OtpVerification;