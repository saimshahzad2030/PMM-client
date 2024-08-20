// "use client"
// import React from "react";
// import PackedIcon from "../../../public/assets/shipment/Packed";
// import PlacedIcon from "../../../public/assets/shipment/Placed";
// import Verification from "../../../public/assets/shipment/Verification";
// import OnTheRoad from "../../../public/assets/shipment/OnTheRoad";
// import Delivered from "../../../public/assets/shipment/Delivered";
// import { TICK } from "../../../constants/icons";
// export default function ShipmentTrack({
//   orderPlaced,
//   orderPacked,
//   onTheRoad,
//   delivered,
//   verificationProcess,
//   verificationPorcessCompleted,
//   shippingStatus
// }) {
//   console.log(shippingStatus,"shippingStatus")
//   return (
//     <div className="flex flex-col items-center  sm:flex-row sm:items-center justify-between  h-[400px] w-2 sm:h-2 sm:w-10/12 bg-[#F1DDAC] rounded-b-full sm:rounded-r-full relative mb-36 mt-4">
//       <div
//         className={`absolute top-0 sm:left-0  ${
//           verificationProcess
//             ? orderPlaced &&
//               orderPacked &&
//               verificationPorcessCompleted &&
//               onTheRoad &&
//               delivered
//               ? "h-[400px] sm:w-full"
//               : orderPlaced &&
//                 orderPacked &&
//                 verificationPorcessCompleted &&
//                 onTheRoad &&
//                 !delivered
//               ? "h-[300px] sm:w-9/12"
//               : orderPlaced &&
//                 orderPacked &&
//                 verificationPorcessCompleted &&
//                 !onTheRoad &&
//                 !delivered
//               ? "h-[200px] sm:w-6/12"
//               : orderPlaced &&
//                 orderPacked &&
//                 !verificationPorcessCompleted &&
//                 !onTheRoad &&
//                 !delivered
//               ? "h-[100px] sm:w-3/12"
//               : "h-0 sm:w-0"
//             : orderPlaced &&
//               orderPacked &&
//               onTheRoad &&
//               delivered
//             ? "h-[400px] sm:w-full"
//             : orderPlaced &&
//               orderPacked &&
//               onTheRoad &&
//               !delivered
//             ? "h-[266px] sm:w-4/6"
//             : orderPlaced &&
//               orderPacked &&
//               !onTheRoad &&
//               !delivered
//             ? "h-[133px] sm:w-2/6"
//             : "h-[0] sm:w-0"
//         } sm:h-2 w-2 bg-[#E3BB59] rounded-t-full sm:rounded-l-full`}
//       ></div>
//       <div
//         className={`w-6 h-6 ${
//           orderPlaced ? "bg-[#E3BB59]" : "bg-[#F1DDAC]  border-2 border-white"
//         } rounded-full relative flex flex-col items-center justify-center`}
//       >
//         {orderPlaced && (
//           <img className="w-3 h-3" src={TICK.image} alt={TICK.name} />
//         )}
//         <div className="flex flex-col  sm:items-center items-start absolute left-8 sm:left-auto top-0 sm:top-8">
//           <PlacedIcon color={orderPlaced ? "#E3BB59" : "#F1DDAC"} />
//           <p className={`${orderPlaced ? "text-black" : " text-gray-400"}`}>
//             Order Placed
//           </p>
//         </div>
//       </div>
//       <div
//         className={`w-6 h-6 ${
//           orderPacked ? "bg-[#E3BB59]" : "bg-[#F1DDAC]  border-2 border-white"
//         } rounded-full relative flex flex-col items-center justify-center`}
//       >
//         {orderPacked && (
//           <img className="w-3 h-3" src={TICK.image} alt={TICK.name} />
//         )}
//                 <div className="flex flex-col sm:items-center items-end absolute right-8 sm:right-auto top-0 sm:top-8">

//           <PackedIcon color={orderPacked ? "#E3BB59" : "#F1DDAC"} />
//           <p className={`${orderPacked ? "text-black" : " text-gray-400"}`}>
//             Packed
//           </p>
//         </div>
//       </div>
//       {verificationProcess && (
//         <div
//           className={`w-6 h-6 ${
//             verificationPorcessCompleted ? "bg-[#E3BB59]" : "bg-[#F1DDAC]  border-2 border-white"
//           } rounded-full relative flex flex-col items-center justify-center`}
//         >
//           {verificationPorcessCompleted && (
//             <img className="w-3 h-3" src={TICK.image} alt={TICK.name} />
//           )}
//                   <div className="flex flex-col items-start sm:items-center absolute left-8 sm:left-auto top-0 sm:top-8">

