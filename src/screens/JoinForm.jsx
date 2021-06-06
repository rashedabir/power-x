import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import emailjs from "emailjs-com";
import Slide from "../components/Slide";

function JoinForm() {
  const params = useParams();
  const [offers, setOffers] = useState([]);
  const offer = useSelector((state) => state.offers.offer);
  const history = useHistory();

  useEffect(() => {
    if (params.id) {
      offer.forEach((offer) => {
        if (offer._id === params.id) {
          setOffers(offer);
        }
      });
    }
  }, [offer, params.id]);

  const senEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ue386q7",
        "template_f6v8p2e",
        e.target,
        "user_oktvvkMex6eXX9DyZOgTp"
      )
      .then(
        () => {
          history.push("/wellcome");
        },
        (error) => {
          alert(error);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <Slide props="join us" />
      <div className="container join-form">
        <h2> {offers.title} </h2>
        <h5>
          নাম্বারটিতে "সেন্ড মানি" তে টাকা পাঠিয়ে নিচের ফর্মটি ফিলাপ করে সাবমিট
          করুন...
        </h5>
        <h6 className="mb-5">
          bKash Personal No: <strong>01629341869</strong>
        </h6>
        <form onSubmit={senEmail}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Full Name"
              name="name"
            />
            <label for="floatingInput">Full Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              name="email"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <textarea
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Address"
              rows="3"
              name="address"
            ></textarea>
            <label for="floatingInput">Address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Bkash Numbe"
              rows="3"
              name="number"
            />
            <label for="floatingInput">Your Bkash Number</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Transaction"
              rows="3"
              name="transaction"
            />
            <label for="floatingInput">Transaction ID</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              rows="3"
              readOnly
              value={"Taka " + offers.price}
              name="price"
            />
            <label for="floatingInput"></label>
          </div>
          <button className="btn btn-primary" type="submit">
            submit
          </button>
        </form>
      </div>
    </>
  );
}

export default JoinForm;
