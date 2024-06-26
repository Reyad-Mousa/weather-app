import { useContext } from "react";
import { WeatherData } from "@/context/location";
import Image from "next/image";
import { Theme } from "@/context/darkThemeContext";

const HeroSection = () => {
  const { mode, toggle } = useContext(Theme);

  const { data } = useContext(WeatherData);
  const image = data?.current?.condition?.icon;

  return (
    <section className={`w-full flex flex-col items-center `}>
      <h1 className="dark:text-white font-bold">{data?.location?.name}</h1>

      <div className="flex flex-row items-center gap-5  dark:text-white">
        {image && (
          <div className="flex flex-col items-center ">
            <Image
              className="hidden md:block "
              src={`https:${image}`}
              alt=""
              width={150}
              height={200}
              quality={100}
              priority
            />
          </div>
        )}

        <div className="flex flex-col items-center justify-center ">
          <h1 className=" font-bold font-sans text-[4rem] sm:text-[6rem]">
            {data?.current?.feelslike_c}°
          </h1>
          <span className="mb-5 text-gray-400">
            {data?.current?.condition.text}
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