//             <Verification
//               color={verificationPorcessCompleted ? "#E3BB59" : "#F1DDAC"}
//             />
//             <p
//               className={`${
//                 verificationPorcessCompleted ? "text-black" : " text-gray-400"
//               }`}
//             >
//               Undergoing Verification
//             </p>
//           </div>
//         </div>
//       )}
//       <div
//         className={`w-6 h-6 ${
//           onTheRoad ? "bg-[#E3BB59]" : "bg-[#F1DDAC] border-2 border-white"
//         } rounded-full relative flex flex-col items-center justify-center`}
//       >
//         {onTheRoad && (
//           <img className="w-3 h-3" src={TICK.image} alt={TICK.name} />
//         )}
//                 <div className="flex flex-col items-end sm:items-center absolute right-8 sm:right-auto top-0 sm:top-8">

//           <OnTheRoad color={onTheRoad ? "#E3BB59" : "#F1DDAC"} />
//           <p className={`${onTheRoad ? "text-black" : " text-gray-400"}`}>
//             On&nbsp;The&nbsp;Road
//           </p>
//         </div>
//       </div>
//       <div
//         className={`w-6 h-6 ${
//           delivered ? "bg-[#E3BB59]" : "bg-[#F1DDAC]  border-2 border-white"
//         } rounded-full relative flex flex-col items-center justify-center`}
//       >
//         {delivered && (
//           <img className="w-3 h-3" src={TICK.image} alt={TICK.name} />
//         )}
//                 <div className="flex flex-col items-start sm:items-center absolute left-8 sm:left-auto top-0 sm:top-8">

