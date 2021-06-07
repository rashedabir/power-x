import React from "react";
import yoga from "../assets/yoga.jpg";
import cardio from "../assets/cardio.jpg";

function TrainingProg() {
  return (
    <div className="container-lg train">
      <h2 className="mb-4">
        training <span>programme</span>
      </h2>
      <div className="card-group">
        <div className="card-thing card">
          <img src={yoga} alt="yoga" />
          <div>
            <h3>yoga training session</h3>
          </div>
        </div>
        <div className="card-thing card">
          <img src={cardio} alt="cardio" />
          <div>
            <h3>cardio training session</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainingProg;
