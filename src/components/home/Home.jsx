import { useState, useEffect } from "react";
import Appbar from "../Appbar/Appbar";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet, useLocation } from "react-router-dom";

export default function Home() {
  const [sidebar, setSidebar] = useState(true);
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

  return (
    <div className="home-parent">
      <div className="home-container">
        <Appbar sidebar={sidebar} setSidebar={setSidebar} />
        <div className="home-body">
          <Sidebar sidebar={sidebar} />
          <Outlet />
        </div>
      </div>
    </div>
  );
}
