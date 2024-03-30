import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Theme, ThemeProvider } from "@/context/darkThemeContext";
import { useContext } from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Weather Now",
  description: "weather app ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}  dark:bg-black `}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
