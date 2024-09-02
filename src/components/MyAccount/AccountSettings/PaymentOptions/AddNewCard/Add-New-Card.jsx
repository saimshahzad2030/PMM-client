// "use client";
// import React from "react";
// import {
//   AMERICAN_EXPRESS,
//   PROTECTED,
//   VISA,
// } from "../../../../../../constants/icons";

// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";
// import { TextField, useTheme } from "@mui/material";
// import { addCard } from "../../../../../../services/card.services";
// import Loader from "@/components/Loader/Loader";
// const validationSchema = Yup.object({
//   cardnumber: Yup.string().required("full name is required"),
//   expirydate: Yup.date("Must be a date").required("required"),
//   cvv: Yup.string().required("City is required"),
//   nameoncard: Yup.string().required("Address is required"),
// });
// const AddNewCard = ({
//   handleBackdropClose,
//   setCardList,
//   setOpen,
//   setResponseMessage,
// }) => {
//   const [submitButtonClicked, setSubmitButtonClicked] = React.useState(false);
//   const [loading, setLoading] = React.useState(false);
//   const [selectedDate, setSelectedDate] = React.useState(null);
//   const theme = useTheme();

//   return (
//     <div className="form-container flex flex-col items-center w-11/12 sm:w-8/12 bg-white p-4 sm:p-8 rounded-sm h-[90vh] overflow-y-auto">
//       <div className="w-full flex flex-col items-end">
//         <button
//           onClick={() => {
//             handleBackdropClose();
//           }}
//           className="text-black"
//         >
//           X
//         </button>
//       </div>
//       <h4 className="text-start w-full text-gray-900 lato-700">Add New Card</h4>
//       <div className="mt-4 flex flex-row items-start w-full rounded-md border-2 border-[#2DB224] bg-[#EAF7E9] p-4">
//         <img
//           className="w-4 sm:w-8 h-auto"
//           src={PROTECTED.image}
//           alt={PROTECTED.name}
//         />
//         <div className="flex flex-col items-start   sm:mt-[2px] ml-2 sm:ml-4">
//           <p className="text-[#2DB224] text-[13px] sm:[text-14px] md:text-[16px]">
//             Your card details are protected.
//           </p>
//           <p className="text-gray-700  text-[12px] sm:[text-12px] md:text-[14px]">
//             Your card details are protected.
//           </p>
//         </div>
//       </div>
//       <div className="flex flex-row items-center justify-between mt-4 w-full">
//         <h4 className="text-start w-full text-gray-400 lato-700">
//           Card Details
//         </h4>
//         <div className="flex flex-row items-center justify-end  ">
//           <img
//             className="w-12 h-auto "
//             src={AMERICAN_EXPRESS.image}
//             alt={AMERICAN_EXPRESS.name}
//           />
//           <img className="w-12 h-auto " src={VISA.image} alt={VISA.name} />
//         </div>
//       </div>

//       <Formik
//         initialValues={{
//           cvv: "",
//           expirydate: selectedDate,
//           cardnumber: "",
//           nameoncard: "",
//         }}
//         validationSchema={validationSchema}
//         onSubmit={async (values) => {
//           const formattedValues = {
//             ...values,
//             expirydate: values.expirydate
//               ? values.expirydate.toISOString()
//               : null, // Convert to ISO string or desired format
//           };
//           const newCard = await addCard(
//             formattedValues.cardnumber,
//             formattedValues.nameoncard,
//             formattedValues.expirydate,
//             formattedValues.cvv,
//             setLoading
//           );
//           if (newCard.newCreditCard) {
//             setCardList((prevItems) => [...prevItems, newCard.newCreditCard]);
//             handleBackdropClose();
//             setOpen(true);
//             setResponseMessage(newCard.message);
//             values.cvv = "";
//             values.expirydate = "";
//             values.cardnumber = "";
//             values.nameoncard = "";
//             formattedValues.cvv = "";
//             formattedValues.expirydate = "";
//             formattedValues.cardnumber = "";
//             formattedValues.nameoncard = "";
//           } else {
//             setOpen(true);
//             setResponseMessage(newCard.message);
//           }
//         }}
//       >
//         {({
//           errors,
//           touched,
//           handleChange,
//           handleBlur,
//           values,
//           setFieldValue,
//         }) => (
//           <Form className="flex flex-col items-center md:flex-row md:items-start justify-between w-full  my-2">
//             <div className="w-full  grid grid-cols-2 gap-4">
//               <div className="flex flex-col items-center w-full   col-span-2 ">
//                 <TextField
//                   fullWidth
//                   id="cardnumber"
//                   name="cardnumber"
//                   label="Card Number"
//                   type="text"
//                   value={values.cardnumber}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   error={
//                     submitButtonClicked &&
//                     touched.cardnumber &&
//                     Boolean(errors.cardnumber)
//                   }
//                   helperText={
//                     submitButtonClicked &&
//                     touched.cardnumber &&
//                     errors.cardnumber
//                   }
//                 />
//               </div>

