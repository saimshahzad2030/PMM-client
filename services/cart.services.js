
import { config } from "../config/config";
import Cookies from "js-cookie";

export const fetchCartItems = async (token) => {
  try {
    const response = await fetch(`${config.BASE_URL}cart`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addToCart = async (id, setLoading) => {
  try {
    setLoading(true);

    const response = await fetch(`${config.BASE_URL}cart?id=${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${Cookies.get("token")}`,
      },
    });
    const data = await response.json();
    setLoading(false);

    return data;
  } catch (error) {
    setLoading(false);

    console.log(error);
  }
};

export const removeFromCart = async (id, setLoading) => {
  try {
    setLoading(true);
    const response = await fetch(`${config.BASE_URL}cart?id=${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${Cookies.get("token")}`,
      },
    });
    const data = await response.json();
    setLoading(false);

    return data;
  } catch (error) {
    setLoading(false);

    console.log(error);
  }
};
