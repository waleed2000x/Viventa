/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import ProductModal from "./ProductModal";
import { Helmet } from "react-helmet";
import axios from "axios";

export default function Clothing({ setCartProducts }) {
  const [modal, showModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState([]); //selected for the shoppingCart
  const [products, setProducts] = useState([]); //all products form API
  const [modalProduct, setModalProduct] = useState([]); //Data sender to the modal

  const handleProductClick = (product) => {
    setModalProduct(product);
    setSelectedProduct((prev) => [...prev, product]);
  };

  useEffect(() => {
    modal
      ? document.body.classList.add("no-scroll")
      : document.body.classList.remove("no-scroll");
  }, [modal]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className="clothing-parent">
      <Helmet>
        <title>Clothing</title>
      </Helmet>
      <div className="clothing-title">
        <div className="clothing-title-image">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60"
            alt=""
          />
          <div className="clothing-title-text">
            <p style={{ color: "black" }}>Fashion</p>
            <p>Unleashed</p>
          </div>
        </div>
      </div>
      <div className="clothing-products">
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          className="products-title"
        >
          <p>
            Products That Define <span>Elegance</span>
          </p>
        </div>
        <div className="products">
          {products.length > 0
            ? products.map((item) =>
                item.category !== "electronics" ? (
                  <div
                    onClick={() => {
                      showModal(!modal);
                      handleProductClick(item);
                    }}
                    className="product-box"
                    key={item.id}
                  >
                    <img src={item.image} alt={item.title}></img>
                    <h1>{item.title}</h1>
                    <h4>Price: ${item.price}</h4>
                  </div>
                ) : null
              )
            : null}
        </div>
      </div>
      {modal ? (
        <ProductModal
          setCartProducts={setCartProducts}
          modalProduct={modalProduct}
          modal={modal}
          showModal={showModal}
        />
      ) : null}
    </div>
  );
}
