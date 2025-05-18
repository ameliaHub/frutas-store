import { createContext, useState } from "react";

export const Context = createContext();

export function ContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  return (
    <Context.Provider value={{ cart, setCart }}>{children}</Context.Provider>
  );
}
