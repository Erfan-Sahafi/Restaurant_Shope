import React from "react";
import { BsTelephone, BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { LiaTelegram } from "react-icons/lia";
const Footer = () => {
  return (
    <div className="flex items-start sm:justify-evenly flex-col sm:flex-row mt-10 bg-gray-200 dark:bg-slate-900 px-8 py-10">
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-5">
          <div>
            <img
              className="w-16"
              src="../../public/images/svg/Pizza-logo.svg"
              alt="logo"
            />
          </div>
          <h3 className="font-MorabbaMedium text-xl sm:text-2xl dark:text-white ">
            فست{" "}
            <span className="text-orange-400 text-2xl sm:text-3xl font-MorabbaBold">
              فود!
            </span>
          </h3>
        </div>
        <div className="flex flex-col mb-8">
          <span className="block mb-3 dark:text-white">شبکه های اجتماعی ما:</span>
          <div className="flex text-xl md:text-2xl dark:text-white gap-6">
            <a href="#">
              <BsInstagram className="ease-in duration-200 hover:text-orange-400" />
            </a>
            <a href="#">
              <LiaTelegram className="ease-in duration-200 hover:text-orange-400" />
            </a>
            <a href="#">
              <BsTelephone className="ease-in duration-200 hover:text-orange-400" />
            </a>
            <a href="#">
              <FiTwitter className="ease-in duration-200 hover:text-orange-400" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex gap-2 md:w-[25%] flex-col sm:flex-row md:items-center justify-between">
        <div className="flex flex-col gap-2 md:gap-6 dark:text-white child-hover:text-blue-400 child:ease-in child:duration-200">
          <a href="#">درباره ما</a>
          <a href="#">همکاری با ما</a>
          <a href="#">وبلاگ</a>
          <a href="#">قوانین سایت</a>
        </div>
        <div className="flex flex-col gap-2 md:gap-6 dark:text-white child-hover:text-blue-400 child:ease-in child:duration-200">
          <a href="#">ثبت شکایات</a>
          <a href="#">پرسش های متداول</a>
          <a href="#">اپلیکیشن موبایل</a>
          <a href="#">حریم خصوصی</a>
        </div>
      </div>
      <div className="flex h-full gap-3 mt-6 md:gap-6 items-center">
        <img src="../../public/images/rezi.png" className="w-16"  />
        <img src="../../public/images/kasbokar.png" className="w-16"  />
        <img src="../../public/images/enamad-logo.png" className="w-16"  />
      </div>
    </div>
  );
};

export default Footer;
