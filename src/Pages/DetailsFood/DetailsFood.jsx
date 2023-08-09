import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import Navbar from "../../Components/Navbar/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import CommentBox from "../../Components/CommentBox/CommentBox";
import Title from "../../Components/Title/Title";
import swal from "sweetalert";

const DetailsFood = () => {
  const [foodNumber, setFoodNumber] = useState(1);
  const [detailsFood, setDetailsFood] = useState({});
  const param = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://fastfoodshop.iran.liara.run/foods/${param.foodID}?_embed=comments`)
      .then((res) => res.json())
      .then((data) => {
        setDetailsFood(data);
      });
  }, []);

  const buyHandeler = () => {
    const addToCart = {
      id: detailsFood.id,
      src: detailsFood.src,
      name: detailsFood.name,
      price: detailsFood.price * foodNumber,
      count: foodNumber,
    };
    fetch("https://fastfoodshop.iran.liara.run/basket", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addToCart),
    })
      .then((res) => res.json())
      .then((result) => {
        swal({
          title: "غذای شما به سبد خرید اضافه شد",
          icon: "success",
          buttons: "رفتن به سبد خرید",
        }).then((value) => {
          navigate("/basket");
        });
      })
  };


  return (
    <>
      <Navbar />
      <Header />
      {detailsFood?.name && (
        <>
          <div className="container">
            <div className="flex items-start flex-col py-4 md:flex-row gap-3 md:gap-5">
              <div className="w-full md:w-[40%]">
                <img
                  src={detailsFood.src}
                  className="rounded-xl md:rounded-3xl"
                />
              </div>
              <div className="py-4">
                <div className="flex flex-col gap-3 dark:text-white mb-4">
                  <div className="flex justify-between items-center">
                    <h1 className="font-MorabbaBold text-xl md:text-2xl">
                      {detailsFood.name}
                    </h1>
                    <span className="flex items-center gap-1 bg-blue-100 text-blue-800 text-base font-DanaMedium mr-1 px-2.5 py-0.5 rounded-2xl sm:rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                      <AiFillStar className="text-yellow-300 text-base" />
                      {detailsFood.score}
                    </span>
                  </div>
                  <p className="text-[18px] ">{detailsFood.desc}</p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-DanaMedium text-xl">تعداد:</span>
                    <div className="flex items-center gap-3">
                      <BiSolidRightArrow
                        className="text-orange-400 cursor-pointer"
                        onClick={() =>
                          setFoodNumber((prevNumber) => prevNumber + 1)
                        }
                      />
                      <span className="font-MorabbaBold text-xl select-none">
                        {foodNumber}
                      </span>
                      <BiSolidLeftArrow
                        className="text-orange-400 cursor-pointer"
                        onClick={() => {
                          setFoodNumber((prevNumber) => prevNumber - 1);
                          if (foodNumber <= 1) {
                            setFoodNumber(1);
                          }
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-MorabbaBold text-2xl">
                      {(detailsFood?.price * foodNumber).toLocaleString()}
                      <span className="font-DanaMedium text-base mr-1">
                        هزار تومان
                      </span>
                    </span>
                    <button
                      onClick={buyHandeler}
                      className="text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-Dana rounded-md text-sm p-2 sm:px-5 sm:py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      خرید
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-10">
            <Title title={"نظرات"} />
            <div className="w-full sm:w-1/2">
              <textarea
                className="w-full h-48 p-2 border-2 rounded-md outline-none"
                placeholder="نظر خود را ثبت کنید"
                cols="30"
                rows="10"
              ></textarea>
              <button className="text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-Dana rounded-md text-sm p-2 sm:px-5 sm:py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                ثبت کامنت
              </button>
            </div>
            {detailsFood?.comments.map((comment) => (
              <CommentBox key={comment.id} {...comment} />
            ))}
          </div>
        </>
      )}

      <Footer />
    </>
  );
};

export default DetailsFood;
