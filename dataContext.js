"use client";
import { createContext, useContext, useState } from "react";

const initialData = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
];

export const DataContext = createContext({
  data: initialData,
  setData: () => {},
});

export const DataContextProvider = ({ children }) => {
  const [data, setData] = useState(initialData);

  return (
    <DataContext.Provider value={{data, setData}}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
