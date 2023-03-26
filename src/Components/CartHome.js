import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import ProductCard from "./ProductCard/ProductCard";
import ProductDesscrption from "./ProductDescription/ProductDesscrption";
import { IoMdArrowRoundBack } from "react-icons/io";

const CartHome = () => {
  const { cart } = useSelector((state) => state.products);
  const [toShow, setToShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  const pullData = (data) => {
    setSelectedProduct(data);
    console.log("product selected", selectedProduct);
  };

  // const totalPriceOfCart = cart.reduce(
  //   (acc, curr) => acc + curr.price * curr.qty,
  //   0
  // );
  return (
    <>
      {toShow ? (
        <ProductDesscrption setToShow={setToShow} product={selectedProduct} />
      ) : (
        <div>
          <div className="" style={{ display: "flex" }}>
            {" "}
            <Link style={{ color: "black" }} to="/products">
              <IoMdArrowRoundBack /> Shopping bag
            </Link>{" "}
          </div>
          <Link className="link-checkOut" to="/checkout">
            Proceed to CheckOut
          </Link>

          {/* <h4>
            TOTOAL PRODUCT: {cart.length} TOTAL PRICE: ₹{cartValue.toFixed(0)}
          </h4> */}
          {cart &&
            cart.map((products) => (
              <ProductCard
                key={products.id}
                product={products}
                show={toShow}
                setShow={setToShow}
                getDataOfSelectedProduct={pullData}
              />
            ))}
          {/* {totalPriceOfCart > 0 && (
            <PriceDetails cartValue={totalPriceOfCart} />
          )} */}
          {/* <Routes>
            <Route
              path="/checkout"
              element={<PriceDetails cartValue={cartValue} exact />}
            />
          </Routes> */}
        </div>
      )}
    </>
  );
};

export default CartHome;
