"use client";
import React from "react";
import { METAL_VALUES } from "../../../constants/constants";
import { useRouter } from "next/navigation";
import Palladium from "../MarketPlace/Palladium";
import axios from "axios";

const MetalValues = () => {
  const [metalData, setMetalData] = React.useState(METAL_VALUES);

  const router = useRouter();
  // React.useEffect(() => {
  //   const fetchPrices = async () => {
  //     try {
  //       const response1 = await axios.get(
  //         "https://www.goldapi.io/api/XAU/USD",
  //         {
  //           headers: {
  //             "x-access-token": `goldapi-5u1sm1j7ztx8-io`,
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );
  //       const response2 = await axios.get(
  //         "https://www.goldapi.io/api/XAG/USD",
  //         {
  //           headers: {
  //             "x-access-token": `goldapi-5u1sm1j7ztx8-io`,
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );
  //       const response3 = await axios.get(
  //         "https://www.goldapi.io/api/XPT/USD",
  //         {
  //           headers: {
  //             "x-access-token": `goldapi-5u1sm1j7ztx8-io`,
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );
  //       const response4 = await axios.get(
  //         "https://www.goldapi.io/api/XPD/USD",
  //         {
  //           headers: {
  //             "x-access-token": `goldapi-5u1sm1j7ztx8-io`,
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );
  //       console.log({
  //         gold: response1.data,
  //         silver: response2.data,
  //         platinum: response3.data,
  //         Palladium: response4.data,
  //       });
  //       setMetalData({
  //         gold: response1.data,
  //         silver: response2.data,
  //         platinum: response3.data,
  //         Palladium: response4.data,
  //       });
  //     } catch (err) {
  //       console.log(err);
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchPrices();
  // }, []);
  const clickHandler = (metal) => {
    const lowercaseMetal = metal.toLowerCase();
    router.push(`/market-place/${lowercaseMetal}-spot-price`);
  };
  return (
    <div className="pt-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-4  w-full py-4 ">
      {Object.entries(metalData).map(([metalName, value], index) => (
        <div
          className="cursor-pointer flex flex-row items-center w-full justify-center"
          key={index}
          onClick={() => {
            clickHandler(metalName);
          }}
        >
          <div
            className="flex flex-row w-11/12 justify-evenly text-gray-600 text-[12px] md:text-[11px] lg:text-[14px] xl:text-[16px]
            "
          >
            <div className="grid grid-cols-4 w-full text-center">
              <span className="first-letter:uppercase">{metalName}</span>
              <span>{`${Math.floor(Number(value.open_price))} $`}</span>
              <span className="text-[#E3BB59]">{`${Math.floor(
                Number(value.price)
              )} $`}</span>
              <span
                className={`${
                  value.price - value.open_price < 0
                    ? "text-red-700"
                    : "text-green-700"
                }`}
              >
                {`${value.price - value.open_price < 0 ? "-" : "+"}`}
                {`${(
                  ((value.price - value.open_price) / value.open_price) *
                  100
                ).toFixed(2)} %`}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MetalValues;
