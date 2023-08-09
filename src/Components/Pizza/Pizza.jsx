import React, { useEffect, useState } from "react";
import Title from "../Title/Title";
import FoodBox from "../FoodBox/FoodBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
//import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Pizza = () => {
  const [allPizza, setAllPizza] = useState([]);

  useEffect(() => {
    fetch("https://fastfoodshop.iran.liara.run/foods?category=pizza")
      .then((res) => res.json())
      .then((data) => {
        setAllPizza(data);
      });
  }, []);

  return (
    <div className="container">
      <Title title={"پیتزاها"} />
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1.2,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2.2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3.2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3.2,
            spaceBetween: 20,
          },
        }}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper mx-auto p-2 h-full"
      >
        {allPizza.map((pizza) => (
          <SwiperSlide key={pizza.id} className="mb-8">
            <FoodBox {...pizza} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Pizza;
