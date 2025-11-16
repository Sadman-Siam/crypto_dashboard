"use client";

import { ModeToggle } from "@/components/toggle";
import { Button } from "@/components/ui/button";
import { fetchCryptoCurrencies } from "@/FrontendService/cryptoCurrencyService";
import { useState } from "react";

export default function Home() {
  const [cryptocurrencies, setCryptocurrencies] = useState([null]);

  const handleCryptoCurrency = async () => {
    try {
      const data = await fetchCryptoCurrencies();
      setCryptocurrencies(data);
      console.log("Cryptocurrencies successfully fetched.");
    } catch (error) {
      console.error("Error fetching cryptocurrencies in page:", error);
    }
  };
  return (
    <div>
      <h1>Welcome to Crypto Graph</h1>
      <Button onClick={handleCryptoCurrency}>Fetch cryptocurrencies</Button>
      {cryptocurrencies == null ? (
        <div>No data</div>
      ) : (
        <div>
          <h1>Data is there</h1>
        </div>
      )}
    </div>
  );
}
