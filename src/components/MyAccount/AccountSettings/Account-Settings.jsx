"use client"
import React from 'react'
import RouteComponent from '../../RouteComponent/Route-Component'
import UserSection from '../User-Section'
import { ADDRESSES, USER } from '../../../../constants/constants'
import PersonalInformation from './PersonalInformation/Personal-Information'
import AddressBook from './AddressBookSection/Address-Book'
import PaymentOptions from './PaymentOptions/Payment-Options'
import PasswordAndSecurity from './PasswordAndSecurity/Password-And-Security'
const AccountSettings = ({image,name,email,phone,birthday,gender,addresses,banks,cards,wallets}) => { 
  const [informationSelected,setInformationSelected] = React.useState(true)
  const [addressBookSelected,setAddressBookSelected] = React.useState(false)
  const [paymentOptionsSelected,setPaymentOptionsSelected] = React.useState(false)
  const [passwordAndSecuritySelected,setPasswordAndSecuritySelected] = React.useState(false)
  return (
    <div className='flex flex-col items-center w-full px-8 overflow-x-hidden'>
      <RouteComponent mainRoute={'Account Settings '} parentRoute={'Home > My Account > '}/>
      <UserSection User={{name,image}}/>
      <div className="flex flex-row w-full bg-[#F2F2F2] my-4">
        <button
          className={` text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]  button w-3/12 border border-t-0 border-r-0 border-l-0 ${
            informationSelected
              ? "border-b-[#E3BB59] text-[#E3BB59] border-b-2"
              : "border-b-0 text-[#6D6D6D]"
          } py-2 text-center `}
          onClick={() => {
            setInformationSelected(true);
            setAddressBookSelected(false);
            setPasswordAndSecuritySelected(false);
            setPaymentOptionsSelected(false)
          }}
        >
          Account Information
        </button>
        <button
          className={`text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]  button w-3/12 border border-t-0 border-r-0 border-l-0 ${
            addressBookSelected
              ? "border-b-[#E3BB59] text-[#E3BB59] border-b-2"
              : "border-b-0 text-[#6D6D6D]"
            } py-2 text-center `}


          onClick={() => {
            setInformationSelected(false);
            setAddressBookSelected(true);
            setPasswordAndSecuritySelected(false);
            setPaymentOptionsSelected(false)
          }}
        >
          Address Book
        </button>
        <button
          className={`text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] button w-3/12 border border-t-0 border-r-0 border-l-0 ${
            paymentOptionsSelected
              ? "border-b-[#E3BB59] text-[#E3BB59] border-b-2"
              : "border-b-0 text-[#6D6D6D]"
            } py-2 text-center `}

          onClick={() => {
            setInformationSelected(false);
            setAddressBookSelected(false);
            setPasswordAndSecuritySelected(false);
            setPaymentOptionsSelected(true)
          }}
        >
          My Payment Method
        </button>
        <button
          className={`text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] button w-3/12 border border-t-0 border-r-0 border-l-0 ${
            passwordAndSecuritySelected
              ? "border-b-[#E3BB59] text-[#E3BB59] border-b-2"
              : "border-b-0 text-[#6D6D6D]"
            } py-2 text-center `}

          onClick={() => {
            setInformationSelected(false);
            setAddressBookSelected(false);
            setPasswordAndSecuritySelected(true);
            setPaymentOptionsSelected(false)
          }}
        >
          Password & Security
        </button>

        </div>
        {informationSelected && <PersonalInformation user={{email,gender,birthday,phone,name}}/>}
        {addressBookSelected && <AddressBook addresses = {addresses}/>}
        {paymentOptionsSelected && <PaymentOptions cards = {cards} banks = {banks} wallets = {wallets}/>}
        {passwordAndSecuritySelected && <PasswordAndSecurity/>}
      
    </div>
  )
}

export default AccountSettings