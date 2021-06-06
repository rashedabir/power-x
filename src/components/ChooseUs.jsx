import React from "react";

function ChooseUs() {
  return (
    <div className="container choose mb-5">
      <h2 className="mb-4">
        <span>why</span> choose us
      </h2>
      <div className="row">
        <div className="col-sm-4 mb-2 choose-card">
          <div className="card">
            <div className="card-body">
              <i className="fas fa-biking"></i>
              <h5 className="card-title">free fitness training</h5>
              <p className="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-4 mb-2 choose-card">
          <div className="card">
            <div className="card-body">
              <i className="fas fa-gift"></i>
              <h5 className="card-title">tons of cardio & strength</h5>
              <p className="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-4 mb-2 choose-card">
          <div className="card">
            <div className="card-body">
              <i className="fas fa-handshake"></i>
              <h5 className="card-title">no commitment membership</h5>
              <p className="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
