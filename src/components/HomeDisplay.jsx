import React from "react";
import { Link } from "react-router-dom";

function HomeDisplay() {
  return (
    <div className="display">
      <div className="container">
        <div className="row display-home">
          <div className="col-lg-7">
            <div className="display-content">
              <h2>the best fitness studio in town</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <Link to="/pricing">
                <button className="btn btn-warning">join us</button>
              </Link>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="vid">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/PXjfecguayM"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeDisplay;
