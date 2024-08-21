import { config } from "../config/config";
import Cookies from "js-cookie";
 

// export const addToFavourites = async (productId) => {
//     try {
//       const response = await fetch(
//         `${config.BASE_URL}favourites`,
//         {
//           method: "POST",  
//           headers: {
//             "Content-Type": "application/json",
//             "Authorization": `bearer ${Cookies.get('token')}`

//           }, 
//           body: JSON.stringify({
//             productId
//           }),
//         }
//       );
//       const data = await response.json(); 
//       return data
//     } catch (error) {
//       console.log(error);
//     }
//   };
  
  
 export const fetchOrders = async(token)=>{
    try {
      const response = await fetch(
        `${config.BASE_URL}order`,
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
 

  export const addOrder = async(payload,setLoading)=>{
     
  //     "": 2,
  //     "": "",
  //     "": "Am buying this product from you",
  //     "": true,
  //     "": 20,
  //     "orderPlacedDate": "",
  //     "orderExpectedDate": "", 
 
  // }
    try { 
      setLoading(true)
      const response = await fetch(
        `${config.BASE_URL}order`,
        {
          method: "POST",  
          headers: {
            "Content-Type": "application/json",
            "Authorization": `bearer ${Cookies.get('token')}`

          },
          body:JSON.stringify({
            productId:payload.productId,
            price:payload.price,
            orderPlacedDate: Date.now(),
            orderExpectedDate:  Date.now(), 
            senderId:payload.senderId,
            paymentMethod:"bank",
            quantity:payload.quantity,
            messageForSeller:payload.messageForSeller,
            metalAuthenticaitonService:payload.metalAuthenticaitonService,
            shippingCost:payload.shippingCost
          })
        }
      );
      setLoading(false)

      const data = await response.json(); 
      return data
    } catch (error) {
      setLoading(false)

      console.log(error);
    }
  };
  // export const fetchFavourites = async(token)=>{
  //   try {
  //     const response = await fetch(
  //       `${config.BASE_URL}favourites`,
  //       {
  //         method: "GET",  
  //         headers: {
  //           "Content-Type": "application/json",
  //           "Authorization": `bearer ${token}`

  //         },  
  //       }
  //     );
  //     const data = await response.json(); 
  //     return data
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };