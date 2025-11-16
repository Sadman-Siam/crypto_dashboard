import axiosBase from "./axiosBase";

export const fetchCryptoCurrencies = async () => {
  try {
    const response = await axiosBase.get("/cryptocurrencies");
    return response.data;
  } catch (error) {
    console.error("Error fetching cryptocurrencies:", error);
    throw error;
  }
};
