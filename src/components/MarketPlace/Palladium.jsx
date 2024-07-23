import React from "react";
import RouteComponent from "../RouteComponent/Route-Component";
import {
  MARKET_PLACE_PAGE,
  RARE_COINS,
  USA_BG,
} from "../../../constants/constants";
import { DROPDOWN, HEART } from "../../../constants/icons";
import Link from "next/link";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Pagination from "@mui/material/Pagination";
import JoinNowSection from "./Join-Now-Section";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
const Palladium = () => {
  return (
    <div className="flex flex-col items-center w-full px-8 mt-4 mb-12">
      <RouteComponent
        mainRoute={" Palladium"}
        parentRoute={`Home > Market Place >`}
      />

      <div className="w-full flex flex-col-reverse sm:flex-row items-start justify-between ">
        <div className="w-full sm:w-9/12 flex flex-col items-center">
          <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 md:gap-y-8">
            {MARKET_PLACE_PAGE.map((mp, index) => (
              <>
                {index === 12 && (
                  <div
                    className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4"
                    key={index}
                  >
                    <div className="flex flex-col items-center justify-center relative">
                      <img
                        className="w-full h-auto md:h-[300px] rounded-lg bg-black opacity-80"
                        src={USA_BG.image}
                        alt={USA_BG.name}
                      />
                      <div className="flex flex-col items-center absolute bg-black opacity-50 w-full h-full justify-center">
                        <h3 className="lato-700 text-[24px] md:text-[32px] xl:text-[40px] text-center text-white">
                          Collect rare coins
                        </h3>
                        <img
                          className="w-7/12 h-auto opacity-90"
                          src={RARE_COINS.image}
                          alt={RARE_COINS.name}
                        />
                      </div>
                      <Link
                        href={"/market-place/rare-collection"}
                        className="text-[12px] sm:text-[16px] text-white underline absolute right-2 bottom-2 sm:right-10 sm:bottom-10"
                      >
                        View all rare coins
                      </Link>
                    </div>
                  </div>
                )}

                <div className="flex flex-col items-center w-full" key={index}>
                  <div className="flex flex-col items-center w-11/12 bg-gray-100">
                    <div className="min-w-full h-full relative flex flex-col items-center justify-center bg-gray-200">
                      <img
                        className="w-9/12 h-full py-4 px-4"
                        src={mp.imageUrl}
                        alt={mp.imageName}
                      />
                      <img
                        className="w-6 h-6 absolute right-3 top-3"
                        src={HEART.image}
                        alt={HEART.name}
                      />
                    </div>
                    <div className="flex flex-col w-full px-2">
                      <span className="text-[10px] text-[#FF0F00] mt-2">
                        Best Seller
                      </span>
                      <p className="text-[14px] md:text-[13px] xl:text-[16px]">
                        {mp.description}
                      </p>
                      <span className="w-full text-end lato-700 text-[14px] md:text-[12px] xl:text-[17px]">
                        {mp.price}
                      </span>
                      <div className="flex flex-col items-center w-full mb-2">
                        <button className="button bg-[#E3BB59] w-11/12 py-2 rounded-[8px] mt-2 text-white">
                          Add to Cart{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className="w-full flex flex-row justify-center my-4">
            <Pagination count={10} />
          </div>
        </div>
        <div className="w-full sm:w-3/12 flex flex-col items-center h-full justify-between">
          <div className="flex flex-col items-center w-full ">
            <Accordion
              className="w-11/12 md:w-9/12"
              sx={{
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
                Metal
              </AccordionSummary>
              <AccordionDetails>
                <FormControl>
                  {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="palladium"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="gold"
                      control={<Radio />}
                      label="Gold"
                    />
                    <FormControlLabel
                      value="silver"
                      control={<Radio />}
                      label="Silver"
                    />
                    <FormControlLabel
                      value="platinum"
                      control={<Radio />}
                      label="Platinum"
                    />
                    <FormControlLabel
                      value="palladium"
                      control={<Radio />}
                      label="Palladium"
                    />
                  </RadioGroup>
                </FormControl>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className="w-11/12 md:w-9/12 mt-4"
              sx={{
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
                Type
              </AccordionSummary>
              <AccordionDetails>
                <FormControl>
                  {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="jewellery"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="jewellery"
                      control={<Radio />}
                      label="Jewellery"
                    />
                    <FormControlLabel
                      value="coins"
                      control={<Radio />}
                      label="Coins"
                    />
                    <FormControlLabel
                      value="bars"
                      control={<Radio />}
                      label="Bars"
                    />
                    <FormControlLabel
                      value="others"
                      control={<Radio />}
                      label="Others"
                    />
                  </RadioGroup>
                </FormControl>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className="w-11/12 md:w-9/12 mt-4"
              sx={{
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
                Price Range
              </AccordionSummary>
              <AccordionDetails>
                <div className="flex flex-row items-center justify-between">
                  <p className="border border-black p-2">$00</p>
                  <p>&nbsp;-&nbsp;</p>
                  <p className="border border-black p-2">$80</p>
                </div>
              </AccordionDetails>
            </Accordion>
            <div className="flex flex-col items-start w-11/12 sm:w-9/12 mt-4 sm:mb-0 mb-4">
              <h2>Popular Tags</h2>
              <div className="grid   sm:grid-col-1 lg:grid-cols-2 w-full gap-y-2 mt-2">
                <button className="w-full button p-2  border border-gray-400 sm:w-11/12 rounded-md hover:bg-[#E3BB59]  hover:border-[#E3BB59] hover:text-white transition-colors duration-300">
                  Lorem
                </button>
                <button className="w-full button p-2  border border-gray-400 sm:w-11/12 rounded-md hover:bg-[#E3BB59]  hover:border-[#E3BB59] hover:text-white transition-colors duration-300">
                  Lorem
                </button>
                <button className="w-full button p-2  border border-gray-400 sm:w-11/12 rounded-md hover:bg-[#E3BB59] hover:border-[#E3BB59] hover:text-white  transition-colors duration-300">
                  Lorem
                </button>
                <button className="w-full button p-2 border border-gray-400 sm:w-11/12 rounded-md hover:bg-[#E3BB59] hover:border-[#E3BB59] hover:text-white transition-colors duration-300">
                  Lorem
                </button>
                <button className="w-full button p-2  border border-gray-400 sm:w-11/12 rounded-md hover:bg-[#E3BB59] hover:border-[#E3BB59] hover:text-white transition-colors duration-300">
                  Lorem
                </button>
                <button className="w-full button p-2  border border-gray-400 sm:w-11/12 rounded-md hover:bg-[#E3BB59]  hover:border-[#E3BB59] hover:text-white transition-colors duration-300">
                  Lorem
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <JoinNowSection />
    </div>
  );
};

export default Palladium;
