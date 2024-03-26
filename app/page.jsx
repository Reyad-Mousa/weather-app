"use client";
import { WeatherData } from "../context/location";
import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ThisWeek from "@/components/ThisWeek";
import InfoDay from "@/components/InfoDay";
import HourOfDay from "@/components/HourOfDay";
import Loading from "./loading";

export default function Home() {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState("cairo");
  const [loading, setLoading] = useState(true);

  return (
    <WeatherData.Provider
      value={{ data, loading, location, setData, setLoading, setLocation }}
    >
      <main className="flex flex-col items-center justify-between p-2 gap-5">
        <Header />
        {loading ? (
          <Loading />
        ) : (
          <>
            <HeroSection />
            <InfoDay />
            <HourOfDay />
            <ThisWeek />
          </>
        )}
      </main>
    </WeatherData.Provider>
  );
}
