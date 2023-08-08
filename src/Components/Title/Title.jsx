import React from "react";

const Title = ({ title, id }) => {
  return (
    <h1
      id={id}
      className="font-MorabbaBold py-2 dark:text-white text-3xl border-b-2 border-b-orange-300 mb-12"
    >
      {title}
    </h1>
  );
};

export default Title;
