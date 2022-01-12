import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";
import products from "../products";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Productdescscreen = ({ match }) => {
  const productid = match.params.id;
  const product = products.find((product) => product.id == productid);

  const dispatch = useDispatch();
  const [quantity, setquantity] = useState(1);
  const addtocart = () => {
    if (!color) {
      alert("Please select Color");
    } else if (!size) {
      alert("Please select Size");
    } else {
      dispatch(addToCart(product, quantity, color, size));
    }
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    lazyLoad: true,
    centerMode: true,
    adaptiveHeight: true,
    fade: true,
    arrows: true,
    autoplaySpeed: 5000,
    className: "slides",
  };
  const [color, setColor] = useState();
  const [size, setSize] = useState();

  return (
    <div>
      <div className="row">
        <div className="col-md-6 ">
          <h2>Product Details</h2>
          <div className="card p-2 m-2 main-des">
            <h1>{product.name}</h1>
            <Slider {...settings}>
              <img
                src={product.image1}
                className="img-fluid m-3 bigimg"
                alt="description"
              />
              <img
                src={product.image2}
                className="img-fluid m-3 bigimg"
                alt="description"
              />
              <img
                src={product.image3}
                className="img-fluid m-3 bigimg"
                alt="description"
              />
              <img
                src={product.image4}
                className="img-fluid m-3 bigimg"
                alt="description"
              />
            </Slider>
            <p>{product.description}</p>
          </div>
        </div>
        <div className="col-md-6 text-left">
          <div className="m-2">
            <h1>Price: {product.price}</h1>
            <hr />
            <h1>Select Quantity</h1>
            <select
              value={quantity}
              onChange={(e) => {
                setquantity(e.target.value);
              }}
            >
              {[...Array(product.countInStock).keys()].map((x, i) => {
                return <option value={i + 1}>{i + 1}</option>;
              })}
            </select>
            <hr />
            <div>
              <h1>Select Color</h1>

              <input
                type="radio"
                className="btn-check"
                name="color"
                value="Black"
                id="dark-outlined"
                autocomplete="off"
                onChange={(e) => setColor(e.target.value)}
              />
              <label className="btn btn-outline-dark" for="dark-outlined">
                Black
              </label>

              <input
                type="radio"
                className="btn-check"
                name="color"
                value="Red"
                id="danger-outlined"
                autocomplete="off"
                onChange={(e) => setColor(e.target.value)}
              />
              <label className="btn btn-outline-danger" for="danger-outlined">
                Red
              </label>

              <input
                type="radio"
                className="btn-check"
                name="color"
                value="Blue"
                id="primary-outlined"
                autocomplete="off"
                onChange={(e) => setColor(e.target.value)}
              />
              <label className="btn btn-outline-primary" for="primary-outlined">
                Blue
              </label>

              <input
                type="radio"
                className="btn-check"
                name="color"
                value="Grey"
                id="secondary-outlined"
                autocomplete="off"
                onChange={(e) => setColor(e.target.value)}
              />
              <label
                className="btn btn-outline-secondary"
                for="secondary-outlined"
              >
                Grey
              </label>
            </div>
            <hr />
            <h1>Select Size</h1>
            <div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="size"
                  id="flexRadioDefault1"
                  value="UK-7"
                  onChange={(e) => setSize(e.target.value)}
                />
                <label className="form-check-label" for="flexRadioDefault1">
                  UK-7
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="size"
                  id="flexRadioDefault2"
                  value="UK-8"
                  onChange={(e) => setSize(e.target.value)}
                />
                <label className="form-check-label" for="flexRadioDefault2">
                  UK-8
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="size"
                  id="flexRadioDefault3"
                  value="UK-9"
                  onChange={(e) => setSize(e.target.value)}
                />
                <label className="form-check-label" for="flexRadioDefault3">
                  UK-9
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="size"
                  id="flexRadioDefault4"
                  value="UK-10"
                  onChange={(e) => setSize(e.target.value)}
                />
                <label className="form-check-label" for="flexRadioDefault4">
                  UK-10
                </label>
              </div>
            </div>
            <hr />
            <button className="btn btn-dark" onClick={addtocart}>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productdescscreen;
