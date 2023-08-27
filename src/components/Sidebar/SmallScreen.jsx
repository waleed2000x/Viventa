import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

// eslint-disable-next-line react/prop-types
export default function SmallScreen({ sidebar, setSidebar }) {
  const hideSidebar = () => {
    if (sidebar) {
      setSidebar(false);
    }
  };

  return (
    <>
      {sidebar ? (
        <div
          className="small-parent"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="buttons">
            <Button onClick={hideSidebar}>
              <NavLink to="/">Home</NavLink>
            </Button>
          </div>
          <div className="buttons">
            <Button onClick={hideSidebar}>
              <NavLink to="/clothing">Shop</NavLink>
            </Button>
          </div>
          <div className="buttons">
            <Button onClick={hideSidebar}>
              <NavLink to="/about">About</NavLink>
            </Button>
          </div>
          <div className="buttons">
            <Button onClick={hideSidebar}>
              <NavLink to="/shoppingcart">Cart</NavLink>
            </Button>
          </div>
          <div className="buttons">
            <Button
              color="secondary"
              startIcon={<LogoutRoundedIcon />}
              style={{ color: "red" }}
              onClick={() => {
                hideSidebar();
                window.location.reload(true);
              }}
            >
              Logout
            </Button>
          </div>
        </div>
      ) : null}
    </>
  );
}
