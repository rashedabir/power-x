import React from "react";
import About from "../components/About";
import ChooseUs from "../components/ChooseUs";
import Featured from "../components/Featured";
import HomeDisplay from "../components/HomeDisplay";
import TrainingProg from "../components/TrainingProg";

function Display() {
  return (
    <div>
      <HomeDisplay />
      <Featured />
      <About />
      <TrainingProg />
      <ChooseUs />
    </div>
  );
}

export default Display;
