/* eslint-disable react/prop-types */
import { Badge, Button, IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import TableRowsRoundedIcon from "@mui/icons-material/TableRowsRounded";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { UserContext } from "../../context/userContext";
import { useContext } from "react";

export default function Appbar({ sidebar, setSidebar, cartProducts }) {
  const { user } = useContext(UserContext);
  let username = user.name || "";
  let userName = username.split(" ");
  // console.log(userName);
  return (
    <div className="appbar-parent">
      <div className="appbar-logo">
        <div
          onClick={() => {
            setSidebar(!sidebar);
          }}
        >
          <TableRowsRoundedIcon />
        </div>
        <NavLink to="/">Viventa</NavLink>
      </div>
      <div className="appbar-menu-items">
        <NavLink to="/">
          <Button variant="text" size="large">
            Home
          </Button>
        </NavLink>
        <NavLink to="/clothing">
          <Button variant="text" size="large">
            Clothing
          </Button>
        </NavLink>
        <NavLink to="/contact">
          <Button variant="text" size="large">
            Contact
          </Button>
        </NavLink>
        <NavLink to="/about">
          <Button variant="text" size="large">
            About
          </Button>
        </NavLink>
      </div>
      <div className="appbar-icons">
        <Badge badgeContent={cartProducts.length} color="error">
          <NavLink to="/shoppingcart">
            <IconButton color="info">
              <ShoppingCartOutlinedIcon />
            </IconButton>
          </NavLink>
        </Badge>
        <Badge badgeContent={0} color="error">
          <NavLink to="/profile">
            <IconButton color="info">
              <PersonIcon />
            </IconButton>
          </NavLink>
        </Badge>
        <Button variant="text" size="large" color="secondary">
          {/* <FavoriteRoundedIcon /> */}
          <p style={{ fontSize: "18px" }}>{userName[0]}</p>
        </Button>
      </div>
    </div>
  );
}
