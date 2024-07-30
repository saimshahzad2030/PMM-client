"use client";
import React from "react";
import RouteComponent from "../RouteComponent/Route-Component";
import styles from "./Cart.module.css";
import { CART } from "../../../constants/constants";
import { CheckBox } from "@mui/icons-material";
import { Checkbox } from "@mui/material";
import { useRouter } from "next/navigation";
import Link from "next/link";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const Cart = () => {
  const [cartData, setCartData] = React.useState(CART);
  const [total,setTotal] = React.useState(0)

  const [selectAll, setSelectAll] = React.useState(false);
  const handleQuantityChange = (sellerIndex, productIndex, change,price) => {
    setCartData((prevCartData) =>
      prevCartData.map((cart, index) =>
        index === sellerIndex
          ? cart.map((product, pIndex) =>
              pIndex === productIndex
                ? {
                    ...product,
                    quantity: product.quantity + change> -1  && product.quantity + change <=product.available
                      ? product.quantity + change
                        : product.quantity,
                  
                      }
                  
                : product
            )
          : cart
      )
    );
    setTotal(total + price)
  };


  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setCartData((prevCartData) =>
      prevCartData.map((cart) =>
        cart.map((product) => ({
          ...product,
          selected: !selectAll,
        }))
      )
    );
  };

  const handleGroupSelect = (sellerIndex) => {
    setCartData((prevCartData) =>
      prevCartData.map((cart, index) =>
        index === sellerIndex
          ? cart.map((product) => ({
              ...product,
              selected: !cart.every((product) => product.selected),
            }))
          : cart
      )
    );
  };
  const router = useRouter();
  const routeToFavourites = ()=>{
    router.push('/market-place/favourites')
  }
  return (
    <div className="flex flex-col items-start px-8 mb-8">
      <RouteComponent parentRoute={"Home > "} mainRoute={"Cart"} />
      <div className={`w-full overflow-x-scroll ${styles.hideScrollbar} `}>
        <table className="table-auto w-full  mb-4 ">
          <thead className="text-[12px] sm:[text-14px] md:text-[16px] lato-700 ">
            <tr className="border border-gray-500 rounded-sm mb-4 px-4">
              <th className={`text-start text-gray-400 p-4`}>
                <div className="flex flex-row items-center">
                <Checkbox
                    checked={selectAll}
                    onChange={handleSelectAll}
                    sx={{
                      borderRadius: "50%",
                      color: "#E3BB59",
                      "&.Mui-checked": { color: "#E3BB59" },
                    }}
                  />
                  Product
                </div>
              </th>
              <th className={`text-start text-gray-400 p-4`}>Unit price</th>
              <th className={`text-start text-gray-400 p-4`}>Quanitiy</th>
              <th className={`text-start text-gray-400 p-4`}>Total Price</th>
            </tr>
          </thead> 
          {cartData.map((cart, sellerIndex) => (
            <tbody
              key={sellerIndex}
              className="w-full overflow-x-scroll text-[12px] sm:[text-14px] md:text-[16px] mt-16"
            >
              <tr className="w-full mt-8">
                <td colSpan="4" className="">
                  <div className=" p-4 mt-8 border border-gray-500 text-gray-600 rounded-sm">
                  <Checkbox
                      checked={cart.every((product) => product.selected)}
                      onChange={() => handleGroupSelect(sellerIndex)}
                      sx={{
                        marginRight: "32px",
                        borderRadius: "50%",
                        color: "#E3BB59",
                        "&.Mui-checked": { color: "#E3BB59" },
                      }}
                    />

                    {cart[0].seller}
                  </div>
                </td>
              </tr>
              {cart.map((singleProduct, productIndex) => (
                <tr key={productIndex} className="border border-gray-400 mb-8 ">
                  <td
                    className={` py-4  text-start min-w-[250px] sm:min-w-[400px]  px-4`}
                  >
                    <div className="flex flex-row items-center">
                    <Checkbox
                        checked={singleProduct.selected || false}
                        onChange={() =>
                          setCartData((prevCartData) =>
                            prevCartData.map((cart, index) =>
                              index === sellerIndex
                                ? cart.map((product, pIndex) =>
                                    pIndex === productIndex
                                      ? {
                                          ...product,
                                          selected: !product.selected,
                                        }
                                      : product
                                  )
                                : cart
                            )
                          )
                        }
                        sx={{
                          marginRight: "32px",
                          borderRadius: "50%",
                          color: "#E3BB59",
                          "&.Mui-checked": { color: "#E3BB59" },
                        }}
                      />
                      <img
                        className="w-12 h-auto "
                        src={singleProduct.imageUrl}
                        alt={singleProduct.imageName}
                      />
                      <span className="w-6/12 ml-4">
                        {singleProduct.description}
                      </span>
                    </div>
                  </td>
                  <td
                    className={` py-4  text-start min-w-[140px] sm:min-w-[200px] pr-8  px-4`}
                  >
                    $&nbsp;{singleProduct.price}
                  </td>
                  <td
                    className={` py-4  text-start min-w-[160px] sm:min-w-[200px]  px-4`}
                  > 
                    <div className="flex flex-row items-center">
                      <button
                        className=" h-12 w-12 md:h-8 md:w-8 flex flex-col items-center justify-center button px-2 p-1 sm:p-2 border border-gray-400 text-gray-800 bg-white hover:bg-gray-800 hover:border-gray-800 hover:text-white transition-all duration-300"
                        onClick={() => {
                          handleQuantityChange(sellerIndex, productIndex, -1,singleProduct.price);
                        }}
                      >
                        -
                      </button>
                      <button className=" h-12 w-12 md:h-8 md:w-8 flex flex-col items-center justify-center button px-2 p-1 sm:p-2 border border-gray-400 ">
                        {singleProduct.quantity}
                      </button>
                      <button
                        className=" h-12 w-12 md:h-8 md:w-8 flex flex-col items-center justify-center button px-2 p-1 sm:p-2 border border-gray-400 text-gray-800 bg-white hover:bg-gray-800 hover:border-gray-800 hover:text-white transition-all duration-300"
                        onClick={() => {
                          handleQuantityChange(sellerIndex, productIndex, +1,singleProduct.price);
                        }}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td
                                        className={` py-4  text-start min-w-[140px] sm:min-w-[200px] pr-8  px-4`}

                  >
                    $&nbsp;{singleProduct.quantity*singleProduct.price}
                  </td>
 
                </tr>
              ))}
            </tbody>
          ))}
        </table>
        <div className="flex flex-col items-center  w-full rounded-sm border border-gray-500">
          <div className="w-full flex flex-row px-4 pt-4 pb-2 items-center border border-b-gray-500">
          <Checkbox
              checked={selectAll}
              onChange={handleSelectAll}
              sx={{
                marginRight: "32px",
                borderRadius: "50%",
                color: "#E3BB59",
                "&.Mui-checked": { color: "#E3BB59" },
              }}
            />
                     <span>SelectAll</span>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between w-full  p-4 px-8">
            <div className="w-full md:w-6/12 flex flex-row items-center" >
                      <button className="button ">Delete</button>
                      <button className="ml-4 button text-blue-600 text-center" onClick={()=>routeToFavourites()}>move to my favourites</button>
            </div>
            <div className="w-full md:w-6/12 flex flex-row items-center justify-between md:justify-end mt-4 md:mt-0" > 
                      <span className="text-gray-600 mr-4 text-center">Total (1 item): $&nbsp;{total}</span>
                      <Link href={'/cart/checkout'} className='button rounded-md bg-[#E3BB59] p-2 text-white text-center border border-[#E3BB59] hover:text-[#E3BB59] hover:bg-white hover:border-[#E3BB59] transition-all duration-300' onClick={()=>{console.log('first')}}>Check Out</Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
