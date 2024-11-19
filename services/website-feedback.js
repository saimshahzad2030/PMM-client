"use server";
import { config } from "../config/config";
export const fetchWebFeedbacks = async (start, end) => {
  try {
    const response = await fetch(
      `${config.BASE_URL}website-reviews?start=${start}&end=${end}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addFeedback = async (review, ratings, token, setLoading) => {
  try {
    setLoading(true);
    const response = await fetch(`${config.BASE_URL}website-reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
      body: JSON.stringify({
        review,
        ratings,
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
