import dotenv from "dotenv";
dotenv.config();
import axios from "axios";

export const axiosBase = axios.create({
  baseURL: "https://pro-api.coinmarketcap.com/v1",
  headers: {
    "Content-Type": "application/json",
    "X-CMC_PRO_API_KEY": process.env.CMC_PRO_API_KEY,
  },
});
