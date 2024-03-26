import React, { useContext } from "react";
import Image from "next/image";
import { WeatherData } from "@/context/location";
const HourOfDay = () => {
  const { data } = useContext(WeatherData);
  const InfoDayData = data?.forecast?.forecastday[0]?.hour;

  console.log(data);
  return (
    <section className="w-full flex flex-col items-start justify-evenly text-white p-4 ">
      <h1 className="text-white text-2xl font-bold mb-4 ">Hour</h1>
      <div className="flex flex-row overflow-auto w-full pb-5 pl-2 sm:px-5">
        {InfoDayData?.map((item, index) => (
          <ul
            key={index}
            className="flex flex-col justify-between items-center content-center mx-1 text-center  p-2 bg-white/5 shadow-sm rounded-lg"
          >
            <li className="sm:text-lg text-sm ">
              {new Date(item.time).toLocaleTimeString([], {
                hour: "2-digit",
                hour12: true,
              })}
            </li>
            <li className="">
              <Image
                className=" max-w-16 "
                src={`https:${item?.condition?.icon}`}
                alt=""
                width={100}
                height={100}
                quality={100}
                priority
              />
            </li>
            <li className="text-gray-500">{item?.temp_c}°c</li>
          </ul>
        ))}
      </div>
    </section>
  );
};

export default HourOfDay;
