import React, { useContext } from "react";
import Image from "next/image";
import { WeatherData } from "@/context/location";
const HourOfDay = () => {
  const { data } = useContext(WeatherData);
  const InfoDayData = data?.forecast?.forecastday[0]?.hour;

  console.log(InfoDayData);
  return (
    <section className="w-full flex flex-col items-center justify-evenly text-white">
      <h1 className="text-white text-2xl font-bold mb-4 ">Hour</h1>
      <div className="flex flex-row overflow-auto w-full ">
        {InfoDayData?.map((item, index) => (
          <ul
            key={index}
            className="flex flex-col items-center p-2 sm:flex-row"
          >
            <li className="sm:text-lg text-sm pt-2">
              {new Date(item.time).toLocaleTimeString([], {
                hour: "2-digit",
                hour12: true,
              })}
            </li>
            <li className="">
              <Image
                src={`https:${item?.condition?.icon}`}
                alt=""
                width={100}
                height={100}
                quality={100}
                priority
              />
            </li>
            <li className="text-gray-500">{item?.temp_c}</li>
          </ul>
        ))}
      </div>
    </section>
  );
};

export default HourOfDay;
