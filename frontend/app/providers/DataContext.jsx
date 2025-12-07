"use client";
import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [sharedData, setSharedData] = useState(null);
  const [selectedCrypto, setSelectedCrypto] = useState("");

  return (
    <DataContext.Provider
      value={{ sharedData, setSharedData, selectedCrypto, setSelectedCrypto }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useSharedData() {
  return useContext(DataContext);
}
