/* eslint-disable react/prop-types */
import { Button } from "@mui/material";
import styled, { keyframes } from "styled-components";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { NavLink } from "react-router-dom";

const fadeInAnimation = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `;
const Parent = styled.div`
  position: relative;
  width: 20vw;
  opacity: 0;
  animation: 0.7s ${fadeInAnimation} 1.5s forwards;
`;

const fadeIn = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `;
const Container = styled.div`
  position: fixed;
  display: ${({ show }) => (show === "show" ? "flex" : "none")};
  width: 20vw;
  height: 50vh;
  margin-top: 120px;
  opacity: ${({ show }) => (show === "show" ? 1 : 0)};
  animation: ${({ show }) => (show === "show" ? fadeIn : "none")} 1s ease;
`;
const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;

  border-right: 0.5px solid #f3f6f9;
`;
const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
  button {
    width: 100%;
    color: #ffffff;
    height: 80px;
    a {
      font-weight: 600;
      font-size: 16px;
      text-transform: uppercase;
      color: #f3f6f9;
      text-decoration: none;
    }
    &:hover {
      color: #b1b1b1;
    }
  }
`;

export default function Sidebar({ sidebar }) {
  const toggleSidebar = sidebar ? "show" : "hide";

  return (
    <Parent>
      <Container show={toggleSidebar}>
        <Inner>
          <Buttons>
            <Button>
              <NavLink to="/">Home</NavLink>
            </Button>
          </Buttons>
          <Buttons>
            <Button>
              <NavLink to="/clothing">Shop</NavLink>
            </Button>
          </Buttons>
          <Buttons>
            <Button>
              <NavLink to="/shoppingcart">Cart</NavLink>
            </Button>
          </Buttons>
          <Buttons>
            <Button
              color="secondary"
              startIcon={<LogoutRoundedIcon />}
              style={{ color: "red" }}
            >
              Logout
            </Button>
          </Buttons>
        </Inner>
      </Container>
    </Parent>
  );
}
