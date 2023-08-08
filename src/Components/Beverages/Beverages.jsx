import React, { useEffect, useState } from 'react'
import Title from "../Title/Title";
import FoodBox from "../FoodBox/FoodBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
//import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Beverages = () => {

  const [allDrinks, setAllDrinks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/foods?category=drink")
      .then((res) => res.json())
      .then((data) => {
        setAllDrinks(data);
      });
  }, []);

  return (
    <div className="container">
      <Title id={'drink'} title={"نوشیدنی ها"} />
      <Swiper
        breakpoints={{
          0:{
            slidesPerView:1.2,
            spaceBetween:10,
          },
          480:{
            slidesPerView:2.2,
            spaceBetween:10,
          },
          768:{
            slidesPerView:3.2,
            spaceBetween:15,
          },
          1024:{
            slidesPerView:4.2,
            spaceBetween:15,
          }
        }}
        freeMode={true}
        modules={[FreeMode]}
        loop={true}
        className="mySwiper mx-auto p-2 h-full"
      >
        {allDrinks.map((food) => (
          <SwiperSlide key={food.id} className="mb-8">
            <FoodBox {...food}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Beverages