import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { GrFormClose } from "react-icons/gr";
import { BiLogIn, BiSolidLeftArrow } from "react-icons/bi";
import { BsSun, BsMoon, BsTelephone, BsInstagram } from "react-icons/bs";
import { LiaTelegram } from "react-icons/lia";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
  );
  const [hideSubmenu, SetHideSubmenu] = useState(false);
  const [openSideBar, SetOpenSideBar] = useState(false);
  const [allNavbar, setAllNavbar] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;
  

  useEffect(() => {
    if (theme === "dark") {
      document.getElementById("intro").classList.add("dark");
    } else {
      document.getElementById("intro").classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const darkModHandler = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    fetch(`${API_URL}/navbar`)
      .then((res) => res.json())
      .then((data) => {
        setAllNavbar(data);
      });
  }, []);

  const basketNumber = useSelector((state) => state.items.length);

  return (
    <>
      <header className="hidden md:flex w-[96%] z-50 mx-auto items-center bg-black/50 backdrop-blur-[6px] h-24 rounded-3xl fixed top-4 right-0 left-0">
        <div className="flex items-center justify-between h-14 w-full px-6">
          {/* right header box */}

          <div className="flex items-center gap-6 lg:gap-9">
            {/* header logo */}
            <div className="shrink-0">
              <img
                className="w-[2.5rem] lg:w-14 rotate-45"
                src="/images/Pizza-logo.svg"
                alt="logo"
              />
            </div>
            {/* header nav list */}
            <nav className="flex items-center h-14">
              <ul className="h-full flex items-center md:text-xl gap-10 lg:gap-14 text-zinc-200 child:leading-[56px]">
                {allNavbar.map((nav) => (
                  <li
                    key={nav.id}
                    className={`${
                      nav.submenue.length > 0
                        ? "text-orange-300 font-DanaMedium relative group flex gap-1 items-center"
                        : "text-[18px]"
                    }`}
                  >
                    <Link to={nav.href}>
                      <span>{nav.title}</span>
                    </Link>
                    {nav.submenue.length > 0 && (
                      <>
                        <IoIosArrowDown />
                        <ul className="absolute top-full right-0 invisible opacity-0 delay-100 transition-all group-hover:opacity-100 group-hover:visible w-52 dark:bg-slate-700 dark:text-white bg-white py-2 px-3 rounded-2xl border-t-4 border-orange-400 text-black divide-y-2 divide-orange-500 font-Dana tracking-tight transition-color">
                          {nav.submenue.map((sub) => (
                            <li key={sub.id}>
                              <Link
                                to={`/foodcategory/${sub.name}`}
                                className="hover:text-orange-300 transition-colors"
                              >
                                {sub.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* left header box */}

          <div className="flex items-center gap-3 lg:gap-8">
            <div className="flex items-center gap-6 text-zinc-200">
              <div>
                <BsMoon
                  className="inline-flex text-3xl dark:hidden cursor-pointer transition-colors hover:text-yellow-500"
                  onClick={darkModHandler}
                />
                <BsSun
                  className="hidden text-3xl dark:inline-flex cursor-pointer transition-colors hover:text-yellow-400"
                  onClick={darkModHandler}
                />
              </div>
              <div className="relative">
                <Link to={"/basket"}>
                  <AiOutlineShoppingCart className="text-3xl cursor-pointer transition-colors hover:text-orange-200" />
                  {basketNumber > 0 && (
                    <div className="absolute -right-3 -top-3 bg-orange-400 w-6 h-6 text-center rounded-full">
                      {basketNumber}
                    </div>
                  )}
                </Link>
              </div>
            </div>
            <div>
              <Link
                to={"/login"}
                className="hidden md:flex justify-center items-center py-3 font-DanaMedium text-white rounded-xl w-32 bg-orange-400 transition-colors hover:bg-orange-500"
              >
                ورود | ثبت نام
              </Link>
              <a href="#" className="md:hidden">
                <BiLogIn className="text-3xl cursor-pointer transition-colors hover:text-orange-200 text-zinc-200" />
              </a>
            </div>
          </div>
        </div>
      </header>
      {/* mobile header */}
      <div className="relative md:hidden flex items-center justify-between p-2 dark:text-white">
        <div className="flex gap-6">
          <RxHamburgerMenu
            className="text-3xl"
            onClick={() => SetOpenSideBar(true)}
          />
          <a href="#" className="md:hidden">
            <BiLogIn className="text-3xl" />
          </a>
        </div>
        <div className="shrink-0 flex justify-center">
          <img
            className="w-[2.5rem] rotate-45"
            src="/images/Pizza-logo.svg"
            alt="logo"
          />
        </div>
        <div className="flex items-center gap-5 lg:gap-8">
          <div className="flex gap-6">
            <div>
              <BsMoon
                className="inline-flex text-3xl dark:hidden"
                onClick={darkModHandler}
              />
              <BsSun
                className="hidden text-3xl dark:inline-flex cursor-pointer transition-colors hover:text-yellow-400"
                onClick={darkModHandler}
              />
            </div>
            <div>
              <Link to={"/basket"}>
                <AiOutlineShoppingCart className="text-3xl cursor-pointer transition-colors hover:text-orange-200" />
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`absolute ${
            openSideBar ? "right-0" : "-right-[60%]"
          } top-0 ease-linear duration-300 z-20 w-[60%] min-h-screen bg-white dark:bg-slate-700`}
        >
          <div className="flex items-center justify-between p-2 h-15 border-b-2 border-b-orange-300">
            <div className="shrink-0 flex justify-center">
              <img
                className="w-[2.5rem] rotate-45"
                src="/images/Pizza-logo.svg"
                alt="logo"
              />
            </div>
            <GrFormClose
              className="text-3xl"
              onClick={() => SetOpenSideBar(false)}
            />
          </div>
          <nav>
            <ul className="space-y-4 py-5 px-4 divide-slate-200 text-[18px] dark:text-zinc-200 text-zinc-700 h-full child:leading-[36px]">
              {allNavbar.map((nav) => (
                <li key={nav.id}>
                  <div className="flex items-center relative gap-x-2">
                    {/* <AiOutlineHome className="text-blue-500 text-2xl" /> */}

                    <Link
                      to={nav.href}
                      className={`${
                        nav.submenue.length > 0
                          ? "font-DanaDemiBold text-orange-400"
                          : ""
                      }`}
                    >
                      {nav.title}
                    </Link>
                    {nav.submenue.length > 0 && (
                      <IoIosArrowDown
                        onClick={() => SetHideSubmenu(!hideSubmenu)}
                        className={`
                            ${
                              hideSubmenu && "rotate-180 ease-in duration-300"
                            } absolute left-1 text-orange-400
                          `}
                      />
                    )}
                  </div>
                  {/* sub menue */}
                  {nav.submenue.length > 0 && (
                    <>
                      <div
                        className={`overflow-hidden h-0 ${
                          hideSubmenu && "h-[170px]"
                        } ease-in duration-300`}
                      >
                        <ul
                          className={`px-4 py-4 child:flex child:items-center child:gap-2 bg-white`}
                        >
                          {nav.submenue.map((sub) => (
                            <li key={sub.id}>
                              <BiSolidLeftArrow />
                              <Link to={`/foodcategory/${sub.name}`}>
                                {sub.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <ul className="flex flex-col font-MorabbaMedium gap-6 py-5 px-4">
              <li>
                <a href="#" className="flex items-center gap-3 text-xl">
                  <LiaTelegram className="text-blue-500" />
                  lorem_pizza@
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 text-xl">
                  <BsInstagram className="text-pink-500" />
                  pizza_shopp
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 text-xl">
                  <BsTelephone className="text-green-500" />
                  09195681214
                </a>
              </li>
              <li className="bg-orange-400/80 py-2 px-6 rounded-md text-white">
                <Link to={"/login"}>ورود | ثبت نام</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={
          openSideBar &&
          "fixed inset-0 min-h-screen w-full z-10 bg-black/40 md:hidden ease-linear duration-300"
        }
      ></div>
    </>
  );
};

export default Navbar;
