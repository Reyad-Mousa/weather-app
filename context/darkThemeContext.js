"use client";
import { createContext, useState } from "react";

export const Theme = createContext();
export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");
  const toggle = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <Theme.Provider value={{ toggle, mode }}>
      <div className={`${mode}`}>{children}</div>
    </Theme.Provider>
  );
};
