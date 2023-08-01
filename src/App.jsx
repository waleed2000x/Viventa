import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Clothing from "./components/home/clothing/Clothing";
import "./scss/index.css";
import Contact from "./components/contact/Contact";
import HomeContent from "./components/home/HomeContent";
import ShoppingCart from "./components/shoppingCart/ShoppingCart";
import { useState } from "react";
import About from "./components/about/About";
import { UserContextProvider } from "./context/userContext";
import Profile from "./components/profile/Profile";
function App() {
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Home cartProducts={cartProducts} />}>
          <Route path="/" element={<HomeContent />} />
          <Route
            path="/clothing"
            element={<Clothing setCartProducts={setCartProducts} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
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
    </UserContextProvider>
  );
}

export default App;
