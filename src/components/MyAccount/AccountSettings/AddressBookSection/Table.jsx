import React from "react";
import styles from "./Address-Book.module.css";
import Button from "@/components/Button/Button";
import { updateShippingAddress } from "../../../../../services/address.services";
const Table = ({
  setAllAddress,
  allAddress,
  handleChangeDefaultShipping,
  setNewAddressWindowOpen,
  setAddressEditWindowOpen,
  setSelectedAddress,
}) => {
  return (
    <div className="flex flex-col items-start w-full px-4 my-8">
      <div className={`w-full overflow-x-scroll ${styles.hideScrollbar} `}>
        <table className="table-auto w-full  mb-4 ">
          <thead className="text-[12px] sm:[text-14px] md:text-[16px] lato-700">
            <tr>
              <th className={`  text-start text-gray-400 `}>name</th>
              <th className={`  text-start text-gray-400 `}>address</th>
              <th className={`  text-start text-gray-400 `}>Phone Number</th>
            </tr>
          </thead>
          <tbody className="overflow-x-scroll text-[12px] sm:[text-14px] md:text-[16px]">
            {allAddress.map((address, index) => (
              <tr key={address.id}>
                <td
                  className={` py-4  text-start min-w-[120px] sm:min-w-[200px] `}
                >
                  {address.fullName}
                </td>
                <td
                  className={` py-4  text-start min-w-[140px] sm:min-w-[200px] pr-8`}
                >
                  {address.address}
                </td>
                <td
                  className={` py-4  text-start min-w-[160px] sm:min-w-[200px]`}
                >
                  {address.phone}
                </td>
                <td
                  className={` py-4  text-start text-gray-400 min-w-[150px] sm:min-w-[200px] lowercase`}
                >
                  {address.addressType} address
                </td>
                <td
                  className={` py-4  text-start    min-w-[150px] sm:min-w-[200px]  pr-4`}
                >
                  {address.shippingAddressType === "DEFAULT" ? (
                    <span
                      onClick={async () => {
                        const updateAddress = await updateShippingAddress(
                          address.id
                        );
                        setAllAddress((prevItems) =>
                          prevItems.map((item) =>
                            item.id === address.id
                              ? updateAddress.newAddress
                              : item
                          )
                        );
                      }}
                      className="cursor-pointer"
                    >
                      Default Shipping Address
                      <span className="text-blue-600 underline">
                        Change
                      </span>{" "}
                    </span>
                  ) : (
                    <span
                      onClick={async () => {
                        const updateAddress = await updateShippingAddress(
                          address.id
                        );
                        setAllAddress((prevItems) =>
                          prevItems.map((item) =>
                            item.id === address.id
                              ? updateAddress.newAddress
                              : item
                          )
                        );
                      }}
                      className="text-blue-600 underline cursor-pointer"
                    >
                      Select Default Shipping Address
                    </span>
                  )}
                </td>

                <td className={` py-4  text-start  `}>
                  <button
                    className="underline text-blue-600"
                    onClick={() => {
                      setAddressEditWindowOpen(true);
                      setSelectedAddress(address);
                      setNewAddressWindowOpen(false);
                    }}
                  >
                    edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Button
        bgColor={"[#E3BB59]"}
        textColor={"white"}
        text={" + Add new Address"}
        others={"mt-2 border border-[#E3BB59] rounded-md"}
        padding={"p-1 px-2 sm:p-2"}
        clickHandler={() => {
          setNewAddressWindowOpen(true);
          setAddressEditWindowOpen(false);
        }}
      />
    </div>
  );
};

export default Table;
