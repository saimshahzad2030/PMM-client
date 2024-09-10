import { usePlaidLink } from "react-plaid-link";
import { config } from "../config/config";
import Cookies from "js-cookie";

export const fetchLinkToken = async (
  setLinkToken,
  setIdLinkToken,
  setError
) => {
  try {
    const response = await fetch(`${config.BASE_URL}create-link-token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${Cookies.get("token")}`,
      },
    });
    const data = await response.json();
    setIdLinkToken(data.id_verification_token);
    setLinkToken(data.link_token);
    console.log(data.id_verification_token);
  } catch (error) {
    console.error("Error fetching link token:", error);
    setError("Failed to fetch link token");
  }
};

export const fetchIdVLinkToken = async (setLinkToken, setError) => {
  try {
    const response = await fetch(
      `${config.BASE_URL}generate_link_token_for_idv`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${Cookies.get("token")}`,
        },
      }
    );
    const data = await response.json();
    setLinkToken(data.link_token);
  } catch (error) {
    console.error("Error fetching link token:", error);
    setError("Failed to fetch link token");
  }
};
export const usePlaidLinkSetup = (
  linkToken,
  setError,
  setPlaidToken,
  setVerificationProcessMessage
) => {
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
        setPlaidToken(data.access_token);
        setVerificationProcessMessage(data.updatedUser.verificationMessage);

        console.log("Access Token:", data.access_token);
        console.log(
          "data.updatedUser.verificationMessage:",
          data.updatedUser.verificationMessage
        );
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

export const usePlaidLinkSetup2 = (
  linkToken,
  setError,
  setVerificaitonToken
) => {
  return usePlaidLink({
    token: linkToken,
    onSuccess: async (public_token, metadata) => {
      try {
        const response = await fetch(
          `${config.BASE_URL}exchange-id-verification-token`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `bearer ${Cookies.get("token")}`,
            },
            body: JSON.stringify({ public_token }),
          }
        );

        console.log(public_token, "public_token");
        if (!response.ok) {
          throw new Error("Failed to exchange public token");
        }

        const data = await response.json();
        setVerificaitonToken(data.access_token);
        console.log("Data:", data);
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
