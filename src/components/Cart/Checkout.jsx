"use client";
import React from "react";
import RouteComponent from "../RouteComponent/Route-Component";
import { ORDER_PLACED, VERIFIED } from "../../../constants/icons";
import { useRouter } from "next/navigation";
import { CART } from "../../../constants/constants";
import styles from "./Cart.module.css";
import { Checkbox, TextField } from "@mui/material";
const Checkout = () => {
  const router = useRouter();

  const [orderPlaced, setOrderPlaced] = React.useState(false);
  const [messageForSeller, setMessageForSeller] = React.useState(null);
  const moveToHome = () => {
    router.push("/");
  };
  const viewOrders = () => {
    router.push("/my-account/track-my-orders");
  };
  return (
    <div className="flex flex-col items-center px-8 mb-8">
      {!orderPlaced ? (
        <>
          <RouteComponent
            parentRoute={"Home > Cart > "}
            mainRoute={"Checkout"}
          />
          <div className="border border-gray-300 flex flex-col items-start p-4 rounded-sm w-full">
            <h2 className="lato-700 text-[18px]">Lorem Ipsum</h2>
            <p className="text-gray-600 mt-2">+00 000 0000 000</p>
            <p className="text-gray-600 mt-2">
              #00 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt
            </p>
          </div>
          <div className="  flex flex-col items-start  rounded-sm w-full mt-4">
            {CART.map((cart, index) => (
              <div
                className="flex flex-col items-center w-full border border-gray-300 mt-4"
                key={index}
              >
                <div
                  className={`w-full overflow-x-scroll ${styles.hideScrollbar} `}
                >
                  <table className="table-auto w-full  mb-4 ">
                    <thead className="text-[12px] sm:[text-14px] md:text-[16px] lato-700 ">
                      <tr className=" mb-4 px-4">
                        <th className={`text-start text-gray-800 p-4`}>
                          Product ordered
                        </th>
                        <th className={`text-start text-gray-400 p-4`}>
                          Unit price
                        </th>
                        <th className={`text-start text-gray-400 p-4`}>
                          Quanitiy
                        </th>
                        <th className={`text-end text-gray-400 p-4`}>
                          Item Subtotal
                        </th>
                      </tr>
                    </thead>
                    <tbody className="w-full overflow-x-scroll text-[12px] sm:[text-14px] md:text-[16px] mt-16">
                      <tr className="w-full mt-8">
                        <td colSpan="4" className="">
                          <div className=" p-4   text-gray-600 rounded-sm flex flex-row items-center">
                            <span>{cart[0].seller}</span>
                            <img
                              className="ml-2 w-4 h-auto"
                              src={VERIFIED.image}
                              alt={VERIFIED.name}
                            />
                          </div>
                        </td>
                      </tr>
                      {cart.map((singleProduct, productIndex) => (
                        <tr key={productIndex} className=" mb-8 ">
                          <td
                            className={` py-4  text-start min-w-[250px] sm:min-w-[400px]  px-4`}
                          >
                            <div className="flex flex-row items-center">
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
                            asdsad
                          </td>
                          <td
                            className={` py-4  text-end min-w-[140px] sm:min-w-[200px] pr-8  px-4`}
                          >
                            $&nbsp;
                            {singleProduct.quantity * singleProduct.price}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="border border-gray-300 flex flex-row items-start justify-between w-full px-2 sm:px-8  py-4">
                  <div className="flex flex-row items-center">
                    <Checkbox
                      checked={true}
                      onChange={() => {
                        console.log("first");
                      }}
                      sx={{
                        marginRight: "8px",
                        borderRadius: "50%",
                        color: "#E3BB59",
                        "&.Mui-checked": { color: "#E3BB59" },
                      }}
                    />
                    <div className="flex flex-col items-start">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center">
                        <p className="text-[12px] sm:text-[16px]">Metal Authentication Service </p>
                        <span className="mt-2 sm:mt-0 ml-0 sm:ml-4 p-1 sm:p-2 bg-blue-600 text-white rounded-md rounded-bl-none text-[12px] sm:text-[16px]">
                          Recommended
                        </span>
                      </div>
                      <p className="mt-2 sm:mt-0 text-[12px] text-gray-500">
                        We hold the payment in escrow and verify the
                        authenticity of your precious metal.
                      </p>
                      <p className="text-[12px] text-blue-600 underline cursor-pointer">
                        Learn more
                      </p>
                    </div>
                  </div>
                  <span className="text-[12px] sm:text-[16px]">$000.00</span>
                </div>
                <div className="grid grid-cols-3 w-full">
                  <div className="col-span-3 md:col-span-1 w-full flex flex-col items-start border border-gray-300 px-3 py-4 p-6">
                    <div className="flex flex-row items-center justify-between w-full">
                      <h3>E-invoice</h3>
                      <span className="button text-blue-600 underline cursor-pointer">
                        request invoice
                      </span>
                    </div>
                    <p className="text-gray-500 mt-4">
                      Request an e-invoice and get detailed billing information
                      sent directly to your email.
                    </p>
                  </div>
                  <div className="col-span-3 md:col-span-2 w-full flex flex-col items-start border border-gray-300 px-3 py-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row items-start justify-between w-full">
                      <h3 className="text-center">Payment method:</h3>
                      <div className="mt-4 sm:mt-0 w-full sm:w-9/12 flex flex-row items-start flex-wrap ">
                        <button className="sm:m-4 mt-4 sm:mt-0 w-full sm:w-auto sm:mx-4 button bg-white border border-gray-500 text-gray-800 rounded-sm p-1 px-2 sm:p-2 hover:border-[#E3BB59] hover:text-[#E3BB59] transition-all duration-300">
                          Cash on delivery
                        </button>
                        <button className="sm:m-4 mt-4 sm:mt-0 w-full sm:w-auto sm:mx-4  button bg-white border border-gray-500 text-gray-800 rounded-sm p-1 px-2 sm:p-2 hover:border-[#E3BB59] hover:text-[#E3BB59] transition-all duration-300">
                          Credit/Debit card
                        </button>
                        <button className="sm:m-4 mt-4 sm:mt-0 w-full sm:w-auto sm:mx-4  button bg-white border border-gray-500 text-gray-800 rounded-sm p-1 px-2 sm:p-2 hover:border-[#E3BB59] hover:text-[#E3BB59] transition-all duration-300">
                          Bank transfer
                        </button>
                        <button className="sm:m-4 mt-4 sm:mt-0 w-full sm:w-auto sm:mx-4  button bg-white border border-gray-500 text-gray-800 rounded-sm p-1 px-2 sm:p-2 hover:border-[#E3BB59] hover:text-[#E3BB59] transition-all duration-300">
                          PayPal
                        </button>
                        <button className="sm:m-4 mt-4 sm:mt-0 w-full sm:w-auto sm:mx-4  button bg-white border border-gray-500 text-gray-800 rounded-sm p-1 px-2 sm:p-2 hover:border-[#E3BB59] hover:text-[#E3BB59] transition-all duration-300">
                          Apple Pay
                        </button>
                        <button className="sm:m-4 mt-4 sm:mt-0  w-full sm:w-auto sm:mx-4   button bg-white border border-gray-500 text-gray-800 rounded-sm p-1 px-2 sm:p-2 hover:border-[#E3BB59] hover:text-[#E3BB59] transition-all duration-300">
                          Google Pay
                        </button>
                        <button className="sm:m-4 mt-4 sm:mt-0 w-full sm:w-auto sm:mx-4  button bg-white border border-gray-500 text-gray-800 rounded-sm p-1 px-2 sm:p-2 hover:border-[#E3BB59] hover:text-[#E3BB59] transition-all duration-300">
                          + other payment method
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-3 md:col-span-1 w-full flex flex-col items-start border border-gray-300 px-3 py-4 sm:p-6">
                    <h3 className="mb-4">Message for seller</h3>
                    <TextField
                      fullWidth
                      id="message"
                      name="message"
                      label="Enter your message"
                      value={messageForSeller}
                      onChange={(e) => {
                        setMessageForSeller(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-span-3 md:col-span-2 w-full flex flex-col items-start border border-gray-300 px-3 py-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row items-start justify-between w-full">
                      <h3 className="">Shipping option:</h3>
                      <div className="mt-4 sm:mt-0 w-full sm:w-9/12 flex flex-col items-center  ">
                        <div className="flex flex-row items-center justify-between w-full">
                          <div className="flex flex-col items-start sm:flex-row sm:items-center">
                            <span className=" w-full">Standard shipping</span>
                            <button className=" sm:ml-4 button text-blue-600 underline">
                              Change
                            </button>
                          </div>
                          <span>$000.00</span>
                        </div>
                        <p className="mt-4 text-gray-600 w-full">
                          Receive purchase by January 16 - 18{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full border border-gray-300 flex flex-col items-center text-gray-600 mt-4 px-3 py-4 sm:p-6 text-[14px] sm:text-[16px]">
            <div className="w-full flex flex-row items-center justify-between">
              <span>Product Subtotal:</span>
              <span>$ 00.00</span>
            </div>
            <div className="w-full flex flex-row items-start justify-between">
              <span>Metal Verification Subtotal:</span>
              <span>$ 00.00</span>

            </div>
            <div className="w-full flex flex-row items-center justify-between">
              <span>Shipping Subtotal:</span>
              <span>$ 00.00</span>

            </div>
            <div className="w-full flex flex-row items-center justify-between my-3">
              <span>Payment Total:</span>
              <span className="text-[20px]">$ 00.00</span>
            </div>
            <div className="w-full flex flex-row items-center mt-2 justify-end">
            <button
              className={`button  border p-1 px-2 sm:p-2 text-white  text-center bg-[#E3BB59] rounded-md border-[#E3BB59] hover:text-[#E3BB59] hover:bg-white hover:border-[#E3BB59] transition-all duration-300 `}
              onClick={() => {
                setOrderPlaced(true)
              }}
            >
              Place Order
            </button>
            </div>
          </div>
        </>
      ) : (
        <div className="mt-12 flex flex-col items-center w-full">
          <img
            className="w-32 h-auto "
            src={ORDER_PLACED.image}
            alt={ORDER_PLACED.name}
          />
          <h2 className="  text-gray-800 text-[20px] md:text-[28px] w-full text-center mt-8">
            Your order is successfully place
          </h2>
          <p className="text-gray-500 text-[16px]  text-center mt-4 w-8/12 sm:w-6/12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore{" "}
          </p>
          <div className="flex flex-row items-center justify-center w-full mt-6">
            <button
              className={`mr-4   button  border p-1 px-2 sm:p-2 text-white  text-center bg-[#E3BB59] rounded-sm border-[#E3BB59] hover:text-[#E3BB59] hover:bg-white hover:border-[#E3BB59] transition-all duration-300 `}
              onClick={() => {
                moveToHome();
              }}
            >
              Back to home
            </button>
            <button
              className={` button  border p-1 px-2 sm:p-2 text-[#E3BB59]  text-center bg-white rounded-sm border-[#E3BB59] hover:text-white hover:bg-[#E3BB59] hover:border-[#E3BB59] transition-all duration-300 `}
              onClick={() => {
                viewOrders();
              }}
            >
              View Orders
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;