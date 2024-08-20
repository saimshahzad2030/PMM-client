import { config } from "../config/config"; 
 import Cookies from "js-cookie";

export const updateInfo = async ( email,
    fullName,
    dateOfBirth,
    phone,
    gender
) => {
    try {
      const response = await fetch(
        `${config.BASE_URL}user-info`,
        {
          method: "PATCH",  
          headers: {
            "Content-Type": "application/json",
            "Authorization": `bearer ${Cookies.get('token')}`

          }, 
          body: JSON.stringify({
            email,
    fullName,
    dateOfBirth,
    phone,
    gender
          }),
        }
      );
      const data = await response.json(); 
      return data
    } catch (error) {
      console.log(error);
    }
  };
  
  
  