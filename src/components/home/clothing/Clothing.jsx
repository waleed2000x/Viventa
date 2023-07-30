import { useEffect, useState } from "react";

export default function Clothing() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const json = await response.json();
        setProducts(json);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   const fetchFashionData = async () => {
  //     const url = "https://fashion4.p.rapidapi.com/v1/results";
  //     const options = {
  //       method: "POST",
  //       headers: {
  //         "content-type": "application/x-www-form-urlencoded",
  //         "X-RapidAPI-Key":
  //           "71975b8f84msh6323a943c892d74p131c78jsn8329e63af469",
  //         "X-RapidAPI-Host": "fashion4.p.rapidapi.com",
  //       },
  //       body: new URLSearchParams({
  //         url: "https://storage.googleapis.com/api4ai-static/samples/fashion-1.jpg",
  //       }),
  //     };

  //     try {
  //       const response = await fetch(url, options);
  //       const data = await response.json();
  //       setProducts(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchFashionData();
  // }, []);
  console.log(products);
  return (
    <div className="clothing-parent">
      <div className="clothing-title">
        <div className="clothing-title-image">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60"
            alt=""
          />
          <div className="clothing-title-text">
            <p style={{ color: "black" }}>Fashion</p>
            <p> Unleashed</p>
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
                  <div className="product-box" key={item.id}>
                    <img src={item.image} alt={item.title}></img>
                    <h1>{item.title}</h1>
                    <h2>{item.description}</h2>
                    <h1>{item.category}</h1>
                    <h3>Sold: {item.rating.count}</h3>
                    <h3>
                      Rating: <span>{item.rating.rate}</span>
                    </h3>
                    <h4>Price: ${item.price}</h4>
                  </div>
                ) : null
              )
            : null}
        </div>
      </div>
    </div>
  );
}
