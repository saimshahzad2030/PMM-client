"use client";
import React from "react";
import RouteComponent from "../RouteComponent/Route-Component";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
// import { SEARCH } from '../../../constants/icons'
import { Search } from "@mui/icons-material";
import { DROPDOWN, LOAD_MORE } from "../../../constants/icons";
import { FAQS } from "../../../constants/constants";
import JoinNowSection from "../JoinNowSection/Join-Now-Section";
const Faqs = () => {
  const [search, setSearch] = React.useState("");
  return (
    <div className="px-8 w-full fle xlfe-col items-center mb-12">
      <RouteComponent parentRoute={"Home >"} mainRoute={"FAQS"} />
      <div className="flex flex-row items-center justify-center my-8">
        <div className="flex flex-row justify-center items-center w-full sm:w-8/12 md:w-6/12  text-gray-800">
          <TextField
            fullWidth
            id="searchfaqs"
            name="searchfaqs"
            label="Search Faqs"
            type={"text"}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton aria-label="toggle password visibility">
                    <Search />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
      </div>
      {FAQS.map((faq, index) => (
        <Accordion
          key={index}
          className="w-full"
          sx={{
            marginTop: "16px",
            backgroundColor: "#F4F2F1",
            boxShadow: "none",
            border: "1px solid #ddd",
            "&:before": {
              display: "none",
            },
            "& .MuiAccordionSummary-root": {
              borderBottom: "1px solid #ddd",
            },
          }}
        >
          <AccordionSummary
            expandIcon={
              <img
                className="w-4 h-4 "
                src={DROPDOWN.image}
                alt={DROPDOWN.name}
              />
            }
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <h2 className="lato-700 text-[20px] text-[#515151]">{faq.faq}</h2>
          </AccordionSummary>
          <AccordionDetails>{faq.answer}</AccordionDetails>
        </Accordion>
      ))}

      <JoinNowSection text={""} />
    </div>
  );
};

export default Faqs;
