'use client'
import React, { createContext, useState, useContext, ReactNode } from "react";

interface ThemeContextType {
  isLightMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  isLightMode: false,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleTheme = () => setIsLightMode(!isLightMode);

  return (
    <ThemeContext.Provider value={{ isLightMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
