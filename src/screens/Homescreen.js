import React from "react";
import Product from "../components/Product";
import products from "../products";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Rating from "react-rating";
import './Homescreen.css';

const Homescreen = () => {
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
  return (
    <div>
      <Slider {...settings}>
        {products.map((product) => {
          return (
            <div className="Homescreen-div" >
              <div className="row Slider-row">
                <div className="col-md-12 slider-main">
                  <div className="card p-2 m-2 slider-cards">
                    <div className="row">
                      <div className="col-md-4 ">
                        <div className="mt-5 product-name"  >
                          <h2>{product.name}</h2>
                        </div>
                        <div className="mt-5 Product-description ">
                          <h1>{product.description}</h1>
                        </div>
                      </div>
                      <div className="col-md-4 ">
                        <img
                          src={product.image2}
                          className="img-fluid m-3 bigimg2"
                          alt="description"
                        />
                      </div>
                      <div className="col-md-4 ">
                        <h3>Rating:</h3>
                        <Rating
                          style={{ color: "orange" }}
                          initialRating={product.rating}
                          emptySymbol="far fa-star fa-1x"
                          fullSymbol="fas fa-star fa-1x"
                          readonly={true}
                        />
                        <h3 className="mt-5 ">Available Colors</h3>
                        <div className="color-content">
                          <div className="color-groups ">
                            <div className="color color-white active-color"></div>
                            <div className="color color-black"></div>
                            <div className="color color-blue"></div>
                            <div className="color color-red"></div>
                          </div>
                        </div>

                        <h3>Available Sizes</h3>
                        <span>
                          <button className="btn btn-warning ">UK-7</button>
                        </span>
                        <span>
                          <button className="btn btn-warning m-2">UK-8</button>
                        </span>
                        <span>
                          <button className="btn btn-warning">UK-9</button>
                        </span>
                        <span>
                          <button className="btn btn-warning m-2">UK-10</button>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
      <hr />
      <div className="row justify-content-center" id={"shop"}>
        <h2>Shop</h2>
        {products.map((product) => {
          return <Product product={product} />;
        })}
      </div>
      <hr />
      <div className="row" id={"blog"}>
      <div className="col-md-12 ">
        </div>
      </div>
      <hr />
      
    </div>
  );
};

export default Homescreen;
