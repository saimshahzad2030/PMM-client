
import { config } from "../config/config";

import Cookies from 'js-cookie';
export const login = async (email, password) => {
  try {
    const response = await fetch(
      `${config.BASE_URL}user/login`,
      {
        method: "POST", // Ensure you're using the correct method
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );
    const data = await response.json();
     
    if(response.status == 200){
      Cookies.set('token',data.updatedUser.token)
      Cookies.set('id',data.updatedUser.id)
       
    }
    return data

  } catch (error) {
    console.log(error,'error');
  }
};


export const autoLogin = async (token) => {
  try {  
    const response = await fetch(
      `${config.BASE_URL}user`,
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
    console.log(error,'error');
  }
};


export const deleteUser = async (id) => {
  try {  
    const response = await fetch(
      `${config.BASE_URL}user?id=${id}`,
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
    console.log(error,'error');
  }
};



export const editProfilePic = async (file) => {
  try {  
    const formData = new FormData();

    formData.append("image", file);

    const response = await fetch(
      `${config.BASE_URL}edit-profile`,
      {
        method: "PATCH",  
        headers: { 
          "Authorization": `bearer ${Cookies.get('token')}`
        },
        body:formData
      }
    );
    const data = await response.json(); 
    return data
    
  } catch (error) {
    console.log(error,'error');
  }
};


export const changePassword = async ( oldPassword,newPassword ) => {
  try {  
    const response = await fetch(
      `${config.BASE_URL}user`,
      {
        method: "PATCH",  
        headers: {
          "Content-Type": "application/json",
          "Authorization": `bearer ${Cookies.get('token')}`
        },
        body:JSON.stringify({
          oldPassword,newPassword 
        })
      }
    );
    const data = await response.json(); 
    return data
    
  } catch (error) {
    console.log(error,'error');
  }
};


export const fetchSellerDetails = async ( token) => {
  try {  
    const response = await fetch(
      `${config.BASE_URL}business-details`,
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
    console.log(error,'error');
  }
}; 



export const sendOtp = async ( email ) => {
  try {  
    const response = await fetch(
      `${config.BASE_URL}user/email`,
      {
        method: "POST",  
        headers: {
          "Content-Type": "application/json",
          "Authorization": `bearer ${Cookies.get('token')}`
        },
        body:JSON.stringify({
          email
        })
      }
    );
    const data = await response.json(); 
    return data
    
  } catch (error) {
    console.log(error,'error');
  }
};

export const verifyOtp = async ( otp ,otpId,setLoading ) => {
  try {  
    setLoading(true)
    const response = await fetch(
      `${config.BASE_URL}user/otp`,
      {
        method: "POST",  
        headers: {
          "Content-Type": "application/json",
          "Authorization": `bearer ${Cookies.get('token')}`
        },
        body:JSON.stringify({
          otp ,otpId
        })
      }
    );
    const data = await response.json(); 
    setLoading(false)
    return data
    
  } catch (error) {
    setLoading(false)

    console.log(error,'error');
  }
};


export const changePassOnForget = async ( email,password) => {
  try {  
    const response = await fetch(
      `${config.BASE_URL}user/otp`,
      {
        method: "PATCH",  
        headers: {
          "Content-Type": "application/json",
          "Authorization": `bearer ${Cookies.get('token')}`
        },
        body:JSON.stringify({
          password,email
        })
      }
    );
    const data = await response.json(); 
    return data
    
  } catch (error) {
    console.log(error,'error');
  }
};