//               <div className="flex flex-col items-center w-full col-span-2 md:col-span-1 ">
//                 <LocalizationProvider dateAdapter={AdapterDayjs}>
//                   <DatePicker
//                     className="w-full"
//                     name="expirydate"
//                     label="Expiry Date"
//                     value={selectedDate}
//                     onChange={(newValue) => {
//                       setFieldValue("expirydate", newValue);
//                       setSelectedDate(newValue);
//                     }}
//                     renderInput={(params) => (
//                       <TextField
//                         {...params}
//                         fullWidth
//                         name="expirydate"
//                         id="expirydate"
//                         variant="outlined"
//                         margin="normal"
//                         error={
//                           submitButtonClicked &&
//                           touched.expirydate &&
//                           Boolean(errors.expirydate)
//                         }
//                         helperText={
//                           submitButtonClicked &&
//                           touched.expirydate &&
//                           errors.expirydate
//                         }
//                       />
//                     )}
//                   />
//                 </LocalizationProvider>
//                 <p className="text-red-700 text-[11px] w-full text-start">
//                   {submitButtonClicked &&
//                     touched.expirydate &&
//                     errors.expirydate}
//                 </p>
//               </div>
//               <div className="flex flex-col items-center w-full  col-span-2 md:col-span-1  ">
//                 <TextField
//                   fullWidth
//                   id="cvv"
//                   name="cvv"
//                   label="CVV"
//                   type="text"
//                   value={values.fullname}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   error={
//                     submitButtonClicked && touched.cvv && Boolean(errors.cvv)
//                   }
//                   helperText={submitButtonClicked && touched.cvv && errors.cvv}
//                 />
//               </div>
//               <div className="flex flex-col items-center w-full   col-span-2 ">
//                 <TextField
//                   fullWidth
//                   id="nameoncard"
//                   name="nameoncard"
//                   label="Name On Card"
//                   type="text"
//                   value={values.nameoncard}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   error={
//                     submitButtonClicked &&
//                     touched.nameoncard &&
//                     Boolean(errors.nameoncard)
//                   }
//                   helperText={
//                     submitButtonClicked &&
//                     touched.nameoncard &&
//                     errors.nameoncard
//                   }
//                 />
//               </div>
//               <div className="w-full col-span-2 flex flex-row items-center justify-end">
//                 <button
//                   className="p-1 sm:p-2  border rounded-md w-3/12 mr-4 text-gray-800"
//                   onClick={() => handleBackdropClose()}
//                 >
//                   Cancel
//                 </button>

//                 <button
//                   className="p-1 sm:p-2 w-3/12 button bg-[#E3BB59] text-white  border rounded-md border-[#E3BB59]  "
//                   type="submit"
//                   onClick={() => setSubmitButtonClicked(true)}
//                 >
//                   {loading ? <Loader /> : "Save"}
//                 </button>
//               </div>
//             </div>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default AddNewCard;

"use client";
import React from "react";
import {
  AMERICAN_EXPRESS,
  PROTECTED,
  VISA,
} from "../../../../../../constants/icons";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { TextField, useTheme } from "@mui/material";
import { addCard } from "../../../../../../services/card.services";
import Loader from "@/components/Loader/Loader";
const validationSchema = Yup.object({
  cardnumber: Yup.string().required("full name is required"),
  expirydate: Yup.date("Must be a date").required("required"),
  cvv: Yup.string().required("City is required"),
  nameoncard: Yup.string().required("Address is required"),
});

