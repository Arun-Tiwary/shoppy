import React from "react";
import { useSelector } from "react-redux";

const PriceDetails = ({ cartValue }) => {
  const { cart } = useSelector((state) => state.products);

  const totalPriceOfCart = cart.reduce(
    (acc, curr) => acc + curr.price * curr.qty,
    0
  );

  return (
    <div className="priceDetail-card">
      <div className="priceDetail-base-row">
        <span>Total MRP: </span>
        <span className="priceDetail-base-value">
          {" "}
          {totalPriceOfCart.toFixed(2)}
        </span>
        <span></span>
      </div>

      <div className="priceDetail-base-row">
        <span> Coupon Discount: {""} </span>
        <span className="priceDetail-base-value">
          Apply Coupon
          {/* <a
            target="_blank"
            href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies"
          >
            Apply Coupon
          </a> */}
        </span>
      </div>

      <div className="priceDetail-base-row">
        <span> Convenience Fee : </span>
        <span className="priceDetail-base-value">
          {" "}
          <span style={{ textDecoration: "line-through" }}>₹99 </span>FREE
        </span>
      </div>

      <div className="priceDetail-base-row">
        <span>Total Amount : </span>
        <span className="priceDetail-base-value">
          {totalPriceOfCart.toFixed(2)}
        </span>
        <span></span>
      </div>

      <div className="priceDetail-base-row">
        <lLink to="/products">
          <button className="checkout-button">Proceed to Checkout</button>
        </lLink>
      </div>
    </div>
  );
};

export default PriceDetails;
