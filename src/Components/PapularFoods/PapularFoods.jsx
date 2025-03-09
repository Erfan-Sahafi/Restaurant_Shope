import React, { useEffect, useState } from "react";
import Title from "../Title/Title";
import FoodBox from "../FoodBox/FoodBox";

const PapularFoods = () => {
  const [papularFoods, setPapularFoods] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;


  useEffect(() => {
    fetch(`${API_URL}/foods`)
      .then((res) => res.json())
      .then((data) => {
        const filterPapular = data.filter((result) => {
          return result.score >= 4 && result.category !== "drink";
        });
        const shuffled = filterPapular.sort(() => 0.5 - Math.random());
        let selected = shuffled.slice(0, 4);
        setPapularFoods(selected);
      });
  }, []);

  return (
    <div className="container">
      <Title title={"غذاهای محبوب"} />
      <div className="grid gap-[11px] grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto w-full auto-cols-max mb-12">
        {papularFoods.map((food) => (
          <FoodBox key={food.id} {...food} />
        ))}
      </div>
    </div>
  );
};

export default PapularFoods;
