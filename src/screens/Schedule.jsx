import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Slide from "../components/Slide";

function Schedule() {
  const params = useParams();
  const [offers, setOffers] = useState([]);
  const offer = useSelector((state) => state.offers.offer);

  const time = [
    {
      id: 1,
      title: "monday",
      time: "10:00 AM - 10:00 PM",
    },
    {
      id: 2,
      title: "tuesday",
      time: "10:00 AM - 10:00 PM",
    },
    {
      id: 3,
      title: "wednesday",
      time: "10:00 AM - 10:00 PM",
    },
    {
      id: 4,
      title: "thursday",
      time: "10:00 AM - 10:00 PM",
    },
    {
      id: 5,
      title: "friday",
      time: "10:00 AM - 10:00 PM",
    },
    {
      id: 6,
      title: "saturday",
      time: "10:00 AM - 10:00 PM",
    },
  ];

  useEffect(() => {
    if (params.id) {
      offer.forEach((offer) => {
        if (offer._id === params.id) {
          setOffers(offer);
        }
      });
    }
  }, [offer, params.id]);

  return (
    <>
      <Slide props="schedule" />
      <div className="container schedule">
        <img src={offers.img} alt={offers.title} />
        <div className="col">
          <h2>
            <span style={{ color: "#d79a19" }}>class</span> schedule
          </h2>
          <h2> {offers.title} </h2>
          <div className="row row-cols-1 row-cols-md-2 g-4 p-3">
            {time.map((time) => (
              <div className="col">
                <div className="card h-100">
                  <div className="card-body text-center">
                    <h4 className="card-title"> {time.title} </h4>
                    <p className="card-text text-center">{time.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link to={`/offer/${offers._id}`}>
            <h3>
              continue <i className="fas fa-arrow-right"></i>
            </h3>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Schedule;
