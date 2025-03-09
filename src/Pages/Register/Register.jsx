import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { BiSolidLockAlt, BiSolidUser } from "react-icons/bi";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from 'react-icons/md'
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <Navbar />
      <main className="h-[372px] bg-loginmobile-img min-h-screen sm:bg-logindescktop-img bg-no-repeat bg-cover object-cover bg-[center_top]">
        <section className="sm:container flex items-center h-[60%] sm:h-full justify-center sm:justify-start text-justify ">
          <div className="w-80 md:w-96 px-3 py-3 mt-10 flex flex-col gap-2 sm:gap-4 rounded-xl border-2 border-white bg-black/60">
            <h1 className="text-center font-MorabbaBold text-orange-400 text-2xl">
              ثبت نام
            </h1>
            <div className="text-white text-center tracking-tighter">
              <span>اگر ثبت نام کرده اید.</span>
              <Link
                className="text-orange-400 mr-1 hover:text-orange-500 transition-colors"
                to={'/login'}
              >
                وارد شوید
              </Link>
            </div>
            <form
              className="w-full flex flex-col items-center gap-4 sm:gap-6  overflow-hidden"
              action=""
            >
              <div className="w-full flex items-center border-b-2 border-b-orange-400">
                <input
                  type="text"
                  className="bg-transparent focus:ring-0 placeholder:text-white text-base text-white p-2 w-full outline-none border-none"
                  placeholder="نام کاربری"
                />
                <BiSolidUser className="text-white text-3xl" />
              </div>
              <div className="w-full flex items-center border-b-2 border-b-orange-400">
                <input
                  type="email"
                  className="bg-transparent focus:ring-0 placeholder:text-white text-base text-white p-2 w-full outline-none border-none"
                  placeholder="ایمیل"
                />
                <MdEmail className="text-white text-3xl" />
              </div>
              <div className="w-full flex items-center border-b-2 border-b-orange-400">
                <input
                  type="tel"
                  className="bg-transparent focus:ring-0 placeholder:text-white text-base text-white p-2 w-full outline-none border-none"
                  placeholder="شماره تماس"
                />
                <AiFillPhone className="text-white text-3xl" />
              </div>
              <div className="w-full flex items-center border-b-2 border-b-orange-400">
                <input
                  type="password"
                  className="bg-transparent focus:ring-0 placeholder:text-white text-base text-white p-2 w-full outline-none border-none"
                  placeholder="رمز عبور"
                />
                <BiSolidLockAlt className="text-white text-3xl" />
              </div>
              <div className="text-white flex items-center gap-2">
                <input type="checkbox" className="focus:ring-transparent"/> 
                <span>مرا به یاد داشته باش</span>
              </div>
              <div className="w-full">
                <a
                  href="#"
                  className="flex justify-center items-center py-3 font-DanaMedium text-white rounded-xl bg-orange-400 transition-colors hover:bg-orange-500"
                >
                  ثبت نام
                </a>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Register;
