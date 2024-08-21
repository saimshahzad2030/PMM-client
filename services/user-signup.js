import { config } from "../config/config";

 

export const signup = async (email, password,firstName,lastName,setLoading) => {
    try {
      setLoading(true)
      const response = await fetch(
        `${config.BASE_URL}user`,
        {
          method: "POST", // Ensure you're using the correct method
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            firstName,
            lastName
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
  