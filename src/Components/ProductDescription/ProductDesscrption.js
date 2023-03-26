import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { TiStarFullOutline } from "react-icons/ti";
import { BiNotepad } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";

const ProductDesscrption = ({ setToShow, product }) => {
  const { cart } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  console.log("productInProductDescription", product);
  return (
    <div>
      <h1>I am Product Descrition</h1>

      <div
        className="back-button"
        onClick={() => {
          setToShow(false);
        }}
      >
        <IoMdArrowRoundBack size={"2em"} />
      </div>
      <>
        <div className="desc-card">
          <div className="desc-image-card">
            <img
              className="desc-image"
              src={product.image}
              alt={product.name}
            ></img>
          </div>
          <div className="desc-details-card">
            <h4>{product.category.toUpperCase()} </h4>
            <small> {product.title} </small>
            <h3 className="product-rating">
              {" "}
              {product.rating.rate} <TiStarFullOutline />{" "}
            </h3>
            <hr />
            <h3>₹ {product.price} </h3>
            <h3>
              PRODUCT DETAILS <BiNotepad />{" "}
            </h3>
            <span className="product-details"> {product.description} </span>

            {/* //////////////////////////////////// */}

            {cart.find((item) => item.id === product.id) ? (
              <button
                className="navButton"
                onClick={() => {
                  dispatch({ type: "REMOVE_FROM_CART", payload: product });
                  alert("REMOVED FROM CART");
                }}
              >
                Remove from cart
              </button>
            ) : (
              <button
                onClick={() => {
                  alert("ADDED TO CART");
                  dispatch({ type: "ADD_TO_CART", payload: product });
                }}
                className="navButton"
              >
                Add to Cart
              </button>
            )}

            {/* /////////////////////////////////////////// */}
          </div>
        </div>
      </>
    </div>
  );
};

export default ProductDesscrption;
