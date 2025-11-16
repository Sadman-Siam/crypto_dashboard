import dotenv from "dotenv";
import express from "express";
import cors from "cors";
dotenv.config();

import { fetchCryptoCurrencies } from "./backendService/cryptoCurrencyService.js";

const port = process.env.PORT;
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Crypto Dashboard Backend is running.");
});

app.get("/api", (req, res) => {
  res.json({ message: "API is working", status: "success" });
});
app.get("/api/cryptocurrencies", async (req, res) => {
  try {
    const cryptocurrencies = await fetchCryptoCurrencies();
    res.json(cryptocurrencies);
  } catch (error) {
    res.status(500).json({ message: "Error fetching cryptocurrencies", error });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
