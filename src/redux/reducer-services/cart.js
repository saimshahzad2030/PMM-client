import { config } from "../../../config/config";
export const fetchCart = async () => { 
        try { 
          const response = await fetch(
              `${config.BASE_URL}user`,
              {
                method: "GET", 
                headers: {
                  "Content-Type": "application/json",
                  "Authorization": `bearer ${Cookies.get('token')}`
                },
                
              }
            );
            const data = await response.json();
         
            return data;
            
          }  
        catch (error) {
          return error.response.message
        } 
};

// export const addContact = async (username) => {
//   try {
//     const response = await axios.post(
//       `${BASEURL}/contact`,
//       {
//         username,
//       },
//       headersFunction()
//     ); 
//     return response?.data?.contact;
//   } catch (error) {
//     return error.response.message
//   }
// };
// export const updateStatus = async (conversationId) => {
//   try {
//     const response = await axios.patch(`${BASEURL}/message?conversationId=${conversationId}`,{},{headers:headersFunction().headers});
//     return response?.data?.conversationId;
//   } catch (error) {
//     console.log(error.response.message,'error')
//     return error.response.message
//   }
//   };