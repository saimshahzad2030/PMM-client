'use client'
import React from "react"; 
import { 
  RARE_COINS,
  USA_BG,
} from "../../../constants/constants";
import { DROPDOWN, HEART } from "../../../constants/icons";
import Link from "next/link";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Pagination from "@mui/material/Pagination";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";   
import { useRouter } from "next/navigation";
import SingleProduct from "./SingleProduct";

const Productscomponent = ({products,selectedMetal,selectedType,cartItems}) => {
  const [cartProducts, setCartProducts] = React.useState(cartItems);
  const [productsList,setProductList] = React.useState(products)
  const router = useRouter()
  const productClickHandler=(id)=>{
    router.push(`/market-place/product-details/${id}`)
  }
  return (
    <div className="w-full flex flex-col-reverse sm:flex-row items-start justify-between ">
        {products.length>0?
        <div className="w-full sm:w-9/12 flex flex-col items-center">
        <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 md:gap-y-8">
          {productsList.map((product, index) => (
            <>
              {index === Math.ceil(products.length/2) && (
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

              
              <SingleProduct
                product={product}
                key={index} 
              />
            </>
          ))}
        </div>
        <div className="w-full flex flex-row justify-center my-4">
          <Pagination count={10} />
        </div>
      </div>:
      <h1>{`No ${selectedMetal} Products to show`}</h1>}
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
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue={selectedMetal}
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
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue={selectedType?selectedType:'jewellery'}
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
  )
}

export default Productscomponent