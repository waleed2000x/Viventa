/* eslint-disable react/prop-types */
import { Badge, Button, IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import TableRowsRoundedIcon from "@mui/icons-material/TableRowsRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
// import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

export default function Appbar({ sidebar, setSidebar, cartProducts }) {
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
        <NavLink to="/">
          <Button variant="text" size="large">
            Blod
          </Button>
        </NavLink>
        <NavLink to="/contact">
          <Button variant="text" size="large">
            Contact
          </Button>
        </NavLink>
      </div>
      <div className="appbar-icons">
        {/* <IconButton color="info">
          <SearchRoundedIcon />
        </IconButton> */}
        <Badge badgeContent={cartProducts.length} color="error">
          <NavLink to="/shoppingcart">
            <IconButton color="info">
              <ShoppingCartOutlinedIcon />
            </IconButton>
          </NavLink>
        </Badge>
        <IconButton color="info">
          <FavoriteRoundedIcon />
        </IconButton>
        <Badge badgeContent={1} color="error">
          <IconButton color="info">
            <PersonIcon />
          </IconButton>
        </Badge>
      </div>
    </div>
  );
}
