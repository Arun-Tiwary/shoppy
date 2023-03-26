/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineAccountCircle } from "react-icons/md";
import { productsData } from "../../Utils/ProductsData";
import ProductCard from "../../Components/ProductCard/ProductCard";
import ProductDesscrption from "../ProductDescription/ProductDesscrption";
import LoadingSpinner from "../Loader/loader";

const Products = () => {
  const { product, cart } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [searchProducts, setSearchProducts] = useState();
  const [sortBy, setSortBy] = useState("Recommended");
  const [toShow, setToShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  let p = [...product];

  const pullData = (data) => {
    setSelectedProduct(data);
    console.log("product selected", selectedProduct);
  };

  function filterdProducts() {
    if (
      searchProducts !== null &&
      searchProducts !== "" &&
      searchProducts !== undefined
    ) {
      return p.filter((item) =>
        item.title.toLowerCase().includes(searchProducts.toLowerCase())
      );
    }

    if (sortBy === "Price: Low To High") {
      return p.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "Price: High To Low") {
      return p.sort((a, b) => b.price - a.price);
    }

    if (sortBy === "Customer Rating") {
      return p.sort((a, b) => b.rating.rate - a.rating.rate);
    }

    if (sortBy === "Recommended") {
      return product;
    }

    return product;
  }

  const myProducts = filterdProducts();

  console.log("myProducts", myProducts);
  console.log("Value in Cart", cart);
  console.log("value in product", product);
  console.log("searchProducts", searchProducts);
  console.log("sortBy", sortBy);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const data = await productsData();
      //console.log('productsHome', data);
      dispatch({ type: "ADD_PRODUCTS", payload: data });
      setLoading(false);
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {toShow ? (
        <ProductDesscrption setToShow={setToShow} product={selectedProduct} />
      ) : (
        <div>
          {/* <Navigation /> */}

          <section className="product-navigation">
            <h1>Products Store </h1>
            <input
              style={{ width: "350px" }}
              placeholder="Serach your Product"
              onChange={(e) => setSearchProducts(e.target.value)}
            ></input>
            <div className="homeNav-routes">
              <Link style={{}} to="/cart">
                {cart.length > 0 && <i className="cart-icon">{cart.length}</i>}

                <BsCart2 size={"3em"} />
              </Link>{" "}
              <Link style={{}} to="/wishList">
                <AiOutlineHeart size={"3em"} />
              </Link>{" "}
              <Link style={{}} to="/account">
                <MdOutlineAccountCircle size={"3em"} />
              </Link>{" "}
            </div>
          </section>
          <div className="sort-sortBy">
            <label>Sort By: </label>
            <select
              value={sortBy}
              onChange={(e) => {
                setSortBy(e.target.value);
              }}
            >
              <option name="recommended">Recommended</option>
              <option name="low_to_high">Price: Low To High</option>
              <option name="high_to_low">Price: High To Low</option>
              <option name="rating">Customer Rating</option>
            </select>
          </div>
          {loading && <LoadingSpinner />}
          {product &&
            product !== undefined &&
            myProducts.map((products) => (
              <ProductCard
                key={products.id}
                product={products}
                show={toShow}
                setShow={setToShow}
                getDataOfSelectedProduct={pullData}
              />
            ))}
        </div>
      )}
    </>
  );
};

export default Products;

// code that works but isnt good eough

{
  /* <h4>Sort by Price:</h4>
{sort ? (
  <button
    onClick={() => {
      setSort(!sort);
    }}
  >
    Remove Sort
  </button>
) : (
  <button
    onClick={() => {
      setSort(!sort);
    }}
  >
    Sort
  </button>
)} */
}
