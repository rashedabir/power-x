import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import emailjs from "emailjs-com";
import Slide from "../components/Slide";
import Form from "../components/Form";

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
      <Form offers={offers} senEmail={senEmail} />
    </>
  );
}

export default JoinForm;
