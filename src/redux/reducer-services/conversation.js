// import axios from "axios";
// import { BASEURL,headersFunction } from "../../constants/globals-constants";
// export const fetchConversation = async (conversationId) => {
//   try {
//     const response = await axios.get(
//       `${BASEURL}/conversation?conversationId=${conversationId}`,
//       headersFunction()
//     );
//     return response.data.conversation;
//   } catch (error) {
//     console.log(error.response.message)

//     return error.response.message
//   }
// };
// export const addMessage = async (payload) => { 
//   try {
//     const response = await axios.patch(
//       `${BASEURL}/conversation`,
//       payload
//       ,
//       headersFunction()
//     ); 
//     console.log(response?.data?.newMessage);
//     return response?.data?.newMessage;
//   } catch (error) {
//     console.log(error.response.message,'error')
//     return error.response.message
//   }
// };
// export const deleteMessage = async (type,messageId,conversationId) => {
//   try {
//     const response = await axios.delete(`${BASEURL}/conversation?messageId=${messageId}&type=${type}&conversationId=${conversationId}`,headersFunction());
//     return response?.data;
//   } catch (error) {
//     console.log(error.response.message,'error')
//     return error.response.message
//   }
//   };