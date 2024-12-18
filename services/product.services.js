import axios from "axios";
import { config } from "../config/config";

import Cookies from "js-cookie";

export const addProduct = async (values, setLoading) => {
  try {
    setLoading(true);

    const formData = new FormData();

    values.images.forEach((image) => formData.append("images", image));
    values.videos.forEach((video) => formData.append("videos", video));
    values.productHighlights.forEach((highlight) =>
      formData.append("productHighlights", highlight)
    );

    formData.append("specifications", values.grade);
    formData.append("specifications", values.thickness);
    formData.append("specifications", values.metalcontent);
    formData.append("specifications", values.diameter);
    formData.append("specifications", values.purity);
    formData.append("productDetails", values.productDetails);
    formData.append("description", values.productDetails);
    formData.append("name", values.name);
    formData.append("metalType", values.type);
    formData.append("price", values.price);
    formData.append("available", values.available);
    formData.append("model", values.model);

    const response = await fetch(`${config.BASE_URL}product`, {
      method: "POST",
      headers: {
        Authorization: `bearer ${Cookies.get("token")}`,
      },
      body: formData,
    });
    const data = await response.json();
    setLoading(false);

    return data;
  } catch (error) {
    setLoading(false);

    console.log(error);
  }
};

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${config.BASE_URL}product`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSearchedProducts = async (searchQuery, setItems) => {
  try {
    const response = await fetch(
      `${config.BASE_URL}search-product?searchQuery=${searchQuery}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    if (response.status == 200) {
      setItems(data?.products ? data.products : [{ name: "no product found" }]);
    } else {
      setItems([{ name: "no product found" }]);
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchProduct = async (id) => {
  try {
    const response = await fetch(`${config.BASE_URL}single-product?id=${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${Cookies.get("token")}`,
      },
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchProductByType = async (type) => {
  try {
    const response = await fetch(
      `${config.BASE_URL}single-product-by-type?type=${type}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${Cookies.get("token")}`,
        },
      }
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (id, setLoading) => {
  try {
    setLoading(true);
    const response = await fetch(`${config.BASE_URL}product?id=${id}`, {
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

export const fetchSpecificProducts = async (typeOfMetal, start, end) => {
  try {
    const response = await fetch(
      `${config.BASE_URL}specific-product?typeOfMetal=${typeOfMetal}&start=${start}&end=${end}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
