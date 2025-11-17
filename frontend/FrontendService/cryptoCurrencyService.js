import axiosBase from "./axiosBase";

export const fetchCryptoCurrencies = async () => {
  try {
    const response = await axiosBase.get("/cryptocurrencies");
    console.log("frontend service fetched data:");
    return response.data;
  } catch (error) {
    console.error("Error fetching cryptocurrencies:", error);
    throw error;
  }
};
