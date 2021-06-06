import React from "react";
import { useSelector } from "react-redux";
import Slide from "../components/Slide";

function Classes() {
  const state = useSelector((state) => state.offers.class)

  return (
    <>
    <Slide props="our classes" />
    <div className="container py-5 class">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {state.map((state) => (
          <div key={state.id} className="col class-box">
            <div className="card card_body">
              <img src={state.img} className="card-img-top" alt={state.title} />
              <div>
                <h5 className="card-title"> {state.title} <i className="fas fa-arrow-right"></i></h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Classes;
