import React from "react";
import { Link } from "react-router-dom";

function HomeDisplay() {
  return (
    <div className="display">
      <div className="container-lg display-home">
        <div className="col">
          <h2>the best fitness studio in town</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <Link to="/pricing">
            <button className="btn btn-warning">join us</button>
          </Link>
        </div>
        <div className="col vid">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/94duK5VbrHY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default HomeDisplay;
