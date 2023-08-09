import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import Typewriter from "typewriter-effect";

const Header = () => {
  return (
    <>
      <main className="relative h-[372px] bg-mobile-img sm:min-h-screen sm:bg-descktop-img bg-no-repeat bg-cover object-cover bg-[center_top]">
        <section className="sm:container flex items-center h-full justify-center sm:justify-start text-justify bg-black opacity-60 sm:bg-transparent sm:opacity-100">
          <div className="w-[350px] md:w-[500px] flex flex-col gap-2 md:gap-4 divide-y-2 divide-orange-300 text-white">
            <div className="w-full bg-white p-2 rounded-2xl flex items-center justify-between">
              <input
                type="text"
                placeholder="غذای خود را جست و جو کنید..."
                className="border-none w-[90%] outline-none text-black p-1 text-base focus:ring-0"
              />
              <BiSearchAlt2 className="flex-1 text-orange-300 text-2xl cursor-pointer" />
            </div>
            <h1 className="font-MorabbaBold text-xl md:text-2xl py-2" style={{wordSpacing:'.4rem'}}>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("اکبر فود ، یه تجربه خوش مزه و خوب:)")
                    .start()
                    .pauseFor(2000)
                    .deleteAll();
                }}
                options={{
                  loop: true,
                }}
              />
            </h1>
            
          </div>
        </section>
        <img
          src="/images/wave.svg"
          className="hidden sm:block sm:dark:hidden absolute bottom-0"
        />
        <img
          src="/images/darkwave.svg"
          className="hidden sm:dark:block absolute bottom-0"
        />
      </main>
    </>
  );
};

export default Header;
