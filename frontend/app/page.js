"use client";

import { Button } from "@/components/ui/button";
import { fetchCryptoCurrencies } from "@/FrontendService/cryptoCurrencyService";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "@/components/ui/spinner";
import CryptoList from "@/components/cryptoList";
import CryptoHighlights from "@/components/cryptoHighlights";

export default function Home() {
  const {
    data: cryptoCurrenciesData,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["cryptocurrencies"],
    queryFn: fetchCryptoCurrencies,
    enabled: true, // true -> fetch on site laod / false -> do not fetch on site load
    staleTime: 1000 * 60 * 2, // 5 minutes cache
  });

  return (
    <div>
      {isLoading && (
        <div className="flex justify-center">
          <Button disabled variant="link" size="lg">
            <Spinner />
            Fetching Data....please wait
          </Button>
        </div>
      )}
      {isError && <div>Error fetching data.</div>}

      {cryptoCurrenciesData && (
        <>
          <CryptoList crypto={cryptoCurrenciesData.data}></CryptoList>
          <CryptoHighlights
            crypto={cryptoCurrenciesData.data}
          ></CryptoHighlights>
        </>
      )}
    </div>
  );
}
