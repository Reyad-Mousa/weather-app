import React, { useContext } from "react";
import Image from "next/image";
import { WeatherData } from "@/context/location";
const InfoDay = () => {
  const { data } = useContext(WeatherData);
  const InfoDayData = data?.forecast?.forecastday[0];
  const sunrise = InfoDayData?.astro?.sunrise;
  const sunset = InfoDayData?.astro?.sunset;
  const chance_rain = InfoDayData?.day?.daily_chance_of_rain;
  const windy_speed = InfoDayData?.day?.avgvis_km;
  const uv_index = InfoDayData?.day?.uv;
  const humidity = InfoDayData?.day?.avghumidity;

  return (
    <section className="px-10 grid grid-cols-2 w-full sm:flex sm:flex-row  gap-8 items-center justify-evenly text-white">
      <div className="flex flex-col items-center sm:flex-row">
        <Image src="/rain.png" alt="rain" width={50} height={50} />
        <ul className="p-2 text-center">
          <li className="sm:text-md md:text-lg text-sm pt-2">Chance Rain</li>
          <li className="text-gray-500">{chance_rain}%</li>
        </ul>
      </div>
      <div className="flex flex-col items-center sm:flex-row">
        <Image src="/wind.png" alt="windy" width={50} height={50} />
        <ul className="p-2 text-center">
          <li className="sm:text-md md:text-lg text-sm pt-2">Windy</li>
          <li className="text-gray-500 grid grid-flow-row">
            {windy_speed}km/h
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center sm:flex-row">
        <Image src="/uv-index.png" alt="" width={50} height={50} />
        <ul className="p-2 text-center ">
          <li className="sm:text-md text-sm pt-2">UV Index</li>
          <li className="text-gray-500">{uv_index}</li>
        </ul>
      </div>
      <div className="flex flex-col items-center sm:flex-row">
        <Image src="/sunrise.png" alt="" width={50} height={50} />
        <ul className="p-2 text-center">
          <li className="sm:text-md md:text-lg text-sm pt-2">Sunrise</li>
          <li className="text-gray-500">{sunrise}</li>
        </ul>
      </div>
      <div className="flex flex-col items-center sm:flex-row">
        <Image src="/sunset-.png" alt="" width={50} height={50} />
        <ul className="p-2 text-center">
          <li className="sm:text-md md:text-lg text-sm pt-2">Sunset</li>
          <li className="text-gray-500">{sunset}</li>
        </ul>
      </div>
      <div className="flex flex-col items-center sm:flex-row">
        <Image src="/humidity.png" alt="humidity" width={50} height={50} />
        <ul className="p-2 text-center">
          <li className="sm:text-md md:text-lg text-sm pt-2">Humidity</li>
          <li className="text-gray-500">{humidity}</li>
        </ul>
      </div>
    </section>
  );
};

export default InfoDay;
