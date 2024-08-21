import { config } from "../config/config"; 
 import Cookies from "js-cookie";

export const addNewAddress = async ( 
    fullName,
    phone,
    address,
    postalcode,
    city,
    state,
    addressType,
    setLoading

) => {
    try {
      setLoading(true)

      const response = await fetch(
        `${config.BASE_URL}address`,
        {
          method: "POST",  
          headers: {
            "Content-Type": "application/json",
            "Authorization": `bearer ${Cookies.get('token')}`

          }, 
          body: JSON.stringify({
            fullName,
            phone,
            address,
            postalcode,
            city,
            state,
            addressType,
          }),
        }
      );
      const data = await response.json(); 
      setLoading(false)

      return data
    } catch (error) {
      setLoading(false)
      
      console.log(error);
    }
  };
  
  
  
export const updateAddress = async ( 
    id,
    fullName,
    phone,
    address,
    postalcode,
    city,
    state,
    addressType,
    shippingAddressType,
    setLoading
) => {
    try {
      setLoading(true)
      const response = await fetch(
        `${config.BASE_URL}address`,
        {
          method: "PATCH",  
          headers: {
            "Content-Type": "application/json",
            "Authorization": `bearer ${Cookies.get('token')}`

          }, 
          body: JSON.stringify({
            id,
            fullName,
            phone,
            address,
            postalcode,
            city,
            state,
            addressType,
            shippingAddressType
          }),
        }
      );
      const data = await response.json(); 
      setLoading(false)

      return data
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  };
  

  
export const deleteAddress = async ( 
    id ,
    setLoading
) => {
    try {
      setLoading(true)

      setLoading(true)

      const response = await fetch(
        `${config.BASE_URL}address?id=${id}`,
        {
          method: "DELETE",  
          headers: {
            "Content-Type": "application/json",
            "Authorization": `bearer ${Cookies.get('token')}`

          }, 
          
        }
      );
      const data = await response.json(); 
      setLoading(false)

      return data
    } catch (error) {
      setLoading(false)

      console.log(error);
    }
  };
  
  export const updateShippingAddress = async ( 
    id 
) => {
    try {
      const response = await fetch(
        `${config.BASE_URL}address-shipping?id=${id}`,
        {
          method: "PATCH",  
          headers: {
            "Content-Type": "application/json",
            "Authorization": `bearer ${Cookies.get('token')}`

          }, 
          
        }
      );
      const data = await response.json(); 
      return data
    } catch (error) {
      console.log(error);
    }
  };
  