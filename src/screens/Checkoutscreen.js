import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addToCheckout } from "../actions/checkoutActions";

const Checkoutscreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const addtocheckout = () => {
    dispatch(addToCheckout(checkout));
    history.push("/cart/checkout/summary");
    localStorage.setItem("checkoutItems", JSON.stringify(checkout));
  };
  const [checkout, setCheckout] = useState({
    name: "",
    mobile: "",
    address: "",
  });
  const inputHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setCheckout({ ...checkout, [name]: value });
  };

  return (
    <div className="row mt-3 justify-content-center">
      <div className="col-md-6 card p-3 main-check">
        <form>
          <div className="form-group p-3 m-3">
            <label for="name">
              <h1>Name</h1>
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Name"
              name="name"
              value={checkout.name}
              onChange={inputHandler}
            />
          </div>
          <div className="form-group p-3 m-3 ">
            <label for="mobile">
              <h1>Mobile Number</h1>
            </label>
            <input
              type="text"
              className="form-control "
              id="mobile"
              placeholder="Enter Mobile Number"
              name="mobile"
              value={checkout.mobile}
              onChange={inputHandler}
            />
          </div>
          <div className="form-group p-3 m-3">
            <label for="address">
              <h1>Address</h1>
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="Enter Address"
              name="address"
              value={checkout.address}
              onChange={inputHandler}
            />
          </div>
        </form>

        <button className="btn btn-dark " onClick={addtocheckout}>
          Deliver to this address
        </button>
      </div>
    </div>
  );
};

export default Checkoutscreen;
