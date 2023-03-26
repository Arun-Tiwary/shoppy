import "./App.css";
import { Route, Routes } from "react-router-dom";
import CartHome from "./Components/CartHome";
import Products from "./Components/ProductsPage/productsHome";
import PriceDetails from "./Components/PriceDetails";
import WishList from "./Components/WishList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/products" element={<Products exact />} />
        <Route path="/" element={<Products exact />} />
        <Route path="/cart" element={<CartHome />} exact />
        <Route path="/checkout" element={<PriceDetails />} exact />
        <Route path="/wishList" element={<WishList />} />
      </Routes>
    </div>
  );
}

export default App;
