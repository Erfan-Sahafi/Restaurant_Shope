import React, { useEffect, useRef, useState } from "react";
import CategoryBox from "../CategoryBox/CategoryBox";
import Title from "../Title/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Category = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const [allCategory, setAllCategory] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;


  useEffect(() => {
    fetch(`${API_URL}/category`)
      .then((res) => res.json())
      .then((data) => {
        setAllCategory(data);
      });
  }, []);

  return (
    <div className="container mt-12">
      <Title title="دسته بندی ها" />
      <div className="hidden sm:grid gap-5 sm:grid-cols-2 md:grid-cols-4 mx-auto w-full auto-cols-max mb-12">
        {allCategory.map((cate) => (
          <CategoryBox key={cate.id} {...cate} />
        ))}
      </div>
      <Swiper
        slidesPerView={"1.2"}
        spaceBetween={10}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper mx-auto sm:hidden"
      >
        {allCategory.map((cate) => (
          <SwiperSlide key={cate.id} className="mb-8">
            <CategoryBox {...cate} />
          </SwiperSlide>
        ))}
        <div className="hidden autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Category;
