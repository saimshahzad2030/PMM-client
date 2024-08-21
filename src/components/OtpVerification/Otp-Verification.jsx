"use client"
import { useState, useEffect } from "react";
import React from "react";
import { CROSS } from '../../../constants/icons';
import { sendOtp, verifyOtp } from "../../../services/user-login";
import Loader from "../Loader/Loader";

const OtpVerification = ({ handleBackdropClose, setOtpEntered, setOtpVerified, email, setEmailVerified,otpId }) => {
  const [finalotp, setFinalOtp] = useState("");
  const [timer, setTimer] = useState(120);
  const [loading, setLoading] = useState(false); // Add a loading state
  const [otp, setOtp] = useState(new Array(4).fill(""));

  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const resetTimer = async() => {
    const resendOtp = await sendOtp(email);
    console.log(resendOtp)
    setTimer(120);
  };

  React.useEffect(() => {
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

  useEffect(() => {
    if (finalotp.length === 4) {
      // Only call the API if not loading
      if (!loading) {
        handleOtpVerification(finalotp);
      }
    }
  }, [finalotp]);

  const handleOtpVerification = async (otp) => { 
      const response = await verifyOtp(Number(finalotp) ,otpId,setLoading); 
      if(response.message == 'Otp verified'){
        setOtpEntered(false)
        setOtpVerified(true)
        setEmailVerified(false)
      }
   
  };

  const handleChangeOtp = (newOtp) => {
    setFinalOtp(newOtp);
  };

  const handleChange = (element, index) => {
    if (loading) return; // Disable change event if loading

    const value = element.value;
    if (!value) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (index < 4 - 1 && value) {
      element.nextSibling.focus();
    }

    handleChangeOtp(newOtp.join(""));
  };

  const handleBackspace = (element, index) => {
    if (loading) return; // Disable backspace event if loading

    const newOtp = [...otp];
    newOtp[index] = "";
    setOtp(newOtp);

    if (index > 0) {
      element.previousSibling.focus();
    }

    handleChangeOtp(newOtp.join(""));
  };

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
      <p className="text-black">{finalotp}</p>
      <div className='w-full flex flex-col items-center'>
        <div className="my-4">
          {otp.length > 0 && otp.map((data, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={data}
              className="w-14 h-14 border-[3px] mr-5 text-2xl text-medium rounded-lg text-center border-gray-600 text-gray-600"
              onChange={(e) => handleChange(e.target, index)}
              onKeyDown={(e) => {
                if (e.key === "Backspace") {
                  handleBackspace(e.target, index);
                }
              }}
              disabled={loading} // Disable input if loading
            />
          ))}
        </div>
        <div className="flex flex-col items-center col-span-2">
          <span className='text-black text-[10px] sm:text-[14px] w-full text-center'>OTP expires in: {timer} seconds</span>
        </div>
        <div className='flex flex-col items-center col-span-2 '>
          <p className='text-black text-[10px] sm:text-[14px] w-full text-center my-2'>Haven't received?&nbsp;&nbsp;&nbsp; <span className='cursor-pointer text-blue-600' onClick={resetTimer}>Resend</span></p>
        </div>
        <div className='flex flex-col items-center col-span-2 my-4'>
          <button
            className="button bg-[#E3BB59] text-white p-2 w-full"
            type="submit"
            onClick={async() => {
              
              const response = await verifyOtp(Number(finalotp) ,otpId,setLoading); 
              if(response.message == 'Otp verified'){
                setOtpEntered(false)
                setOtpVerified(true)
                setEmailVerified(false)
                setSubmitButtonClicked(true)
              }
            }}
            disabled={loading} 
          >
            {loading?<Loader/>:'Continue'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
