import { config } from "../config/config";
import Cookies from "js-cookie";

export const addQuery = async (email, phone, query, setLoading) => {
  try {
    setLoading(true);
    const response = await fetch(`${config.BASE_URL}query`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${Cookies.get("token")}`,
      },
      body: JSON.stringify({
        email,
        phone,
        query,
      }),
    });
    const data = await response.json();
    setLoading(false);
    return data;
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
};
