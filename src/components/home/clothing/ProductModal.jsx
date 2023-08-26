/* eslint-disable react/prop-types */
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { IconButton } from "@mui/material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

export default function ProductModal({
  modal,
  showModal,
  modalProduct,
  setCartProducts,
}) {
  return (
    <div className="product-modal-parent" onClick={() => showModal(false)}>
      <div className="modal" data-aos="fade-down" data-aos-duration="1500">
        <div className="product-modal-close" onClick={() => showModal(!modal)}>
          <CancelOutlinedIcon />
        </div>
        <div
          data-aos="zoom-out"
          data-aos-duration="2000"
          className="modal-image"
        >
          <img src={modalProduct.image} alt="image" />
        </div>
        <div className="modal-details">
          <h1>{modalProduct.title}</h1>
          <h2>
            Description: <br></br>
            <span>{modalProduct.description}</span>
          </h2>
          <h3>
            Category:
            <span
              style={
                modalProduct.category === "men's clothing"
                  ? {
                      color: "rgb(0, 132, 255)",
                    }
                  : {
                      color: "#ff6f61",
                    }
              }
            >
              {modalProduct.category}
            </span>
          </h3>
          <div className="cart-price">
            <h4 data-aos="zoom-in" data-aos-duration="2000">
              Price: ${modalProduct.price}
            </h4>
            <IconButton
              onClick={() =>
                setCartProducts((prevVal) => [...prevVal, modalProduct])
              }
            >
              <AddShoppingCartOutlinedIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}
