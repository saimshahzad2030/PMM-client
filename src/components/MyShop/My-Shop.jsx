"use client";
import React from "react";
import RouteComponent from "../RouteComponent/Route-Component";
import UserSection from "../MyAccount/User-Section";
import { My_SHOP_ITEMS, SHIPMENTS, USER } from "../../../constants/constants";
import SingleProduct from "../Products/SingleProduct";
import styles from "./My-Shop.module.css";
import Shippings from "./Shippings";
import { Backdrop } from "@mui/material";
import { ALERT } from "../../../constants/icons";
import { useRouter } from "next/navigation";
import { updateShipmentArrangement } from "../../../services/shipments.services";
const MyShop = ({myProducts,authenticationRequired,url,image,name,shipments}) => {
  const router = useRouter()
  if(authenticationRequired == true){
    router.push(url)
  }
  
  const [myShipments, setMyShipments] = React.useState(shipments);
  const [productListing, setProductListing] = React.useState(true);
  const [arrangeShipping, setArrangeShipping] = React.useState(false);
  const [shipping, setShipping] = React.useState(false);
  const [shippingSelectedForArrangement, setShippingSelectedForArrangement] =
    React.useState(false);
    const [arrangeForPickUp,setArrangeForPickUp] = React.useState(false)
    const [arrangeForDropOff,setArrangeForDropOff] = React.useState(false)
    const [backdropopen, setBackdropOpen] = React.useState(false);
    const [products,setProducts] = React.useState(myProducts)
    const handleBackdropClose = () => {
      setBackdropOpen(false);
    };
    const handleBackdropOpen = () => {
      setBackdropOpen(true);
    };
    const addNewProduct = ()=>{
      router.push('/my-account/my-shop/new-product-listing')
    }

    const formatDateTime = (isoDate) => {
      const date = new Date(isoDate);
      return date.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
      });
    };

    console.log(myShipments,"MY SHIPMENTS")
  return (
    <div className="w-full flex flex-col items-start px-8 mb-12">
      <RouteComponent parentRoute={"Home > "} mainRoute={" My shop"} />
      <UserSection User={{image,name}} />
      {!shippingSelectedForArrangement && <div className="flex flex-row w-full bg-[#F2F2F2] my-4">
        <button
          className={` text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]  button w-4/12 border border-t-0 border-r-0 border-l-0 ${
            productListing
              ? "border-b-[#E3BB59] text-[#E3BB59] border-b-2"
              : "border-b-0 text-[#6D6D6D]"
          } py-2 text-center `}
          onClick={() => {
            setArrangeShipping(false);
            setShipping(false);
            setProductListing(true);
          }}
        >
          Product Listing
        </button>
        <button
          className={`text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]  button w-4/12 border border-t-0 border-r-0 border-l-0 ${
            arrangeShipping
              ? "border-b-[#E3BB59] text-[#E3BB59] border-b-2"
              : "border-b-0 text-[#6D6D6D]"
          } py-2 text-center `}
          onClick={() => {
            setArrangeShipping(true);
            setShipping(false);
            setProductListing(false);
          }}
        >
          Arrange Shipping
        </button>
        <button
          className={`text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] button w-4/12 border border-t-0 border-r-0 border-l-0 ${
            shipping
              ? "border-b-[#E3BB59] text-[#E3BB59] border-b-2"
              : "border-b-0 text-[#6D6D6D]"
          } py-2 text-center `}
          onClick={() => {
            setArrangeShipping(false);
            setShipping(true);
            setProductListing(false);
          }}
        >
          Shipping
        </button>
      </div>}
      {productListing && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-4 w-full gap-y-12 md:gap-y-8  px-4">
          <div className="flex flex-col items-center w-full h-[300px] sm:h-auto">
            <div className="w-11/12 h-full relative flex flex-col items-center justify-center bg-gray-200 min-h-[250px]">
              <div className=" cursor-pointer bg-gray-300 rounded-full w-[100px] h-[100px] flex flex-col items-center justify-center" onClick={()=>{addNewProduct()}}>
                <p className="text-white lato-700 text-[40px]">+</p>
              </div>
              <p className="text-gray-700 mt-4">New Product Listing</p>
            </div>
          </div>

          {products.map((mp, index) => (
            <SingleProduct
              product={mp}
              buttonText={"Remove Listing"}
              setProducts={setProducts}
              //   productClickHandler={productClickHandler}
            />
          ))}
        </div>
      )}
      {arrangeShipping && (
        <div className="flex flex-col items-start w-full px-4 my-8">
          <div className={`w-full overflow-x-scroll ${styles.hideScrollbar} `}>
            <table className="table-auto w-full  mb-4 ">
              <thead className="text-[12px] sm:[text-14px] md:text-[12px] lato-700">
                <tr>
                  <th className={`text-start text-gray-400 `}>Product</th>
                  <th className={`text-start text-gray-400 `}>Total price</th>
                  <th className={`text-start text-gray-400 `}>Status</th>
                  <th className={`text-start text-gray-400 `}>Logistics</th>
                  <th className={`text-start text-gray-400 `}>Action</th>
                </tr>
              </thead>
              <tbody className="overflow-x-scroll text-[12px] sm:[text-14px] md:text-[16px]">
                {myShipments.map((shipment, index) => (
                  <tr
                    key={shipment.id}
                    className="border border-t-0 border-l-0 border-r-0 border-b-gray-600"
                  >
                    <td className={` py-4  min-w-[120px] sm:min-w-[200px] `}>
                      <div className="flex flex-col items-start w-full text-start">
                        {/* <p>{shipment.description.slice(0, 14)}</p> */}
                        <p className="text-gray-400 text-[12px]">
                          {shipment.quantity}
                        </p>
                      </div>
                    </td>
                    <td
                      className={` py-4 flex   min-w-[120px] sm:min-w-[200px] `}
                    >
                      <div className="flex flex-col items-start w-full text-start">
                        <p>{shipment.price}</p>
                        <p className="text-gray-400 text-[12px]">
                          {shipment.paymentMethod}
                        </p>
                      </div>
                    </td>
                    <td
                      className={` py-4  text-start min-w-[160px] sm:min-w-[200px]`}
                    >
                      <div className="flex flex-col items-start w-full text-start">
                        <p>{shipment.Shippings.arrangementStatus == "NOT_ARRANGED"?"To Arrange":`To ${shipment.Shippings.arrangementStatus}`}</p>
                        <p className="text-gray-400 text-[12px]">
                          {shipment.Shippings.arrangementStatus == "PICK_UP"
                            ? `Parcel pickup on ${formatDateTime(shipment.orderExpectedDate)}`
                            : `Parcel drop off on ${formatDateTime(shipment.orderExpectedDate)}`}
                        </p>
                      </div>
                    </td>
                    <td
                      className={` py-4  text-start  min-w-[150px] sm:min-w-[200px]`}
                    >
                      <div className="flex flex-col items-start w-full text-start">
                        <p>Standard shipping</p>
                        <p className="text-gray-400 text-[12px]">
                          {shipment.id}
                        </p>
                      </div>
                    </td>
                    <td
                      className={` py-4  text-start    min-w-[150px] sm:min-w-[200px]  pr-4`}
                    >
                      {shipment.Shippings.arrangementStatus == "NOT_ARRANGED" && (
                        <button
                          className=" button border bg-[#E3BB59] border-[#E3BB59] text-white p-2 w-full hover:text-[#E3BB59] hover:bg-white hover:border-[#E3BB59] transition-all duration-300 rounded-md"
                          onClick={() => {
                            setShippingSelectedForArrangement(shipment);
                            setShipping(false)
                            setProductListing(false)
                            setArrangeShipping(false)
                          }}
                        >
                          Arrange Shipment
                        </button>
                      )}
                    </td>

                     
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {shipping && (
        <Shippings
          shipmentsList={myShipments.filter((s) => {
            return s.Shippings.status !== "COMPLETED";
          })} 
          formatDateTime={formatDateTime}
        />
      )}
      {shippingSelectedForArrangement && (
        <div className="w-full flex flex-col items-center ">
<div className="flex flex-row w-full bg-[#F2F2F2] my-4">
        <button
          className={` text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]  button w-4/12 border border-t-0 border-r-0 border-l-0 border-b-[#E3BB59] text-[#E3BB59] border-b-2 py-2 text-center `}
          onClick={() => {
            setArrangeShipping(true);
            setShippingSelectedForArrangement(null)
          }}
        >
          {`< Arrange Shipping`}
        </button>
        
      </div>
         <div className="w-full px-4">
         
         <div className="flex flex-row items-start justify-between w-full border border-[#F7E99E] bg-[#fffced] p-4">
            <div className="flex flex-col items-start w-6/12  text-[10px] sm:text-[14px] text-gray-800">
              <p>
                {shippingSelectedForArrangement.messageForSeller}.{" "}
                <span>Quantity: {shippingSelectedForArrangement.quantity}</span>
              </p>
              <p className="lato-700 text-[19px] sm:text-[24px] my-2 text-gray-800">
                {shippingSelectedForArrangement.price}
              </p>
              <p className=" text-[10px] sm:text-[14px] text-gray-800">
                Receiver: {shippingSelectedForArrangement.reciever.firstName}
              </p>
              <p className=" text-[10px] sm:text-[14px] text-gray-400 ">
                {shippingSelectedForArrangement.reciever.phone}
              </p>
              <p className=" text-[10px] sm:text-[14px] text-gray-400 ">
              Pakistan, Kpk,{" "}
              Khi
              </p>
              <p className=" text-[10px] sm:text-[14px] mt-2 text-gray-800">
                Sender: {shippingSelectedForArrangement.sender.firstName}
              </p>
              <p className=" text-[10px] sm:text-[14px] text-gray-400 ">
                {shippingSelectedForArrangement.sender.phone}
              </p>
              <p className=" text-[10px] sm:text-[14px] text-gray-400 ">
              Pakistan, Kpk,{" "}
              Khi
              </p>
              <p className=" text-[10px] sm:text-[14px] mt-2 text-gray-800">
                Order placed in:{" "}
                {shippingSelectedForArrangement.orderPlacedDate}
              </p>
              <p className=" text-[10px] sm:text-[14px] mt-2 text-gray-800">
                Order expected arrival:{" "}
                {shippingSelectedForArrangement.orderExpectedDate}
              </p>
            </div>
            <div className="flex flex-col flex-end w-6/12 text-end min-h-full justify-between">
              <p className="text-[12px] sm:text-20px text-gray-400">
                Standard Shipping
              </p>
              <p className="text-[12px] sm:text-20px text-gray-800">
                {shippingSelectedForArrangement.id}
              </p>
              <div className=" w-full flex flex-row items-center justify-between">
                <button
                  className=" button border bg-white border-[#E3BB59] text-[#E3BB59] p-2 w-5/12 hover:text-white hover:bg-[#E3BB59] hover:border-[#E3BB59] transition-all duration-300 rounded-md"
                  onClick={() => {
                    setArrangeForDropOff(true)
                    setArrangeForPickUp(false)
                    handleBackdropOpen()
                  }}
                >
                  Arrange for dropoff
                </button>
                <button
                  className=" button border bg-[#E3BB59] border-[#E3BB59] text-white p-2 w-5/12 hover:text-[#E3BB59] hover:bg-white hover:border-[#E3BB59] transition-all duration-300 rounded-md"
                  onClick={() => {
                    setArrangeForDropOff(false)
                    setArrangeForPickUp(true)
                    handleBackdropOpen()

                  }}
                >
                  Arrange for pickup
                </button>
              </div>
            </div>
          </div>
          </div>
        </div>
      )}
       <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdropopen} 
      >
      <div className="relative flex flex-col items-center w-full">
         {backdropopen && 
             <div className='form-container flex flex-col items-center justify-center  bg-white p-6 rounded-md  overflow-y-auto' >
              <div className="flex flex-row items-center w-full justify-start text-gray-800">
                <img src={ALERT.image} alt={ALERT.name} className="w-6 h-auto mr-4"/>
              <p className="text-[16px] md:text-[20px]">{arrangeForDropOff?'Arrange for Drop off':'Arrange for pickup'}</p>
              </div>
               <ul className='list-disc list-inside text-[14px] md:text-[12px] text-gray-700 pl-2 mb-3 my-4'>
                    {arrangeForDropOff?
                    <>
                    <li>Dropoff parcel by January 23, 2021</li>
                      <li>Dropoff parcel on any standard delivery station</li></>:
                      <>
                      <li>Parcel pickup expected by January 23, 2021</li>
                        <li>Parcel will be picked up by standard delivery logistics team</li></>
                  }
                </ul>
                <div className="flex flex-row items-center w-full justify-start">
                <button
                  className=" button border bg-white border-[#E3BB59] text-[#E3BB59] p-2 w-4/12 hover:text-white hover:bg-[#E3BB59] hover:border-[#E3BB59] transition-all duration-300 rounded-md"
                  onClick={() => {
                    
                    setArrangeForDropOff(false)
                    setArrangeForPickUp(false)
                    handleBackdropClose()
                  }}
                >
                  Cancel
                </button>
                <button
                  className="ml-4 button border bg-[#E3BB59] border-[#E3BB59] text-white p-2 w-4/12 hover:text-[#E3BB59] hover:bg-white hover:border-[#E3BB59] transition-all duration-300 rounded-md"
                  onClick={async() => {
                    if(arrangeForPickUp){
                      const updatedShipments = await updateShipmentArrangement("PICK_UP",shippingSelectedForArrangement.id)
                      console.log(updatedShipments)
                      if(updatedShipments.updatedShipment){
                        setArrangeForDropOff(false)
                        setArrangeForPickUp(false)
                        // setMyShipments(prevData =>
                        //   prevData.map(item =>
                        //     item.id === shippingSelectedForArrangement.id ? { ...item, arrangementStatus: "PICK_UP" } : item
                        //   )
                        // );
                        // setMyShipments(prevState => {
                        //   return prevState.map(shipment => {
                        //     // Check if this is the shipment we want to update
                        //     if (shipment.id === shippingSelectedForArrangement.id) {
                        //       return {
                        //         ...shipment,
                        //         Shippings: {
                        //           ...shipment.Shippings, 
                        //           [arrangementStatus
                        //           ]: "PICK_UP", // Update the specific key
                        //         },
                        //       };
                        //     }
                        //     return shipment; // Return the original shipment object if no update is needed
                        //   });
                        // });
                        handleBackdropClose()
                      }
                    }
                    else if(arrangeForDropOff){
                      const updatedShipments = await updateShipmentArrangement("DROP_OFF",shippingSelectedForArrangement.id)
                      if(updatedShipments.updatedShipment){
                        setArrangeForDropOff(false)
                    setArrangeForPickUp(false)
                    handleBackdropClose()
                      }

                    }
                    
                  }}
                >
                  Confirm
                </button>
                  </div>
          </div>
         }
      
      </div>

      </Backdrop>
    </div>
  );
};

export default MyShop;
