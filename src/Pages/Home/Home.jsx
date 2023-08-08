import React from "react";
import Header from "../../Components/Header/Header";
import Category from "../../Components/Category/Category";
import PapularFoods from "../../Components/PapularFoods/PapularFoods";
import Hero from "../../Components/Hero/Hero";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Category />
      <PapularFoods/>
      <Hero />
      <Footer />
    </>
  );
};

export default Home;
