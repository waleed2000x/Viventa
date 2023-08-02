import { NavLink } from "react-router-dom";
import Facebook from "../../assets/images/Facebook.svg";
import Instagram from "../../assets/images/Insta.svg";
import Twitter from "../../assets/images/Twitter.svg";
import Github from "../../assets/images/Github.svg";
import LinkedIn from "../../assets/images/LinkedIn.svg";
export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="footer-parent">
      <div className="footer-center">
        <div className="footer-logo" data-aos="zoom-in">
          <NavLink to="/">Viventa</NavLink>
        </div>
        <div
          className="rights-reserved"
          data-aos="fade-in"
          data-aos-duration="2000"
        >
          <p>
            <span>Copyright © {year}</span> All rights Reserved
          </p>
        </div>
        <div
          className="footer-logos"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <NavLink to="https://www.facebook.com" target="_blank">
            <img src={Facebook} alt="fb" />
          </NavLink>
          <NavLink to="https://www.instagram.com/waleedahmed.x/" target="_blank">
            <img src={Instagram} />
          </NavLink>
          <NavLink to="https://www.x.com" target="_blank">
            <img src={Twitter} />
          </NavLink>
          <NavLink to="https://github.com/waleed2000x" target="_blank">
            <img src={Github} />
          </NavLink>
          <NavLink to="https://www.linkedin.com/in/waleedahmedx" target="_blank">
            <img src={LinkedIn} />
          </NavLink>
        </div>
        <div className="footer-line"></div>
      </div>
    </div>
  );
}
