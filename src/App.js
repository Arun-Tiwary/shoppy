import "./App.css";
import { Route, Routes } from "react-router-dom";
import CartHome from "./Components/CartHome";
import Products from "./Components/ProductsPage/productsHome";
import PriceDetails from "./Components/PriceDetails";
import WishList from "./Components/WishList";
import Login from "./Components/Login/login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/products" element={<Products exact />} />
        <Route path="/" element={<Products exact />} />
        <Route path="/cart" element={<CartHome />} exact />
        <Route path="/checkout" element={<PriceDetails />} exact />
        <Route path="/wishList" element={<WishList />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h5>Not found</h5>} />
      </Routes>
    </div>
  );
}

export default App;
