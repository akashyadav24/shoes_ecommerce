import React from "react";
import { Link } from "react-router-dom";
import Rating from "react-rating";

const Product = ({ product }) => {
  return (
    <div className="col-md-3 m-3 card p-2 text-left main-home">
      <div>
        <Link to={`product/${product.id}`}>
          <img src={product.image1} className="img-fluid" alt="Main" />
          <h1>{product.name}</h1>
          <Rating
            style={{ color: "orange" }}
            initialRating={product.rating}
            emptySymbol="far fa-star fa-1x"
            fullSymbol="fas fa-star fa-1x"
            readonly={true}
          />
          <h1>Price:{product.price}</h1>
        </Link>
      </div>
    </div>
  );
};

export default Product;
