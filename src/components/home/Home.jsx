/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Appbar from "../Appbar/Appbar";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../footer/Footer";
import SignModal from "../signupModal/SignModal";

export default function Home({ cartProducts }) {
  const [sidebar, setSidebar] = useState(true);
  const [signup, showSignup] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.setItem("scrollPosition", window.scrollY);
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
useEffect(() => {
  setTimeout(() => {
    showSignup(true)
  }, 3000000);
}, [])

  return (
    <div className="home-parent">
      <div className="home-container">
        <Appbar
          sidebar={sidebar}
          setSidebar={setSidebar}
          cartProducts={cartProducts}
        />
        <div className="home-body">
        {
          signup ? <SignModal showSignup={showSignup} /> : null
        }
          <Sidebar sidebar={sidebar} />
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}