//           <Delivered color={delivered ? "#E3BB59" : "#F1DDAC"} />
//           <p className={`${delivered ? "text-black" : " text-gray-400"}`}>
//             Delivered
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import React from "react";
import PackedIcon from "../../../public/assets/shipment/Packed";
import PlacedIcon from "../../../public/assets/shipment/Placed";
import Verification from "../../../public/assets/shipment/Verification";
import OnTheRoad from "../../../public/assets/shipment/OnTheRoad";
import Delivered from "../../../public/assets/shipment/Delivered";
import { TICK } from "../../../constants/icons";
export default function ShipmentTrack({
 
  shippingStatus,
}) {
  console.log(shippingStatus, "shippingStatus");
  return (
    <div className="flex flex-col items-center  sm:flex-row sm:items-center justify-between  h-[400px] w-2 sm:h-2 sm:w-10/12 bg-[#F1DDAC] rounded-b-full sm:rounded-r-full relative mb-36 mt-4">
      <div
        className={`absolute top-0 sm:left-0  ${
          shippingStatus==="VERIFICATION_PROCESS"
            ?     "h-[200px] sm:w-3/12"
            :  
            shippingStatus == "DELIVERED"
            ? "h-[400px] sm:w-full"
            :             shippingStatus == "ON_THE_ROAD"

            ? "h-[266px] sm:w-4/6"
            : (shippingStatus == "ORDER_PACKED"
            || shippingStatus == "VERIFIED")  
            ? "h-[133px] sm:w-2/6"
            : "h-[0] sm:w-0"
        } sm:h-2 w-2 bg-[#E3BB59] rounded-t-full sm:rounded-l-full`}
      ></div>
      <div
        className={`w-6 h-6 ${
          shippingStatus == "ORDER_PLACED" ||
          shippingStatus == "ORDER_PACKED" ||
          shippingStatus == "VERIFICATION_PROCESS" ||
          shippingStatus == "VERIFIED" ||
          shippingStatus == "ON_THE_ROAD" ||
          shippingStatus == "DELIVERED"
            ? "bg-[#E3BB59] border-2 border-white"
            : "bg-[#F1DDAC]  border-2 border-white"
        } rounded-full relative flex flex-col items-center justify-center`}
      >
        {
          (
            shippingStatus == "ORDER_PLACED" ||
            shippingStatus == "ORDER_PACKED" ||
          shippingStatus == "VERIFICATION_PROCESS" ||
          shippingStatus == "VERIFIED" ||
          shippingStatus == "ON_THE_ROAD" ||
          shippingStatus == "DELIVERED") && (
            <img className="w-3 h-3" src={TICK.image} alt={TICK.name} />
          )}
        <div className="flex flex-col  sm:items-center items-start absolute left-8 sm:left-auto top-0 sm:top-8">
          <PlacedIcon
            color={
              shippingStatus == "ORDER_PLACED" ||
              shippingStatus == "ORDER_PACKED" ||
              shippingStatus == "VERIFICATION_PROCESS" ||
              shippingStatus == "VERIFIED" ||
              shippingStatus == "ON_THE_ROAD" ||
              shippingStatus == "DELIVERED"
                ? "#E3BB59"
                : "#F1DDAC"
            }
          />
          <p
            className={`${
              shippingStatus == "ORDER_PLACED" ||
              shippingStatus == "ORDER_PACKED" ||
              shippingStatus == "VERIFICATION_PROCESS" ||
              shippingStatus == "VERIFIED" ||
              shippingStatus == "ON_THE_ROAD" ||
              shippingStatus == "DELIVERED"
                ? "text-black"
                : " text-gray-400"
            }`}
          >
            Order Placed
          </p>
        </div>
      </div>
      <div
        className={`w-6 h-6 ${
          (shippingStatus == "ORDER_PACKED" ||
          shippingStatus == "VERIFICATION_PROCESS" ||
          shippingStatus == "VERIFIED" ||
          shippingStatus == "ON_THE_ROAD" ||
          shippingStatus == "DELIVERED")
            ? "bg-[#E3BB59] border-2 border-white"
            : "bg-[#F1DDAC]  border-2 border-white"
        } rounded-full relative flex flex-col items-center justify-center`}
      >
        {(
          shippingStatus == "ORDER_PACKED" ||
          shippingStatus == "VERIFICATION_PROCESS" ||
          shippingStatus == "VERIFIED" ||
          shippingStatus == "ON_THE_ROAD" ||
          shippingStatus == "DELIVERED") && (
          <img className="w-3 h-3" src={TICK.image} alt={TICK.name} />
        )}
        <div className="flex flex-col sm:items-center items-end absolute right-8 sm:right-auto top-0 sm:top-8">
          <PackedIcon
            color={
              (shippingStatus == "ORDER_PACKED" ||
              shippingStatus == "VERIFICATION_PROCESS" ||
              shippingStatus == "VERIFIED" ||
              shippingStatus == "ON_THE_ROAD" ||
              shippingStatus == "DELIVERED")
                ? "#E3BB59"
                : "#F1DDAC"
            }
          />
          <p
            className={`${
              (shippingStatus == "ORDER_PACKED" ||
              shippingStatus == "VERIFICATION_PROCESS" ||
              shippingStatus == "VERIFIED" ||
              shippingStatus == "ON_THE_ROAD" ||
              shippingStatus == "DELIVERED")
                ? "text-black"
                : " text-gray-400"
            }`}
          >
            Packed
          </p>
        </div>
      </div>
      {shippingStatus == "VERIFICATION_PROCESS" && (
        <div
          className={`w-6 h-6 ${
            shippingStatus == "VERIFICATION_PROCESS"
            ? "bg-[#F1DDAC]  border-2 border-white"
              : "bg-[#E3BB59] border-2 border-white"
          } rounded-full relative flex flex-col items-center justify-center`}
        >
          {shippingStatus !== "VERIFICATION_PROCESS" && (
            <img className="w-3 h-3" src={TICK.image} alt={TICK.name} />
          )}
          <div className="flex flex-col items-start sm:items-center absolute left-8 sm:left-auto top-0 sm:top-8">
            <Verification
              color={
                shippingStatus == "VERIFICATION_PROCESS" 
                ? "#F1DDAC"
                  : "#E3BB59"
              }
            />
            <p
              className={`${
                shippingStatus == "VERIFICATION_PROCESS" 
                ? " text-gray-400"
                : "text-black"
              }`}
            >
              Undergoing Verification
            </p>
          </div>
        </div>
      )}
      <div
        className={`w-6 h-6 ${
          shippingStatus == "ON_THE_ROAD"  ||
          shippingStatus == "DELIVERED"? "bg-[#E3BB59]" : "bg-[#F1DDAC] border-2 border-white"
        } rounded-full relative flex flex-col items-center justify-center`}
      >
        {(
          shippingStatus == "ON_THE_ROAD" ||
          shippingStatus == "DELIVERED") && (
          <img className="w-3 h-3" src={TICK.image} alt={TICK.name} />
        )}
        <div className="flex flex-col items-end sm:items-center absolute right-8 sm:right-auto top-0 sm:top-8">
          <OnTheRoad
            color={shippingStatus == "ON_THE_ROAD" ||
              shippingStatus == "DELIVERED" ? "#E3BB59" : "#F1DDAC"}
          />
          <p
            className={`${
              shippingStatus == "ON_THE_ROAD" ||
              shippingStatus == "DELIVERED" ? "text-black" : " text-gray-400"
            }`}
          >
            On&nbsp;The&nbsp;Road
          </p>
        </div>
      </div>
      <div
        className={`w-6 h-6 ${
          shippingStatus == "DELIVERED"
            ? "bg-[#E3BB59] border-2 border-white"
            : "bg-[#F1DDAC]  border-2 border-white"
        } rounded-full relative flex flex-col items-center justify-center`}
      >
        {( 
          shippingStatus == "DELIVERED") && (
          <img className="w-3 h-3" src={TICK.image} alt={TICK.name} />
        )}
        <div className="flex flex-col items-start sm:items-center absolute left-8 sm:left-auto top-0 sm:top-8">
          <Delivered
            color={shippingStatus == "DELIVERED" ? "#E3BB59" : "#F1DDAC"}
          />
          <p
            className={`${
              shippingStatus == "DELIVERED" ? "text-black" : " text-gray-400"
            }`}
          >
            Delivered
          </p>
        </div>
      </div>
    </div>
  );
}
