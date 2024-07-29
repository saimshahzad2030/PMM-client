"use client"
import React from 'react'
import RouteComponent from '../RouteComponent/Route-Component'
import JoinNowSection from '../JoinNowSection/Join-Now-Section'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { 
    TextField, useTheme,useMediaQuery
  } from '@mui/material'; 
  const validationSchema = Yup.object({ 
    email: Yup.string().email('Invalid email format').required('Email is required'),
    phone: Yup.string().max(11,'only 11 digits allowed').required('phone is required'),
    firstname: Yup.string().required('firstname is required'),
    lastname: Yup.string().required('lastname is required'),
    query: Yup.string().required('Enter your concern'),
  })
const ContactUs = () => {
    const theme = useTheme()
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const [submitButtonClicked,setSubmitButtonClicked] = React.useState(false)
  return (
    <div className="px-8 w-full flex flex-col items-center mb-12">
    <RouteComponent parentRoute={"Home >"} mainRoute={"Contact us"} />
    <Formik
        initialValues={{
          email: '',
          lastname: '',
          firstname: '',
          query: '',
          phone: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          // handleBackdropClose()
          console.log(values);
          // setUserLoggedIn(true)
        }}
        
      >
        {({ errors, touched, handleChange, handleBlur, values }) => (
          <Form className='w-full sm:w-8/12 md:w-7/12 lg:w-6/12 flex flex-col items-center my-8'>
            <div className='grid grid-cols-2 w-full gap-y-2 gap-x-2'>
            <div className='flex flex-col items-center col-span-2 sm:col-span-1'>
                <TextField
                  fullWidth
                  id="firstname"
                  name="firstname"
                  label="First name"
                  value={values.firstname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={submitButtonClicked &&touched.firstname && Boolean(errors.firstname)}
                  helperText={submitButtonClicked &&touched.firstname && errors.firstname}
                />
              </div>
              <div className='flex flex-col items-center col-span-2 sm:col-span-1'>
                <TextField
                  fullWidth
                  id="lastname"
                  name="lastname"
                  label="Last name"
                  value={values.lastname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={submitButtonClicked &&touched.lastname && Boolean(errors.lastname)}
                  helperText={submitButtonClicked &&touched.lastname && errors.lastname}
                />
              </div>
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
                  Submit
                </button>
              </div>
               
            </div>
          </Form>
        )}
      </Formik>
     <JoinNowSection 
     />
  </div>
  )
}

export default ContactUs