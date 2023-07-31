/* eslint-disable react/prop-types */
import { Button } from "@mui/material";
import React, { useState } from "react";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
export default function ShoppingCart({ cartProducts, setCartProducts }) {
  const [prices, setPrices] = useState(
    cartProducts.map((amount) => amount.price)
  );
  const [totalPrice, setTotalPrice] = useState(
    prices.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  );
  console.log(cartProducts.length <= 0 ? "Empty" : cartProducts[0].title);

  const handleCheckout = () => {
    setPrices([]);
    setTotalPrice(0);
    prices.length > 0 ? alert("Order Placed") : null;
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
    setTotalPrice(0);
    setPrices([]);
    setCartProducts([]);
  };

  return (
    <div className="shopping-cart-parent">
      <div className="shopping-cart-title">
        <p>
          Where Fashion Meets <span>Convenience</span>
        </p>
      </div>
      {cartProducts.length <= 0 ? (
        <h1 className="shopping-cart-empty">No Items in your Cart 🫠</h1>
      ) : (
        <div className="shopping-cart-items">
          {cartProducts.map((product) => {
            return (
              <div
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
            TOTAL: <span> ${totalPrice}</span>
          </p>
          <div className="cart-checkout-buttons">
            <Button
              variant="contained"
              className="checkout"
              onClick={handleCheckout}
            >
              Check Out
            </Button>
            <Button variant="contained" color="error" onClick={handleDelete}>
              Delete All
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
