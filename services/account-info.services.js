import { config } from "../config/config"; 
 import Cookies from "js-cookie";

export const updateInfo = async ( email,
    fullName,
    dateOfBirth,
    phone,
    gender,
    setLoading
) => {
    try {
      setLoading(true)
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
      setLoading(false)
      return data
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  };
  
  
  