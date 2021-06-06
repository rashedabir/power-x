import React from "react";

function Form({ offers, senEmail }) {
  return (
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
            required
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
            required
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
            required
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
            required
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
            required
          />
          <label for="floatingInput">Transaction ID</label>
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            readOnly
            value={"Taka " + offers.price}
            name="price"
            required
          />
        </div>
        <button className="btn btn-success" type="submit">
          submit
        </button>
      </form>
    </div>
  );
}

export default Form;
