import React, { useContext } from "react";
import { CircleX, Search, Settings } from "lucide-react";
import { WeatherData } from "@/context/location";
import Image from "next/image";

const ThisWeek = () => {
  const { data } = useContext(WeatherData);

  const getDayName = (dateString) => {
    const date = new Date(dateString);
    const dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return dayNames[date.getDay()];
  };

  const ThisWeek = data?.forecast;

  return (
    <section className="p-4 flex flex-col items-start w-full">
      <h1 className="text-white text-2xl font-bold mb-4 ">This Week</h1>
      <div className="flex flex-wrap gap-5 justify-center">
        {ThisWeek?.forecastday?.map((item, index) => {
          const dayName = getDayName(item.date);
          return (
            <ul
              key={index}
              className="bg-white/10 shadow-sm max-w-72  py-2 grid grid-cols-3  items-center gap-3 rounded-lg text-white"
            >
              <li className="">
                <Image
                  src={`https:${item.day.condition.icon}`}
                  alt=""
                  width={100}
                  height={100}
                  quality={100}
                  priority
                />
              </li>
              <div className="flex flex-col gap-5  justify-between items-center h-fit">
                <li className="font-bold">{dayName}</li>
                <li className="font-bold text-2xl">{item.day.avgtemp_c}°c</li>
                <span className="text-[0.8rem]">{item.day.condition.text}</span>
              </div>
              <div>
                <li className=" text-md">{item.day.maxtemp_c}°C</li>
                <li className=" text-md">{item.day.mintemp_c}°C</li>
              </div>
            </ul>
          );
        })}
      </div>
    </section>
  );
};

export default ThisWeek;
