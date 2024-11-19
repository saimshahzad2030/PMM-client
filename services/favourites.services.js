
import { config } from "../config/config";
import Cookies from "js-cookie";
 

export const addToFavourites = async (productId) => {
    try {
      const response = await fetch(
        `${config.BASE_URL}favourites`,
        {
          method: "POST",  
          headers: {
            "Content-Type": "application/json",
            "Authorization": `bearer ${Cookies.get('token')}`

          }, 
          body: JSON.stringify({
            productId
          }),
        }
      );
      const data = await response.json(); 
      return data
    } catch (error) {
      console.log(error);
    }
  };
  
  
 export const removeFromFavourites = async(productId)=>{
    try {
      const response = await fetch(
        `${config.BASE_URL}favourites`,
        {
          method: "DELETE",  
          headers: {
            "Content-Type": "application/json",
            "Authorization": `bearer ${Cookies.get('token')}`

          }, 
          body: JSON.stringify({
            productId
          }),
        }
      );
      const data = await response.json(); 
      return data
    } catch (error) {
      console.log(error);
    }
  };

  export const fetchFavourites = async(token)=>{
    try {
      const response = await fetch(
        `${config.BASE_URL}favourites`,
        {
          method: "GET",  
          headers: {
            "Content-Type": "application/json",
            "Authorization": `bearer ${token}`

          },  
        }
      );
      const data = await response.json(); 
      return data
    } catch (error) {
      console.log(error);
    }
  };