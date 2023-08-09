import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { BiSearchAlt2 } from "react-icons/bi";
import FoodBox from "../../Components/FoodBox/FoodBox";
import { useParams, useSearchParams } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

const FoodCategory = () => {
  const param = useParams();
  const [allCategoryFood, setAllCategoryFood] = useState([]);
  const [status, setStatus] = useState("default");
  const [orderFood, setOrderFood] = useState([]);
  const [categorySearchValue, setCategorySearchValue] = useState("");

  useEffect(() => {
    fetch(`https://fastfoodshop.iran.liara.run/foods?category=${param.categoryName}`)
      .then((res) => res.json())
      .then((data) => {
        setAllCategoryFood(data);
        setOrderFood(data);
      });
  }, [param.categoryName]);

  const categorySearchHandler = (e) => {
    setCategorySearchValue(e.target.value);
    const filteredFood = allCategoryFood.filter((food) => {
      return food.name.includes(e.target.value);
    });
    setOrderFood(filteredFood);
  };

  const changeStatus = (e) => {
    setStatus(e.target.value);

    switch (e.target.value) {
      case "expensive": {
        const expensiveFilter = allCategoryFood.sort(
          (a, b) => b.price - a.price
        );
        setOrderFood(expensiveFilter);
        break;
      }
      case "cheap": {
        const cheapFilter = allCategoryFood.sort((a, b) => a.price - b.price);
        setOrderFood(cheapFilter);
        break;
      }
      case "maxscore": {
        const maxFilter = allCategoryFood.sort((a, b) => b.score - a.score);
        setOrderFood(maxFilter);
        break;
      }
      case "minscore": {
        const minFilter = allCategoryFood.sort((a, b) => a.score - b.score);
        setOrderFood(minFilter);
        break;
      }
      default: {
        setOrderFood(allCategoryFood);
        break;
      }
    }
  };

  return (
    <>
      <div className="h-[150px]">
        <Navbar />
      </div>
      <div className="container min-h-screen">
        <div className="flex flex-col gap-3 sm:flex-row items-center justify-between bg-zinc-300 dark:bg-slate-800 p-5 rounded-lg mb-12">
          <div>
            <select
              onChange={changeStatus}
              defaultValue={"default"}
              value={status}
              className="border-none outline-none w-72 sm:w-48 rounded-md bg-orange-400 child:bg-white child:text-orange-400 text-white text-base font-DanaMedium focus:ring-0"
            >
              <option value="default">پیش فرض</option>
              <option value="expensive">گران ترین</option>
              <option value="cheap">ارزان ترین</option>
              <option value="maxscore">بیشترین امتیاز</option>
              <option value="minscore">کمترین امتیاز</option>
            </select>
          </div>
          <div>
            <div className="w-72 sm:w-96 bg-white p-2 rounded-md sm:rounded-lg flex items-center justify-between">
              <input
                type="text"
                placeholder="غذای خود را جست و جو کنید..."
                className="border-none w-[90%] outline-none text-black p-1 text-base focus:ring-0"
                value={categorySearchValue}
                onChange={categorySearchHandler}
              />
              <BiSearchAlt2 className="flex-1 text-orange-300 text-2xl cursor-pointer" />
            </div>
          </div>
        </div>
        {orderFood.length > 0 ? (
          <div className="grid gap-5 grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto w-full auto-cols-max mb-12">
            {orderFood.map((food) => (
              <FoodBox key={food.id} {...food} />
            ))}
          </div>
        ) : (
          <div className=" bg-orange-400 p-5 text-white text-center text-base font-DanaDemiBold rounded-lg">
            <h1>محصول مورد نظر یافت نشد:(</h1>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default FoodCategory;
