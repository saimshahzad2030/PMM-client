import { usePlaidLink } from "react-plaid-link";
import { config } from "../config/config";
import Cookies from "js-cookie";

export const fetchLinkToken = async (setLinkToken, setError) => {
  try {
    const response = await fetch(`${config.BASE_URL}create-link-token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${Cookies.get("token")}`,
      },
    });
    const data = await response.json();
    console.log(data.link_token);
    setLinkToken(data.link_token);
  } catch (error) {
    console.error("Error fetching link token:", error);
    setError("Failed to fetch link token");
  }
};
export const usePlaidLinkSetup = (linkToken, setError, reload) => {
  return usePlaidLink({
    token: linkToken,
    onSuccess: async (public_token, metadata) => {
      try {
        const response = await fetch(
          `${config.BASE_URL}exchange-public-token`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `bearer ${Cookies.get("token")}`,
            },
            body: JSON.stringify({ public_token }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to exchange public token");
        }

        const data = await response.json();

        console.log("Access Token:", data.access_token);
        if (reload) {
          reload(); // Call the reload function to refresh the page
        }
      } catch (error) {
        console.error("Error exchanging public token:", error);
        setError("Failed to exchange public token");
      }
    },
    onExit: (error, metadata) => {
      if (error) {
        console.error("Error during Plaid Link:", error);
        setError("Error during Plaid Link");
      }
    },
  });
};
