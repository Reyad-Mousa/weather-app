"use client";
import { createContext, useState, useEffect } from "react";

export const Theme = createContext();
export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light"); // default state

  useEffect(() => {
    // This code runs after the component has mounted, where `localStorage` is available
    const savedMode = localStorage.getItem("themeMode");
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);

  const toggle = () => {
    setMode((prev) => {
      const newMode = prev === "light" ? "dark" : "light";
      localStorage.setItem("themeMode", newMode);
      return newMode;
    });
  };

  return (
    <Theme.Provider value={{ toggle, mode }}>
      <div className={`${mode}`}>{children}</div>
    </Theme.Provider>
  );
};
