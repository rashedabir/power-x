import React from "react";
import gym1 from "../assets/gym1.jpg";
import gym2 from "../assets/gym2.jpg";
import gym3 from "../assets/gym3.jpg";

function Featured() {
  return (
    <div className="container justify-content-center text-center mx-auto featured">
      <h2 className="pt-5">FEATURED</h2>
      <div className="cards">
        <div className="card bg-dark text-white m-4 featured1">
          <img
            width="100%"
            height="100%"
            src={gym2}
            className="card-img"
            alt="..."
          />
          <div className="card-img-overlay">
            <i className="fas fa-heartbeat"></i>
            <h5 className="card-title">PROGRESSION</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
        <div className="card bg-dark text-white m-4 featured1">
          <img
            width="100%"
            height="100%"
            src={gym1}
            className="card-img"
            alt="..."
          />
          <div className="card-img-overlay">
            <i className="fas fa-dumbbell" style={{ color: "#d79a19" }}></i>
            <h5 className="card-title" style={{ color: "#d79a19" }}>
              WORKOUT
            </h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
        <div className="card bg-dark text-white m-4 featured1">
          <img
            width="100%"
            height="100%"
            src={gym3}
            className="card-img"
            alt="..."
          />
          <div className="card-img-overlay">
            <i className="fas fa-prescription-bottle"></i>
            <h5 className="card-title">NUTRITION</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
