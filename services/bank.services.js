import { config } from "../config/config";
import Cookies from "js-cookie";
 

export const addBank = async (
    bankName,accountName,accountNo
) => {
    try {
      const response = await fetch(
        `${config.BASE_URL}bank-account`,
        {
          method: "POST",  
          headers: {
            "Content-Type": "application/json",
            "Authorization": `bearer ${Cookies.get('token')}`

          }, 
          body: JSON.stringify({
            bankName,accountName,accountNo
          }),
        }
      );
      const data = await response.json(); 
      return data
    } catch (error) {
      console.log(error);
    }
  };
  
  
 export const removeBank = async(id)=>{
    try {
      const response = await fetch(
        `${config.BASE_URL}bank-account?id=${id}`,

        {
          method: "DELETE",  
          headers: {
            "Content-Type": "application/json",
            "Authorization": `bearer ${Cookies.get('token')}`

          }
        }
      );
      const data = await response.json(); 
      return data
    } catch (error) {
      console.log(error);
    }
  };