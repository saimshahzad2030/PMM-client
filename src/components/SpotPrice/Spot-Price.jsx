"use client";
import React from "react";
import RouteComponent from "../RouteComponent/Route-Component";
import Link from "next/link";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { CAN_USD, EURO, USD } from "../../../constants/icons";
import { RARE_COINS, USA_BG } from "../../../constants/constants";
import RelatedPorducts from "../ProductDetails/Related-Porducts";
import AreaChart from "../AreaChart/Area-Chart";
const SpotPrice = ({ metalName,  spotPrice,color,related,cartItems }) => {
  const [currency, setCurrency] = React.useState("usd");

  const handleChange = (event) => {
    setCurrency(event.target.value);
    if(event.target.value == 'usd'){
      multiplyValues(1)
    }
    else if(event.target.value == 'euro'){
      multiplyValues(0.92)
    }
    else{
      multiplyValues(1.38)
    }
  };
  const dataset = Array.from({ length: 200 }, (_, i) => ({
    date: new Date(2023, i, 1),
   
  value: Math.floor(Math.random() * 900) + 100,
  }))
  const [data1,setData1] = React.useState(dataset)
  const multiplyValues = (factor) => {
    setData1(
      dataset.map((item) => ({
        ...item, // spread operator to copy the existing properties
        value: item.value * factor, // multiply the value by the factor
      }))
    );
  };
//   const data1 = [
//     { date: new Date(2023, 0, 1), value: 30 },
//     { date: new Date(2023, 1, 1), value: 50 },
//     { date: new Date(2023, 2, 1), value: 70 },
//     { date: new Date(2023, 3, 1), value: 90 },
//     { date: new Date(2023, 4, 1), value: 60 },
//     { date: new Date(2023, 5, 1), value: 100 },
//     { date: new Date(2023, 6, 1), value: 120 },
//     { date: new Date(2023, 7, 1), value: 30 },
//     { date: new Date(2023, 8, 1), value: 50 },
    
// ];
  return (
    <div className="w-full flex flex-col items-start px-8">
      <RouteComponent
        parentRoute={"Hoome > Marketplace > "}
        mainRoute={"Gold Spot Price"}
      />
      <div className="flex flex-row w-full bg-[#F2F2F2] my-4">
        <Link
          className={`button w-3/12 border border-t-0 border-r-0 border-l-0 ${
            metalName == "gold"
              ? "border-b-[#E3BB59] text-[#E3BB59] border-b-2"
              : "border-b-0 "
          } text-[#6D6D6D] py-2 text-center `}
          href={"/market-place/gold-spot-price"}
        >
          Gold
        </Link>
        <Link
          href={"/market-place/silver-spot-price"}
          className={`button w-3/12 border border-t-0 border-r-0 border-l-0  ${
            metalName == "silver"
              ? "border-b-[#E3BB59] text-[#E3BB59] border-b-2"
              : "border-b-0 "
          } text-[#6D6D6D] py-2 text-center `}
        >
          Silver
        </Link>
        <Link
          href={"/market-place/platinum-spot-price"}
          className={`button w-3/12 border border-t-0 border-r-0  ${
            metalName == "platinum"
              ? "border-b-[#E3BB59] text-[#E3BB59] border-b-2"
              : "border-b-0 "
          }  py-2 text-center `}
        >
          Platinum
        </Link>
        <Link
          href={"/market-place/palladium-spot-price"}
          className={`button w-3/12 border border-t-0 border-r-0 border-l-0  ${
            metalName == "palladium"
              ? "border-b-[#E3BB59] text-[#E3BB59] border-b-2"
              : "border-b-0 "
          } text-[#6D6D6D] py-2 text-center `}
        >
          Palladium
        </Link>
      </div>
      <div className="flex flex-row items-center justify-start w-full sm:w-6/12 md:w-5/12 lg:w-3/12">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{`${spotPrice.name} Live Spot Pricing`}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={currency}
            label={`${spotPrice.name} Live Spot Pricing`}
            onChange={handleChange}
          >
            <MenuItem value={"usd"}>
              <div className="flex flex-row items-center">
                <img
                  className="w-8 h-auto mr-4"
                  src={USD.image}
                  alt={USD.name}
                />
                <p>USD</p>
              </div>
            </MenuItem>
            <MenuItem value={"euro"}>
              {" "}
              <div className="flex flex-row items-center ">
                <img
                  className="w-8 h-auto mr-4"
                  src={EURO.image}
                  alt={EURO.name}
                />
                <p>EURO</p>
              </div>
            </MenuItem>
            <MenuItem value={"can-usd"}>
              {" "}
              <div className="flex flex-row items-center ">
                <img
                  className="w-8 h-auto mr-4"
                  src={CAN_USD.image}
                  alt={CAN_USD.name}
                />
                <p>Canadian Dollar</p>
              </div>
            </MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="grid grid-cols-4 w-full sm:w-6/12 md:w-5/12 lg:w-4/12 text-start my-8">
        <span className="text-gray-600 lato-700">{spotPrice.name}</span>
        <span className="text-gray-600">{spotPrice.price1}</span>
        <span className="text-[#E3BB59]">{spotPrice.price2}</span>
        <span
          className={`${
            spotPrice.status == "negative" ? "text-red-700" : "text-green-700"
          }`}
        >
          {spotPrice.status === "negative" ? "-" : "+"}
          {spotPrice.rate}
        </span>
      </div>
      <AreaChart data={data1} color={color} currency={currency=='usd'?'$':currency=='euro'?'€':'$'}/>
      <div className="flex flex-col items-center justify-center relative w-full rounded-lg mt-8">
                      <img
                        className="w-full h-auto md:h-[500px] rounded-lg bg-black opacity-70"
                        src={USA_BG.image}
                        alt={USA_BG.name}
                      />
                      <div className="flex flex-col items-center absolute rounded-lg bg-black opacity-70 w-full h-full justify-center">
                        <h3 className="lato-700 text-[24px] md:text-[32px] xl:text-[40px] text-center text-white mt-4">
                          Collect rare coins
                        </h3>
                        <button className="button bg-white text-[#E3BB59] p-1 px-2 sm:p-2 mt-4">Shop Now</button>
                        <img
                          className="w-7/12 h-auto opacity-90 mt-4"
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
                    <RelatedPorducts  products={related} cartItems={cartItems} />
    </div> 
  );
};

export default SpotPrice;
