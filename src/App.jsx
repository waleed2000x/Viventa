import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Clothing from "./components/home/clothing/Clothing";
import "./scss/index.css";
import Contact from "./components/contact/Contact";
import HomeContent from "./components/home/HomeContent";
import ShoppingCart from "./components/shoppingCart/ShoppingCart";
import { useState } from "react";
function App() {
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home cartProducts={cartProducts} />}>
          <Route path="/" element={<HomeContent />} />
          <Route
            path="/clothing"
            element={<Clothing setCartProducts={setCartProducts} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/shoppingcart"
            element={
              <ShoppingCart
                cartProducts={cartProducts}
                setCartProducts={setCartProducts}
              />
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
