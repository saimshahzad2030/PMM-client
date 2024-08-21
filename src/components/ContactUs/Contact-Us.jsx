"use client"
import React from 'react'
import RouteComponent from '../RouteComponent/Route-Component'
import JoinNowSection from '../JoinNowSection/Join-Now-Section'

import {Snackbar,IconButton} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { 
    TextField, useTheme,useMediaQuery
  } from '@mui/material'; 
import { addQuery } from '../../../services/query.services';
import Loader from '../Loader/Loader'; 
  const validationSchema = Yup.object({ 
    email: Yup.string().email('Invalid email format').required('Email is required'),
    phone: Yup.string().max(11,'only 11 digits allowed').required('phone is required'), 
    query: Yup.string().required('Enter your concern'),
  })
const ContactUs = ({email,phone}) => {
    const theme = useTheme()
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const [submitButtonClicked,setSubmitButtonClicked] = React.useState(false)
    const [loading,setLoading] = React.useState(false)
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
    <div className="px-8 w-full flex flex-col items-center mb-12">
    <RouteComponent parentRoute={"Home >"} mainRoute={"Contact us"} />
    <Formik
        initialValues={{
          email: email, 
          query: '',
          phone: phone,
        }}
        validationSchema={validationSchema}
        onSubmit={async(values) => {
          // handleBackdropClose()
          const addNew = await addQuery(values.email,values.phone,values.query,setLoading)
          if(addNew.newQuery){
            setOpen(true)
            setResponseMessage(addNew.message)
            values.query = ""
            values.phone = "" 
          }
          console.log(values);
          console.log(addNew);
          // setUserLoggedIn(true)
        }}
        
      >
        {({ errors, touched, handleChange, handleBlur, values }) => (
          <Form className='w-full sm:w-8/12 md:w-7/12 lg:w-6/12 flex flex-col items-center my-8'>
            <div className='grid grid-cols-2 w-full gap-y-2 gap-x-2'>
           
              <div className='flex flex-col items-center col-span-2 sm:col-span-1'>
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  label="Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={submitButtonClicked &&touched.email && Boolean(errors.email)}
                  helperText={submitButtonClicked &&touched.email && errors.email}
                />
              </div>
              <div className='flex flex-col items-center col-span-2 sm:col-span-1'>
                <TextField
                  fullWidth
                  id="phone"
                  name="phone"
                  label="Phone"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={submitButtonClicked &&touched.phone && Boolean(errors.phone)}
                  helperText={submitButtonClicked &&touched.phone && errors.phone}
                />
              </div>
              <div className='flex flex-col items-center col-span-2'>
              <TextField
          id="outlined-textarea"
          name="query"
          label="Enter your feedback"
          placeholder="What can we do to improve your experience? *"
          multiline
          rows={isSmallScreen?4:10}
          value={values.query}
          sx={{width:'100%'}}

        onChange={handleChange}
        onBlur={handleBlur}
        error={submitButtonClicked &&touched.query && Boolean(errors.query)}
        helperText={submitButtonClicked &&touched.query && errors.query}
        />
        </div>
              <div className='flex flex-col items-start col-span-2'>
                <button className="rounded-md button bg-[#E3BB59] text-white p-2 px-4 w-auto" type="submit" onClick={()=>setSubmitButtonClicked(true)}>
                  {loading?<Loader/>:'Submit'}
                </button>
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
     <JoinNowSection 
     />
  </div>
  )
}

export default ContactUs