import React from "react";
import Slider from "../components/Slider";
import ServicesCard from "../components/ServicesCard";
import ExpertVets from "../components/ExpertVets";
import CareTips from "../components/CareTips";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <ServicesCard></ServicesCard>
      <CareTips></CareTips>
      <ExpertVets></ExpertVets>
    </div>
  );
};

export default Home;
