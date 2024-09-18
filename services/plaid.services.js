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
    setLinkToken(data.link_token);
    setIdLinkToken(data.id_verification_token);
    console.log(data.id_verification_token);
  } catch (error) {
    console.error("Error fetching link token:", error);
    setError("Failed to fetch link token");
  }
};
export const fetchVerificationDetails = async (id) => {
  try {
    const response = await fetch(
      `http://localhost:5000/verificationDetails?identity_verification_id=${id}`,
      {
        method: "GET",
        headers: {
          Authorization: `bearer ${Cookies.get("token")}`,
        },
      }
    );
    const data = await response.json();
    return data?.status;
  } catch (e) {
    console.log("error at fetchVerificationDetails: ", e);
  }
};
export const usePlaidLinkSetup2 = (
  idlinkToken,
  setError,
  setVerificationToken,
  setVerificationDetails,
  handleLogout,
  handleClick
) => {
  return usePlaidLink({
    token: idlinkToken,
    onSuccess: async (public_token, metadata) => {
      try {
        console.log("idlinkToken:", idlinkToken);
        console.log("public_token id: ", public_token);
        console.log("meta deta: ", metadata);

        const verificationDetails = await fetchVerificationDetails(
          metadata?.link_session_id
        );
        setVerificationDetails(verificationDetails);
        handleClick();
        handleLogout();
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

        if (!response.ok) {
          throw new Error("Failed to exchange public token");
        }
        const data = await response.json();
        console.log(data, "data");
        setVerificationToken(data.access_token);
      } catch (error) {
        console.error("Error exchanging public token:", error);
        setError("Failed to exchange public token");
      }
    },
    onExit: (error, metadata) => {
      if (error) {
        console.error("Error during Plaid Link:", error);
        console.error("onExit metadata:", metadata);
        setError("Error during Plaid Link");
      } else {
        console.log("Plaid Link exited.");
        console.log("Exit metadata:", metadata);
      }
    },
  });
};

export const usePlaidLinkSetup = (linkToken, setBankError, setPlaidToken) => {
  return usePlaidLink({
    token: linkToken,
    onSuccess: async (public_token, metadata) => {
      try {
        console.log("public_token bank: ", public_token);

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
      } catch (error) {
        console.error("Error exchanging public token:", error);
        setBankError("Failed to exchange public token");
      }
    },
    onExit: (error, metadata) => {
      if (error) {
        console.error("Error during Plaid Link:", error);
        setBankError("Error during Plaid Link");
      }
    },
  });
};
