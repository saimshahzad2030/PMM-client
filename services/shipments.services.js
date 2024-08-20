 
import { config } from "../config/config";
import Cookies from "js-cookie";
export const fetchShipments = async(token)=>{
    try {
      const response = await fetch(
        `${config.BASE_URL}shipment`,
        {
          method: "GET",  
          headers: {
            "Content-Type": "application/json",
            "Authorization": `bearer ${token}`

          }
        }
      );
      const data = await response.json(); 
      return data
    } catch (error) {
      console.log(error);
    }
  };

  export const updateShipmentArrangement = async(status,id)=>{
    try {
      const response = await fetch(
        `${config.BASE_URL}shipment`,
        {
          method: "PATCH",  
          headers: {
            "Content-Type": "application/json",
            "Authorization": `bearer ${Cookies.get('token')}`

          },
         body:JSON.stringify({
          status,id
         }) 
        }
        
      );
      const data = await response.json(); 
      return data
    } catch (error) {
      console.log(error);
    }
  };