import React, { Fragment, useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import swal from "sweetalert";



const Basket = () => {
  const [basketData, setBasketData] = useState([]);

  useEffect(() => {
    getAllData()
  }, []);

  const getAllData = ()=>{
    fetch("http://localhost:3000/basket")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setBasketData(data);
    });
  }

  const removeInBasket = (foodID)=>{

    fetch(`http://localhost:3000/basket/${foodID}`,{
      method: "DELETE",
      headers:{
        "Content-Type":"application/json"
      }
    }).then(res=>res.json())
    .then(result=>{
      swal({
        title:'غذای مورد نظر حذف شد',
        icon:"success",
        buttons:'تایید'
      }).then(value=>{
        getAllData()
      })
    })

  }

  const total = basketData.reduce((acc, object) => {
    return acc + object.price;
  }, 0);

  return (
    <>
      <div className="h-[200px]">
        <Navbar />
      </div>
      <div className="container">
        <div className="relative overflow-x-hidden shadow-md sm:rounded-lg">
          {basketData.length > 0 ? (
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-1 sm:px-5 py-3 sm:block hidden">
                    <span className="sr-only">عکس</span>
                  </th>
                  <th scope="col" className="px-1 sm:px-5 py-3">
                    محصول
                  </th>
                  <th scope="col" className="px-1 sm:px-5 py-3">
                    تعداد
                  </th>
                  <th scope="col" className="px-1 sm:px-5 py-3">
                    قیمت
                  </th>
                  <th scope="col" className="px-1 sm:px-5 py-3">
                    حذف محصول
                  </th>
                </tr>
              </thead>
              <tbody>
                {basketData.map((data) => (
                  <Fragment key={data.id} >
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="w-32 p-4 hidden sm:block">
                        <img src={data.src} alt="Apple Watch" />
                      </td>
                      <td className=" font-DanaMedium text-xs sm:text-base text-gray-900 dark:text-white">
                        {data.name}
                      </td>
                      <td className="px-4 sm:px-8 py-4 font-MorabbaMedium text-base">
                        {data.count}
                      </td>
                      <td className="font-DanaDemiBold text-xs md:text-base text-gray-900 dark:text-white">
                        {data.price.toLocaleString()}
                      </td>
                      <td className="px-2 md:px-6 py-4">
                        <button
                          onClick={() => removeInBasket(data.id)}
                          className="font-medium text-red-600 font-DanaDemiBold dark:text-red-500 hover:underline"
                        >
                          حذف
                        </button>
                      </td>
                    </tr>
                  </Fragment>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="w-full bg-orange-400 p-5 text-white text-center text-base font-DanaDemiBold rounded-lg">
              <h1>سبد خرید شما خالی میباشد.</h1>
            </div>
          )}
        </div>
        <div className="mt-12 flex flex-col gap-5 md:flex-row md:items-center md:justify-between bg-slate-300 dark:bg-slate-800 dark:text-white p-4 md:p-10 rounded-3xl">
          <span className="font-DanaDemiBold text-base md:text-xl tracking-tighter">
            مجموع:
            <span className="font-MorabbaMedium text-[18px] mr-1">
              {total > 0 ? total.toLocaleString() : 0}
            </span>
          </span>
          <div className="flex gap-1 items-center">
            <label className="font-DanaDemiBold text-base md:text-xl tracking-tighter">
              کد تخفیف:
            </label>
            <input
              type="text"
              className="p-1 w-52 md:w-72 border-none outline-none rounded-md"
              placeholder="کد تخفیف را وارد کنید..."
            />
          </div>
          <div className="flex justify-end md:block">
            <a
              href="#"
              className="text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-Dana rounded-md text-sm p-2 sm:px-5 sm:py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              پرداخت
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Basket;
