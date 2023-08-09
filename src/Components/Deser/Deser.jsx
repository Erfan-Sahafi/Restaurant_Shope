import React, { useEffect, useState } from 'react'
import Title from "../Title/Title";
import FoodBox from "../FoodBox/FoodBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
//import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Deser = () => {

  const [allDeser, setAllDeser] = useState([]);

  useEffect(() => {
    fetch("https://fastfoodshop.iran.liara.run/foods?category=appetizer")
      .then((res) => res.json())
      .then((data) => {
        setAllDeser(data);
      });
  }, []);

  return (
    <div className="container">
      <Title id={'deser'} title={"دسر ها"} />
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
            spaceBetween:20,
          }
        }}
        freeMode={true}
        modules={[FreeMode]}
        loop={true}
        className="mySwiper mx-auto p-2 h-full"
      >
        {allDeser.map((food) => (
          <SwiperSlide key={food.id} className="mb-8">
            <FoodBox {...food}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Deser;