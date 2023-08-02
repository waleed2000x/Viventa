import { Button } from "@mui/material";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <div className="about-parent">
      <Helmet>
        <title>About</title>
      </Helmet>
      <div
        className="about-viventa-title"
        data-aos="fade-left"
        data-aos-duration="2000"
      >
        <img src="https://images.unsplash.com/photo-1537150382289-58b59db3d552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGZhc2hpb24lMjBjb3VwbGUlMjBibGFja3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60" />
        <h1>Viventa</h1>
        <p>Where Elegance Meets Style</p>
        <NavLink to="/clothing">
          <Button>Shop Now</Button>
        </NavLink>
      </div>
      <div
        className="about-viventa"
        style={{ marginRight: "50px" }}
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        <h1>About Viventa</h1>
        <p>
          At Viventa, we believe that fashion is not just about what you wear;
          it's an expression of your unique personality and a reflection of your
          inner charisma. As a premium clothing brand for men, women, and kids,
          we are dedicated to bringing you the best, most graceful, and
          top-quality outfits and accessories that perfectly complement your
          individuality.
        </p>
      </div>
      <div
        className="about-viventa"
        style={{ marginLeft: "50px" }}
        data-aos="fade-left"
        data-aos-duration="2000"
      >
        <h1>Our Story</h1>
        <p>
          Founded with a passion for fashion and a vision for exceptional style,
          Viventa has been curating trendsetting collections since its
          inception. With a blend of creativity and craftsmanship, we have grown
          from a humble beginning to become a renowned name in the fashion
          industry.
        </p>
      </div>
      <div
        className="about-viventa"
        style={{ marginRight: "50px" }}
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        <h1>Uncompromising Quality</h1>
        <p>
          At Viventa, quality is at the heart of everything we do. From the
          selection of fabrics to the intricate detailing, every piece is
          crafted with utmost care and precision. We work with skilled artisans
          and designers who take pride in their work, ensuring that each garment
          and accessory meets the highest standards of excellence.
        </p>
      </div>
      <div
        className="about-viventa"
        style={{ marginLeft: "50px" }}
        data-aos="fade-left"
        data-aos-duration="2000"
      >
        <h1>Elegance and Grace</h1>
        <p>
          We understand that elegance is timeless, and grace is evergreen. Our
          designs are inspired by the classic and contemporary, seamlessly
          blending traditional aesthetics with modern trends. Whether you're
          dressing up for a special occasion or seeking everyday comfort, our
          collections are thoughtfully curated to cater to your diverse tastes
          and preferences.
        </p>
      </div>
      <div
        className="about-viventa"
        style={{ marginRight: "50px" }}
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        <h1>A Style for Every Occasion</h1>
        <p>
          Viventa caters to every aspect of your lifestyle. From sophisticated
          formal wear to casual chic, from playful outfits for kids to exclusive
          accessories that add a touch of glamour, we have it all. Discover an
          extensive range of ensembles that empower you to look and feel your
          best on every occasion.
        </p>
      </div>
      <div
        className="about-viventa"
        style={{ marginLeft: "50px" }}
        data-aos="fade-left"
        data-aos-duration="2000"
      >
        <h1>Empowering Confidence</h1>
        <p>
          We believe that true style is not only about looking good but feeling
          confident in your own skin. Our clothing is designed to empower you,
          so you can embrace your uniqueness and stride through life with poise
          and self-assurance. When you wear Viventa, you wear confidence.
        </p>
      </div>
      <div
        className="about-viventa"
        style={{ marginRight: "50px" }}
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        <h1>Your Style Destination</h1>
        <p>
          Viventa is more than just a clothing brand; it's your style
          destination, where you'll find outfits and accessories that resonate
          with your soul. We invite you to explore our latest collections,
          immerse yourself in the world of elegance and style, and embark on a
          journey of self-expression through fashion.
        </p>
      </div>
    </div>
  );
}
