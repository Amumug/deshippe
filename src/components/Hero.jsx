import React from "react";
import jhon from "../assets/Jhon.svg";
import lisa from "../assets/Lisa.svg";
import emily from "../assets/Emily.svg";
import carlos from "../assets/Carlos.svg";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col sm:py-16 py-6 px-8 justify-center items-center">
        <h1 className="text-gray-900 text-4xl sm:text-5xl md:text-6xl font-light font-[Poppins, sans-serif] text-center">
          Trusted by the bests
        </h1>
        <p className="text-center text-zinc-500 text-base sm:text-lg md:text-xl pt-4 font-medium font-[Inter, sans-serif] leading-relaxed sm:leading-loose">
          Created with the trust of world-class founders, industry leaders,
          <br className="hidden sm:block" />
          and visionaries striving to improve the grid.
        </p>
        <div className="w-full mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex-col justify-start items-start gap-9 inline-flex">
            <div className="w-[58px] h-[58px] relative">
              <div className="w-[58px] h-[58px] left-0 top-0 absolute bg-gradient-to-bl from-yellow-100 via-green-400 to-violet-950 rounded-[7px]" />
              <div className="w-[9.72px] h-[63.44px] left-[6.73px] top-[9.11px] absolute origin-top-left rotate-[-43.19deg] bg-teal-300 rounded-full blur-[38.60px]" />
              <div className="w-[23px] h-[21px] left-[29px] top-[29px] absolute bg-lime-400 rounded-full blur-[19px]" />
              <div className="w-[17px] h-4 left-[40px] top-[13px] absolute bg-yellow-200 rounded-full blur-[19px]" />
            </div>
            <div className=" flex-col justify-start items-start gap-8 flex">
              <div className="flex-col justify-start items-start gap-1.5 flex">
                <div className="text-neutral-900 text-[22px] font-medium font-['Poppins', sans-serif]">
                  John Smith
                </div>
                <div className="text-zinc-500 text-xl font-medium font-['Rasa']">
                  Founder of EcoGoods
                </div>
              </div>
              <div className="text-zinc-400 text-lg font-normal font-['Inter', sans-serif] leading-relaxed">
                “This shipping solution has
                <br />
                revolutionized our logistics. Fast,
                <br />
                reliable, and incredibly efficient’
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-9 inline-flex">
            <div className="w-[58px] h-[58px] relative">
              <div className="w-[58px] h-[58px] left-0 top-0 absolute bg-slate-300 rounded-[7px]" />
              <div className="w-[30px] h-[30px] left-[25px] top-[6px] absolute bg-rose-400 rounded-full blur-[14.80px]" />
              <div className="w-[41px] h-[41px] left-[5px] top-[11px] absolute bg-gradient-to-br from-orange-400 to-orange-400 rounded-full blur-[18.20px]" />
            </div>
            <div className="flex-col justify-start items-start gap-8 flex">
              <div className="flex-col justify-start items-start gap-1.5 flex">
                <div className="text-neutral-900 text-[22px] font-medium font-['Poppins', sans-serif]">
                  Emily Davis
                </div>
                <div className="text-zinc-500 text-xl font-medium font-['Rasa']">
                  Founder of PetPalace
                </div>
              </div>
              <div className="text-zinc-400 text-lg font-normal font-['Inter', sans-serif] leading-relaxed">
                “Managing shipments is now a breeze. The automated features save
                us so much time, allowing us to focus more on growing our
                business.”
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-9 inline-flex">
            <img src={lisa} alt="" />
            <div className="flex-col justify-start items-start gap-8 flex">
              <div className="flex-col justify-start items-start gap-1.5 flex">
                <div className="text-neutral-900 text-[22px] font-medium font-['Poppins', sans-serif]">
                  Lisa Wong
                </div>
                <div className="text-zinc-500 text-xl font-medium font-['Rasa']">
                  Founder of Artisan Creations
                </div>
              </div>
              <div className="text-zinc-400 text-lg font-normal font-['Inter', sans-serif] leading-relaxed">
                “The seamless integration and real- time tracking have improved
                our customer satisfaction tremendously.”
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-9 inline-flex">
            <div className="w-[58px] h-[58px] relative">
              ``
              <div className="w-[58px] h-[58px] left-0 top-0 absolute bg-gradient-to-bl from-yellow-100 via-green-400 to-violet-950 rounded-[7px]" />
              ``
              <div className="w-[9.72px] h-[63.44px] left-[6.73px] top-[9.11px] absolute origin-top-left rotate-[-43.19deg] bg-teal-300 rounded-full blur-[38.60px]" />
              <div className="w-[23px] h-[21px] left-[29px] top-[29px] absolute bg-lime-400 rounded-full blur-[19px]" />
              <div className="w-[17px] h-4 left-[40px] top-[13px] absolute bg-yellow-200 rounded-full blur-[19px]" />
            </div>
            <div className="flex-col justify-start items-start gap-8 flex">
              <div className="flex-col justify-start items-start gap-1.5 flex">
                <div className="text-neutral-900 text-[22px] font-medium font-['Poppins', sans-serif]">
                  Carlos Hernandez
                </div>
                <div className="text-zinc-500 text-xl font-medium font-['Rasa']">
                  Founder of Gourmet Express
                </div>
              </div>
              <div className="text-zinc-400 text-lg font-normal font-['Inter', sans-serif] leading-relaxed">
                “This software provides the reliability we need for our
                perishable goods. The real-time updates are crucial for our
                business operations.”
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
