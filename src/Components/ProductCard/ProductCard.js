import React from "react";
import { useDispatch, useSelector } from "react-redux";

//Card Component
const ProductCard = ({
  product,
  show,
  setShow,
  getDataOfSelectedProduct,
  setCartValue,
}) => {
  // using Redux Store
  const { cart } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  //using Router to navigate

  return (
    <div className="cards">
      <div className="product-card">
        <img
          className="card-image"
          src={product.image}
          alt={product.image}
          onClick={() => {
            setShow(!show);
            console.log("productClicked", product);
            getDataOfSelectedProduct(product);
            // navigate("/desc");
          }}
        />
        <div className="product-detais">
          <h4>
            {product.title} ({product.category})
          </h4>
          <h4>₹ {product.price}</h4>

          <h3>
            {product.qty && (
              <button
                disabled={product.qty > 1 ? false : true}
                onClick={() => {
                  dispatch({ type: "DEC_QTY", payload: product });
                }}
              >
                -
              </button>
            )}
            {""}
            {product.qty}{" "}
            {product.qty && (
              <button
                onClick={() => {
                  dispatch({ type: "INCREASE_QTY", payload: product });
                }}
              >
                +
              </button>
            )}
          </h3>

          <h5>Rating: {product.rating.rate} </h5>
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

          {/* ///////////////////////////////////// */}
          {/* <button
            onClick={() => {
              cart.find((item) => item.id === product.id)
                ? alert("Product is already present in the cart")
                : func();
            }}
            className="navButton"
          >
            Add to Cart
          </button>

          <button
            onClick={() =>
              dispatch({ type: "REMOVE_FROM_CART", payload: product })
            }
            className="navButton"
          >
            Remove from cart
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
