import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Clothing from "./components/home/clothing/Clothing";
import "./scss/index.css";
import Contact from "./contact/Contact";
import HomeContent from "./components/home/HomeContent";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home}>
          <Route path="/" Component={HomeContent} />
          <Route path="/clothing" Component={Clothing} />
          <Route path="/contact" Component={Contact} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
