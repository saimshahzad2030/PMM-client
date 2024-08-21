import { config } from "../config/config";
import Cookies from "js-cookie";
 

export const addDigitalCard = async (
    accountNumber,walletName,email,setLoading
) => {
    try {
      setLoading(true)
      const response = await fetch(
        `${config.BASE_URL}digital-wallet`,
        {
          method: "POST",  
          headers: {
            "Content-Type": "application/json",
            "Authorization": `bearer ${Cookies.get('token')}`

          }, 
          body: JSON.stringify({
            accountNumber,walletName,email
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
  
  
 export const removeDigitalCard = async(id)=>{
    try {
      const response = await fetch(
        `${config.BASE_URL}digital-wallet?id=${id}`,

        {
          method: "DELETE",  
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