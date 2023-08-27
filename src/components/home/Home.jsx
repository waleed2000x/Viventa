import { useState, useEffect } from "react";
import Appbar from "../Appbar/Appbar";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../footer/Footer";
import SignModal from "../signupModal/SignModal";
import { Helmet } from "react-helmet";
import SmallScreen from "../Sidebar/SmallScreen";

// eslint-disable-next-line react/prop-types
export default function Home({ cartProducts }) {
  const [sidebar, setSidebar] = useState(true);
  const [showSidebar, setShowSidebar] = useState(true); // State to control which component to show
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
      showSignup(true);
    }, 300000);
  }, []);

  // Handle screen width change
  const handleResize = () => {
    const windowWidth = window.innerWidth;
    setShowSidebar(windowWidth >= 1000);
  };

  useEffect(() => {
    handleResize(); // Initial call
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="home-parent">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="home-container">
        <Appbar
          sidebar={sidebar}
          setSidebar={setSidebar}
          cartProducts={cartProducts}
        />
        <div className="home-body">
          {signup ? <SignModal showSignup={showSignup} /> : null}
          {showSidebar ? (
            <Sidebar sidebar={sidebar} />
          ) : (
            <SmallScreen sidebar={sidebar} setSidebar={setSidebar} />
          )}
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}
