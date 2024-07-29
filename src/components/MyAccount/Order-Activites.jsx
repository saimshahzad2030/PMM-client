"use client"
import React from 'react'  
import { DROPDOWN, ORDER_DELIVERED } from "../../../constants/icons";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
const OrderActivites = ({activities}) => {
  return (
    <Accordion className="w-full"
    sx={{
        boxShadow: 'none',
        border: '1px solid #ddd', 
        
        '& .MuiAccordionSummary-root': {
          borderBottom: '1px solid #ddd', 

        },
      }}>
    <AccordionSummary
      expandIcon={
          <img
          className=" ml-2 w-4 h-4 "
          src={DROPDOWN.image}
          alt={DROPDOWN.name}
        />
      }
      aria-controls="panel1-content"
      id="panel1-header"
    >
      <p className='ml-4'>Order Activity</p>
    </AccordionSummary>
    <AccordionDetails>
      <div className='flex flex-col items-center pl-4 w-full'>
      {activities.map((activity)=>(
        <div className='flex flex-row items-center w-full my-4'>
            <div className='flex flex-col items-center justify-center '>
            <img className='w-12 h-12' src={ORDER_DELIVERED.image} alt={ORDER_DELIVERED.name} />
              </div>
            <div className='flex flex-col items-start ml-2 w-full'>
                <p className='text-[12px] sm:text-[16px]'>{activity.activityName}</p>
                <p className='text-gray-400 text-[10px] sm:text-[14px]'>{activity.activityDate}</p>
            </div>
          </div>
      ))}
      </div>
    </AccordionDetails>
  </Accordion>
  )
}

export default OrderActivites