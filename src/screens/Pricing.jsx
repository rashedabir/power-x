import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Slide from "../components/Slide";

function Pricing() {
  const state = useSelector((state) => state.offers.offer);

  return (
    <>
      <Slide props="pricing" />
      <div className="container py-5 price">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {state.map((state) => (
            <div key={state._id} className="col price-box">
              <div className="card price_body">
                <img
                  src={state.img}
                  className="card-img-top"
                  alt={state.title}
                />
                <div>
                  <div className="price-list">
                    <h4>purchase monthly</h4>
                    <h4 style={{ color: "white" }}> {state.title} </h4>
                    <h4>৳ {state.price} </h4>
                  </div>
                  <Link to={`/offer/${state._id}`}>
                    <h5 className="price_card-title">purchase</h5>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Pricing;
