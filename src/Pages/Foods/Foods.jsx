import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import PapularFoods from "../../Components/PapularFoods/PapularFoods";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Pizza from "../../Components/Pizza/Pizza";
import Sandwich from "../../Components/Sandwich/Sandwich";
import Deser from "../../Components/Deser/Deser";
import Beverages from "../../Components/Beverages/Beverages";

const Foods = () => {
  return (
    <>
      <Navbar />
      <Header />
      <PapularFoods />
      <Pizza/>
      <Sandwich/>
      <Deser/>
      <Beverages/>
      <Footer />
    </>
  );
};

export default Foods;
