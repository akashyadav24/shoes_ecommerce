import React from "react";
import { useSelector } from "react-redux";

const Finalinvoivescreen = () => {
  const cartreducerstate = useSelector((state) => state.cartReducer);

  const { cartItems } = cartreducerstate;
  const checkoutreducerstate = useSelector((state) => state.checkoutReducer);
  const { checkoutItems } = checkoutreducerstate;

  var subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="row mt-3 justify-content-center">
      <h2>Invoice Summary</h2>
      <div className="col-md-6  text-center p-3 m-3 main-invoice">
        <h1>
          List of Products:
          <ul>
            {cartItems.map((item) => (
              <li> {item.name}</li>
            ))}
          </ul>
        </h1>
        <h1>Final Total: Rs. {subtotal}</h1>
        <h1>
          Address Details:
          <ul>
            {Object.keys(checkoutItems).map((item) => (
              <li>{checkoutItems[item]}</li>
            ))}
          </ul>
        </h1>
      </div>
    </div>
  );
};

export default Finalinvoivescreen;
