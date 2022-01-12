import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  addToCart,
  deleteFromCart,
  selectAllItem,
  clearAllItem,
  deleteAllItem,
} from "../actions/cartActions";

const Cartscreen = () => {
  const cartreducerstate = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const { cartItems, selectedItems } = cartreducerstate;
  const history = useHistory();
  const checkoutHandler = () => {
    history.push("/cart/checkout");
  };

  var subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    if (selectAll) {
      dispatch(selectAllItem(cartItems.map((item) => item.id)));
    } else {
      dispatch(clearAllItem());
    }
  }, [selectAll]);

  return (
    <div>
      {selectedItems?.length > 0 ? (
        <button
          className="btn btn-danger mt-3"
          onClick={() => dispatch(deleteAllItem())}
        >
          delete all
        </button>
      ) : null}
      <div className="row mt-3 justify-content-center">
        <div className="col-md-8 text-center main-cart">
          <h1 className="text-center m-5">MY CART</h1>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>
                  <div className="custom-control custom-checkbox">
                    <input
                      id="selectAll"
                      type="checkbox"
                      className="custom-control-input"
                      value={selectAll}
                      onClick={() => setSelectAll(!selectAll)}
                    />
                    <label
                      htmlFor="selectAll"
                      className="custom-control-label"
                    ></label>
                  </div>
                </th>
                <th>Name</th>
                <th>Color</th>
                <th>Size</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => {
                return (
                  <tr>
                    <td>
                      <div className="custom-control custom-checkbox">
                        <input
                          checked={selectAll}
                          type="checkbox"
                          className="custom-control-input"
                        />
                        <label className="custom-control-label"></label>
                      </div>
                    </td>
                    <td>{item.name}</td>
                    <td>{item.color}</td>
                    <td>{item.size}</td>
                    <td>{item.price}</td>
                    <td>
                      <select
                        value={item.quantity}
                        onChange={(e) => {
                          dispatch(addToCart(item, e.target.value));
                        }}
                      >
                        {[...Array(item.countInStock).keys()].map((x, i) => {
                          return <option value={i + 1}>{i + 1}</option>;
                        })}
                      </select>
                    </td>
                    <td>{item.quantity * item.price}</td>
                    <td>
                      <i
                        class="fas fa-trash"
                        onClick={() => {
                          dispatch(deleteFromCart(item));
                        }}
                      ></i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <hr />
          <h2 className="text-center">Subtotal : {subtotal} Rs/-</h2>
          <hr />
          <div className="text-center p-3">
            {cartItems?.length > 0 ? (
              <button className="btn btn-dark " onClick={checkoutHandler}>
                Checkout
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartscreen;
