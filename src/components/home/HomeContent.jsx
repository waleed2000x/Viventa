import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function HomeContent() {
  return (
    <div className="home-content">
      <div className="home-center">
        <div
          className="home-shelf-a"
          data-aos="zoom-out"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <div className="home-shelf-a-text">
            <img src="https://images.unsplash.com/photo-1654514433918-a3cfa5878b25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjY2fHxtb2RlbCUyMGJsYWNrfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60" />
            <p className="brand-name"> Viventa</p>
            <div className="brand-text">
              <p>Infinite Elegance</p>
              <span> Infinite Confidence</span>
            </div>
            <NavLink to='/clothing'>
        <Button>Shop Now</Button>
        </NavLink>
          </div>
        </div>
        <div
          className="home-shelf-b"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <img src="https://images.unsplash.com/photo-1635583476697-2802d6ca7136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG1vZGVsaW5nJTIwbWVufGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60" />
          <p data-aos="fade-up" data-aos-duration="1500" className="brand-name">
            Elevate Your
          </p>
          <span data-aos="fade-down" data-aos-duration="1500">
            Masculine Charm
          </span>
          <h4>Shop Men</h4>
        </div>
        <div
          className="home-shelf-c"
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <img src="https://images.unsplash.com/photo-1484319463707-0bc469eade5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIzfHxtb2RlbHMlMjBtZW5zfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60" />
          <p data-aos="fade-up" data-aos-duration="1500" className="brand-name">
            Secrets of Feminine
          </p>
          <span data-aos="fade-down" data-aos-duration="1500">
            Charisma
          </span>
          <h4>Shop Women</h4>
        </div>
        <div
          className="home-shelf-d"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <img src="https://images.unsplash.com/photo-1614113036347-9f60df80730a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk3fHxraWRzJTIwY2xvdGhpbmd8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=900&q=60" />
          <p data-aos="fade-up" data-aos-duration="1500" className="brand-name">
            Tiny
          </p>
          <span data-aos="fade-down" data-aos-duration="1500">
            Trendsetters
          </span>
          <h4>Shop Kids</h4>
        </div>
      </div>
    </div>
  );
}
