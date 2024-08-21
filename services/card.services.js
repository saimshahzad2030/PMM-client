import { config } from "../config/config";
import Cookies from "js-cookie";
 

export const addCard = async (
    cardNumber,nameOnCard,expiryDate,cvv,setLoading
) => {
    try {
      setLoading(true)
      const response = await fetch(
        `${config.BASE_URL}credit-card`,
        {
          method: "POST",  
          headers: {
            "Content-Type": "application/json",
            "Authorization": `bearer ${Cookies.get('token')}`

          }, 
          body: JSON.stringify({
            cardNumber,nameOnCard,expiryDate,cvv
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
  
  
 export const removeCard = async(id)=>{
    try {
      const response = await fetch(
        `${config.BASE_URL}credit-card?id=${id}`,

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