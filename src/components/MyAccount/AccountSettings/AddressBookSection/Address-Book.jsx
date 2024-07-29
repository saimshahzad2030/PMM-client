"use client"
import React from "react";
import styles from "./Address-Book.module.css";
import Button from "../../../Button/Button";
import EditAddress from "./Edit-Address";
import Table from "./Table";

const AddressBook = ({ addresses }) => {
  const [allAddress, setAllAddress] = React.useState(addresses);
  const [addressEditWindowOpen, setAddressEditWindowOpen] =
    React.useState(false);
  const [newAddressWindowOpen, setNewAddressWindowOpen] = React.useState(false);
  const [selectedAddress, setSelectedAddress] = React.useState({});

  //edit window open
  const cancelClickHandler =()=>{
    setAddressEditWindowOpen(false);
    setNewAddressWindowOpen(false)
  }
  const handleChangeDefaultShipping = (index) => {
    setAllAddress((prevAddresses) =>
      prevAddresses.map((address, i) =>
        i === index
          ? {
              ...address,
              defaultShippingAddress: !allAddress[index].defaultShippingAddress,
            }
          : address
      )
    );
  };

  return (
    <>
      {addressEditWindowOpen && (
        <EditAddress editAddress={true} address={selectedAddress} cancelClickHandler={cancelClickHandler}/>
      )}
      {newAddressWindowOpen && <EditAddress editAddress={false} cancelClickHandler={cancelClickHandler}/>}
      {!addressEditWindowOpen && ! newAddressWindowOpen && (
        <Table
          allAddress={allAddress}
          handleChangeDefaultShipping={handleChangeDefaultShipping}
          setAddressEditWindowOpen={setAddressEditWindowOpen}
          setSelectedAddress={setSelectedAddress}
          setNewAddressWindowOpen={setNewAddressWindowOpen}
        />
      )}
    </>
  );
};

export default AddressBook;
