import { axiosBase } from "./axiosBase.js";

export const fetchCryptoCurrencies = async () => {
  try {
    const response = await axiosBase.get("/cryptocurrency/listings/latest");
    console.log("Success fetching cryptocurrencies:");
    return response.data;
  } catch (error) {
    console.error("Error fetching cryptocurrencies:", error);
    throw error;
  }
};
