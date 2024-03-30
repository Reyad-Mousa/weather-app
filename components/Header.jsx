import { Theme } from "@/context/darkThemeContext";
import { WeatherData } from "@/context/location";
import axios from "axios";
import { CircleX, Search, Settings, Sun, Moon } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";

const Header = () => {
  const { mode, toggle } = useContext(Theme);
  const { setData } = useContext(WeatherData);
  const { loading, setLoading } = useContext(WeatherData);
  const { location, setLocation } = useContext(WeatherData);
  const [searchTerm, setSearchTerm] = useState(location);
  const getWeather = async () => {
    setLoading(true);
    const api_key = "c365698461fe4ad884c191834242003";
    const api_url =
      "https://api.weatherapi.com/v1/forecast.json?key=" +
      api_key +
      "&q=" +
      searchTerm +
      "&days=6&aqi=no&alerts=no";
    try {
      const response = await axios.get(api_url);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    const timeoutId = setTimeout(getWeather, 500); // Debounce the search
    return () => clearTimeout(timeoutId, 2000); // Clear the timeout
  }, [searchTerm]);

  useEffect(() => {
    localStorage.setItem("location", location); // Save location to localStorage
  }, [location]);

  return (
    <header className=" py-2 p-4 flex flex-row items-center justify-between gap-3 w-full">
      <div className="py-2 p-4 flex flex-row items-center gap-3 bg-gray-400 dark:bg-white/20 dark:text-white rounded-full w-full">
        <Search
          className=" cursor-pointer hover:text-blue-500 text-[5rem]"
          onClick={() => getWeather()}
        />
        <input
          type="text"
          className=" bg-transparent dark:text-white placeholder-white border-hidden w-full  outline-none "
          placeholder="Search... / City"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
            setSearchTerm(e.target.value);
          }}
        />
        <CircleX
          className=" cursor-pointer hover:text-blue-500 "
          onClick={() => setLocation("")}
        />
      </div>
      <button
        className={`${
          mode === "dark" ? "bg-white dark:text-black" : "bg-black text-white"
        }  w-8 h-8  rounded-full  flex items-center justify-center hover:ring-2 ring-blue-400 transition-all duration-300 focus:outline-none`}
        onClick={toggle}
        aria-label="Toggle Dark Mode"
      >
        {mode === "light" ? (
          <Moon className=" w-5 h-5" />
        ) : (
          <Sun className="   w-5 h-5" />
        )}
      </button>
    </header>
  );
};

export default Header;
