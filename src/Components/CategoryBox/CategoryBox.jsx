import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import { Link } from "react-router-dom";

const CategoryBox = (props) => {

  Aos.init()

  useEffect(() => {
    Aos.init({
      duration: 2000,
      delay: 300,
      offset: 200,
      disable: window.innerWidth < 640,
    });
    Aos.refresh(true)
  }, []);
  
  return (
    <>
      <Link to={`/foodcategory/${props.title}`}>
        <div
          className="ease-linear duration-200 sm:hover:-translate-y-3"
          data-aos="zoom-in-down"
          data-aos-duration="1500"
        >
          <div className="w-full h-52">
            <div
              className=" bg-cover w-full h-full bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${props.src})`,
              }}
            >
              <div className="w-full h-full flex items-end justify-center bg-black bg-opacity-40">
                <p className=" text-white font-MorabbaMedium pb-4 text-4xl">
                  {props.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CategoryBox;