import { loadStripe } from "@stripe/stripe-js";
import { useStripe, useElements, Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe("your-publishable-key-here");
const AddNewCardForm = ({
  handleBackdropClose,
  setCardList,
  setOpen,
  setResponseMessage,
}) => {
  const stripe = useStripe();
  const elements = useElements();
  if (!stripe || !elements) {
    return;
  }

  const [submitButtonClicked, setSubmitButtonClicked] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState(null);
  const theme = useTheme();

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
      <h4 className="text-start w-full text-gray-900 lato-700">Add New Card</h4>
      <div className="mt-4 flex flex-row items-start w-full rounded-md border-2 border-[#2DB224] bg-[#EAF7E9] p-4">
        <img
          className="w-4 sm:w-8 h-auto"
          src={PROTECTED.image}
          alt={PROTECTED.name}
        />
        <div className="flex flex-col items-start   sm:mt-[2px] ml-2 sm:ml-4">
          <p className="text-[#2DB224] text-[13px] sm:[text-14px] md:text-[16px]">
            Your card details are protected.
          </p>
          <p className="text-gray-700  text-[12px] sm:[text-12px] md:text-[14px]">
            Your card details are protected.
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between mt-4 w-full">
        <h4 className="text-start w-full text-gray-400 lato-700">
          Card Details
        </h4>
        <div className="flex flex-row items-center justify-end  ">
          <img
            className="w-12 h-auto "
            src={AMERICAN_EXPRESS.image}
            alt={AMERICAN_EXPRESS.name}
          />
          <img className="w-12 h-auto " src={VISA.image} alt={VISA.name} />
        </div>
      </div>

      <Formik
        initialValues={{
          cvv: "",
          expirydate: selectedDate,
          cardnumber: "",
          nameoncard: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          const formattedValues = {
            ...values,
            expirydate: values.expirydate
              ? values.expirydate.toISOString()
              : null, // Convert to ISO string or desired format
          };
          const newCard = await addCard(
            formattedValues.cardnumber,
            formattedValues.nameoncard,
            formattedValues.expirydate,
            formattedValues.cvv,
            setLoading
          );
          if (newCard.newCreditCard) {
            setCardList((prevItems) => [...prevItems, newCard.newCreditCard]);
            handleBackdropClose();
            setOpen(true);
            setResponseMessage(newCard.message);
            values.cvv = "";
            values.expirydate = "";
            values.cardnumber = "";
            values.nameoncard = "";
            formattedValues.cvv = "";
            formattedValues.expirydate = "";
            formattedValues.cardnumber = "";
            formattedValues.nameoncard = "";
          } else {
            setOpen(true);
            setResponseMessage(newCard.message);
          }
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
          <Form className="flex flex-col items-center md:flex-row md:items-start justify-between w-full  my-2">
            <div className="w-full  grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center w-full   col-span-2 ">
                <TextField
                  fullWidth
                  id="cardnumber"
                  name="cardnumber"
                  label="Card Number"
                  type="text"
                  value={values.cardnumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    submitButtonClicked &&
                    touched.cardnumber &&
                    Boolean(errors.cardnumber)
                  }
                  helperText={
                    submitButtonClicked &&
                    touched.cardnumber &&
                    errors.cardnumber
                  }
                />
              </div>

              <div className="flex flex-col items-center w-full col-span-2 md:col-span-1 ">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    className="w-full"
                    name="expirydate"
                    label="Expiry Date"
                    value={selectedDate}
                    onChange={(newValue) => {
                      setFieldValue("expirydate", newValue);
                      setSelectedDate(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        fullWidth
                        name="expirydate"
                        id="expirydate"
                        variant="outlined"
                        margin="normal"
                        error={
                          submitButtonClicked &&
                          touched.expirydate &&
                          Boolean(errors.expirydate)
                        }
                        helperText={
                          submitButtonClicked &&
                          touched.expirydate &&
                          errors.expirydate
                        }
                      />
                    )}
                  />
                </LocalizationProvider>
                <p className="text-red-700 text-[11px] w-full text-start">
                  {submitButtonClicked &&
                    touched.expirydate &&
                    errors.expirydate}
                </p>
              </div>
              <div className="flex flex-col items-center w-full  col-span-2 md:col-span-1  ">
                <TextField
                  fullWidth
                  id="cvv"
                  name="cvv"
                  label="CVV"
                  type="text"
                  value={values.fullname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    submitButtonClicked && touched.cvv && Boolean(errors.cvv)
                  }
                  helperText={submitButtonClicked && touched.cvv && errors.cvv}
                />
              </div>
              <div className="flex flex-col items-center w-full   col-span-2 ">
                <TextField
                  fullWidth
                  id="nameoncard"
                  name="nameoncard"
                  label="Name On Card"
                  type="text"
                  value={values.nameoncard}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    submitButtonClicked &&
                    touched.nameoncard &&
                    Boolean(errors.nameoncard)
                  }
                  helperText={
                    submitButtonClicked &&
                    touched.nameoncard &&
                    errors.nameoncard
                  }
                />
              </div>
              <div className="w-full col-span-2 flex flex-row items-center justify-end">
                <button
                  className="p-1 sm:p-2  border rounded-md w-3/12 mr-4 text-gray-800"
                  onClick={() => handleBackdropClose()}
                >
                  Cancel
                </button>

                <button
                  className="p-1 sm:p-2 w-3/12 button bg-[#E3BB59] text-white  border rounded-md border-[#E3BB59]  "
                  type="submit"
                  onClick={() => setSubmitButtonClicked(true)}
                >
                  {loading ? <Loader /> : "Save"}
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
const AddNewCard = ({
  handleBackdropClose,
  setCardList,
  setOpen,
  setResponseMessage,
}) => (
  <Elements stripe={stripePromise}>
    <AddNewCardForm
      handleBackdropClose={handleBackdropClose}
      setCardList={setCardList}
      setOpen={setOpen}
      setResponseMessage={setResponseMessage}
    />
  </Elements>
);

export default AddNewCard;
