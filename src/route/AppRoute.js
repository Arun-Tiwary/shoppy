import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Products from "../Components/ProductsPage/productsHome";
import CartHome from "../Components/CartHome";
import PriceDetails from "../Components/PriceDetails";
import WishList from "../Components/WishList";
import Login from "../Components/Login/login";
import { useSelector } from "react-redux";

const AppRoute = () => {
  const userData = useSelector((state) => state.userData);
  return (
    <div>
      <Routes>
        <Route path="/products" element={<Products exact />} />
        <Route path="/" element={<Products exact />} />
        <Route
          path="/cart"
          element={userData.username ? <CartHome /> : <Navigate to="/login" />}
          exact
        />
        <Route path="/checkout" element={<PriceDetails />} exact />
        <Route
          path="/wishList"
          element={userData.username ? <WishList /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h5>Not found</h5>} />
      </Routes>
    </div>
  );
};

export default AppRoute;
