import dotenv from "dotenv";
dotenv.config();
import axios from "axios";

export const axiosBase = axios.create({
  baseURL: process.env.CMC_PRO_API_URL,
  headers: {
    "Content-Type": "application/json",
    "X-CMC_PRO_API_KEY": process.env.CMC_PRO_API_KEY,
  },
});
