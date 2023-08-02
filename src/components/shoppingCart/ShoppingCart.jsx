/* eslint-disable react/prop-types */
import { Button } from "@mui/material";
import { useState } from "react";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import { NavLink } from "react-router-dom";
export default function ShoppingCart({ cartProducts, setCartProducts }) {
  const [prices, setPrices] = useState(
    cartProducts.map((amount) => amount.price)
  );
  const [totalPrice, setTotalPrice] = useState(
    prices.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  );

  const handleCheckout = () => {
    if (prices.length > 0) {
      alert("Order Placed");
      setTotalPrice(0);
      setPrices([]);
      setCartProducts([]);
    }
  };

  const handleDeleteItem = (itemId) => {
    setCartProducts(cartProducts.filter((item) => item.id !== itemId));

    const updatedPrices = prices.filter(
      (price, index) => cartProducts[index].id !== itemId
    );
    setPrices(updatedPrices);
    const updatedTotalPrice = updatedPrices.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    setTotalPrice(updatedTotalPrice);
  };

  const handleDelete = () => {
    const ask = confirm("Confirm deletion of all items in the shopping cart.");
    if (ask) {
      setTotalPrice(0);
      setPrices([]);
      setCartProducts([]);
    }
  };

  return (
    <div
      className="shopping-cart-parent"
      data-aos="fade-in"
      data-aos-duration="1000"
    >
      <div className="shopping-cart-title">
        <p>
          Where Fashion Meets <span>Convenience</span>
        </p>
      </div>
      {cartProducts.length <= 0 ? (
        <div className="shopping-cart-empty">
          <p>No Items in cart🫠</p>
          <NavLink to="/clothing">
            <Button>Shop Now</Button>
          </NavLink>
        </div>
      ) : (
        <div className="shopping-cart-items">
          {cartProducts.map((product) => {
            return (
              <div
                data-aos="fade-in"
                data-aos-duration="2000"
                key={product.id}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <div className="shopping-cart-item">
                  <img src={product.image} alt="Product" />
                  <div className="cart-details">
                    <h1 className="cart-product-title">{product.title}</h1>
                    <h2 className="cart-product-description">
                      {product.description}
                    </h2>
                    <div className="cart-sold-rating">
                      <p className="cart-product-sold">
                        Sold: {product.rating.count}
                      </p>
                      <p className="cart-product-rating">
                        Rating: {product.rating.rate}
                      </p>
                    </div>
                    <h3 className="cart-product-price">$ {product.price}</h3>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleDeleteItem(product.id)}
                    >
                      <DeleteTwoToneIcon />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <div className="cart-checkout-parent">
        <div className="cart-checkout">
          <p>
            TOTAL: <span> ${totalPrice.toFixed(3)}</span>
          </p>
          <div className="cart-checkout-buttons">
            <Button
              variant="outlined"
              className="checkout"
              onClick={handleCheckout}
              color="success"
            >
              Check Out
            </Button>
            <Button variant="outlined" color="error" onClick={handleDelete}>
              Delete All
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
