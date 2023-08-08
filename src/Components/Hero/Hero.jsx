import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const [showFullText,SetShowFullText] = useState(false)

  useEffect(() => {
    Aos.init({
      duration: 2000,
      delay: 300,
      offset: 200,
      disable: window.innerWidth < 640,
    });
  }, []);
  return (
    <div className="container overflow-x-hidden flex flex-col sm:flex-row items-center justify-between py-8">
      <div className="" data-aos="fade-left">
        <h2 className="font-MorabbaBold text-xl dark:text-white md:text-2xl mb-5">
          لورم ایپسوم متن ساختگی با تولید!
        </h2>
        <p className={`text-justify md:leading-6 dark:text-white md:text-[18px] ${showFullText ? 'line-clamp-none': 'line-clamp-4'} md:line-clamp-none`}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه
          درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد.
        </p>
        <span className="flex items-center gap-2 justify-end text-orange-400 cursor-pointer md:hidden" onClick={()=>SetShowFullText(!showFullText)}>
          {
            showFullText ? 'مطالعه کمتر':'مطالعه بیشتر'
          }
          <IoIosArrowDown className={`${showFullText && 'rotate-180 ease-linear duration-150'}`}/>
        </span>
      </div>
      <div className="" data-aos="fade-right">
        <img src="../../public/images/heroo.png" />
      </div>
    </div>
  );
};

export default Hero;
