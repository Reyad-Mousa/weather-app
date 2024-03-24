import { WeatherData } from "@/context/location";
import axios from "axios";
import { CircleX, Search, Settings } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";

const Header = () => {
  const { setData } = useContext(WeatherData);
  const { location, setLocation } = useContext(WeatherData);
  const [searchTerm, setSearchTerm] = useState(location);

  const getWeather = async () => {
    const api_key = "c365698461fe4ad884c191834242003";
    const api_url =
      "https://api.weatherapi.com/v1/forecast.json?key=" +
      api_key +
      "&q=" +
      searchTerm +
      "&days=5&aqi=no&alerts=no";
    try {
      const response = await axios.get(api_url);
      setData(response.data);
    } catch (error) {
      console.error("Failed to fetch weather data: ", error);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(getWeather, 500); // Debounce the search
    return () => clearTimeout(timeoutId); // Clear the timeout
  }, [searchTerm]);

  return (
    <header className=" py-2 p-4 flex flex-row items-center justify-between gap-3 w-full">
      <div className="py-2 p-4 flex flex-row items-center gap-3 bg-white/20 text-white rounded-full w-full">
        <Search
          className=" cursor-pointer hover:text-blue-500 text-[5rem]"
          onClick={() => getWeather()}
        />
        <input
          type="text"
          className=" bg-transparent text-white border-hidden w-full  outline-none "
          placeholder="Search... / City"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
            setSearchTerm(e.target.value);
          }}
        />
        <CircleX className=" cursor-pointer " onClick={() => setLocation("")} />
      </div>
      <Settings className=" cursor-pointer w-fit h-fit py-2 p-2 bg-white/20 text-white rounded-full" />
    </header>
  );
};

export default Header;
